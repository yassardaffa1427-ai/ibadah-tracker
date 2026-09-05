import { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '@/data/db'
import { getProfile, saveProfile, getReminderSettings, saveReminderSettings } from '@/data/repositories/profileRepo'
import { saveBlob, getBlob, deleteBlob } from '@/data/repositories/mediaRepo'
import { compressImage } from '@/lib/imageCompression'
import { exportToJSON } from '@/data/backup/exportData'
import { importFromJSON } from '@/data/backup/importData'
import BadgeTierList from '@/components/gamification/BadgeTierList'
import StreakBadge from '@/components/gamification/StreakBadge'
import { useStreak } from '@/hooks/useStreak'
import { TODO_LABELS, TODO_IDS } from '@/types/models'
import type { TodoId, ReminderSettings } from '@/types/models'
import LogoIcon from '@/components/LogoIcon' // settings footer logo
import { useAuthStore } from '@/store/authStore'
import GoogleAuthButton, { GoogleIcon } from '@/components/auth/GoogleAuthButton'

const profileSchema = z.object({
  name: z.string().min(1, 'Nama tidak boleh kosong'),
  age: z.string().optional(),
  gender: z.enum(['Laki-laki', 'Perempuan', '']).optional(),
})

type ProfileFormValues = z.infer<typeof profileSchema>

function ProfileSection() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ProfileFormValues>()
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
  const [avatarBlobId, setAvatarBlobId] = useState<string | undefined>()
  const imgInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    getProfile().then((p) => {
      if (!p) return
      reset({ name: p.name, age: p.age?.toString(), gender: p.gender ?? '' })
      setAvatarBlobId(p.photoBlobId)
      if (p.photoBlobId) {
        getBlob(p.photoBlobId).then((b) => {
          if (b) setAvatarUrl(URL.createObjectURL(b.data))
        })
      }
    })
  }, [reset])

  const onSubmit = async (data: ProfileFormValues) => {
    try {
      const profile = await getProfile()
      await saveProfile({
        name: data.name,
        age: data.age ? parseInt(data.age) : undefined,
        gender: (data.gender || undefined) as 'Laki-laki' | 'Perempuan' | undefined,
        photoBlobId: avatarBlobId ?? profile?.photoBlobId,
      })
      toast.success('Profil disimpan')
    } catch {
      toast.error('Gagal menyimpan profil')
    }
  }

  const handleAvatarChange = async (file: File) => {
    const compressed = await compressImage(file)
    const profile = await getProfile()
    if (profile?.photoBlobId) await deleteBlob(profile.photoBlobId)
    const id = await saveBlob('photo', compressed, file.type)
    setAvatarBlobId(id)
    setAvatarUrl(URL.createObjectURL(compressed))
    toast.success('Foto profil diperbarui')
  }

  return (
    <section className="space-y-4">
      <h2 className="text-xs uppercase tracking-widest" style={{ color: 'var(--c-muted-fg)' }}>Profil</h2>
      <div
        className="rounded-2xl card-soft p-5 space-y-4"
        style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
      >
        {/* Avatar */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => imgInputRef.current?.click()}
            className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 transition-opacity hover:opacity-80"
            style={{ borderColor: 'var(--c-border)' }}
            aria-label="Ubah foto profil"
          >
            {avatarUrl ? (
              <img src={avatarUrl} alt="Foto profil" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center" style={{ background: 'var(--c-muted)' }}>
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{ stroke: "var(--c-muted-fg)" }} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
              </div>
            )}
          </button>
          <input
            ref={imgInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleAvatarChange(f) }}
          />
          <div>
            <p className="text-sm font-medium" style={{ color: 'var(--c-fg)' }}>Foto Profil</p>
            <p className="text-xs" style={{ color: 'var(--c-muted-fg)' }}>Klik untuk mengganti</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <label className="block text-xs mb-1" style={{ color: 'var(--c-muted-fg)' }}>Nama *</label>
            <input
              {...register('name')}
              className="w-full rounded-lg px-3 py-2 text-sm outline-none focus:ring-1"
              style={{ background: 'var(--c-input)', border: '1px solid var(--c-border)', color: 'var(--c-fg)' }}
              placeholder="Nama kamu"
            />
            {errors.name && <p className="text-xs mt-1" style={{ color: 'var(--c-danger)' }}>{errors.name.message}</p>}
          </div>
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-xs mb-1" style={{ color: 'var(--c-muted-fg)' }}>Usia</label>
              <input
                {...register('age')}
                type="number"
                min={1}
                max={120}
                className="w-full rounded-lg px-3 py-2 text-sm outline-none focus:ring-1"
                style={{ background: 'var(--c-input)', border: '1px solid var(--c-border)', color: 'var(--c-fg)' }}
                placeholder="25"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs mb-1" style={{ color: 'var(--c-muted-fg)' }}>Gender</label>
              <select
                {...register('gender')}
                className="w-full rounded-lg px-3 py-2 text-sm outline-none focus:ring-1"
                style={{ background: 'var(--c-input)', border: '1px solid var(--c-border)', color: 'var(--c-fg)' }}
              >
                <option value="">—</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2.5 rounded-lg text-sm font-medium btn-3d"
            style={{ background: "var(--c-gold)", color: "var(--c-ink)" }}
          >
            Simpan Profil
          </button>
        </form>
      </div>
    </section>
  )
}

