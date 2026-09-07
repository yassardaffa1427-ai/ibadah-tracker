import { firestore } from '@/lib/firebase'
import {
  doc,
  setDoc,
  collection,
  onSnapshot,
  getDocs,
} from 'firebase/firestore'
import { db } from '@/data/db'
import type { DailyRecord, TodoItem, SunnahItem } from '@/types/models'
import { toDateKey } from '@/lib/dateUtils'

/**
 * Mengirimkan data hari ini dari IndexedDB lokal ke Cloud Firestore milik pengguna yang sedang login.
 */
export async function syncRecordToCloud(userId: string, dateKey?: string): Promise<void> {
  if (!firestore || !userId) return

  const targetDate = dateKey || toDateKey()
  try {
    const record = await db.dailyRecords.get(targetDate)
    const todos = await db.todoItems.where('dailyRecordDate').equals(targetDate).toArray()
    const sunnah = await db.sunnahItems.where('dailyRecordDate').equals(targetDate).toArray()

    if (record) {
      const recordRef = doc(firestore, 'users', userId, 'dailyRecords', targetDate)
      await setDoc(recordRef, {
        date: record.date,
        completionRate: record.completionRate,
        sunnahCompletionRate: record.sunnahCompletionRate ?? 0,
        createdAt: record.createdAt,
        updatedAt: Date.now(),
      }, { merge: true })
    }

    if (todos.length > 0) {
      for (const item of todos) {
        const itemDocId = `${targetDate}_${item.todoId}`
        const itemRef = doc(firestore, 'users', userId, 'todoItems', itemDocId)
        await setDoc(itemRef, {
          todoId: item.todoId,
          dailyRecordDate: item.dailyRecordDate,
          isDone: item.isDone,
          completedAt: item.completedAt || null,
          juzTarget: item.juzTarget || null,
          halamanTarget: item.halamanTarget || null,
          updatedAt: Date.now(),
        }, { merge: true })
      }
    }

    if (sunnah.length > 0) {
      for (const item of sunnah) {
        const itemDocId = `${targetDate}_${item.sunnahId}`
        const itemRef = doc(firestore, 'users', userId, 'sunnahItems', itemDocId)
        await setDoc(itemRef, {
          sunnahId: item.sunnahId,
          dailyRecordDate: item.dailyRecordDate,
          isDone: item.isDone,
          completedAt: item.completedAt || null,
          puasaType: item.puasaType || null,
          updatedAt: Date.now(),
        }, { merge: true })
      }
    }
  } catch (err) {
    console.error('Gagal menyinkronkan data lokal ke cloud:', err)
  }
}

/**
 * Mendengarkan perubahan real-time dari Cloud Firestore dan menyimpannya ke IndexedDB lokal.
 * Mendukung sinkronisasi 2 arah otomatis antara Laptop dan HP.
 */
export function startCloudRealtimeListener(userId: string): () => void {
  if (!firestore || !userId) return () => {}

  // 1. Snapshot Listener untuk dailyRecords
  const recordsColRef = collection(firestore, 'users', userId, 'dailyRecords')
  const unsubRecords = onSnapshot(recordsColRef, (snapshot) => {
    snapshot.docChanges().forEach(async (change) => {
      if (change.type === 'added' || change.type === 'modified') {
        const data = change.doc.data() as DailyRecord
        if (data.date) {
          const existing = await db.dailyRecords.get(data.date)
          if (!existing || (data.createdAt && data.createdAt >= (existing.createdAt || 0))) {
            await db.dailyRecords.put({
              date: data.date,
              completionRate: data.completionRate || 0,
              sunnahCompletionRate: data.sunnahCompletionRate || 0,
              createdAt: data.createdAt || Date.now(),
            })
          }
        }
      }
    })
  }, (error) => {
    console.error('Realtime records sync error:', error)
  })

  // 2b. Snapshot Listener untuk sunnahItems
  const sunnahColRef = collection(firestore, 'users', userId, 'sunnahItems')
  const unsubSunnah = onSnapshot(sunnahColRef, (snapshot) => {
    snapshot.docChanges().forEach(async (change) => {
      if (change.type === 'added' || change.type === 'modified') {
        const data = change.doc.data() as {
          sunnahId: string
          dailyRecordDate: string
          isDone: boolean
          completedAt?: number
          puasaType?: string
        }

        if (data.dailyRecordDate && data.sunnahId) {
          await db.sunnahItems.put({
            sunnahId: data.sunnahId as SunnahItem['sunnahId'],
            dailyRecordDate: data.dailyRecordDate,
            isDone: Boolean(data.isDone),
            completedAt: data.completedAt || undefined,
            puasaType: data.puasaType || undefined,
          })
        }
      }
    })
  }, (error) => {
    console.error('Realtime sunnah sync error:', error)
  })

  // 2. Snapshot Listener untuk todoItems
  const todosColRef = collection(firestore, 'users', userId, 'todoItems')
  const unsubTodos = onSnapshot(todosColRef, (snapshot) => {
    snapshot.docChanges().forEach(async (change) => {
      if (change.type === 'added' || change.type === 'modified') {
        const data = change.doc.data() as {
          todoId: string
          dailyRecordDate: string
          isDone: boolean
          completedAt?: number
          juzTarget?: number
          halamanTarget?: number
        }

        if (data.dailyRecordDate && data.todoId) {
          await db.todoItems.put({
            todoId: data.todoId as any,
            dailyRecordDate: data.dailyRecordDate,
            isDone: Boolean(data.isDone),
            completedAt: data.completedAt || undefined,
            juzTarget: data.juzTarget || undefined,
            halamanTarget: data.halamanTarget || undefined,
          })
        }
      }
    })
  }, (error) => {
    console.error('Realtime todos sync error:', error)
  })

  // Tarik data awal (initial pull)
  getDocs(recordsColRef).then((snap) => {
    snap.forEach(async (docSnap) => {
      const data = docSnap.data() as DailyRecord
      if (data.date) {
        await db.dailyRecords.put({
          date: data.date,
          completionRate: data.completionRate || 0,
          sunnahCompletionRate: data.sunnahCompletionRate || 0,
          createdAt: data.createdAt || Date.now(),
        })
      }
    })
  }).catch((e) => console.warn('Initial records pull error:', e))

  getDocs(todosColRef).then((snap) => {
    snap.forEach(async (docSnap) => {
      const data = docSnap.data() as any
      if (data.dailyRecordDate && data.todoId) {
        await db.todoItems.put({
          todoId: data.todoId,
          dailyRecordDate: data.dailyRecordDate,
          isDone: Boolean(data.isDone),
          completedAt: data.completedAt || undefined,
          juzTarget: data.juzTarget || undefined,
          halamanTarget: data.halamanTarget || undefined,
        })
      }
    })
  }).catch((e) => console.warn('Initial todos pull error:', e))

  getDocs(sunnahColRef).then((snap) => {
    snap.forEach(async (docSnap) => {
      const data = docSnap.data() as any
      if (data.dailyRecordDate && data.sunnahId) {
        await db.sunnahItems.put({
          sunnahId: data.sunnahId,
          dailyRecordDate: data.dailyRecordDate,
          isDone: Boolean(data.isDone),
          completedAt: data.completedAt || undefined,
          puasaType: data.puasaType || undefined,
        })
      }
    })
  }).catch((e) => console.warn('Initial sunnah pull error:', e))

  return () => {
    unsubRecords()
    unsubTodos()
    unsubSunnah()
  }
}
