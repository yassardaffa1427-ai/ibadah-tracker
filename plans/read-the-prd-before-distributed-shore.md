# Plan: Ibadah Tracker — Full MVP Implementation

## Context

Building a local-first Islamic worship habit tracker PWA from scratch. The existing project has only the starter dot-grid background in App.tsx and no dependencies beyond React + Tailwind. All features are defined in `ibadah-tracker-prd.md` (88/100 readiness score, all FRs fully specified with acceptance criteria).

The app must be 100% client-side — no backend, no API calls, no TanStack Query. All data lives in IndexedDB via Dexie.js. Three pages: Dashboard, Checklist, Settings.

---

## Aesthetic Decisions

**Stance:** Archival — reverent numbered sections, structured composition, grounding. Suits a personal devotional tracker.

**Ground:** Deep forest green `#0d1f16` background with cream/warm-white foreground. Spiritual, focused, not sterile.

**Accent:** Warm gold `#d4a853` for streak fire icons, badges, and CTAs.

**Heatmap:** 5 levels — `#1a2e1f` (0%), `#2d5a36` (1–30%), `#3d7a4a` (31–60%), `#52a461` (61–90%), `#6dd68a` (91–100%).

**Fonts:** DM Serif Display (headings) + Outfit (body, labels) — both on Google Fonts. Installed via `@import` in `src/index.css`.

---

## Dependencies to Install

```
pnpm add dexie zustand date-fns react-hook-form zod sonner @radix-ui/react-dialog @radix-ui/react-checkbox @radix-ui/react-select @radix-ui/react-drawer @radix-ui/react-tabs @radix-ui/react-toast
```

For icons (Hugeicons Stroke Rounded):
```
pnpm add @hugeicons/react
```

For PWA:
```
pnpm add -D vite-plugin-pwa
```

For image compression:
```
pnpm add browser-image-compression
```

---

## File Structure (matches PRD Section 10.2)

```
src/
├── types/models.ts              # All TypeScript types/enums
├── data/
│   ├── db.ts                   # Dexie schema + db singleton
│   └── repositories/
│       ├── dailyRecordRepo.ts
│       ├── profileRepo.ts
│       └── mediaRepo.ts
├── lib/
│   ├── calculations.ts         # completionRate, streak logic (unit tested)
│   ├── dateUtils.ts
│   └── imageCompression.ts
├── store/uiStore.ts             # Zustand for UI state only
├── hooks/
│   ├── useDailyRecord.ts       # Dexie useLiveQuery wrapper
│   ├── useStreak.ts
│   └── useNotificationScheduler.ts
├── components/
│   ├── layout/
│   │   ├── SidebarNav.tsx      # desktop (≥1024px)
│   │   └── BottomNav.tsx       # mobile (<1024px)
│   ├── heatmap/
│   │   ├── ContributionHeatmap.tsx
│   │   └── DayDetailDrawer.tsx
│   ├── checklist/
│   │   ├── TodoItemCard.tsx
│   │   ├── JuzSelector.tsx
│   │   ├── PhotoUploadButton.tsx
│   │   └── KajianFileUpload.tsx
│   └── gamification/
│       ├── StreakBadge.tsx
│       └── BadgeTierList.tsx
├── pages/
│   ├── Dashboard/index.tsx
│   ├── Checklist/index.tsx
│   └── Settings/index.tsx
├── sw/notification-sw.ts        # Service Worker (vite-plugin-pwa injects)
├── App.tsx                      # Router + layout shell
├── index.css                    # Tailwind + Google Fonts imports + CSS vars
└── main.tsx
```

---

## Implementation Phases (following PRD Section 10.11)

### Phase 1 — Types & Data Layer

**`src/types/models.ts`**
- Enums: `TodoId` (9 values: tahajud, subuh, dhuha, zuhur, ashar, maghrib, isya, kajian, murojaah)
- Interfaces: `DailyRecord`, `TodoItem`, `Profile`, `StreakState`, `MediaBlob`, `ReminderSettings`
- All fields match PRD Section 9.3 data dictionary exactly

**`src/data/db.ts`**
- Dexie class `IbadahDB` with 4 tables: `dailyRecords`, `profiles`, `streakState`, `mediaBlobs`
- Compound index `[dailyRecordDate+todoId]` for TodoItem lookup
- Schema version 1
- Export singleton `db`

**`src/data/repositories/dailyRecordRepo.ts`**
- `getOrCreateTodayRecord()` — creates new DailyRecord with 9 default TodoItems if none exists for today
- `updateTodoStatus(date, todoId, isDone)` — enforces read-only rule (throws if date < today)
- `getDailyRecord(date)`, `getAllRecords()` — read methods
- `updateJuzTarget(date, todoId, juz)` — only for murojaah todoId

**`src/data/repositories/profileRepo.ts`**
- `getProfile()`, `saveProfile(data)` — single-record CRUD

**`src/data/repositories/mediaRepo.ts`**
- `saveBlob(type, data)` → returns generated ID
- `getBlob(id)`, `deleteBlob(id)`