function GoogleAuthSection() {
  const { user, logout, isConfigured } = useAuthStore()

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xs uppercase tracking-widest" style={{ color: 'var(--c-muted-fg)' }}>
          Akun &amp; Autentikasi
        </h2>
        <span
          className="text-[10px] px-2 py-0.5 rounded-full font-medium"
          style={
            user
              ? { background: 'rgba(34, 197, 94, 0.15)', color: '#4ade80' }
              : { background: 'var(--c-muted)', color: 'var(--c-muted-fg)' }
          }
        >
          {user ? 'Terhubung' : 'Lokal / Tamu'}
        </span>
      </div>

      <div
        className="rounded-2xl card-soft p-5 space-y-4"
        style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
      >
        {user ? (
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || 'Google Profile'}
                  className="w-12 h-12 rounded-full object-cover border-2"
                  style={{ borderColor: 'var(--c-gold)' }}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                  style={{
                    borderColor: 'var(--c-gold)',
                    background: 'rgba(218, 165, 32, 0.1)',
                  }}
                >
                  <GoogleIcon size={20} />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold truncate" style={{ color: 'var(--c-fg)' }}>
                  {user.displayName || 'Pengguna Google'}
                </p>
                <p className="text-xs truncate" style={{ color: 'var(--c-muted-fg)' }}>
                  {user.email}
                </p>
              </div>
            </div>

            <div
              className="p-3 rounded-xl text-xs space-y-1"
              style={{
                background: 'rgba(49, 185, 139, 0.08)',
                border: '1px solid rgba(49, 185, 139, 0.2)',
                color: 'var(--c-fg)',
              }}
            >
              <p className="font-medium flex items-center gap-1.5" style={{ color: 'var(--c-emerald)' }}>
                <span>✓</span> Akun Google Terverifikasi
              </p>
              <p style={{ color: 'var(--c-muted-fg)' }}>
                Profil dan identitas ibadah Anda terhubung dengan akun Google ini.
              </p>
            </div>

            <button
              onClick={() => logout()}
              className="w-full py-2.5 rounded-lg text-sm font-medium transition-colors"
              style={{
                background: 'rgba(239, 68, 68, 0.1)',
                color: '#ef4444',
                border: '1px solid rgba(239, 68, 68, 0.25)',
              }}
            >
              Keluar dari Akun Google
            </button>
          </div>
        ) : (
          <div className="space-y-3.5">
            <div className="space-y-1">
              <h3 className="text-sm font-medium" style={{ color: 'var(--c-fg)' }}>
                Masuk dengan Akun Google
              </h3>
              <p className="text-xs" style={{ color: 'var(--c-muted-fg)' }}>
                Masuk menggunakan akun Google Anda untuk mengamankan data profil dan mempermudah akses di berbagai perangkat.
              </p>
            </div>

            <GoogleAuthButton />

            {!isConfigured && (
              <div
                className="p-3 rounded-xl text-[11px] space-y-1"
                style={{
                  background: 'rgba(245, 158, 11, 0.08)',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                  color: '#fbbf24',
                }}
              >
                <p className="font-semibold">Info Konfigurasi Firebase:</p>
                <p className="opacity-90">
                  Untuk mengaktifkan login Google, isi kredensial Firebase di file <code>.env.local</code> (lihat contoh di <code>.env.example</code>).
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

function StreakSection() {
  const { active, longest, tier } = useStreak()
  return (
    <section className="space-y-4">
      <h2 className="text-xs uppercase tracking-widest" style={{ color: 'var(--c-muted-fg)' }}>Streak &amp; Badge</h2>
      <div className="rounded-2xl card-soft p-5 space-y-4" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
        <div className="flex items-center justify-between">
          <div>
            <StreakBadge streak={active} tier={tier} size="lg" />
            <p className="text-xs mt-1" style={{ color: 'var(--c-muted-fg)' }}>Streak aktif</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-semibold tabular-nums font-display" style={{ color: 'var(--c-gold)' }}>{longest}</p>
            <p className="text-xs" style={{ color: 'var(--c-muted-fg)' }}>Terpanjang</p>
          </div>
        </div>
        <BadgeTierList activeStreak={active} />
      </div>
    </section>
  )
}

function ReminderSection() {
  const [settings, setSettings] = useState<ReminderSettings | null>(null)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    getReminderSettings().then(setSettings)
  }, [])

  const handleTimeChange = (todoId: TodoId, value: string) => {
    if (!settings) return
    setSettings({ ...settings, times: { ...settings.times, [todoId]: value } })
  }

  const handleSave = async () => {
    if (!settings) return
    setSaving(true)
    try {
      await saveReminderSettings(settings)
      toast.success('Jadwal reminder disimpan')
    } catch {
      toast.error('Gagal menyimpan jadwal')
    } finally {
      setSaving(false)
    }
  }

  return (
    <section className="space-y-4">
      <h2 className="text-xs uppercase tracking-widest" style={{ color: 'var(--c-muted-fg)' }}>Jadwal Reminder</h2>
      <div className="rounded-2xl card-soft p-5 space-y-3" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
        {!settings && (
          <div className="space-y-2 animate-pulse">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="h-4 w-24 rounded" style={{ background: 'var(--c-muted)' }} />
                <div className="h-8 w-20 rounded-lg" style={{ background: 'var(--c-muted)' }} />
              </div>
            ))}
          </div>
        )}
        {settings && (
          <>
            <p className="text-xs" style={{ color: 'var(--c-muted-fg)' }}>
              Notifikasi akan dikirim pada jam yang ditentukan jika ibadah belum dikerjakan.
            </p>
            {TODO_IDS.map((todoId) => (
              <div key={todoId} className="flex items-center justify-between gap-3">
                <span className="text-sm" style={{ color: 'var(--c-fg)' }}>{TODO_LABELS[todoId]}</span>
                <input
                  type="time"
                  value={settings.times[todoId] ?? ''}
                  onChange={(e) => handleTimeChange(todoId, e.target.value)}
                  className="rounded-lg px-2 py-1 text-sm outline-none"
                  style={{ background: 'var(--c-input)', border: '1px solid var(--c-border)', color: 'var(--c-fg)' }}
                />
              </div>
            ))}
            <button
              onClick={handleSave}
              disabled={saving}
              className="w-full py-2.5 rounded-lg text-sm font-medium mt-2 btn-3d"
              style={{ background: 'var(--c-gold)', color: 'var(--c-ink)' }}
            >
              {saving ? 'Menyimpan...' : 'Simpan Jadwal'}
            </button>
          </>
        )}
      </div>
    </section>
  )
}

