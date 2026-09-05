import { useEffect, useState } from 'react'
import { useUIStore } from '@/store/uiStore'
import { getTodosForDate, getDailyRecord } from '@/data/repositories/dailyRecordRepo'
import { getBlob } from '@/data/repositories/mediaRepo'
import { formatDisplayDate } from '@/lib/dateUtils'
import { TODO_LABELS } from '@/types/models'
import type { TodoItem, DailyRecord } from '@/types/models'

export default function DayDetailDrawer() {
  const { drawerDate, setDrawerDate, openHistoryDetail } = useUIStore()
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [record, setRecord] = useState<DailyRecord | undefined>()
  const [photoUrls, setPhotoUrls] = useState<Record<string, string>>({})

  useEffect(() => {
    if (!drawerDate) { setTodos([]); setRecord(undefined); setPhotoUrls({}); return }

    Promise.all([
      getTodosForDate(drawerDate),
      getDailyRecord(drawerDate),
    ]).then(([todosResult, recordResult]) => {
      setTodos(todosResult)
      setRecord(recordResult)

      // Load photo blobs
      const urls: Record<string, string> = {}
      Promise.all(
        todosResult
          .filter((t) => t.photoBlobId)
          .map(async (t) => {
            const blob = await getBlob(t.photoBlobId!)
            if (blob) urls[t.todoId] = URL.createObjectURL(blob.data)
          }),
      ).then(() => setPhotoUrls(urls))
    })

    return () => {
      Object.values(photoUrls).forEach(URL.revokeObjectURL)
    }
  }, [drawerDate])

  if (!drawerDate) return null

  const order = ['tahajud','subuh','dhuha','zuhur','ashar','maghrib','isya','kajian','murojaah']
  const sorted = [...todos].sort((a, b) => order.indexOf(a.todoId) - order.indexOf(b.todoId))

  return (
    <div
      className="fixed inset-0 z-40 flex items-end lg:items-center justify-center"
      style={{ background: 'rgba(20,48,31,0.45)' }}
      onClick={() => setDrawerDate(null)}
    >
      <div
        className="w-full max-w-lg rounded-t-2xl lg:rounded-2xl p-6 space-y-4 max-h-[85vh] overflow-y-auto"
        style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'var(--c-muted-fg)' }}>
              Rekap Ibadah
            </p>
            <h2 className="font-display text-xl" style={{ color: 'var(--c-fg)' }}>
              {formatDisplayDate(drawerDate)}
            </h2>
          </div>
          <div className="text-right">
            <p className="text-2xl font-semibold tabular-nums" style={{ color: 'var(--c-accent)' }}>
              {record?.completionRate ?? 0}%
            </p>
            <p className="text-xs" style={{ color: 'var(--c-muted-fg)' }}>selesai</p>
          </div>
        </div>

        <div className="space-y-2">
          {sorted.map((item) => (
            <div
              key={item.todoId}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5"
              style={{
                background: item.isDone ? 'rgba(88,204,2,0.09)' : 'rgba(20,48,31,0.035)',
                border: `1px solid ${item.isDone ? 'var(--c-h2)' : 'var(--c-border)'}`,
              }}
            >
              <div
                className="w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0"
                style={{
                  borderColor: item.isDone ? 'var(--c-accent)' : 'var(--c-border)',
                  background: item.isDone ? 'var(--c-accent)' : 'transparent',
                }}
              >
                {item.isDone && (
                  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <span className="flex-1 text-sm" style={{ color: item.isDone ? 'var(--c-fg)' : 'var(--c-muted-fg)' }}>
                {TODO_LABELS[item.todoId]}
                {item.todoId === 'murojaah' && item.juzTarget && (
                  <span className="ml-2 text-xs" style={{ color: 'var(--c-muted-fg)' }}>Juz {item.juzTarget}</span>
                )}
              </span>
              {photoUrls[item.todoId] && (
                <img
                  src={photoUrls[item.todoId]}
                  alt={`Foto ${TODO_LABELS[item.todoId]}`}
                  className="w-8 h-8 rounded-md object-cover"
                />
              )}
            </div>
          ))}
        </div>

        <button
          onClick={() => openHistoryDetail(drawerDate)}
          className="w-full py-2.5 rounded-xl text-sm font-bold btn-3d"
          style={{ background: 'var(--c-accent)', color: '#fff' }}
        >
          Lihat Rekap Lengkap
        </button>

        <button
          onClick={() => setDrawerDate(null)}
          className="w-full py-2.5 rounded-lg text-sm font-medium transition-colors"
          style={{ background: 'var(--c-muted)', color: 'var(--c-muted-fg)' }}
        >
          Tutup
        </button>
      </div>
    </div>
  )
}
