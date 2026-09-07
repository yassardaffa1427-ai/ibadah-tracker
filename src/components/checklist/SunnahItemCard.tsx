import { useState } from 'react'
import type { SunnahItem, SunnahId } from '@/types/models'
import { SUNNAH_LABELS, PUASA_TYPE_OPTIONS } from '@/types/models'

interface SunnahItemCardProps {
  item: SunnahItem
  isReadOnly: boolean
  onToggle: (sunnahId: SunnahId, current: boolean) => void
  onPuasaTypeChange: (puasaType: string | undefined) => void
}

export default function SunnahItemCard({
  item,
  isReadOnly,
  onToggle,
  onPuasaTypeChange,
}: SunnahItemCardProps) {
  const [pressing, setPressing] = useState(false)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && !isReadOnly) {
      e.preventDefault()
      onToggle(item.sunnahId, item.isDone)
    }
  }

  return (
    <div
      className="rounded-2xl card-soft px-4 py-3.5 transition-all"
      style={{
        background: item.isDone ? 'rgba(88,204,2,0.09)' : 'var(--c-surface)',
        border: `1px solid ${item.isDone ? 'var(--c-h2)' : 'var(--c-border)'}`,
        opacity: isReadOnly && !item.isDone ? 0.7 : 1,
      }}
    >
      <div className="flex items-center gap-3">
        {/* Custom checkbox */}
        <button
          role="checkbox"
          aria-checked={item.isDone}
          aria-label={`Tandai ${SUNNAH_LABELS[item.sunnahId]} ${item.isDone ? 'belum' : ''} selesai`}
          onClick={() => !isReadOnly && onToggle(item.sunnahId, item.isDone)}
          onKeyDown={handleKeyDown}
          disabled={isReadOnly}
          onPointerDown={() => setPressing(true)}
          onPointerUp={() => setPressing(false)}
          onPointerLeave={() => setPressing(false)}
          className="flex-shrink-0 w-[22px] h-[22px] rounded-md border-2 flex items-center justify-center transition-all disabled:cursor-not-allowed"
          style={{
            borderColor: item.isDone ? 'var(--c-accent)' : 'var(--c-border)',
            background: item.isDone ? 'var(--c-accent)' : 'transparent',
            transform: pressing ? 'scale(0.9)' : 'scale(1)',
          }}
        >
          {item.isDone && (
            <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </button>

        {/* Label */}
        <div className="flex-1 min-w-0">
          <span
            className="font-medium text-sm"
            style={{ color: item.isDone ? 'var(--c-accent)' : 'var(--c-fg)' }}
          >
            {SUNNAH_LABELS[item.sunnahId]}
          </span>
        </div>
      </div>

      {/* Puasa type selector */}
      {item.sunnahId === 'puasa-sunnah' && item.isDone && (
        <div className="flex items-center gap-2 mt-2">
          <label className="text-xs" style={{ color: 'var(--c-muted-fg)' }}>Jenis puasa:</label>
          <select
            value={item.puasaType ?? ''}
            disabled={isReadOnly}
            onChange={(e) => onPuasaTypeChange(e.target.value || undefined)}
            className="rounded-md px-2 py-1 text-sm border outline-none focus:ring-1 flex-1"
            style={{ background: 'var(--c-input)', borderColor: 'var(--c-border)', color: 'var(--c-fg)' }}
            aria-label="Pilih jenis puasa sunnah"
          >
            <option value="">— Pilih —</option>
            {PUASA_TYPE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  )
}
