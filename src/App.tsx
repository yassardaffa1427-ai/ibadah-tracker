import { useEffect, useState } from 'react'
import { Toaster } from 'sonner'
import { useUIStore } from '@/store/uiStore'
import SidebarNav from '@/components/layout/SidebarNav'
import BottomNav from '@/components/layout/BottomNav'
import DashboardPage from '@/pages/Dashboard'
import ChecklistPage from '@/pages/Checklist'
import HistoryPage from '@/pages/History'
import SettingsPage from '@/pages/Settings'
import DayDetailDrawer from '@/components/heatmap/DayDetailDrawer'
import Onboarding from '@/components/Onboarding'
import { getProfile } from '@/data/repositories/profileRepo'
import { useNotificationScheduler } from '@/hooks/useNotificationScheduler'
import { useAuthStore } from '@/store/authStore'


function PageContent() {
  const activePage = useUIStore((s) => s.activePage)
  switch (activePage) {
    case 'dashboard': return <DashboardPage />
    case 'checklist': return <ChecklistPage />
    case 'history': return <HistoryPage />
    case 'settings': return <SettingsPage />
  }
}

function AppShell() {
  useNotificationScheduler()
  const drawerDate = useUIStore((s) => s.drawerDate)

  return (
    <div className="flex min-h-screen" style={{ background: 'var(--c-bg)' }}>
      <SidebarNav />
      <main
        className="flex-1 overflow-y-auto pb-20 lg:pb-0"
        style={{ minHeight: '100dvh' }}
      >
        <PageContent />
      </main>
      <BottomNav />
      {drawerDate && <DayDetailDrawer />}
    </div>
  )
}

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null)
  const [loadStuck, setLoadStuck] = useState(false)
  const initAuth = useAuthStore((s) => s.initAuth)

  useEffect(() => {
    const unsub = initAuth()
    return () => unsub()
  }, [initAuth])

  useEffect(() => {
    // If another tab/PWA window is holding an old database connection open, the
    // schema upgrade (and every db call behind it, including this one) can hang
    // indefinitely instead of erroring. Surface a hint instead of a blank screen.
    const stuckTimer = setTimeout(() => setLoadStuck(true), 6000)

    getProfile().then((p) => {
      clearTimeout(stuckTimer)
      setShowOnboarding(!p)
    }).catch(() => {
      clearTimeout(stuckTimer)
      setShowOnboarding(true)
    })

    return () => clearTimeout(stuckTimer)
  }, [])

  if (showOnboarding === null) {
    return loadStuck ? (
      <div className="grid min-h-screen place-items-center px-6 text-center" style={{ background: 'var(--c-bg)' }}>
        <p className="text-sm max-w-xs" style={{ color: 'var(--c-muted-fg)' }}>
          Memuat lama. Coba tutup semua tab/jendela lain yang membuka Ibadah Tracker (termasuk aplikasi PWA-nya jika terpasang), lalu muat ulang halaman ini.
        </p>
      </div>
    ) : null
  }

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            color: 'var(--c-fg)',
            boxShadow: '0 6px 20px rgba(31,59,40,0.10)',
          },
        }}
      />
      {showOnboarding && (
        <Onboarding onComplete={() => setShowOnboarding(false)} />
      )}
      <AppShell />
    </>
  )
}
