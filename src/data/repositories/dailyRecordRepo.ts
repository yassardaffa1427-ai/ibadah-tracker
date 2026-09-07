import { db } from '@/data/db'
import { TODO_IDS, SUNNAH_IDS } from '@/types/models'
import type { DailyRecord, TodoItem, TodoId, SunnahItem, SunnahId } from '@/types/models'
import { toDateKey, isPast } from '@/lib/dateUtils'
import { calcCompletionRate } from '@/lib/calculations'
import { auth } from '@/lib/firebase'
import { syncRecordToCloud } from '@/data/repositories/cloudSyncRepo'

function makeTodoItems(date: string): TodoItem[] {
  return TODO_IDS.map((todoId) => ({
    todoId,
    dailyRecordDate: date,
    isDone: false,
  }))
}

function makeSunnahItems(date: string): SunnahItem[] {
  return SUNNAH_IDS.map((sunnahId) => ({
    sunnahId,
    dailyRecordDate: date,
    isDone: false,
  }))
}

export async function getOrCreateTodayRecord(): Promise<{
  record: DailyRecord
  todos: TodoItem[]
  sunnah: SunnahItem[]
}> {
  const date = toDateKey()
  const existing = await db.dailyRecords.get(date)

  if (existing) {
    const [todos, sunnah] = await Promise.all([
      db.todoItems.where('dailyRecordDate').equals(date).toArray(),
      db.sunnahItems.where('dailyRecordDate').equals(date).toArray(),
    ])

    // Cover days whose record predates the sunnah table (or a partial seed).
    // Use bulkPut (not bulkAdd): useDailyRecord/useSunnahRecord both call this
    // on mount, so a concurrent call may already have inserted the same rows.
    const missingSunnah = SUNNAH_IDS.filter((id) => !sunnah.some((s) => s.sunnahId === id)).map(
      (sunnahId) => ({ sunnahId, dailyRecordDate: date, isDone: false }),
    )
    if (missingSunnah.length > 0) {
      await db.sunnahItems.bulkPut(missingSunnah)
      sunnah.push(...missingSunnah)
    }

    return { record: existing, todos, sunnah }
  }

  const record: DailyRecord = {
    date,
    completionRate: 0,
    sunnahCompletionRate: 0,
    createdAt: Date.now(),
  }
  const todos = makeTodoItems(date)
  const sunnah = makeSunnahItems(date)

  // put/bulkPut (not add/bulkAdd): concurrent hook mounts can race here, and
  // put is idempotent (same computed rows) where add throws on a duplicate key.
  await db.transaction('rw', [db.dailyRecords, db.todoItems, db.sunnahItems], async () => {
    await db.dailyRecords.put(record)
    await db.todoItems.bulkPut(todos)
    await db.sunnahItems.bulkPut(sunnah)
  })

  return { record, todos, sunnah }
}

export async function getTodosForDate(date: string): Promise<TodoItem[]> {
  return db.todoItems.where('dailyRecordDate').equals(date).toArray()
}

export async function getSunnahForDate(date: string): Promise<SunnahItem[]> {
  return db.sunnahItems.where('dailyRecordDate').equals(date).toArray()
}

export async function updateTodoStatus(
  date: string,
  todoId: TodoId,
  isDone: boolean,
): Promise<void> {
  if (isPast(date)) throw new Error('Tidak dapat mengubah checklist hari yang sudah lewat')

  const completedAt = isDone ? Date.now() : undefined
  await db.todoItems.update([date, todoId], { isDone, completedAt })

  // Recalculate completion rate
  const todos = await db.todoItems.where('dailyRecordDate').equals(date).toArray()
  const rate = calcCompletionRate(todos)
  await db.dailyRecords.update(date, { completionRate: rate })

  if (auth?.currentUser) {
    syncRecordToCloud(auth.currentUser.uid, date)
  }
}

export async function updateSunnahStatus(
  date: string,
  sunnahId: SunnahId,
  isDone: boolean,
): Promise<void> {
  if (isPast(date)) throw new Error('Tidak dapat mengubah checklist hari yang sudah lewat')

  const completedAt = isDone ? Date.now() : undefined
  await db.sunnahItems.update([date, sunnahId], { isDone, completedAt })

  const sunnah = await db.sunnahItems.where('dailyRecordDate').equals(date).toArray()
  const done = sunnah.filter((s) => s.isDone).length
  const sunnahCompletionRate = Math.round((done / SUNNAH_IDS.length) * 100)
  await db.dailyRecords.update(date, { sunnahCompletionRate })

  if (auth?.currentUser) {
    syncRecordToCloud(auth.currentUser.uid, date)
  }
}

export async function updatePuasaType(
  date: string,
  puasaType: string | undefined,
): Promise<void> {
  if (isPast(date)) throw new Error('Tidak dapat mengubah checklist hari yang sudah lewat')
  await db.sunnahItems.update([date, 'puasa-sunnah'], { puasaType })

  if (auth?.currentUser) {
    syncRecordToCloud(auth.currentUser.uid, date)
  }
}

export async function updateJuzTarget(
  date: string,
  juz: number | undefined,
): Promise<void> {
  if (isPast(date)) throw new Error('Tidak dapat mengubah checklist hari yang sudah lewat')
  await db.todoItems.update([date, 'murojaah'], { juzTarget: juz })

  if (auth?.currentUser) {
    syncRecordToCloud(auth.currentUser.uid, date)
  }
}

export async function updateHalamanTarget(
  date: string,
  halaman: number | undefined,
): Promise<void> {
  if (isPast(date)) throw new Error('Tidak dapat mengubah checklist hari yang sudah lewat')
  await db.todoItems.update([date, 'murojaah'], { halamanTarget: halaman })

  if (auth?.currentUser) {
    syncRecordToCloud(auth.currentUser.uid, date)
  }
}

export async function updatePhotoBlobId(
  date: string,
  todoId: TodoId,
  photoBlobId: string | undefined,
): Promise<void> {
  await db.todoItems.update([date, todoId], { photoBlobId })
}

export async function updateFileBlobId(
  date: string,
  fileBlobId: string | undefined,
): Promise<void> {
  await db.todoItems.update([date, 'kajian'], { fileBlobId })
}

export async function getAllDailyRecords(): Promise<DailyRecord[]> {
  return db.dailyRecords.orderBy('date').toArray()
}

export async function getDailyRecord(date: string): Promise<DailyRecord | undefined> {
  return db.dailyRecords.get(date)
}
