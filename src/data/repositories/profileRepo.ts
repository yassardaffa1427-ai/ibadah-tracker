import { db } from '@/data/db'
import type { Profile, ReminderSettings } from '@/types/models'
import { TODO_DEFAULT_REMINDER } from '@/types/models'

const PROFILE_ID = 'singleton'
const REMINDER_ID = 'singleton'

export async function getProfile(): Promise<Profile | undefined> {
  return db.profiles.get(PROFILE_ID)
}

export async function saveProfile(data: Omit<Profile, 'id'>): Promise<void> {
  await db.profiles.put({ ...data, id: PROFILE_ID })
}

export async function getReminderSettings(): Promise<ReminderSettings> {
  const existing = await db.reminderSettings.get(REMINDER_ID)
  if (existing) return existing
  return {
    id: REMINDER_ID,
    times: { ...TODO_DEFAULT_REMINDER },
    enabled: false,
  }
}

export async function saveReminderSettings(
  data: Omit<ReminderSettings, 'id'>,
): Promise<void> {
  await db.reminderSettings.put({ ...data, id: REMINDER_ID })
}
