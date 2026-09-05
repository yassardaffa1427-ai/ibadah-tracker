import { useEffect, useState } from 'react'
import { format, parseISO } from 'date-fns'
import { id as localeId } from 'date-fns/locale'
import { getTodosForDate, getDailyRecord } from '@/data/repositories/dailyRecordRepo'
import { getBlob } from '@/data/repositories/mediaRepo'
import { TODO_IDS, TODO_LABELS } from '@/types/models'
import type { DailyRecord, TodoItem } from '@/types/models'

interface Attachment {
  url: string
  mimeType: string
  kind: 'photo' | 'file'
}

function extFromMime(mime: string): string {
  if (mime.includes('pdf')) return 'pdf'
  if (mime.includes('png')) return 'png'
  if (mime.includes('jpeg') || mime.includes('jpg')) return 'jpg'
  if (mime.includes('word')) return 'docx'
  return 'bin'
}

export default function DayRecapDetail({ date }: { date: string }) {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [record, setRecord] = useState<DailyRecord | undefined>()
  const [photos, setPhotos] = useState<Record<string, Attachment>>({})
  const [files, setFiles] = useState<Record<string, Attachment>>({})

  useEffect(() => {
    let revoked: string[] = []

    Promise.all([getTodosForDate(date), getDailyRecord(date)]).then(
      async ([todoList, rec]) => {
        setTodos(todoList)
        setRecord(rec)

        const nextPhotos: Record<string, Attachment> = {}
        const nextFiles: Record<string, Attachment> = {}

        await Promise.all(
          todoList.map(async (t) => {
            if (t.photoBlobId) {
              const blob = await getBlob(t.photoBlobId)
              if (blob) {
                const url = URL.createObjectURL(blob.data)
                revoked.push(url)
                nextPhotos[t.todoId] = { url, mimeType: blob.mimeType, kind: 'photo' }
              }
            }
            if (t.fileBlobId) {
              const blob = await getBlob(t.fileBlobId)
              if (blob) {
                const url = URL.createObjectURL(blob.data)
                revoked.push(url)
                nextFiles[t.todoId] = { url, mimeType: blob.mimeType, kind: 'file' }
              }
            }
          }),
        )

        setPhotos(nextPhotos)
        setFiles(nextFiles)
      },
    )

    return () => {
      revoked.forEach(URL.revokeObjectURL)
      revoked = []
    }
  }, [date])

  const sorted = [...todos].sort(
    (a, b) => TODO_IDS.indexOf(a.todoId) - TODO_IDS.indexOf(b.todoId),
  )
  const doneCount = todos.filter((t) => t.isDone).length
  const rate = record?.completionRate ?? 0
  const attachmentCount = Object.keys(photos).length + Object.keys(files).length

  return (
    <div className="space-y-5">
      {/* Ringkasan */}
      <div
        className="rounded-2xl card-soft p-5"
        style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
      >
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--c-muted-fg)' }}>
              {format(parseISO(date), 'EEEE', { locale: localeId })}
            </p>
            <h2 className="font-display text-2xl" style={{ color: 'var(--c-fg)' }}>
              {format(parseISO(date), 'd MMMM yyyy', { locale: localeId })}
            </h2>
          </div>
          <div className="text-right flex-shrink-0">
            <p
              className="text-3xl font-extrabold tabular-nums leading-none"
              style={{ color: rate >= 70 ? 'var(--c-accent)' : 'var(--c-gold)' }}
            >
              {doneCount}
              <span className="text-lg" style={{ color: 'var(--c-muted-fg)' }}>/9</span>
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--c-muted-fg)' }}>
              {rate}% selesai
            </p>
          </div>
        </div>

        <div className="h-2.5 rounded-full overflow-hidden mt-4" style={{ background: 'var(--c-muted)' }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${rate}%`,
              background:
                rate >= 70
                  ? 'linear-gradient(90deg,var(--c-accent-bright),var(--c-accent))'
                  : 'linear-gradient(90deg,var(--c-h2),var(--c-h3))',
            }}
          />
        </div>

        <div className="flex flex-wrap gap-2 mt-4 text-xs">
          <span
            className="px-2.5 py-1 rounded-full font-semibold"
            style={{ background: 'rgba(88,204,2,0.12)', color: 'var(--c-accent)' }}
          >
            {doneCount} selesai
          </span>
          <span
            className="px-2.5 py-1 rounded-full font-semibold"
            style={{ background: 'var(--c-muted)', color: 'var(--c-muted-fg)' }}
          >
            {9 - doneCount} terlewat
          </span>
          {attachmentCount > 0 && (
            <span
              className="px-2.5 py-1 rounded-full font-semibold"
              style={{ background: 'rgba(232,176,42,0.16)', color: '#a2760e' }}
            >
              {attachmentCount} lampiran
            </span>
          )}
        </div>
      </div>

      {/* Daftar checklist */}
      <div className="space-y-2">
        {sorted.map((item) => {
          const photo = photos[item.todoId]
          const file = files[item.todoId]
          return (
            <div
              key={item.todoId}
              className="rounded-2xl card-soft px-4 py-3"
              style={{
                background: item.isDone ? 'rgba(88,204,2,0.07)' : 'var(--c-surface)',
                border: `1px solid ${item.isDone ? 'var(--c-h2)' : 'var(--c-border)'}`,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: item.isDone ? 'var(--c-accent)' : 'var(--c-muted)',
                  }}
                >
                  {item.isDone ? (
                    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg width={12} height={12} viewBox="0 0 24 24" fill="none" style={{ stroke: "var(--c-muted-fg)" }} strokeWidth={3} strokeLinecap="round">
                      <line x1="6" y1="6" x2="18" y2="18" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-semibold truncate"
                    style={{ color: item.isDone ? 'var(--c-fg)' : 'var(--c-muted-fg)' }}
                  >
                    {TODO_LABELS[item.todoId]}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--c-muted-fg)' }}>
                    {item.isDone
                      ? item.completedAt
                        ? `Selesai ${format(item.completedAt, 'HH:mm')}`
                        : 'Selesai'
                      : 'Tidak dikerjakan'}
                    {item.todoId === 'murojaah' && item.juzTarget ? ` · Juz ${item.juzTarget}` : ''}
                  </p>
                </div>
                {photo && (
                  <a href={photo.url} target="_blank" rel="noreferrer" className="flex-shrink-0">
                    <img
                      src={photo.url}
                      alt={`Foto ${TODO_LABELS[item.todoId]}`}
                      className="w-11 h-11 rounded-xl object-cover"
                      style={{ border: '1px solid var(--c-border)' }}
                    />
                  </a>
                )}
              </div>

              {file && (
                <a
                  href={file.url}
                  download={`kajian-${date}.${extFromMime(file.mimeType)}`}
                  className="mt-3 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold"
                  style={{
                    background: 'rgba(232,176,42,0.14)',
                    color: '#a2760e',
                    border: '1px solid rgba(232,176,42,0.35)',
                  }}
                >
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  Unduh catatan kajian ({extFromMime(file.mimeType).toUpperCase()})
                </a>
              )}
            </div>
          )
        })}

        {sorted.length === 0 && (
          <div
            className="rounded-2xl card-soft px-4 py-8 text-center text-sm"
            style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-muted-fg)' }}
          >
            Tidak ada catatan ibadah untuk tanggal ini.
          </div>
        )}
      </div>
    </div>
  )
}
