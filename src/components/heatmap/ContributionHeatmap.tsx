import { useMemo, useRef, useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '@/data/db'
import { startOfWeek, endOfWeek, eachDayOfInterval, subYears, format, parseISO } from 'date-fns'
import { id as localeId } from 'date-fns/locale'
import { toDateKey } from '@/lib/dateUtils'
import { useUIStore } from '@/store/uiStore'

const CELL_SIZE = 12
const CELL_GAP = 3
const WEEK_DAYS = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']

function rateToColor(rate: number | undefined): string {
  if (rate === undefined) return 'var(--c-h0)'
  if (rate === 0) return 'var(--c-h0)'
  if (rate <= 30) return 'var(--c-h1)'
  if (rate <= 60) return 'var(--c-h2)'
  if (rate <= 90) return 'var(--c-h3)'
  return 'var(--c-accent)'
}

interface TooltipState {
  x: number
  y: number
  date: string
  rate: number | undefined
}

export default function ContributionHeatmap() {
  const setDrawerDate = useUIStore((s) => s.setDrawerDate)
  const [tooltip, setTooltip] = useState<TooltipState | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Single query fetching both tables atomically to avoid timeout from racing subscriptions.
  const rateMap = useLiveQuery(
    async () => {
      const [records, todoItems] = await Promise.all([
        db.dailyRecords.toArray(),
        db.todoItems.toArray(),
      ])

      const map: Record<string, number> = {}
      for (const r of records) map[r.date] = r.completionRate

      const doneMap: Record<string, number> = {}
      const totalMap: Record<string, number> = {}
      for (const t of todoItems) {
        totalMap[t.dailyRecordDate] = (totalMap[t.dailyRecordDate] ?? 0) + 1
        if (t.isDone) doneMap[t.dailyRecordDate] = (doneMap[t.dailyRecordDate] ?? 0) + 1
      }
      for (const date of Object.keys(totalMap)) {
        const total = totalMap[date]
        const done = doneMap[date] ?? 0
        map[date] = total > 0 ? Math.round((done / total) * 100) : 0
      }

      return map
    },
    [],
    {} as Record<string, number>,
  )

  // Build weeks newest-first so today's cells appear at the left edge immediately.
  const { weeks, totalWeeks } = useMemo(() => {
    const today = new Date()
    const start = startOfWeek(subYears(today, 1), { weekStartsOn: 0 })
    const end = endOfWeek(today, { weekStartsOn: 0 })
    const days = eachDayOfInterval({ start, end })

    const chronological: Date[][] = []
    let week: Date[] = []
    for (const day of days) {
      week.push(day)
      if (week.length === 7) { chronological.push(week); week = [] }
    }
    if (week.length) chronological.push(week)

    // Reverse: most recent week first (leftmost column)
    const weeks = [...chronological].reverse()
    return { weeks, totalWeeks: weeks.length }
  }, [])

  const svgWidth = totalWeeks * (CELL_SIZE + CELL_GAP)
  const svgHeight = 7 * (CELL_SIZE + CELL_GAP)

  const handleCellClick = (dateKey: string) => {
    if (dateKey <= toDateKey()) setDrawerDate(dateKey)
  }

  return (
    <div>
      <div
        ref={containerRef}
        className="overflow-x-auto pb-2"
        style={{ scrollbarWidth: 'none' }}
      >
        <div className="flex gap-1 mb-1 pl-[28px]" style={{ minWidth: svgWidth }}>
          {/* Month labels — show when month changes compared to the previous column */}
          {weeks.map((week, wi) => {
            const first = week[0]
            const prev = weeks[wi - 1]?.[0]
            // Show label when month changes (or first column)
            const showLabel = wi === 0 || (prev && first.getMonth() !== prev.getMonth())
            return (
              <div
                key={wi}
                className="text-xs flex-shrink-0"
                style={{
                  width: CELL_SIZE + CELL_GAP,
                  color: showLabel ? 'var(--c-muted-fg)' : 'transparent',
                  fontSize: 9,
                }}
              >
                {showLabel ? format(first, 'MMM', { locale: localeId }) : ''}
              </div>
            )
          })}
        </div>

        <div className="flex gap-0">
          {/* Day-of-week labels */}
          <div className="flex flex-col mr-1" style={{ gap: CELL_GAP }}>
            {WEEK_DAYS.map((label, i) => (
              <div
                key={i}
                className="flex items-center"
                style={{
                  height: CELL_SIZE,
                  width: 22,
                  fontSize: 8,
                  color: 'var(--c-muted-fg)',
                  visibility: i % 2 === 0 ? 'visible' : 'hidden',
                }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* SVG grid */}
          <svg width={svgWidth} height={svgHeight} style={{ overflow: 'visible' }}>
            {weeks.map((week, wi) =>
              week.map((day, di) => {
                const dateKey = toDateKey(day)
                const rate = rateMap[dateKey]
                const isFuture = dateKey > toDateKey()
                const color = isFuture ? 'transparent' : rateToColor(rate)

                return (
                  <rect
                    key={dateKey}
                    x={wi * (CELL_SIZE + CELL_GAP)}
                    y={di * (CELL_SIZE + CELL_GAP)}
                    width={CELL_SIZE}
                    height={CELL_SIZE}
                    rx={2}
                    style={{ fill: color, cursor: isFuture ? 'default' : 'pointer' }}
                    onClick={() => !isFuture && handleCellClick(dateKey)}
                    onMouseEnter={(e) => {
                      if (isFuture) return
                      const rect = containerRef.current?.getBoundingClientRect()
                      if (!rect) return
                      setTooltip({
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top - 40,
                        date: dateKey,
                        rate,
                      })
                    }}
                    onMouseLeave={() => setTooltip(null)}
                    aria-label={`${dateKey}: ${rate ?? 0}% selesai`}
                  />
                )
              }),
            )}
          </svg>
        </div>

        {/* Tooltip */}
        {tooltip && (
          <div
            className="absolute z-10 rounded-lg px-2 py-1.5 text-xs pointer-events-none"
            style={{
              left: tooltip.x,
              top: tooltip.y,
              background: 'var(--c-surface)',
              border: '1px solid var(--c-border)',
              color: 'var(--c-fg)',
              transform: 'translateX(-50%)',
              whiteSpace: 'nowrap',
            }}
          >
            <div className="font-medium">{format(parseISO(tooltip.date), 'd MMM yyyy', { locale: localeId })}</div>
            <div style={{ color: 'var(--c-muted-fg)' }}>{tooltip.rate ?? 0}% selesai</div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-1.5 mt-2">
        <span className="text-xs" style={{ color: 'var(--c-muted-fg)' }}>Lebih sedikit</span>
        {['var(--c-h0)', 'var(--c-h1)', 'var(--c-h2)', 'var(--c-h3)', 'var(--c-accent)'].map((c) => (
          <div key={c} style={{ width: 10, height: 10, background: c, borderRadius: 2, flexShrink: 0 }} />
        ))}
        <span className="text-xs" style={{ color: 'var(--c-muted-fg)' }}>Lebih banyak</span>
      </div>
    </div>
  )
}
