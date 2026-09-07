import { useState, useEffect } from 'react'
import { useUIStore, type Page } from '@/store/uiStore'
import { useStreak } from '@/hooks/useStreak'
import StreakBadge from '@/components/gamification/StreakBadge'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '@/data/db'
import { useAuthStore } from '@/store/authStore'
import LogoIcon from '@/components/LogoIcon'

interface NavItem {
  page: Page
  label: string
  icon: React.ReactNode
}

function HomeIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function ChecklistIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  )
}

function SettingsIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  )
}

function HistoryIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v5h5" />
      <path d="M3.05 13A9 9 0 106 5.3L3 8" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

const NAV_ITEMS: NavItem[] = [
  { page: 'dashboard', label: 'Dashboard', icon: <HomeIcon /> },
  { page: 'checklist', label: 'Checklist', icon: <ChecklistIcon /> },
  { page: 'history', label: 'Histori', icon: <HistoryIcon /> },
  { page: 'settings', label: 'Settings', icon: <SettingsIcon /> },
]

export default function SidebarNav() {
  const { activePage, setActivePage } = useUIStore()
  const { active, tier } = useStreak()
  const profile = useLiveQuery(() => db.profiles.get('singleton'), [])
  const user = useAuthStore((s) => s.user)

  return (
    <nav
      className="hidden lg:flex flex-col w-60 h-screen sticky top-0 flex-shrink-0 py-6 px-4"
      style={{ background: 'var(--c-nav)', borderRight: '1px solid var(--c-border)' }}
      aria-label="Navigasi utama"
    >
      {/* Logo */}
      <div className="mb-8 px-2 flex items-center gap-3">
        <LogoIcon size={36} />
        <div>
          <h1 className="font-display text-lg font-bold leading-tight" style={{ color: 'var(--c-gold)' }}>
            Ibadah Tracker
          </h1>
          <p className="text-[11px]" style={{ color: 'var(--c-muted-fg)' }}>
            by yasra
          </p>
        </div>
      </div>

      {/* Nav links */}
      <div className="space-y-1 flex-1">
        {NAV_ITEMS.map(({ page, label, icon }) => {
          const isActive = activePage === page
          return (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all"
              style={{
                background: isActive ? 'rgba(88,204,2,0.12)' : 'transparent',
                color: isActive ? 'var(--c-accent)' : 'var(--c-muted-fg)',
                border: isActive ? '1px solid rgba(88,204,2,0.3)' : '1px solid transparent',
              }}
              aria-current={isActive ? 'page' : undefined}
            >
              {icon}
              {label}
            </button>
          )
        })}
      </div>

      {/* Bottom: profile + streak */}
      <div className="pt-4 border-t" style={{ borderColor: 'var(--c-border)' }}>
        <div className="flex items-center gap-3 px-2 mb-3">
          <div className="w-8 h-8 rounded-full flex-shrink-0 overflow-hidden" style={{ background: 'var(--c-muted)' }}>
            {profile?.photoBlobId ? (
              <AvatarImage blobId={profile.photoBlobId} />
            ) : user?.photoURL ? (
              <img src={user.photoURL} alt={user.displayName || 'Google'} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" style={{ stroke: "var(--c-muted-fg)" }} strokeWidth={2}>
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate" style={{ color: 'var(--c-fg)' }}>
              {user?.displayName || profile?.name || 'Pengguna'}
            </p>
            <p className="text-[10px] truncate" style={{ color: user ? 'var(--c-emerald)' : 'var(--c-muted-fg)' }}>
              {user ? 'Akun Google' : 'Mode Tamu'}
            </p>
          </div>
        </div>
        <div className="px-2">
          <StreakBadge streak={active} tier={tier} size="sm" />
        </div>
      </div>
    </nav>
  )
}

function AvatarImage({ blobId }: { blobId: string }) {
  const [url, setUrl] = useState<string | null>(null)

  useEffect(() => {
    db.mediaBlobs.get(blobId).then((b) => {
      if (b) setUrl(URL.createObjectURL(b.data))
    })
    return () => { if (url) URL.revokeObjectURL(url) }
  }, [blobId])

  return url ? <img src={url} alt="Profil" className="w-full h-full object-cover" /> : null
}
