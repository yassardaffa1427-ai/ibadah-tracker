import { useEffect, useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '@/data/db'
import { toast } from 'sonner'
import {
  getOrCreateTodayRecord,
  updateSunnahStatus,
  updatePuasaType,
} from '@/data/repositories/dailyRecordRepo'
import { toDateKey } from '@/lib/dateUtils'
import type { SunnahId, SunnahItem } from '@/types/models'

export function useSunnahRecord() {
  const today = toDateKey()
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    getOrCreateTodayRecord()
      .then(() => setInitialized(true))
      .catch(() => {
        toast.error('Gagal memuat data hari ini')
        setInitialized(true)
      })
  }, [today])

  const sunnah = useLiveQuery<SunnahItem[]>(
    () => db.sunnahItems.where('dailyRecordDate').equals(today).toArray(),
    [today],
  )

  const toggleSunnah = async (sunnahId: SunnahId, current: boolean) => {
    try {
      await updateSunnahStatus(today, sunnahId, !current)
    } catch {
      toast.error('Gagal menyimpan perubahan')
    }
  }

  const setPuasaType = async (puasaType: string | undefined) => {
    try {
      await updatePuasaType(today, puasaType)
    } catch {
      toast.error('Gagal menyimpan jenis puasa')
    }
  }

  return { sunnah: sunnah ?? [], isLoading: !initialized, toggleSunnah, setPuasaType }
}
