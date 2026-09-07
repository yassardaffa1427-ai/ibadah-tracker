import { db } from '@/data/db'
import { toDateKey } from '@/lib/dateUtils'

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve((reader.result as string).split(',')[1])
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

export async function exportToJSON(): Promise<void> {
  const [dailyRecords, todoItems, sunnahItems, profiles, streakState, reminderSettings, mediaBlobs] =
    await Promise.all([
      db.dailyRecords.toArray(),
      db.todoItems.toArray(),
      db.sunnahItems.toArray(),
      db.profiles.toArray(),
      db.streakState.toArray(),
      db.reminderSettings.toArray(),
      db.mediaBlobs.toArray(),
    ])

  const blobsEncoded = await Promise.all(
    mediaBlobs.map(async (b) => ({
      ...b,
      data: await blobToBase64(b.data),
    })),
  )

  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    dailyRecords,
    todoItems,
    sunnahItems,
    profiles,
    streakState,
    reminderSettings,
    mediaBlobs: blobsEncoded,
  }

  const json = JSON.stringify(payload, null, 2)
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `ibadah-tracker-backup-${toDateKey()}.json`
  a.click()
  setTimeout(() => URL.revokeObjectURL(url), 5000)
}
