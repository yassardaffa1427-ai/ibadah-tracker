import { useEffect } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '@/data/db'
import { toDateKey } from '@/lib/dateUtils'
import { getReminderSettings } from '@/data/repositories/profileRepo'
import { TODO_LABELS } from '@/types/models'
import type { TodoId } from '@/types/models'

const notificationsSupported = typeof Notification !== 'undefined'

function scheduleNotification(todoId: TodoId, timeStr: string, todos: { todoId: string; isDone: boolean }[]) {
  if (!notificationsSupported) return
  if (Notification.permission !== 'granted') return

  const [hours, minutes] = timeStr.split(':').map(Number)
  const now = new Date()
  const target = new Date()
  target.setHours(hours, minutes, 0, 0)

  if (target <= now) return

  const delay = target.getTime() - now.getTime()
  const isDone = todos.find((t) => t.todoId === todoId)?.isDone

  setTimeout(() => {
    db.todoItems
      .where('dailyRecordDate')
      .equals(toDateKey())
      .toArray()
      .then((freshTodos) => {
        const stillUndone = !freshTodos.find((t) => t.todoId === todoId)?.isDone
        if (stillUndone && !isDone) {
          new Notification('Ibadah Tracker', {
            body: `${TODO_LABELS[todoId as TodoId]} belum dikerjakan`,
            icon: '/icons/icon-192x192.png',
            tag: todoId,
          })
        }
      })
  }, delay)
}

export function useNotificationScheduler() {
  const today = toDateKey()
  const todos = useLiveQuery(
    () => db.todoItems.where('dailyRecordDate').equals(today).toArray(),
    [today],
    [],
  )

  useEffect(() => {
    if (!notificationsSupported) return
    if (Notification.permission !== 'granted') return
    if (!todos || todos.length === 0) return

    getReminderSettings().then((settings) => {
      if (!settings.enabled) return
      for (const [todoId, timeStr] of Object.entries(settings.times)) {
        scheduleNotification(todoId as TodoId, timeStr, todos)
      }
    })
  }, [todos])
}
