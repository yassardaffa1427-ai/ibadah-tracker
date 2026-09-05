import { create } from 'zustand'
import {
  type User,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth, googleProvider, isFirebaseConfigured } from '@/lib/firebase'
import { getProfile, saveProfile } from '@/data/repositories/profileRepo'
import { toast } from 'sonner'

interface AuthState {
  user: User | null
  loading: boolean
  error: string | null
  isConfigured: boolean
  initAuth: () => () => void
  loginWithGoogle: () => Promise<boolean>
  logout: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: isFirebaseConfigured,
  error: null,
  isConfigured: isFirebaseConfigured,

  initAuth: () => {
    if (!isFirebaseConfigured || !auth) {
      set({ loading: false, isConfigured: false })
      return () => {}
    }

    const unsubscribe = onAuthStateChanged(
      auth,
      async (firebaseUser) => {
        set({ user: firebaseUser, loading: false, error: null })

        if (firebaseUser) {
          try {
            const currentProfile = await getProfile()
            // Perbarui nama profil jika belum ada atau sinkronkan
            if (firebaseUser.displayName) {
              await saveProfile({
                name: currentProfile?.name || firebaseUser.displayName,
                age: currentProfile?.age,
                gender: currentProfile?.gender,
                photoBlobId: currentProfile?.photoBlobId,
              })
            }
          } catch (e) {
            console.error('Gagal menyinkronkan profil Google ke penyimpanan lokal:', e)
          }
        }
      },
      (err) => {
        console.error('Auth state error:', err)
        set({ error: err.message, loading: false })
      }
    )

    return unsubscribe
  },

  loginWithGoogle: async () => {
    if (!isFirebaseConfigured || !auth) {
      toast.error('Firebase belum dikonfigurasi. Silakan isi kredensial di file .env.local')
      return false
    }

    set({ loading: true, error: null })
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const user = result.user

      // Sinkronkan nama ke profil lokal
      if (user.displayName) {
        const currentProfile = await getProfile()
        await saveProfile({
          name: user.displayName,
          age: currentProfile?.age,
          gender: currentProfile?.gender,
          photoBlobId: currentProfile?.photoBlobId,
        })
      }

      toast.success(`Selamat datang, ${user.displayName || user.email}!`)
      set({ user, loading: false })
      return true
    } catch (err: unknown) {
      const authError = err as { code?: string; message?: string }
      console.warn('Popup login failed, checking fallback:', authError)

      // Fallback ke signInWithRedirect jika popup diblokir browser
      if (authError.code === 'auth/popup-blocked') {
        try {
          await signInWithRedirect(auth, googleProvider)
          return true
        } catch (redirectErr) {
          console.error('Redirect sign in error:', redirectErr)
        }
      }

      let errorMsg = 'Gagal masuk dengan Google'
      if (authError.code === 'auth/popup-closed-by-user') {
        errorMsg = 'Jendela login ditutup sebelum selesai'
      } else if (authError.code === 'auth/network-request-failed') {
        errorMsg = 'Koneksi jaringan bermasalah'
      } else if (authError.code === 'auth/unauthorized-domain') {
        errorMsg = 'Domain ini belum diizinkan di Firebase Console (Authentication -> Settings -> Authorized domains)'
      } else if (authError.message) {
        errorMsg = authError.message
      }

      toast.error(errorMsg)
      set({ error: errorMsg, loading: false })
      return false
    }
  },

  logout: async () => {
    if (!auth) {
      set({ user: null })
      return
    }

    try {
      await signOut(auth)
      set({ user: null, error: null })
      toast.success('Berhasil keluar dari akun Google')
    } catch (err) {
      console.error('Logout error:', err)
      toast.error('Gagal keluar dari akun')
    }
  },
}))
