import { db } from '@/data/db'
import type { MediaBlob } from '@/types/models'

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

export async function saveBlob(
  type: MediaBlob['type'],
  data: Blob,
  mimeType: string,
): Promise<string> {
  const id = generateId()
  const blob: MediaBlob = {
    id,
    type,
    mimeType,
    data,
    createdAt: Date.now(),
  }
  await db.mediaBlobs.add(blob)
  return id
}

export async function getBlob(id: string): Promise<MediaBlob | undefined> {
  return db.mediaBlobs.get(id)
}

export async function deleteBlob(id: string): Promise<void> {
  await db.mediaBlobs.delete(id)
}

export async function getAllBlobs(): Promise<MediaBlob[]> {
  return db.mediaBlobs.toArray()
}
