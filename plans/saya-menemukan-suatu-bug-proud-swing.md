# Plan: Fix Blank Screen on iPhone (iOS Safari)

## Context

Beberapa API yang digunakan app ini tidak tersedia atau berperilaku berbeda di iOS Safari, terutama saat dibuka di tab browser biasa (bukan Home Screen PWA). Kombinasi dari crash `Notification` API dan Dexie yang hang menyebabkan seluruh layar kosong/putih.

---

## Root Causes (Prioritas Tertinggi Dulu)

### 1. `Notification` API crash — PENYEBAB UTAMA BLANK SCREEN
**File:** `src/hooks/useNotificationScheduler.ts` baris ~10, 31, 50

`Notification` adalah `undefined` di iOS Safari (tab biasa, bukan PWA). Baris seperti:
```ts
if (Notification.permission !== 'granted') return
```
langsung throw `TypeError: Cannot read properties of undefined` dan crash hook `useNotificationScheduler`, yang dipanggil di `AppShell` tanpa error boundary → **white screen**.

**Fix:** Tambahkan guard `typeof Notification === 'undefined'` di setiap akses `Notification` dalam file tersebut.

---

### 2. App render `null` selamanya jika Dexie gagal
**File:** `src/App.tsx` baris 49–54

```tsx
getProfile().then((p) => {
  setShowOnboarding(!p)
})
// tidak ada .catch()
```

Jika `getProfile()` throw (misal Safari private mode), `showOnboarding` tetap `null` → `return null` → **blank screen permanent**.

**Fix:** Tambahkan `.catch(() => setShowOnboarding(true))` agar app tetap render (ke onboarding) meski Dexie gagal.

---

### 3. Tidak ada Error Boundary
**File:** `src/main.tsx`

Jika ada crash di React tree, seluruh app unmount tanpa fallback. Tambahkan `ErrorBoundary` minimal di `main.tsx` untuk menampilkan pesan error daripada layar putih.

---

### 4. `Notification.requestPermission()` tanpa guard di Dashboard
**File:** `src/pages/Dashboard/index.tsx` baris ~19 (`handleRequest`)

```ts
const result = await Notification.requestPermission()
```
Crash jika `Notification` undefined. Guard dengan `typeof Notification !== 'undefined'`.

---

### 5. `localStorage` throw di Safari Private Mode
**File:** `src/components/checklist/SunnahTodos.tsx` baris ~29, 37

`localStorage.setItem` throw `SecurityError` di Safari private. Wrap dengan try/catch.

---

### 6. `viewport-fit=cover` hilang → home indicator menutupi bottom nav
**File:** `index.html` baris 6

Ubah:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
menjadi:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
```

---

### 7. `-webkit-backdrop-filter` hilang
**File:** `src/components/checklist/KajianFileUpload.tsx` baris ~199

Inline style `backdropFilter` tidak auto-prefix di Safari. Tambahkan `WebkitBackdropFilter` juga.

---

## Files to Modify

| File | Perubahan |
|---|---|
| `src/hooks/useNotificationScheduler.ts` | Guard semua akses `Notification` dengan `typeof` check |
| `src/App.tsx` | Tambah `.catch()` pada `getProfile()` |
| `src/main.tsx` | Bungkus `<App />` dengan `ErrorBoundary` class component |
| `src/pages/Dashboard/index.tsx` | Guard `handleRequest` dengan `typeof Notification` |
| `src/components/checklist/SunnahTodos.tsx` | Wrap localStorage dengan try/catch |
| `index.html` | Tambah `viewport-fit=cover` di meta viewport |
| `src/components/checklist/KajianFileUpload.tsx` | Tambah `WebkitBackdropFilter` pada inline style |

## Verification

1. Jalankan `tsc --noEmit` → harus clean
2. Buka di Safari iOS (atau Chrome DevTools → iPhone emulation)
3. Pastikan app render tanpa blank screen
4. Coba di Safari private mode → app tetap render (onboarding muncul)
5. Cek bottom nav tidak tertutupi home indicator
