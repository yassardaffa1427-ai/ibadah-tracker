import { format, parseISO, isToday as dfnsIsToday, isBefore, startOfDay } from 'date-fns'

export function toDateKey(date: Date = new Date()): string {
  return format(date, 'yyyy-MM-dd')
}

export function isToday(dateKey: string): boolean {
  return dfnsIsToday(parseISO(dateKey))
}

export function isPast(dateKey: string): boolean {
  return isBefore(startOfDay(parseISO(dateKey)), startOfDay(new Date()))
}

export function formatDisplayDate(dateKey: string): string {
  return format(parseISO(dateKey), 'd MMMM yyyy')
}
