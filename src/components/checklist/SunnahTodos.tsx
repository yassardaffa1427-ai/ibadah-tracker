import { useEffect, useState } from 'react'
import { toDateKey } from '@/lib/dateUtils'

const PUASA_OPTIONS = [
  { value: 'senin', label: 'Senin' },
  { value: 'kamis', label: 'Kamis' },
  { value: 'senin-kamis', label: 'Senin & Kamis' },
  { value: 'daud', label: 'Puasa Daud' },
  { value: 'ayyamul-bidh', label: "Ayyamul Bidh (13-15)" },
  { value: 'asyura', label: 'Asyura (10 Muharram)' },
  { value: 'arafah', label: 'Arafah (9 Dzulhijjah)' },
  { value: 'syawal', label: 'Syawal' },
  { value: 'lainnya', label: 'Lainnya' },
]

interface SunnahState {
  puasaDone: boolean
  puasaType: string
}

const DEFAULT_STATE: SunnahState = { puasaDone: false, puasaType: '' }

function storageKey(date: string) {
  return `sunnah-${date}`
}

function loadState(date: string): SunnahState {
  try {
    const raw = localStorage.getItem(storageKey(date))
    return raw ? { ...DEFAULT_STATE, ...JSON.parse(raw) } : { ...DEFAULT_STATE }
  } catch {
    return { ...DEFAULT_STATE }
  }
}

function saveState(date: string, state: SunnahState) {
  try {
    localStorage.setItem(storageKey(date), JSON.stringify(state))
  } catch {
    // Safari private mode blocks localStorage writes — fail silently
  }
}

export default function SunnahTodos({ disabled }: { disabled?: boolean }) {
  const today = toDateKey()
  const [state, setState] = useState<SunnahState>(() => loadState(today))
  const [pressing, setPressing] = useState(false)

  useEffect(() => {
    setState(loadState(today))
  }, [today])

  function update(patch: Partial<SunnahState>) {
    const next = { ...state, ...patch }
    setState(next)
    saveState(today, next)
  }

  return (
    <div
      className="rounded-2xl card-soft px-4 py-3.5"
      style={{
        background: state.puasaDone ? 'rgba(88,204,2,0.09)' : 'var(--c-surface)',
        border: `1px solid ${state.puasaDone ? 'var(--c-h2)' : 'var(--c-border)'}`,
      }}
    >
      <div className="flex items-center gap-3">
        <button
          role="checkbox"
          aria-checked={state.puasaDone}
          aria-label={`Tandai Puasa Sunnah ${state.puasaDone ? 'belum' : ''} selesai`}
          onClick={() => update({ puasaDone: !state.puasaDone })}
          disabled={disabled}
          onPointerDown={() => setPressing(true)}
          onPointerUp={() => setPressing(false)}
          onPointerLeave={() => setPressing(false)}
          className="flex-shrink-0 w-[22px] h-[22px] rounded-md border-2 flex items-center justify-center transition-all disabled:cursor-not-allowed"
          style={{
            borderColor: state.puasaDone ? 'var(--c-accent)' : 'var(--c-border)',
            background: state.puasaDone ? 'var(--c-accent)' : 'transparent',
            transform: pressing ? 'scale(0.9)' : 'scale(1)',
          }}
        >
          {state.puasaDone && (
            <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </button>

        <span className="flex-1 font-medium text-sm" style={{ color: state.puasaDone ? 'var(--c-accent)' : 'var(--c-fg)' }}>
          Puasa Sunnah
        </span>

        <span
          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
          style={{ background: 'rgba(232,176,42,0.15)', color: 'var(--c-gold)' }}
        >
          Sunnah
        </span>
      </div>

      {state.puasaDone && (
        <div className="flex items-center gap-2 mt-2">
          <label className="text-xs" style={{ color: 'var(--c-muted-fg)' }}>Jenis puasa:</label>
          <select
            value={state.puasaType}
            disabled={disabled}
            onChange={(e) => update({ puasaType: e.target.value })}
            className="rounded-md px-2 py-1 text-sm border outline-none focus:ring-1 flex-1"
            style={{ background: 'var(--c-input)', borderColor: 'var(--c-border)', color: 'var(--c-fg)' }}
            aria-label="Pilih jenis puasa sunnah"
          >
            <option value="">— Pilih —</option>
            {PUASA_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  )
}
