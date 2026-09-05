import { BADGE_TIERS } from '@/types/models'

const TIER_LABELS: Record<number, string> = {
  3: '3 Hari',
  7: '7 Hari',
  14: '14 Hari',
  30: '30 Hari',
  60: '60 Hari',
  100: '100 Hari',
}

const TIER_COLORS: Record<number, string> = {
  3: '#f59e0b',
  7: '#f97316',
  14: '#ef4444',
  30: '#dc2626',
  60: '#b91c1c',
  100: '#d99e19',
}

const TIER_DESCRIPTIONS: Record<number, string> = {
  3: 'Konsisten selama 3 hari',
  7: 'Satu minggu penuh',
  14: 'Dua minggu berturut-turut',
  30: 'Satu bulan konsisten',
  60: 'Dua bulan tanpa putus',
  100: 'Seratus hari — mashaa Allah',
}

interface BadgeTierListProps {
  activeStreak: number
}

export default function BadgeTierList({ activeStreak }: BadgeTierListProps) {
  return (
    <div className="space-y-2">
      {BADGE_TIERS.map((days) => {
        const unlocked = activeStreak >= days
        const color = TIER_COLORS[days]
        return (
          <div
            key={days}
            className="flex items-center gap-3 rounded-lg px-4 py-3 transition-all"
            style={{
              background: unlocked ? 'rgba(212,168,83,0.08)' : 'rgba(20,48,31,0.035)',
              border: `1px solid ${unlocked ? color + '44' : 'var(--c-border)'}`,
              opacity: unlocked ? 1 : 0.45,
            }}
          >
            <svg
              width={28}
              height={28}
              viewBox="0 0 24 24"
              style={{
                fill: unlocked ? color : '#c3cec6',
                filter: unlocked ? `drop-shadow(0 0 6px ${color}66)` : undefined,
              }}
              aria-hidden="true"
            >
              <path d="M12 2C12 2 7 8 7 13a5 5 0 0010 0c0-5-5-11-5-11zm0 15a2.5 2.5 0 01-2.5-2.5C9.5 12 12 9 12 9s2.5 3 2.5 5.5A2.5 2.5 0 0112 17z" />
            </svg>
            <div className="flex-1 min-w-0">
              <p
                className="font-semibold text-sm"
                style={{ color: unlocked ? color : '#6b7280' }}
              >
                {TIER_LABELS[days]}
              </p>
              <p className="text-xs" style={{ color: 'var(--c-muted-fg)' }}>
                {TIER_DESCRIPTIONS[days]}
              </p>
            </div>
            {unlocked && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: color + '22', color }}>
                Terbuka
              </span>
            )}
          </div>
        )
      })}
    </div>
  )
}
