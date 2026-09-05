export type TodoId =
  | 'tahajud'
  | 'subuh'
  | 'dhuha'
  | 'zuhur'
  | 'ashar'
  | 'maghrib'
  | 'isya'
  | 'kajian'
  | 'murojaah'
  | 'zikir-pagi'
  | 'zikir-petang'

export const TODO_IDS: TodoId[] = [
  'tahajud',
  'subuh',
  'dhuha',
  'zuhur',
  'ashar',
  'maghrib',
  'isya',
  'kajian',
  'murojaah',
  'zikir-pagi',
  'zikir-petang',
]

export const TODO_LABELS: Record<TodoId, string> = {
  tahajud: 'Tahajud',
  subuh: 'Subuh',
  dhuha: 'Dhuha',
  zuhur: 'Zuhur',
  ashar: 'Ashar',
  maghrib: 'Maghrib',
  isya: 'Isya',
  kajian: 'Kajian',
  murojaah: 'Murojaah Hafalan',
  'zikir-pagi': 'Zikir Pagi',
  'zikir-petang': 'Zikir Petang',
}

export const TODO_DEFAULT_REMINDER: Record<TodoId, string> = {
  tahajud: '04:00',
  subuh: '05:00',
  dhuha: '07:30',
  zuhur: '12:00',
  ashar: '15:30',
  maghrib: '18:00',
  isya: '19:30',
  kajian: '20:00',
  murojaah: '21:00',
  'zikir-pagi': '06:00',
  'zikir-petang': '17:00',
}

export const SHOLAT_5_WAKTU: TodoId[] = ['subuh', 'zuhur', 'ashar', 'maghrib', 'isya']

export interface TodoItem {
  todoId: TodoId
  dailyRecordDate: string // YYYY-MM-DD
  isDone: boolean
  completedAt?: number // timestamp
  juzTarget?: number // 1-30, only for murojaah
  halamanTarget?: number // pages memorized, only for murojaah
  photoBlobId?: string
  fileBlobId?: string // only for kajian
}

export interface DailyRecord {
  date: string // YYYY-MM-DD, primary key
  completionRate: number // 0-100
  createdAt: number
}

export interface MediaBlob {
  id: string
  type: 'photo' | 'kajian-file'
  mimeType: string
  data: Blob
  createdAt: number
}

export interface Profile {
  id: string // always 'singleton'
  name: string
  age?: number
  gender?: 'Laki-laki' | 'Perempuan'
  photoBlobId?: string
}

export interface StreakState {
  id: string // always 'singleton'
  activeStreak: number
  longestStreak: number
  lastUpdatedDate: string // YYYY-MM-DD
}

export interface ReminderSettings {
  id: string // always 'singleton'
  times: Record<TodoId, string> // "HH:MM"
  enabled: boolean
}

export const BADGE_TIERS = [3, 7, 14, 30, 60, 100] as const
export type BadgeTier = (typeof BADGE_TIERS)[number]
