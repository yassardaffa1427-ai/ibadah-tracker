import { useEffect, useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '@/data/db'
import { toast } from 'sonner'
import {
  getOrCreateTodayRecord,
  updateTodoStatus,
  updateJuzTarget,
  updateHalamanTarget,
} from '@/data/repositories/dailyRecordRepo'
import { toDateKey } from '@/lib/dateUtils'
import type { TodoId, DailyRecord, TodoItem } from '@/types/models'

export function useDailyRecord() {
  const today = toDateKey()
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    getOrCreateTodayRecord()
      .then(() => setInitialized(true))
      .catch(() => {
        toast.error('Gagal memuat data hari ini')
        setInitialized(true)
      })
  }, [today])

  const record = useLiveQuery<DailyRecord | undefined>(
    () => db.dailyRecords.get(today),
    [today],
  )

  const todos = useLiveQuery<TodoItem[]>(
    () => db.todoItems.where('dailyRecordDate').equals(today).toArray(),
    [today],
  )

  const toggleTodo = async (todoId: TodoId, current: boolean) => {
    try {
      await updateTodoStatus(today, todoId, !current)
    } catch {
      toast.error('Gagal menyimpan perubahan')
    }
  }

  const setJuz = async (juz: number | undefined) => {
    try {
      await updateJuzTarget(today, juz)
    } catch {
      toast.error('Gagal menyimpan target juz')
    }
  }

  const setHalaman = async (halaman: number | undefined) => {
    try {
      await updateHalamanTarget(today, halaman)
    } catch {
      toast.error('Gagal menyimpan jumlah halaman')
    }
  }

  return { record, todos: (todos as TodoItem[] | undefined) ?? [], isLoading: !initialized, toggleTodo, setJuz, setHalaman }
}
