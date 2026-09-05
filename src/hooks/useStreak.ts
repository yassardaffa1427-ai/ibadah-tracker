import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '@/data/db'
import { getActiveTodayStreak, getBadgeTier } from '@/lib/calculations'
import type { DailyRecord } from '@/types/models'

// Re-export for convenience
export { getBadgeTier }

function calcLongestFromRecords(records: DailyRecord[]): number {
  if (records.length === 0) return 0
  const sorted = [...records].sort((a, b) => a.date.localeCompare(b.date))
  let longest = 0
  let current = 0
  let prevDate: string | null = null

  for (const record of sorted) {
    if (record.completionRate < 70) {
      current = 0
      prevDate = record.date
      continue
    }
    if (prevDate === null) {
      current = 1
    } else {
      const prev = new Date(prevDate)
      const curr = new Date(record.date)
      const dayDiff = Math.round((curr.getTime() - prev.getTime()) / 86400000)
      current = dayDiff === 1 ? current + 1 : 1
    }
    prevDate = record.date
    if (current > longest) longest = current
  }
  return longest
}

export function useStreak() {
  const records = useLiveQuery(() => db.dailyRecords.toArray(), [], [])

  const active = getActiveTodayStreak(records ?? [])
  const longest = calcLongestFromRecords(records ?? [])
  const tier = getBadgeTier(active)

  return { active, longest, tier }
}
