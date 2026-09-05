interface JuzSelectorProps {
  value?: number
  halaman?: number
  onChange: (juz: number | undefined) => void
  onHalamanChange: (halaman: number | undefined) => void
  disabled?: boolean
}

export default function JuzSelector({ value, halaman, onChange, onHalamanChange, disabled }: JuzSelectorProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 mt-2">
      <div className="flex items-center gap-2">
        <label className="text-xs" style={{ color: 'var(--c-muted-fg)' }}>
          Target Juz:
        </label>
        <select
          value={value ?? ''}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value ? parseInt(e.target.value) : undefined)}
          className="rounded-md px-2 py-1 text-sm border outline-none focus:ring-1"
          style={{ background: 'var(--c-input)', borderColor: 'var(--c-border)', color: 'var(--c-fg)', width: 80 }}
          aria-label="Pilih target juz yang dimurojaah"
        >
          <option value="">—</option>
          {Array.from({ length: 30 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>Juz {n}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-xs" style={{ color: 'var(--c-muted-fg)' }}>
          Berapa halaman:
        </label>
        <input
          type="number"
          min={1}
          max={604}
          value={halaman ?? ''}
          disabled={disabled}
          onChange={(e) => onHalamanChange(e.target.value ? parseInt(e.target.value) : undefined)}
          placeholder="—"
          className="rounded-md px-2 py-1 text-sm border outline-none focus:ring-1"
          style={{ background: 'var(--c-input)', borderColor: 'var(--c-border)', color: 'var(--c-fg)', width: 70 }}
          aria-label="Berapa halaman yang dimurojaah"
        />
      </div>
    </div>
  )
}
