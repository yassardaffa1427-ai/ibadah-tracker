import type { DailyRecord } from '@/types/models'

export function calcCompletionRate(todos: { isDone: boolean }[]): number {
  if (todos.length === 0) return 0
  const done = todos.filter((t) => t.isDone).length
  return Math.round((done / todos.length) * 100)
}

export interface StreakResult {
  active: number
  longest: number
}

export function calcStreak(records: DailyRecord[]): StreakResult {
  if (records.length === 0) return { active: 0, longest: 0 }

  // Sort descending by date
  const sorted = [...records].sort((a, b) => b.date.localeCompare(a.date))

  let active = 0
  let longest = 0
  let streak = 0
  let prevDate: string | null = null

  // Walk backward from most recent
  for (const record of sorted) {
    const meetsThreshold = record.completionRate >= 70

    if (prevDate === null) {
      // First record — only count if meets threshold
      if (meetsThreshold) {
        streak = 1
      } else {
        streak = 0
      }
    } else {
      const prev = new Date(prevDate)
      const curr = new Date(record.date)
      const dayDiff = Math.round((prev.getTime() - curr.getTime()) / 86400000)

      if (dayDiff === 1 && meetsThreshold) {
        streak++
      } else {
        // Gap or threshold not met — stop counting active streak
        break
      }
    }
    prevDate = record.date
    if (streak > longest) longest = streak
  }

  active = streak

  // Also scan all records for longest streak (not just from today)
  longest = calcLongestStreak(records)

  return { active, longest }
}

function calcLongestStreak(records: DailyRecord[]): number {
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
      if (dayDiff === 1) {
        current++
      } else {
        current = 1
      }
    }

    prevDate = record.date
    if (current > longest) longest = current
  }

  return longest
}

export function getActiveTodayStreak(records: DailyRecord[]): number {
  if (records.length === 0) return 0
  const sorted = [...records].sort((a, b) => b.date.localeCompare(a.date))

  let streak = 0
  let prevDate: string | null = null

  for (const record of sorted) {
    if (record.completionRate < 70) break

    if (prevDate !== null) {
      const prev = new Date(prevDate)
      const curr = new Date(record.date)
      const dayDiff = Math.round((prev.getTime() - curr.getTime()) / 86400000)
      if (dayDiff !== 1) break
    }

    streak++
    prevDate = record.date
  }

  return streak
}

export function getBadgeTier(streak: number): number {
  if (streak >= 100) return 6
  if (streak >= 60) return 5
  if (streak >= 30) return 4
  if (streak >= 14) return 3
  if (streak >= 7) return 2
  if (streak >= 3) return 1
  return 0
}
