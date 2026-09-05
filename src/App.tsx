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
  const initAuth = useAuthStore((s) => s.initAuth)

  useEffect(() => {
    const unsub = initAuth()
    return () => unsub()
  }, [initAuth])

  useEffect(() => {
    getProfile().then((p) => {
      setShowOnboarding(!p)
    }).catch(() => {
      setShowOnboarding(true)
    })
  }, [])

  if (showOnboarding === null) return null

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
