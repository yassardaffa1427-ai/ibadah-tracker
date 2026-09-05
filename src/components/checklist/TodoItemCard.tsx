import { useState } from 'react'
import type { TodoItem, TodoId } from '@/types/models'
import { TODO_LABELS, SHOLAT_5_WAKTU } from '@/types/models'
import JuzSelector from './JuzSelector'
import PhotoUploadButton from './PhotoUploadButton'
import KajianFileUpload from './KajianFileUpload'

interface TodoItemCardProps {
  item: TodoItem
  isReadOnly: boolean
  onToggle: (todoId: TodoId, current: boolean) => void
  onJuzChange: (juz: number | undefined) => void
  onHalamanChange: (halaman: number | undefined) => void
}

export default function TodoItemCard({
  item,
  isReadOnly,
  onToggle,
  onJuzChange,
  onHalamanChange,
}: TodoItemCardProps) {
  const [pressing, setPressing] = useState(false)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && !isReadOnly) {
      e.preventDefault()
      onToggle(item.todoId, item.isDone)
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
          aria-label={`Tandai ${TODO_LABELS[item.todoId]} ${item.isDone ? 'belum' : ''} selesai`}
          onClick={() => !isReadOnly && onToggle(item.todoId, item.isDone)}
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
            {TODO_LABELS[item.todoId]}
          </span>
          {SHOLAT_5_WAKTU.includes(item.todoId) && (
            <span
              className="ml-2 text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
              style={{ background: 'rgba(88,167,0,0.12)', color: 'var(--c-accent)' }}
            >
              wajib di masjid
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1">
          <PhotoUploadButton
            date={item.dailyRecordDate}
            todoId={item.todoId}
            photoBlobId={item.photoBlobId}
            disabled={isReadOnly}
          />
          {item.todoId === 'kajian' && (
            <KajianFileUpload
              date={item.dailyRecordDate}
              fileBlobId={item.fileBlobId}
              disabled={isReadOnly}
            />
          )}
        </div>
      </div>

      {/* Juz + halaman selector for murojaah */}
      {item.todoId === 'murojaah' && item.isDone && (
        <JuzSelector
          value={item.juzTarget}
          halaman={item.halamanTarget}
          onChange={onJuzChange}
          onHalamanChange={onHalamanChange}
          disabled={isReadOnly}
        />
      )}
    </div>
  )
}