**`src/lib/calculations.ts`** (unit tested)
- `calcCompletionRate(todos: TodoItem[]): number` — `(done/9)*100` rounded
- `calcStreak(records: DailyRecord[]): { active: number; longest: number }` — iterates sorted records, counts consecutive days ≥70%, stops at first day <70%

**`src/lib/dateUtils.ts`**
- `toDateKey(date: Date): string` — returns `YYYY-MM-DD` in local timezone
- `isToday(dateKey: string): boolean`
- `isPast(dateKey: string): boolean`

**Seed data** — 14 days of mock DailyRecords with varied completion rates injected in dev mode only (`if (import.meta.env.DEV)`)

---

### Phase 2 — Checklist Core

**`src/hooks/useDailyRecord.ts`**
- `useLiveQuery` from Dexie watching today's record
- Exports: `record`, `toggleTodo(todoId)`, `setJuzTarget(juz)`, `isLoading`
- `toggleTodo` calls repo, shows Sonner toast on error

**`src/pages/Checklist/index.tsx`**
- Loads today's record via `useDailyRecord`
- Renders 9 `TodoItemCard` components in a scrollable list
- Shows Daily Completion Rate progress bar at top
- If `isPast(date)`, all cards render read-only

**`src/components/checklist/TodoItemCard.tsx`**
- Radix `Checkbox` with `aria-label="Tandai {name} selesai"`
- Disabled when `isReadOnly` prop true
- Shows photo thumbnail if `photoBlobId` set
- Inline `JuzSelector` when `todoId === 'murojaah'`
- Camera icon button → `PhotoUploadButton` modal
- File icon button (only for 'kajian') → `KajianFileUpload` modal

**`src/components/checklist/JuzSelector.tsx`**
- Radix Select, options 1–30
- Only visible when parent TodoItem isDone or when toggled

---

### Phase 3 — Dashboard

**`src/pages/Dashboard/index.tsx`**
- Three sections: Rekap Harian, Contribution Heatmap, Reminder Panel
- `useStreak()` hook for active streak display

**`src/components/heatmap/ContributionHeatmap.tsx`**
- Reads all records via `useLiveQuery(() => db.dailyRecords.toArray())`
- Renders custom SVG grid: 7 rows (days of week) × N columns (weeks)
- Color function maps completionRate to 5 heatmap levels (see Aesthetic section)
- Horizontal scroll on mobile
- Each cell: `<rect>` with `onMouseEnter` tooltip showing date + %
- Empty state with CTA if no records

**`src/components/heatmap/DayDetailDrawer.tsx`**
- Radix Dialog (bottom drawer on mobile)
- Shows date heading + read-only list of 9 todos with check/cross icons
- If photoBlobId set: loads blob from IndexedDB and renders `<img>`

**Rekap Harian panel:**
- Reads today's record live
- Shows "X dari 9 selesai (Y%)" 
- Lists unchecked todo names with warning color

**Reminder Panel:**
- Checks `Notification.permission`
- If 'default': shows CTA button to request permission
- If 'denied': shows status "Notifikasi nonaktif" with instructions
- If 'granted': shows next reminder time per unchecked todo

---

### Phase 4 — Media Uploads

**`src/lib/imageCompression.ts`**
- Uses `browser-image-compression` to compress images to ≤1MB before saving
- `compressImage(file: File): Promise<Blob>`

**`src/components/checklist/PhotoUploadButton.tsx`**
- Radix Dialog trigger (camera icon button)
- `<input type="file" accept="image/*" capture="environment">` hidden input
- On select: validate size ≤5MB (pre-compression), compress, save via `mediaRepo.saveBlob`, update `photoBlobId` on TodoItem
- Thumbnail preview in dialog if blob exists
- Delete button to remove photo (calls `mediaRepo.deleteBlob`)

**`src/components/checklist/KajianFileUpload.tsx`**
- Similar pattern, `accept=".pdf,.txt"`
- Validates extension + size ≤10MB
- No compression — stores raw blob
- Shows filename link (opens Blob URL in new tab) if already uploaded

---

### Phase 5 — Gamification

**`src/hooks/useStreak.ts`**
- `useLiveQuery` watching all dailyRecords
- Calls `calcStreak()` from calculations.ts
- Writes updated StreakState back to db whenever value changes
- Returns `{ active, longest, currentBadgeTier }`

**Badge tiers** (from PRD): 3, 7, 14, 30, 60, 100 days

**`src/components/gamification/StreakBadge.tsx`**
- Fire icon with color/size based on tier
- Tier 0 (0–2 days): small gray
- Tier 1 (3–6): small amber
- Tier 2 (7–13): medium orange  
- Tier 3 (14–29): medium orange-red
- Tier 4 (30–59): large red
- Tier 5 (60–99): large deep red
- Tier 6 (100+): large gold with glow

**`src/components/gamification/BadgeTierList.tsx`**
- Shows all 6 badge tiers, unlocked ones highlighted, locked ones dimmed
- Used in Settings page

---

### Phase 6 — Profile & Settings

**`src/pages/Settings/index.tsx`**
- Three sections: Profil, Streak & Badge, Reminder Settings, Backup

