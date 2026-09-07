import { useLiveQuery } from 'dexie-react-hooks'
import { format, parseISO } from 'date-fns'
import { id as localeId } from 'date-fns/locale'
import { db } from '@/data/db'
import { useUIStore } from '@/store/uiStore'
import { toDateKey } from '@/lib/dateUtils'
import { TODO_IDS } from '@/types/models'

export default function RecentHistory({ limit = 7, onDayClick }: { limit?: number; onDayClick?: (date: string) => void }) {
  const { setActivePage, openHistoryDetail } = useUIStore()

  const rows = useLiveQuery(
    async () => {
      const [records, todoItems] = await Promise.all([
        db.dailyRecords.toArray(),
        db.todoItems.toArray(),
      ])

      const doneMap: Record<string, number> = {}
      const totalMap: Record<string, number> = {}
      for (const t of todoItems) {
        totalMap[t.dailyRecordDate] = (totalMap[t.dailyRecordDate] ?? 0) + 1
        if (t.isDone) doneMap[t.dailyRecordDate] = (doneMap[t.dailyRecordDate] ?? 0) + 1
      }

      return records
        .slice()
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .slice(0, limit)
        .map((r) => ({
          date: r.date,
          rate: r.completionRate,
          done: doneMap[r.date] ?? 0,
          total: totalMap[r.date] ?? TODO_IDS.length,
        }))
    },
    [limit],
    [],
  )

  return (
    <div
      className="rounded-2xl card-soft overflow-hidden"
      style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
    >
      {rows.length === 0 ? (
        <p className="px-4 py-6 text-sm text-center" style={{ color: 'var(--c-muted-fg)' }}>
          Histori akan muncul setelah kamu mencatat ibadah.
        </p>
      ) : (
        <ul>
          {rows.map((row, i) => {
            const perfect = row.done > 0 && row.done === row.total
            const accent = perfect
              ? 'var(--c-accent)'
              : row.rate >= 70
                ? 'var(--c-h3)'
                : row.rate > 0
                  ? 'var(--c-gold)'
                  : 'var(--c-muted-fg)'
            return (
              <li key={row.date}>
                <button
                  onClick={() => onDayClick ? onDayClick(row.date) : openHistoryDetail(row.date)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-black/[0.02]"
                  style={{ borderTop: i === 0 ? 'none' : '1px solid var(--c-border)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex flex-col items-center justify-center flex-shrink-0"
                    style={{ background: perfect ? 'rgba(88,204,2,0.14)' : 'var(--c-muted)' }}
                  >
                    <span className="text-sm font-extrabold leading-none" style={{ color: accent }}>
                      {format(parseISO(row.date), 'd')}
                    </span>
                    <span className="text-[9px] uppercase" style={{ color: 'var(--c-muted-fg)' }}>
                      {format(parseISO(row.date), 'MMM', { locale: localeId })}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold" style={{ color: 'var(--c-fg)' }}>
                      {row.date === toDateKey()
                        ? 'Hari ini'
                        : format(parseISO(row.date), 'EEEE', { locale: localeId })}
                    </p>
                    <div className="h-1.5 rounded-full overflow-hidden mt-1.5" style={{ background: 'var(--c-muted)' }}>
                      <div className="h-full rounded-full" style={{ width: `${row.rate}%`, background: accent }} />
                    </div>
                  </div>

                  <span className="text-sm font-extrabold tabular-nums flex-shrink-0" style={{ color: accent }}>
                    {row.done}/{row.total}
                  </span>
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" style={{ stroke: "var(--c-muted-fg)" }} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </li>
            )
          })}
        </ul>
      )}

      <button
        onClick={() => setActivePage('history')}
        className="w-full py-3 text-xs font-bold uppercase tracking-wide"
        style={{ borderTop: '1px solid var(--c-border)', color: 'var(--c-accent)' }}
      >
        Lihat Semua Histori
      </button>
    </div>
  )
}
