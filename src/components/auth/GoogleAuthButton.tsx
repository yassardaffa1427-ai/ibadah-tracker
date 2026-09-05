import { useAuthStore } from '@/store/authStore'

interface GoogleAuthButtonProps {
  className?: string
  variant?: 'primary' | 'outline' | 'compact'
  onSuccess?: () => void
}

export function GoogleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  )
}

export default function GoogleAuthButton({
  className = '',
  variant = 'primary',
  onSuccess,
}: GoogleAuthButtonProps) {
  const { loginWithGoogle, loading, isConfigured } = useAuthStore()

  const handleLogin = async () => {
    const success = await loginWithGoogle()
    if (success && onSuccess) {
      onSuccess()
    }
  }

  if (variant === 'compact') {
    return (
      <button
        type="button"
        onClick={handleLogin}
        disabled={loading}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${className}`}
        style={{
          background: 'var(--c-surface)',
          border: '1px solid var(--c-border)',
          color: 'var(--c-fg)',
        }}
      >
        <GoogleIcon size={14} />
        <span>{loading ? 'Masuk...' : 'Masuk Google'}</span>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleLogin}
      disabled={loading}
      className={`w-full py-2.5 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-3 transition-all hover:opacity-95 active:scale-[0.99] ${className}`}
      style={
        variant === 'outline'
          ? {
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--c-border)',
              color: 'var(--c-fg)',
            }
          : {
              background: '#ffffff',
              color: '#1f2937',
              boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
            }
      }
    >
      <GoogleIcon size={18} />
      <span>
        {loading
          ? 'Menghubungkan...'
          : !isConfigured
          ? 'Masuk dengan Google (Konfigurasi Firebase Diperlukan)'
          : 'Lanjutkan dengan Google'}
      </span>
    </button>
  )
}
