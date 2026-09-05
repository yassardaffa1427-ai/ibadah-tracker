import Dexie, { type Table } from 'dexie'
import type { DailyRecord, TodoItem, MediaBlob, Profile, StreakState, ReminderSettings } from '@/types/models'

class IbadahDB extends Dexie {
  dailyRecords!: Table<DailyRecord, string>
  todoItems!: Table<TodoItem, [string, string]>
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
  }
}

export const db = new IbadahDB()
