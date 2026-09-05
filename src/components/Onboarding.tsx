import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { saveProfile } from '@/data/repositories/profileRepo'
import GoogleAuthButton from '@/components/auth/GoogleAuthButton'

interface OnboardingProps {
  onComplete: () => void
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState<'name' | 'notify'>('name')
  const { register, handleSubmit, formState: { errors } } = useForm<{ name: string }>()

  const handleName = async (data: { name: string }) => {
    await saveProfile({ name: data.name })
    setStep('notify')
  }

  const handleNotify = async (enable: boolean) => {
    if (enable && typeof Notification !== 'undefined') {
      await Notification.requestPermission()
    }
    onComplete()
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      style={{ background: 'rgba(20,48,31,0.55)' }}
    >
      <div
        className="rounded-2xl p-8 max-w-sm w-full space-y-6"
        style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
      >
        {step === 'name' ? (
          <>
            <div>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--c-muted-fg)' }}>
                Selamat datang
              </p>
              <h1 className="font-display text-2xl" style={{ color: 'var(--c-gold)' }}>
                Ibadah Tracker
              </h1>
              <p className="text-sm mt-2" style={{ color: 'var(--c-muted-fg)' }}>
                Catat dan visualisasikan konsistensi ibadahmu setiap hari.
              </p>
            </div>
            <form onSubmit={handleSubmit(handleName)} className="space-y-3">
              <div>
                <label className="block text-sm mb-1.5" style={{ color: 'var(--c-fg)' }}>
                  Nama kamu
                </label>
                <input
                  {...register('name', { required: 'Nama tidak boleh kosong' })}
                  autoFocus
                  className="w-full rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-1"
                  style={{
                    background: 'var(--c-input)',
                    border: '1px solid var(--c-border)',
                    color: 'var(--c-fg)',
                  }}
                  placeholder="Masukkan namamu"
                />
                {errors.name && (
                  <p className="text-xs mt-1" style={{ color: 'var(--c-danger)' }}>
                    {errors.name.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-medium text-sm btn-3d btn-3d"
                style={{ background: "var(--c-gold)", color: "var(--c-ink)" }}
              >
                Lanjutkan
              </button>
            </form>

            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t" style={{ borderColor: 'var(--c-border)' }} />
              <span className="flex-shrink mx-3 text-xs" style={{ color: 'var(--c-muted-fg)' }}>atau</span>
              <div className="flex-grow border-t" style={{ borderColor: 'var(--c-border)' }} />
            </div>

            <GoogleAuthButton
              variant="outline"
              onSuccess={() => setStep('notify')}
            />
          </>
        ) : (
          <>
            <div>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--c-muted-fg)' }}>
                Langkah terakhir
              </p>
              <h2 className="font-display text-xl" style={{ color: 'var(--c-fg)' }}>
                Aktifkan Reminder?
              </h2>
              <p className="text-sm mt-2" style={{ color: 'var(--c-muted-fg)' }}>
                Ibadah Tracker akan mengingatkanmu ketika waktu ibadah tiba dan belum dikerjakan.
              </p>
            </div>
            <div className="space-y-2">
              <button
                onClick={() => handleNotify(true)}
                className="w-full py-3 rounded-lg font-medium text-sm btn-3d btn-3d"
                style={{ background: "var(--c-gold)", color: "var(--c-ink)" }}
              >
                Ya, aktifkan notifikasi
              </button>
              <button
                onClick={() => handleNotify(false)}
                className="w-full py-2.5 rounded-lg text-sm"
                style={{ color: 'var(--c-muted-fg)' }}
              >
                Nanti saja
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