function DangerSection() {
  const [confirm, setConfirm] = useState(false)
  const [clearing, setClearing] = useState(false)

  const handleClear = async () => {
    setClearing(true)
    try {
      await db.dailyRecords.clear()
      await db.todoItems.clear()
      await db.mediaBlobs.clear()
      toast.success('Semua data histori berhasil dihapus')
      setConfirm(false)
      window.location.reload()
    } catch {
      toast.error('Gagal menghapus data')
    } finally {
      setClearing(false)
    }
  }

  return (
    <section className="space-y-4">
      <h2 className="text-xs uppercase tracking-widest" style={{ color: 'var(--c-danger)' }}>Zona Berbahaya</h2>
      <div
        className="rounded-2xl card-soft p-5 space-y-3"
        style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.2)' }}
      >
        <p className="text-xs" style={{ color: 'var(--c-muted-fg)' }}>
          Hapus seluruh data histori ibadah (catatan harian, checklist, foto/file). Profil dan pengaturan reminder tidak ikut terhapus.
        </p>
        <button
          onClick={() => setConfirm(true)}
          className="w-full py-2.5 rounded-lg text-sm font-medium"
          style={{ background: '#ef4444', color: '#fff' }}
        >
          Hapus Semua Data Histori
        </button>
      </div>

      {confirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(20,48,31,0.45)' }}
        >
          <div className="rounded-2xl card-soft p-6 max-w-sm w-full space-y-4" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
            <h3 className="font-display text-lg" style={{ color: 'var(--c-fg)' }}>Yakin ingin menghapus?</h3>
            <p className="text-sm" style={{ color: 'var(--c-muted-fg)' }}>
              Seluruh histori ibadah akan <strong style={{ color: 'var(--c-danger)' }}>dihapus permanen</strong>. Proses ini tidak dapat dibatalkan.
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleClear}
                disabled={clearing}
                className="flex-1 py-2.5 rounded-lg text-sm font-medium"
                style={{ background: '#ef4444', color: '#fff' }}
              >
                {clearing ? 'Menghapus...' : 'Ya, Hapus Semua'}
              </button>
              <button
                onClick={() => setConfirm(false)}
                className="flex-1 py-2.5 rounded-lg text-sm"
                style={{ background: 'var(--c-muted)', color: 'var(--c-muted-fg)' }}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function BackupSection() {
  const importRef = useRef<HTMLInputElement>(null)
  const [importConfirm, setImportConfirm] = useState(false)
  const [pendingFile, setPendingFile] = useState<File | null>(null)
  const [importing, setImporting] = useState(false)

  const handleExport = async () => {
    try {
      await exportToJSON()
      toast.success('Data berhasil diekspor')
    } catch {
      toast.error('Gagal mengekspor data')
    }
  }

  const handleImportFile = (file: File) => {
    setPendingFile(file)
    setImportConfirm(true)
  }

  const handleImportConfirm = async () => {
    if (!pendingFile) return
    setImporting(true)
    try {
      const text = await pendingFile.text()
      await importFromJSON(text)
      toast.success('Data berhasil diimpor')
      setImportConfirm(false)
      window.location.reload()
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Gagal mengimpor data')
    } finally {
      setImporting(false)
      setPendingFile(null)
    }
  }

  return (
    <section className="space-y-4">
      <h2 className="text-xs uppercase tracking-widest" style={{ color: 'var(--c-muted-fg)' }}>Backup Data</h2>
      <div className="rounded-2xl card-soft p-5 space-y-3" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
        <p className="text-xs" style={{ color: 'var(--c-muted-fg)' }}>
          Data tersimpan lokal di browser. Ekspor secara berkala agar tidak kehilangan histori ibadahmu.
        </p>
        <button
          onClick={handleExport}
          className="w-full py-2.5 rounded-lg text-sm font-medium btn-3d"
          style={{ background: "var(--c-gold)", color: "var(--c-ink)" }}
        >
          Ekspor Data (JSON)
        </button>
        <input
          ref={importRef}
          type="file"
          accept=".json"
          className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImportFile(f) }}
        />
        <button
          onClick={() => importRef.current?.click()}
          className="w-full py-2.5 rounded-lg text-sm font-medium"
          style={{ background: 'rgba(20,48,31,0.035)', color: 'var(--c-fg)', border: '1px solid var(--c-border)' }}
        >
          Impor Data
        </button>
      </div>

      {/* Confirm modal */}
      {importConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(20,48,31,0.45)' }}
        >
          <div className="rounded-2xl card-soft p-6 max-w-sm w-full space-y-4" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
            <h3 className="font-display text-lg" style={{ color: 'var(--c-fg)' }}>Konfirmasi Import</h3>
            <p className="text-sm" style={{ color: 'var(--c-muted-fg)' }}>
              Seluruh data yang ada akan <strong style={{ color: 'var(--c-danger)' }}>ditimpa</strong> dengan data dari file ini. Proses ini tidak dapat dibatalkan.
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleImportConfirm}
                disabled={importing}
                className="flex-1 py-2.5 rounded-lg text-sm font-medium"
                style={{ background: '#ef4444', color: '#fff' }}
              >
                {importing ? 'Mengimpor...' : 'Ya, Timpa Data'}
              </button>
              <button
                onClick={() => { setImportConfirm(false); setPendingFile(null) }}
                className="flex-1 py-2.5 rounded-lg text-sm"
                style={{ background: 'var(--c-muted)', color: 'var(--c-muted-fg)' }}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default function SettingsPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-6 space-y-8">
      <div>
        <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--c-muted-fg)' }}>Pengaturan</p>
        <h1 className="font-display text-2xl" style={{ color: 'var(--c-fg)', fontFamily: '"DM Sans", sans-serif', fontWeight: 800, fontVariationSettings: '"opsz" 14' }}>Settings</h1>
      </div>
      <ProfileSection />
      <GoogleAuthSection />
      <StreakSection />
      <ReminderSection />
      <BackupSection />
      <DangerSection />
      <div className="pt-12 pb-8 flex flex-col items-center gap-3 w-full">
        <div
          className="rounded-xl overflow-hidden"
          style={{ boxShadow: '0 4px 16px rgba(49,185,139,0.35), 0 1px 4px rgba(0,0,0,0.12)' }}
        >
          <LogoIcon size={48} />
        </div>
        <p className="text-xs font-medium" style={{ color: 'var(--c-muted-fg)' }}>
          Ibadah tracker app by @yasraffad_sensei
        </p>
      </div>
    </div>
  )
}
