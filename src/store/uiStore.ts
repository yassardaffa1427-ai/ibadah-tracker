import { create } from 'zustand'

export type Page = 'dashboard' | 'checklist' | 'history' | 'settings'

interface UIStore {
  activePage: Page
  setActivePage: (page: Page) => void
  drawerDate: string | null
  setDrawerDate: (date: string | null) => void
  historyDate: string | null
  setHistoryDate: (date: string | null) => void
  openHistoryDetail: (date: string) => void
  onboardingOpen: boolean
  setOnboardingOpen: (open: boolean) => void
}

export const useUIStore = create<UIStore>((set) => ({
  activePage: 'dashboard',
  setActivePage: (page) => set({ activePage: page }),
  drawerDate: null,
  setDrawerDate: (date) => set({ drawerDate: date }),
  historyDate: null,
  setHistoryDate: (date) => set({ historyDate: date }),
  openHistoryDetail: (date) =>
    set({ activePage: 'history', historyDate: date, drawerDate: null }),
  onboardingOpen: false,
  setOnboardingOpen: (open) => set({ onboardingOpen: open }),
}))
