import { db } from '@/data/db'
import { auth } from '@/lib/firebase'
import { syncRecordToCloud } from '@/data/repositories/cloudSyncRepo'

function base64ToBlob(base64: string, mimeType: string): Blob {
  const bytes = atob(base64)
  const arr = new Uint8Array(bytes.length)
  for (let i = 0; i < bytes.length; i++) arr[i] = bytes.charCodeAt(i)
  return new Blob([arr], { type: mimeType })
}

export async function importFromJSON(jsonString: string): Promise<void> {
  let payload: Record<string, unknown>
  try {
    payload = JSON.parse(jsonString)
  } catch {
    throw new Error('File tidak valid: bukan format JSON yang benar')
  }

  if (!payload.version || !payload.dailyRecords || !payload.todoItems) {
    throw new Error('File tidak valid: struktur data tidak sesuai')
  }

  // Restore blobs
  const mediaBlobs = ((payload.mediaBlobs as unknown[]) ?? []).map((b: unknown) => {
    const blob = b as Record<string, unknown>
    return {
      ...blob,
      data: base64ToBlob(blob.data as string, blob.mimeType as string),
    }
  })

  const dailyRecords = (payload.dailyRecords as Array<{ date: string }>) ?? []

  await db.transaction(
    'rw',
    [db.dailyRecords, db.todoItems, db.sunnahItems, db.profiles, db.streakState, db.reminderSettings, db.mediaBlobs],
    async () => {
      await db.dailyRecords.clear()
      await db.todoItems.clear()
      await db.sunnahItems.clear()
      await db.profiles.clear()
      await db.streakState.clear()
      await db.reminderSettings.clear()
      await db.mediaBlobs.clear()

      await db.dailyRecords.bulkAdd(payload.dailyRecords as never[])
      await db.todoItems.bulkAdd(payload.todoItems as never[])
      if ((payload.sunnahItems as unknown[])?.length) await db.sunnahItems.bulkAdd(payload.sunnahItems as never[])
      if ((payload.profiles as unknown[])?.length) await db.profiles.bulkAdd(payload.profiles as never[])
      if ((payload.streakState as unknown[])?.length) await db.streakState.bulkAdd(payload.streakState as never[])
      if ((payload.reminderSettings as unknown[])?.length) await db.reminderSettings.bulkAdd(payload.reminderSettings as never[])
      if (mediaBlobs.length) await db.mediaBlobs.bulkAdd(mediaBlobs as never[])
    },
  )

  // Jika pengguna sedang login dengan Google, dorong seluruh data yang baru di-restore ke Cloud Firestore secara otomatis
  if (auth?.currentUser) {
    const userId = auth.currentUser.uid
    for (const record of dailyRecords) {
      if (record.date) {
        await syncRecordToCloud(userId, record.date)
      }
    }
  }
}
