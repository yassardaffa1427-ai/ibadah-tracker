import { useState } from 'react'
import { useDailyRecord } from '@/hooks/useDailyRecord'
import TodoItemCard from '@/components/checklist/TodoItemCard'
import SunnahTodos from '@/components/checklist/SunnahTodos'
import { toDateKey, isPast } from '@/lib/dateUtils'
import { format } from 'date-fns'
import { id as localeId } from 'date-fns/locale'
import { toast } from 'sonner'

export default function ChecklistPage() {
  const today = toDateKey()
  const { todos, record, isLoading, toggleTodo, setJuz, setHalaman } = useDailyRecord()
  const isReadOnly = isPast(today)
  const [confirmed, setConfirmed] = useState(false)
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  const totalCount = todos.length || 11

  const sortedTodos = [...todos].sort((a, b) => {
    const order = ['tahajud','subuh','dhuha','zuhur','ashar','maghrib','isya','kajian','murojaah','zikir-pagi','zikir-petang']
    return order.indexOf(a.todoId) - order.indexOf(b.todoId)
  })

  const doneCount = todos.filter((t) => t.isDone).length
  const completionRate = record?.completionRate ?? 0

  return (
    <div className="max-w-xl mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div>
        <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--c-muted-fg)' }}>
          Ibadah Harian
        </p>
        <h1 className="font-display text-2xl" style={{ color: 'var(--c-fg)', fontFamily: '"DM Sans", sans-serif', fontWeight: 800 }}>
          {format(new Date(), 'EEEE, d MMMM yyyy', { locale: localeId })}
        </h1>
      </div>

      {/* Progress bar */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium" style={{ color: 'var(--c-muted-fg)' }}>
            {doneCount} dari {totalCount} selesai
          </span>
          <span className="text-sm font-semibold tabular-nums" style={{ color: 'var(--c-accent)' }}>
            {completionRate}%
          </span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--c-muted)' }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${completionRate}%`,
              background: completionRate >= 70
                ? 'linear-gradient(90deg, var(--c-h3), var(--c-accent))'
                : 'linear-gradient(90deg, var(--c-h2), var(--c-h3))',
            }}
          />
        </div>
        {completionRate >= 70 && (
          <p className="text-xs mt-1.5" style={{ color: 'var(--c-accent)' }}>
            Streak hari ini terhitung ✓
          </p>
        )}
      </div>

      {/* Todo list */}
      {isLoading ? (
        <div className="space-y-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="h-14 rounded-2xl card-soft animate-pulse" style={{ background: 'var(--c-muted)' }} />
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {sortedTodos.map((item) => (
            <TodoItemCard
              key={item.todoId}
              item={item}
              isReadOnly={isReadOnly}
              onToggle={toggleTodo}
              onJuzChange={setJuz}
              onHalamanChange={setHalaman}
            />
          ))}
        </div>
      )}

      {/* Sunnah to-do */}
      <section>
        <h2 className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--c-muted-fg)' }}>
          Amalan Sunnah
        </h2>
        <SunnahTodos disabled={isReadOnly} />
      </section>

      {isReadOnly && (
        <p className="text-xs text-center" style={{ color: 'var(--c-muted-fg)' }}>
          Checklist kemarin bersifat read-only setelah tengah malam
        </p>
      )}

      {/* Confirm button */}
      {!isReadOnly && (
        confirmed ? (
          <div
            className="rounded-2xl px-4 py-4 flex items-center gap-3"
            style={{ background: 'rgba(88,167,0,0.1)', border: '1px solid rgba(88,167,0,0.3)' }}
          >
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="var(--c-accent)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="text-sm font-semibold" style={{ color: 'var(--c-accent)' }}>
              Ibadah hari ini sudah dikonfirmasi ✓
            </p>
          </div>
        ) : (
          <button
            onClick={() => setShowConfirmModal(true)}
            className="w-full py-3.5 rounded-2xl text-sm font-bold btn-3d"
            style={{ background: 'var(--c-accent)', color: '#fff' }}
          >
            ✓ Konfirmasi Ibadah Hari Ini
          </button>
        )
      )}

      {/* Confirm modal */}
      {showConfirmModal && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          style={{ background: 'rgba(20,48,31,0.45)' }}
          onClick={() => setShowConfirmModal(false)}
        >
          <div
            className="rounded-2xl p-6 w-full max-w-sm space-y-4"
            style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center space-y-1">
              <p className="text-3xl">🌿</p>
              <h3 className="font-display text-lg font-bold" style={{ color: 'var(--c-fg)' }}>
                Konfirmasi Ibadah?
              </h3>
              <p className="text-sm" style={{ color: 'var(--c-muted-fg)' }}>
                {doneCount} dari {totalCount} ibadah selesai hari ini ({completionRate}%).
                {doneCount === totalCount ? ' Alhamdulillah, sempurna! 🎉' : ' Terus semangat!'}
              </p>
            </div>
            <div className="flex gap-2 pt-1">
              <button
                onClick={() => {
                  setConfirmed(true)
                  setShowConfirmModal(false)
                  toast.success(doneCount === totalCount ? 'Alhamdulillah! Semua ibadah selesai 🌟' : 'Ibadah hari ini dikonfirmasi ✓')
                }}
                className="flex-1 py-3 rounded-xl text-sm font-bold btn-3d"
                style={{ background: 'var(--c-accent)', color: '#fff' }}
              >
                Ya, Konfirmasi
              </button>
              <button
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 py-3 rounded-xl text-sm font-medium"
                style={{ background: 'var(--c-muted)', color: 'var(--c-muted-fg)', border: '1px solid var(--c-border)' }}
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
