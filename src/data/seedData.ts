import { db } from '@/data/db'
import { TODO_IDS } from '@/types/models'
import { toDateKey } from '@/lib/dateUtils'
import { subDays } from 'date-fns'

const COMPLETION_PATTERNS = [
  9, 7, 5, 9, 8, 6, 9, 9, 4, 7, 9, 8, 9, 3, 7, 9, 9, 6, 8, 9, 9, 9, 7, 5, 9, 8, 9, 9,
]

export async function seedDevData() {
  const count = await db.dailyRecords.count()
  if (count > 0) return // Already seeded

  const today = new Date()

  for (let i = COMPLETION_PATTERNS.length; i >= 1; i--) {
    const date = toDateKey(subDays(today, i))
    const doneCount = COMPLETION_PATTERNS[COMPLETION_PATTERNS.length - i] ?? 5
    const completionRate = Math.round((doneCount / TODO_IDS.length) * 100)

    await db.dailyRecords.add({ date, completionRate, createdAt: Date.now() })

    const todos = TODO_IDS.map((todoId, idx) => ({
      todoId,
      dailyRecordDate: date,
      isDone: idx < doneCount,
      completedAt: idx < doneCount ? Date.now() : undefined,
    }))

    await db.todoItems.bulkAdd(todos)
  }
}
