import Dexie, { type Table } from 'dexie'
import type { DailyRecord, TodoItem, SunnahItem, MediaBlob, Profile, StreakState, ReminderSettings } from '@/types/models'
import { SUNNAH_IDS } from '@/types/models'
import { calcCompletionRate } from '@/lib/calculations'

class IbadahDB extends Dexie {
  dailyRecords!: Table<DailyRecord, string>
  todoItems!: Table<TodoItem, [string, string]>
  sunnahItems!: Table<SunnahItem, [string, string]>
  mediaBlobs!: Table<MediaBlob, string>
  profiles!: Table<Profile, string>
  streakState!: Table<StreakState, string>
  reminderSettings!: Table<ReminderSettings, string>

  constructor() {
    super('IbadahTrackerDB')
    this.version(1).stores({
      dailyRecords: 'date, createdAt',
      todoItems: '[dailyRecordDate+todoId], dailyRecordDate, isDone',
      mediaBlobs: 'id, type, createdAt',
      profiles: 'id',
      streakState: 'id',
      reminderSettings: 'id',
    })

    this.version(2)
      .stores({
        dailyRecords: 'date, createdAt',
        todoItems: '[dailyRecordDate+todoId], dailyRecordDate, isDone',
        sunnahItems: '[dailyRecordDate+sunnahId], dailyRecordDate, isDone',
        mediaBlobs: 'id, type, createdAt',
        profiles: 'id',
        streakState: 'id',
        reminderSettings: 'id',
      })
      .upgrade(async (tx) => {
        const todoTable = tx.table<TodoItem, [string, string]>('todoItems')
        const sunnahTable = tx.table<SunnahItem, [string, string]>('sunnahItems')
        const dailyRecordsTable = tx.table<DailyRecord, string>('dailyRecords')

        // Move Dhuha from wajib (todoItems) into sunnah (sunnahItems).
        // todoId isn't its own index (only the compound [dailyRecordDate+todoId]
        // primary key and the standalone dailyRecordDate/isDone indexes exist),
        // so where('todoId') throws SchemaError — scan and filter in JS instead.
        const allTodos = await todoTable.toArray()
        // Legacy data can still contain 'dhuha' even though it's no longer a
        // valid TodoId in the current type — cast for this one-time migration read.
        const dhuhaRows = allTodos.filter((row) => (row.todoId as string) === 'dhuha')
        for (const row of dhuhaRows) {
          await sunnahTable.put({
            sunnahId: 'dhuha',
            dailyRecordDate: row.dailyRecordDate,
            isDone: row.isDone,
            completedAt: row.completedAt,
          })
        }
        await todoTable.bulkDelete(dhuhaRows.map((row) => [row.dailyRecordDate, row.todoId]))

        // Migrate Puasa Sunnah from localStorage (sunnah-YYYY-MM-DD keys)
        const puasaKeys: string[] = []
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i)
          if (key && /^sunnah-\d{4}-\d{2}-\d{2}$/.test(key)) puasaKeys.push(key)
        }
        for (const key of puasaKeys) {
          const date = key.slice('sunnah-'.length)
          try {
            const raw = JSON.parse(localStorage.getItem(key) || '{}')
            if (raw?.puasaDone) {
              await sunnahTable.put({
                sunnahId: 'puasa-sunnah',
                dailyRecordDate: date,
                isDone: true,
                puasaType: raw.puasaType || undefined,
              })
            }
          } catch {
            // malformed entry — skip
          }
        }

        // Recompute completionRate (wajib) and sunnahCompletionRate for every day
        const records = await dailyRecordsTable.toArray()
        for (const record of records) {
          const [wajibRows, sunnahRows] = await Promise.all([
            todoTable.where('dailyRecordDate').equals(record.date).toArray(),
            sunnahTable.where('dailyRecordDate').equals(record.date).toArray(),
          ])
          const completionRate = calcCompletionRate(wajibRows)
          const sunnahDone = sunnahRows.filter((r) => r.isDone).length
          const sunnahCompletionRate = Math.round((sunnahDone / SUNNAH_IDS.length) * 100)
          await dailyRecordsTable.update(record.date, { completionRate, sunnahCompletionRate })
        }
      })
  }
}

export const db = new IbadahDB()

// If another tab/window (or a stale service-worker-controlled instance) is holding
// an open connection when a schema upgrade ships, IndexedDB blocks the new tab's
// upgrade indefinitely instead of erroring. Auto-close this tab's connection when
// a newer version wants to open elsewhere, then reload so it picks up the new
// schema/code once that other tab finishes — this is the standard Dexie pattern
// for avoiding a silent "stuck" state across multi-tab/PWA sessions.
db.on('versionchange', () => {
  db.close()
  if (typeof window !== 'undefined') window.location.reload()
})
