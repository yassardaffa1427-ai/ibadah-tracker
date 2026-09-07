export type TodoId =
  | 'tahajud'
  | 'subuh'
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

export type SunnahId =
  | 'dhuha'
  | 'rawatib-qabliyah-subuh'
  | 'rawatib-qabliyah-zuhur'
  | 'rawatib-badiyah-zuhur'
  | 'rawatib-badiyah-maghrib'
  | 'rawatib-badiyah-isya'
  | 'puasa-sunnah'

export const SUNNAH_IDS: SunnahId[] = [
  'dhuha',
  'rawatib-qabliyah-subuh',
  'rawatib-qabliyah-zuhur',
  'rawatib-badiyah-zuhur',
  'rawatib-badiyah-maghrib',
  'rawatib-badiyah-isya',
  'puasa-sunnah',
]

export const SUNNAH_LABELS: Record<SunnahId, string> = {
  dhuha: 'Dhuha',
  'rawatib-qabliyah-subuh': 'Qabliyah Subuh (2 rakaat)',
  'rawatib-qabliyah-zuhur': 'Qabliyah Zuhur (2 rakaat)',
  'rawatib-badiyah-zuhur': "Ba'diyah Zuhur (2 rakaat)",
  'rawatib-badiyah-maghrib': "Ba'diyah Maghrib (2 rakaat)",
  'rawatib-badiyah-isya': "Ba'diyah Isya (2 rakaat)",
  'puasa-sunnah': 'Puasa Sunnah',
}

export const PUASA_TYPE_OPTIONS = [
  { value: 'senin', label: 'Senin' },
  { value: 'kamis', label: 'Kamis' },
  { value: 'senin-kamis', label: 'Senin & Kamis' },
  { value: 'daud', label: 'Puasa Daud' },
  { value: 'ayyamul-bidh', label: "Ayyamul Bidh (13-15)" },
  { value: 'asyura', label: 'Asyura (10 Muharram)' },
  { value: 'arafah', label: 'Arafah (9 Dzulhijjah)' },
  { value: 'syawal', label: 'Syawal' },
  { value: 'lainnya', label: 'Lainnya' },
]

export interface SunnahItem {
  sunnahId: SunnahId
  dailyRecordDate: string // YYYY-MM-DD
  isDone: boolean
  completedAt?: number // timestamp
  puasaType?: string // only meaningful for 'puasa-sunnah'
}

export interface DailyRecord {
  date: string // YYYY-MM-DD, primary key
  completionRate: number // 0-100, wajib only
  sunnahCompletionRate?: number // 0-100, sunnah only
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
