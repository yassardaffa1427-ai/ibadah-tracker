import { db } from '@/data/db'
import { TODO_IDS } from '@/types/models'
import type { DailyRecord, TodoItem, TodoId } from '@/types/models'
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

export async function getOrCreateTodayRecord(): Promise<{
  record: DailyRecord
  todos: TodoItem[]
}> {
  const date = toDateKey()
  const existing = await db.dailyRecords.get(date)
  if (existing) {
    const todos = await db.todoItems.where('dailyRecordDate').equals(date).toArray()
    return { record: existing, todos }
  }

  const record: DailyRecord = {
    date,
    completionRate: 0,
    createdAt: Date.now(),
  }
  const todos = makeTodoItems(date)

  await db.transaction('rw', [db.dailyRecords, db.todoItems], async () => {
    await db.dailyRecords.add(record)
    await db.todoItems.bulkAdd(todos)
  })

  return { record, todos }
}

export async function getTodosForDate(date: string): Promise<TodoItem[]> {
  return db.todoItems.where('dailyRecordDate').equals(date).toArray()
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
