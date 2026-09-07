import { useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '@/data/db'
import ContributionHeatmap from '@/components/heatmap/ContributionHeatmap'
import StreakBadge from '@/components/gamification/StreakBadge'
import { useStreak } from '@/hooks/useStreak'
import { toDateKey } from '@/lib/dateUtils'
import { TODO_IDS, TODO_LABELS, SUNNAH_IDS, SUNNAH_LABELS, PUASA_TYPE_OPTIONS } from '@/types/models'
import type { TodoId } from '@/types/models'
import { useUIStore } from '@/store/uiStore'
import RecentHistory from '@/components/history/RecentHistory'
import CekUpModal from '@/components/history/CekUpModal'
import SpotlightCard from '@/components/ui/SpotlightCard'
import CountUp from '@/components/ui/CountUp'

function ReminderPanel() {
  const [permission, setPermission] = useState<NotificationPermission>(
    typeof Notification !== 'undefined' ? Notification.permission : 'denied',
  )

  const handleRequest = async () => {
    if (typeof Notification === 'undefined') return
    const result = await Notification.requestPermission()
    setPermission(result)
  }

  if (typeof Notification === 'undefined') return null
  if (permission === 'granted') return null

  return (
    <div
      className="rounded-2xl card-soft px-4 py-4 flex items-center gap-3"
      style={{ background: 'rgba(212,168,83,0.08)', border: '1px solid rgba(212,168,83,0.25)' }}
    >
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" style={{ stroke: "var(--c-gold)" }} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
      </svg>
      {permission === 'denied' ? (
        <p className="text-sm" style={{ color: 'var(--c-gold)' }}>
          Notifikasi dinonaktifkan. Aktifkan di pengaturan browser.
        </p>
      ) : (
        <div className="flex-1 flex items-center justify-between gap-3">
          <p className="text-sm" style={{ color: 'var(--c-gold)' }}>
            Aktifkan notifikasi untuk pengingat ibadah
          </p>
          <button
            onClick={handleRequest}
            className="text-xs font-medium px-3 py-1.5 rounded-lg flex-shrink-0 btn-3d"
            style={{ background: "var(--c-gold)", color: "var(--c-ink)" }}
          >
            Aktifkan
          </button>
        </div>
      )}
    </div>
  )
}


function RekapHarian() {
  const today = toDateKey()

  const data = useLiveQuery(
    async () => {
      const [record, todos, sunnahItems] = await Promise.all([
        db.dailyRecords.get(today),
        db.todoItems.where('dailyRecordDate').equals(today).toArray(),
        db.sunnahItems.where('dailyRecordDate').equals(today).toArray(),
      ])
      return { record, todos, sunnahItems }
    },
    [today],
    null,
  )

  if (data === null) {
    return (
      <div className="rounded-2xl card-soft px-4 py-4 space-y-3 animate-pulse" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
        <div className="flex items-center justify-between">
          <span className="h-4 w-28 rounded" style={{ background: 'var(--c-muted)' }} />
          <span className="h-6 w-12 rounded" style={{ background: 'var(--c-muted)' }} />
        </div>
        <div className="h-1.5 rounded-full" style={{ background: 'var(--c-muted)' }} />
      </div>
    )
  }

  const { record, todos, sunnahItems } = data
  const doneCount = todos.filter((t) => t.isDone).length
  const undone = todos.filter((t) => !t.isDone).map((t) => t.todoId as TodoId)
  const rate = record?.completionRate ?? 0
  const totalCount = TODO_IDS.length

  const sunnahDone = sunnahItems.filter((s) => s.isDone)
  const sunnahRate = record?.sunnahCompletionRate ?? 0
  const sunnahDoneLabels = sunnahDone.map((s) =>
    s.sunnahId === 'puasa-sunnah'
      ? `Puasa ${PUASA_TYPE_OPTIONS.find((o) => o.value === s.puasaType)?.label ?? 'Sunnah'}`
      : SUNNAH_LABELS[s.sunnahId],
  )

  if (!record && doneCount === 0) {
    return (
      <div className="rounded-2xl card-soft px-4 py-5" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
        <p className="text-sm" style={{ color: 'var(--c-muted-fg)' }}>
          Belum ada data hari ini. Mulai centang ibadahmu!
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl card-soft px-4 py-4 space-y-3" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium" style={{ color: 'var(--c-muted-fg)' }}>
          {doneCount} dari {totalCount} selesai
        </span>
        <span className="text-xl font-semibold tabular-nums font-display" style={{ color: rate >= 70 ? 'var(--c-accent)' : 'var(--c-gold)' }}>
          {rate}%
        </span>
      </div>
      {/* Mini progress */}
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--c-muted)' }}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${rate}%`,
            background: rate >= 70 ? 'linear-gradient(90deg,var(--c-h3),var(--c-accent))' : 'linear-gradient(90deg,var(--c-h2),var(--c-h3))',
          }}
        />
      </div>
      {undone.length > 0 && (
        <div>
          <p className="text-xs mb-1.5" style={{ color: 'var(--c-muted-fg)' }}>Belum dikerjakan:</p>
          <div className="flex flex-wrap gap-1.5">
            {undone.map((id) => (
              <span
                key={id}
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(239,68,68,0.1)', color: 'var(--c-danger)', border: '1px solid rgba(239,68,68,0.2)' }}
              >
                {TODO_LABELS[id]}
              </span>
            ))}
          </div>
        </div>
      )}
      {rate === 100 && (
        <p className="text-sm font-medium" style={{ color: 'var(--c-accent)' }}>
          Mashaa Allah! Semua ibadah selesai hari ini 🌟
        </p>
      )}

      {/* Sunnah */}
      <div className="pt-2 mt-1" style={{ borderTop: '1px solid var(--c-border)' }}>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium" style={{ color: '#3888ff' }}>
            Sunnah: {sunnahDone.length} dari {SUNNAH_IDS.length} selesai
          </span>
          <span className="text-xl font-semibold tabular-nums font-display" style={{ color: '#3888ff' }}>
            {sunnahRate}%
          </span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden mt-1.5" style={{ background: 'rgba(56,136,255,0.12)' }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${sunnahRate}%`, background: 'linear-gradient(90deg,#88e5ff,#1971f6)' }}
          />
        </div>
        {sunnahDoneLabels.length > 0 && (
          <div className="mt-2">
            <p className="text-xs mb-1.5" style={{ color: 'var(--c-muted-fg)' }}>Sunnah yg dikerjakan:</p>
            <div className="flex flex-wrap gap-1.5">
              {sunnahDoneLabels.map((label) => (
                <span
                  key={label}
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(56,136,255,0.1)', color: '#3888ff', border: '1px solid rgba(56,136,255,0.2)' }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function DashboardPage() {
  const { active, longest, tier } = useStreak()
  const records = useLiveQuery(() => db.dailyRecords.toArray(), [], [])
  const setPage = useUIStore((s) => s.setActivePage)
  const [cekUpDate, setCekUpDate] = useState<string | null>(null)

  const hasData = (records?.length ?? 0) > 0

  return (
    <>
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {/* Header with streak */}
      <SpotlightCard spotlightColor="rgba(229, 193, 88, 0.15)">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--c-muted-fg)' }}>
              Dashboard
            </p>
            <h1 className="font-display text-2xl" style={{ color: 'var(--c-fg)', fontFamily: '"DM Sans", sans-serif', fontWeight: 800 }}>
              Ibadah Hari Ini
            </h1>
          </div>
          <div className="text-right">
            <StreakBadge streak={active} tier={tier} size="lg" />
            <p className="text-xs mt-0.5 font-medium" style={{ color: 'var(--c-muted-fg)' }}>
              Terpanjang: <CountUp value={longest} /> hari
            </p>
          </div>
        </div>
      </SpotlightCard>

      {/* Notification reminder */}
      <ReminderPanel />

      {/* Rekap harian */}
      <section>
        <h2 className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--c-muted-fg)' }}>
          Rekap Harian
        </h2>
        <RekapHarian />
      </section>

      {/* Heatmap */}
      <section>
        <h2 className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--c-muted-fg)' }}>
          Kontribusi Ibadah
        </h2>
        {hasData ? (
          <div
            className="rounded-2xl card-soft px-4 py-5 relative"
            style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
          >
            <ContributionHeatmap />
          </div>
        ) : (
          <div
            className="rounded-2xl card-soft px-4 py-8 text-center"
            style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
          >
            <p className="text-sm mb-3" style={{ color: 'var(--c-muted-fg)' }}>
              Heatmap akan muncul setelah kamu mulai mencatat ibadah.
            </p>
            <button
              onClick={() => setPage('checklist')}
              className="text-sm font-medium px-4 py-2 rounded-lg btn-3d"
              style={{ background: "var(--c-gold)", color: "var(--c-ink)" }}
            >
              Mulai Checklist Hari Ini
            </button>
          </div>
        )}
      </section>

      {/* Histori singkat */}
      <section>
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="text-xs uppercase tracking-widest" style={{ color: 'var(--c-muted-fg)' }}>
            Histori Singkat
          </h2>
          <button
            onClick={() => setPage('history')}
            className="text-xs font-bold"
            style={{ color: 'var(--c-accent)' }}
          >
            Selengkapnya
          </button>
        </div>
        <RecentHistory limit={7} onDayClick={(date) => setCekUpDate(date)} />
      </section>
    </div>

    {cekUpDate && (
      <CekUpModal date={cekUpDate} onClose={() => setCekUpDate(null)} />
    )}
    </>
  )
}
