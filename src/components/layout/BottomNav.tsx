import { useUIStore, type Page } from '@/store/uiStore'

interface NavItem {
  page: Page
  label: string
  icon: React.ReactNode
}

function HomeIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function ChecklistIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  )
}

function SettingsIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  )
}

function HistoryIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
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

export default function BottomNav() {
  const { activePage, setActivePage } = useUIStore()

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-30 flex"
      style={{
        background: 'var(--c-nav)',
        borderTop: '1px solid var(--c-border)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
      aria-label="Navigasi bawah"
    >
      {NAV_ITEMS.map(({ page, label, icon }) => {
        const isActive = activePage === page
        return (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            className="flex-1 flex flex-col items-center gap-1 py-3 transition-colors"
            style={{ color: isActive ? 'var(--c-accent)' : 'var(--c-muted-fg)', minHeight: 56 }}
            aria-label={label}
            aria-current={isActive ? 'page' : undefined}
          >
            {icon}
            <span className="text-[10px] font-medium">{label}</span>
          </button>
        )
      })}
    </nav>
  )
}