**Profile form (React Hook Form + Zod):**
- Fields: photo (file), nama (required string), usia (number 1–120), gender (select: Laki-laki/Perempuan)
- Schema in `ProfileForm.schema.ts` co-located
- Photo: same upload flow as media, stored in `profiles` record

**Reminder Settings section:**
- One time input per todo item (9 inputs total, type="time")
- Saved to a `reminderSettings` record in Dexie
- "Aktifkan Notifikasi" button if not yet granted

**Streak & Badge section:**
- Shows `StreakBadge` + `BadgeTierList`
- Active streak count, Longest streak count

**Export/Import section:**
- Export: reads all Dexie tables, serializes blobs as base64, downloads JSON
- Import: file picker for `.json`, validation, modal confirmation ("Data yang ada akan ditimpa"), then writes to IndexedDB

---

### Phase 7 — Notifications

**`vite.config.ts`** — add `VitePWA` plugin with Service Worker config

**`src/sw/notification-sw.ts`**
- Listens for `schedule-reminders` message from main app
- Stores reminder schedule + checks todo status at scheduled times
- Uses `setTimeout`/`setInterval` approach within SW lifetime
- Shows `self.registration.showNotification()` if todo still undone

**`src/hooks/useNotificationScheduler.ts`**
- On mount: requests SW registration, sends current reminder schedule + today's record to SW
- Re-sends whenever todo statuses change (via useLiveQuery)
- Handles `Notification.requestPermission()` flow

**Known limitation documented:** iOS Safari Service Worker background execution is restricted — noted in Reminder Panel UI.

---

### Phase 8 — Export/Import

**`src/data/backup/exportData.ts`**
- `exportToJSON()`: queries all tables, converts Blob data to base64 strings, returns JSON string
- Triggers browser download of `ibadah-tracker-backup-YYYY-MM-DD.json`

**`src/data/backup/importData.ts`**
- `importFromJSON(jsonString)`: validates schema (must have `version`, `dailyRecords`, `profiles` keys), clears all tables, writes imported data, converts base64 back to Blobs
- On parse error: throws typed error, caller shows error toast without modifying data

---

### Phase 9 — Layout, Navigation, Polish

**`src/App.tsx`** — replaces dot-grid starter; renders:
- `SidebarNav` on desktop (≥1024px)
- `BottomNav` on mobile
- Page routing via `useState` (no react-router needed — 3 pages only)
- Global error boundary
- `<Toaster>` from Sonner

**`src/components/layout/SidebarNav.tsx`**
- Fixed left sidebar, 3 links: Dashboard, Checklist, Settings
- Hugeicons: `Home01Icon`, `CheckmarkCircle01Icon`, `Settings01Icon`
- Streak badge mini-display at bottom
- Profile photo + name if set

**`src/components/layout/BottomNav.tsx`**
- Fixed bottom bar on mobile
- Same 3 links, icon + label

**`src/index.css`**
```css
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
@import 'tailwindcss';

@theme inline {
  --color-background: #0d1f16;
  --color-foreground: #f0ebe0;
  --color-card: #142a1c;
  --color-card-foreground: #f0ebe0;
  --color-primary: #d4a853;
  --color-primary-foreground: #0d1f16;
  --color-muted: #1e3a26;
  --color-muted-foreground: #8fa896;
  --color-accent: #6dd68a;
  --color-accent-foreground: #0d1f16;
  --color-border: #2a4a34;
  --font-display: 'DM Serif Display', serif;
  --font-sans: 'Outfit', sans-serif;
}

body {
  background-color: var(--color-background);
  color: var(--color-foreground);
  font-family: var(--font-sans);
}
```

**Responsive breakpoints:** sidebar/bottom-nav switch at `lg` (1024px). Heatmap has `overflow-x-auto` on mobile.

**Onboarding:** First-launch modal (checks `profile` table empty) — collect name, request notification permission, brief explanation.

**Midnight reset:** `useEffect` in App.tsx sets a timeout to trigger record lock at midnight via date change detection using `setInterval(checkDate, 60000)`.

---

## Critical Files to Modify

1. `src/App.tsx` — full rewrite as layout shell + simple page router
2. `src/index.css` — add Google Font imports + CSS vars above Tailwind import
3. `vite.config.ts` — add VitePWA plugin
4. All new files under `src/types/`, `src/data/`, `src/lib/`, `src/hooks/`, `src/components/`, `src/pages/`

## Utilities to Reuse

- `date-fns` `format`, `parseISO`, `startOfWeek`, `eachDayOfInterval` for heatmap grid generation
- `dexie` `useLiveQuery` hook (from `dexie-react-hooks`) for reactive data

## Verification

1. `pnpm run build` must complete with no TypeScript errors
2. Dev server shows all 3 pages navigable, heatmap renders with seed data
3. Todo toggle persists after page refresh (IndexedDB check in DevTools > Application > IndexedDB)
4. Streak updates correctly when 7+ mock days have ≥70% completion
5. Photo upload compresses and appears as thumbnail
6. Export downloads a valid JSON file; import with that file restores data
7. Notification permission flow: request → granted → schedule set in SW
8. Responsive: sidebar visible at ≥1024px, bottom nav at <1024px
