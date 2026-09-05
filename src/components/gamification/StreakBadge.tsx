interface StreakBadgeProps {
  streak: number
  tier: number
  size?: 'sm' | 'md' | 'lg'
}

const TIER_COLORS = [
  '#6b7280', // tier 0 — gray
  '#f59e0b', // tier 1 — amber (3 days)
  '#f97316', // tier 2 — orange (7 days)
  '#ef4444', // tier 3 — orange-red (14 days)
  '#dc2626', // tier 4 — red (30 days)
  '#b91c1c', // tier 5 — deep red (60 days)
  '#d99e19', // tier 6 — gold (100 days)
]

const TIER_GLOW = [
  'none',
  'none',
  'none',
  '0 0 8px rgba(249,115,22,0.4)',
  '0 0 12px rgba(220,38,38,0.5)',
  '0 0 16px rgba(185,28,28,0.6)',
  '0 0 20px rgba(212,168,83,0.7)',
]

import { motion } from 'framer-motion'
import CountUp from '@/components/ui/CountUp'

export default function StreakBadge({ streak, tier, size = 'md' }: StreakBadgeProps) {
  const color = TIER_COLORS[tier] ?? TIER_COLORS[0]
  const glow = TIER_GLOW[tier] ?? 'none'
  const sizeMap = { sm: 20, md: 28, lg: 40 }
  const px = sizeMap[size]

  // Unique gradient id per instance to avoid SVG defs collisions
  const gradId = `flame-grad-${size}`

  const hasFlame = streak > 0

  return (
    <span
      className="inline-flex items-center gap-1.5"
      title={`${streak} hari streak`}
    >
      <motion.svg
        width={px}
        height={px}
        viewBox="0 0 24 24"
        animate={hasFlame ? { scale: [1, 1.1, 1], rotate: [0, -3, 3, 0] } : {}}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        style={{ filter: glow !== 'none' ? `drop-shadow(${glow})` : undefined }}
        aria-hidden="true"
      >
        {hasFlame && (
          <defs>
            <linearGradient id={gradId} x1="12" y1="17" x2="12" y2="2" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ef4444" />
              <stop offset="0.45" stopColor="#f97316" />
              <stop offset="1" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
        )}
        <path
          d="M12 2C12 2 7 8 7 13a5 5 0 0010 0c0-5-5-11-5-11zm0 15a2.5 2.5 0 01-2.5-2.5C9.5 12 12 9 12 9s2.5 3 2.5 5.5A2.5 2.5 0 0112 17z"
          fill={hasFlame ? `url(#${gradId})` : color}
        />
      </motion.svg>
      <span
        className="font-semibold tabular-nums"
        style={{
          fontSize: size === 'sm' ? 13 : size === 'md' ? 16 : 22,
          color,
        }}
      >
        <CountUp value={streak} />
      </span>
    </span>
  )
}
