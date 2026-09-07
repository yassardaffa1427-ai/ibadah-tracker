import { useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { format, parseISO } from 'date-fns'
import { id as localeId } from 'date-fns/locale'
import { db } from '@/data/db'
import { useUIStore } from '@/store/uiStore'
import { toDateKey } from '@/lib/dateUtils'
import { TODO_IDS, SUNNAH_IDS } from '@/types/models'
import DayRecapDetail from '@/components/history/DayRecapDetail'

type FilterKey = 'all' | 'perfect' | 'partial'

interface DaySummary {
  date: string
  done: number
  total: number
  rate: number
  sunnahDone: number
  sunnahTotal: number
  sunnahRate: number
  attachments: number
}

function DayCard({ day, onOpen }: { day: DaySummary; onOpen: () => void }) {
  const isPerfect = day.done === day.total && day.total > 0
  const isToday = day.date === toDateKey()
  const accent = isPerfect
    ? 'var(--c-accent)'
    : day.rate >= 70
      ? 'var(--c-h3)'
      : day.rate > 0
        ? 'var(--c-gold)'
        : 'var(--c-muted-fg)'

  return (
    <button
      onClick={onOpen}
      className="text-left rounded-2xl card-soft p-4 w-full transition-transform hover:-translate-y-0.5"
      style={{
        background: 'var(--c-surface)',
        border: `2px solid ${isPerfect ? 'var(--c-h2)' : 'var(--c-border)'}`,
      }}
      aria-label={`Lihat rekap ${format(parseISO(day.date), 'd MMMM yyyy', { locale: localeId })}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--c-muted-fg)' }}>
            {format(parseISO(day.date), 'EEE', { locale: localeId })}
          </p>
          <p className="font-display text-xl leading-tight" style={{ color: 'var(--c-fg)' }}>
            {format(parseISO(day.date), 'd MMM', { locale: localeId })}
          </p>
          <p className="text-[11px]" style={{ color: 'var(--c-muted-fg)' }}>
            {format(parseISO(day.date), 'yyyy')}
          </p>
        </div>
        {isToday && (
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
            style={{ background: 'rgba(88,204,2,0.14)', color: 'var(--c-accent)' }}
          >
            HARI INI
          </span>
        )}
      </div>

      <p className="mt-3 text-2xl font-extrabold tabular-nums leading-none" style={{ color: accent }}>
        {day.done}
        <span className="text-base" style={{ color: 'var(--c-muted-fg)' }}>/{day.total}</span>
      </p>

      <div className="h-2 rounded-full overflow-hidden mt-2" style={{ background: 'var(--c-muted)' }}>
        <div className="h-full rounded-full" style={{ width: `${day.rate}%`, background: accent }} />
      </div>

      {/* Sunnah mini stat */}
      <div className="flex items-center justify-between mt-1.5 gap-2">
        <div className="h-1 rounded-full overflow-hidden flex-1" style={{ background: 'rgba(56,136,255,0.15)' }}>
          <div className="h-full rounded-full" style={{ width: `${day.sunnahRate}%`, background: '#3888ff' }} />
        </div>
        <span className="text-[10px] font-bold tabular-nums flex-shrink-0" style={{ color: '#3888ff' }}>
          {day.sunnahDone}/{day.sunnahTotal}
        </span>
      </div>

      <div className="flex items-center justify-between mt-2.5">
        <span className="text-[11px] font-semibold" style={{ color: 'var(--c-muted-fg)' }}>
          {isPerfect ? 'Lengkap 🎉' : `${day.rate}% selesai`}
        </span>
        {day.attachments > 0 && (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold" style={{ color: '#a2760e' }}>
            <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
            </svg>
            {day.attachments}
          </span>
        )}
      </div>
    </button>
  )
}

export default function HistoryPage() {
  const { historyDate, setHistoryDate } = useUIStore()
  const [filter, setFilter] = useState<FilterKey>('all')
  const [monthFilter, setMonthFilter] = useState<string>('') // format: "YYYY-MM"

  const days = useLiveQuery(
    async (): Promise<DaySummary[]> => {
      const [records, todoItems, sunnahItems] = await Promise.all([
        db.dailyRecords.toArray(),
        db.todoItems.toArray(),
        db.sunnahItems.toArray(),
      ])
      const doneMap: Record<string, number> = {}
      const totalMap: Record<string, number> = {}
      const attachMap: Record<string, number> = {}
      for (const t of todoItems) {
        totalMap[t.dailyRecordDate] = (totalMap[t.dailyRecordDate] ?? 0) + 1
        if (t.isDone) doneMap[t.dailyRecordDate] = (doneMap[t.dailyRecordDate] ?? 0) + 1
        if (t.photoBlobId) attachMap[t.dailyRecordDate] = (attachMap[t.dailyRecordDate] ?? 0) + 1
        if (t.fileBlobId) attachMap[t.dailyRecordDate] = (attachMap[t.dailyRecordDate] ?? 0) + 1
      }
      const sunnahDoneMap: Record<string, number> = {}
      for (const s of sunnahItems) {
        if (s.isDone) sunnahDoneMap[s.dailyRecordDate] = (sunnahDoneMap[s.dailyRecordDate] ?? 0) + 1
      }
      return records
        .map((r) => ({
          date: r.date,
          done: doneMap[r.date] ?? 0,
          total: totalMap[r.date] ?? TODO_IDS.length,
          rate: r.completionRate,
          sunnahDone: sunnahDoneMap[r.date] ?? 0,
          sunnahTotal: SUNNAH_IDS.length,
          sunnahRate: r.sunnahCompletionRate ?? 0,
          attachments: attachMap[r.date] ?? 0,
        }))
        .sort((a, b) => (a.date < b.date ? 1 : -1))
    },
    [],
  )

  const safedays = days ?? []

  const filtered = safedays.filter((d) => {
    const isPerfect = d.done === d.total && d.total > 0
    const matchesCompletion = filter === 'perfect' ? isPerfect : filter === 'partial' ? !isPerfect : true
    const matchesMonth = monthFilter ? d.date.startsWith(monthFilter) : true
    return matchesCompletion && matchesMonth
  })

  const perfectCount = safedays.filter((d) => d.done === d.total && d.total > 0).length

  // ── Detail view ────────────────────────────────────────────────
  if (historyDate) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-5">
        <button
          onClick={() => setHistoryDate(null)}
          className="inline-flex items-center gap-2 text-sm font-semibold rounded-xl px-3 py-2"
          style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-fg)' }}
        >
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Kembali ke Histori
        </button>
        <DayRecapDetail date={historyDate} />
      </div>
    )
  }

  // ── List view ──────────────────────────────────────────────────
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <div>
        <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--c-muted-fg)' }}>
          Rekapan
        </p>
        <h1 className="font-display text-2xl" style={{ color: 'var(--c-fg)', fontFamily: '"DM Sans", sans-serif', fontWeight: 800 }}>
          Histori Ibadah
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--c-muted-fg)' }}>
          {safedays.length} hari tercatat · {perfectCount} hari lengkap. Klik kotak tanggal untuk melihat rekapan lengkapnya.
        </p>
      </div>

      {/* Month filter */}
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex items-center gap-2 flex-1 min-w-48">
          <label className="text-xs font-semibold flex-shrink-0" style={{ color: 'var(--c-muted-fg)' }}>
            Filter Bulan:
          </label>
          <input
            type="month"
            value={monthFilter}
            onChange={(e) => setMonthFilter(e.target.value)}
            className="text-xs px-3 py-2 rounded-xl flex-1"
            style={{
              background: 'var(--c-surface)',
              border: '1px solid var(--c-border)',
              color: 'var(--c-fg)',
              outline: 'none',
            }}
          />
          {monthFilter && (
            <button
              onClick={() => setMonthFilter('')}
              className="text-xs font-bold px-3 py-2 rounded-xl"
              style={{ background: 'var(--c-muted)', color: 'var(--c-muted-fg)', border: '1px solid var(--c-border)' }}
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Filter pills */}
      <div className="flex gap-2">
        {(
          [
            ['all', 'Semua'],
            ['perfect', 'Lengkap semua'],
            ['partial', 'Belum lengkap'],
          ] as [FilterKey, string][]
        ).map(([key, label]) => {
          const active = filter === key
          return (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className="text-xs font-bold px-3.5 py-2 rounded-full transition-colors"
              style={{
                background: active ? 'var(--c-accent)' : 'var(--c-surface)',
                color: active ? '#fff' : 'var(--c-muted-fg)',
                border: `1px solid ${active ? 'var(--c-accent)' : 'var(--c-border)'}`,
              }}
            >
              {label}
            </button>
          )
        })}
      </div>

      {filtered.length === 0 ? (
        <div
          className="rounded-2xl card-soft px-4 py-10 text-center text-sm"
          style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-muted-fg)' }}
        >
          Belum ada rekapan untuk filter ini.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((day) => (
            <DayCard key={day.date} day={day} onOpen={() => setHistoryDate(day.date)} />
          ))}
        </div>
      )}
    </div>
  )
}
