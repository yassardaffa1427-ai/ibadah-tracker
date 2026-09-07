import { useEffect, useState } from 'react'
import { format, parseISO } from 'date-fns'
import { id as localeId } from 'date-fns/locale'
import { getTodosForDate, getSunnahForDate, getDailyRecord } from '@/data/repositories/dailyRecordRepo'
import { getBlob } from '@/data/repositories/mediaRepo'
import { TODO_IDS, TODO_LABELS, SUNNAH_IDS, SUNNAH_LABELS, PUASA_TYPE_OPTIONS } from '@/types/models'
import type { DailyRecord, TodoItem, SunnahItem } from '@/types/models'

type Tab = 'kewajiban' | 'sunnah'

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

function ItemRow({
  isDone,
  label,
  statusText,
  accentColor,
  photo,
  file,
  downloadName,
}: {
  isDone: boolean
  label: string
  statusText: string
  accentColor: string
  photo?: Attachment
  file?: Attachment
  downloadName?: string
}) {
  return (
    <div
      className="rounded-2xl card-soft px-4 py-3"
      style={{
        background: isDone ? 'rgba(88,204,2,0.07)' : 'var(--c-surface)',
        border: `1px solid ${isDone ? accentColor : 'var(--c-border)'}`,
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: isDone ? accentColor : 'var(--c-muted)' }}
        >
          {isDone ? (
            <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" style={{ stroke: 'var(--c-muted-fg)' }} strokeWidth={3} strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold truncate" style={{ color: isDone ? 'var(--c-fg)' : 'var(--c-muted-fg)' }}>
            {label}
          </p>
          <p className="text-xs" style={{ color: 'var(--c-muted-fg)' }}>
            {statusText}
          </p>
        </div>
        {photo && (
          <a href={photo.url} target="_blank" rel="noreferrer" className="flex-shrink-0">
            <img
              src={photo.url}
              alt={`Foto ${label}`}
              className="w-11 h-11 rounded-xl object-cover"
              style={{ border: '1px solid var(--c-border)' }}
            />
          </a>
        )}
      </div>

      {file && (
        <a
          href={file.url}
          download={downloadName}
          className="mt-3 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold"
          style={{ background: 'rgba(232,176,42,0.14)', color: '#a2760e', border: '1px solid rgba(232,176,42,0.35)' }}
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
}

export default function DayRecapDetail({ date }: { date: string }) {
  const [tab, setTab] = useState<Tab>('kewajiban')
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [sunnah, setSunnah] = useState<SunnahItem[]>([])
  const [record, setRecord] = useState<DailyRecord | undefined>()
  const [photos, setPhotos] = useState<Record<string, Attachment>>({})
  const [files, setFiles] = useState<Record<string, Attachment>>({})

  useEffect(() => {
    let revoked: string[] = []

    Promise.all([getTodosForDate(date), getSunnahForDate(date), getDailyRecord(date)]).then(
      async ([todoList, sunnahList, rec]) => {
        setTodos(todoList)
        setSunnah(sunnahList)
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

  const isWajib = tab === 'kewajiban'
  const total = isWajib ? TODO_IDS.length : SUNNAH_IDS.length
  const doneCount = isWajib ? todos.filter((t) => t.isDone).length : sunnah.filter((s) => s.isDone).length
  const rate = (isWajib ? record?.completionRate : record?.sunnahCompletionRate) ?? 0
  const accentColor = isWajib ? 'var(--c-accent)' : '#3888ff'
  const accentSoft = isWajib ? 'rgba(88,204,2,0.12)' : 'rgba(56,136,255,0.12)'
  const attachmentCount = Object.keys(photos).length + Object.keys(files).length

  const sortedTodos = [...todos].sort((a, b) => TODO_IDS.indexOf(a.todoId) - TODO_IDS.indexOf(b.todoId))
  const sortedSunnah = [...sunnah].sort((a, b) => SUNNAH_IDS.indexOf(a.sunnahId) - SUNNAH_IDS.indexOf(b.sunnahId))

  return (
    <div className="space-y-5">
      {/* Tab switcher */}
      <div
        className="inline-flex items-center gap-1 p-1 rounded-full w-full"
        style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
      >
        {(
          [
            ['kewajiban', 'Daily Kewajiban'],
            ['sunnah', 'Daily Sunnah'],
          ] as [Tab, string][]
        ).map(([key, label]) => {
          const active = tab === key
          const activeColor = key === 'kewajiban' ? 'var(--c-accent)' : '#3888ff'
          return (
            <button
              key={key}
              onClick={() => setTab(key)}
              className="flex-1 text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              style={{
                background: active ? activeColor : 'transparent',
                color: active ? '#fff' : 'var(--c-muted-fg)',
              }}
            >
              {label}
            </button>
          )
        })}
      </div>

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
            <p className="text-3xl font-extrabold tabular-nums leading-none" style={{ color: rate >= 70 ? accentColor : 'var(--c-gold)' }}>
              {doneCount}
              <span className="text-lg" style={{ color: 'var(--c-muted-fg)' }}>/{total}</span>
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--c-muted-fg)' }}>
              {rate}% selesai
            </p>
          </div>
        </div>

        <div className="h-2.5 rounded-full overflow-hidden mt-4" style={{ background: 'var(--c-muted)' }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${rate}%`, background: accentColor }}
          />
        </div>

        <div className="flex flex-wrap gap-2 mt-4 text-xs">
          <span className="px-2.5 py-1 rounded-full font-semibold" style={{ background: accentSoft, color: accentColor }}>
            {doneCount} selesai
          </span>
          <span className="px-2.5 py-1 rounded-full font-semibold" style={{ background: 'var(--c-muted)', color: 'var(--c-muted-fg)' }}>
            {total - doneCount} terlewat
          </span>
          {isWajib && attachmentCount > 0 && (
            <span className="px-2.5 py-1 rounded-full font-semibold" style={{ background: 'rgba(232,176,42,0.16)', color: '#a2760e' }}>
              {attachmentCount} lampiran
            </span>
          )}
        </div>
      </div>

      {/* Daftar checklist */}
      <div className="space-y-2">
        {isWajib
          ? sortedTodos.map((item) => (
              <ItemRow
                key={item.todoId}
                isDone={item.isDone}
                label={TODO_LABELS[item.todoId]}
                statusText={
                  (item.isDone
                    ? item.completedAt
                      ? `Selesai ${format(item.completedAt, 'HH:mm')}`
                      : 'Selesai'
                    : 'Tidak dikerjakan') + (item.todoId === 'murojaah' && item.juzTarget ? ` · Juz ${item.juzTarget}` : '')
                }
                accentColor={accentColor}
                photo={photos[item.todoId]}
                file={files[item.todoId]}
                downloadName={`kajian-${date}.${files[item.todoId] ? extFromMime(files[item.todoId].mimeType) : 'bin'}`}
              />
            ))
          : sortedSunnah.map((item) => (
              <ItemRow
                key={item.sunnahId}
                isDone={item.isDone}
                label={SUNNAH_LABELS[item.sunnahId]}
                statusText={
                  item.isDone
                    ? (item.completedAt ? `Selesai ${format(item.completedAt, 'HH:mm')}` : 'Selesai') +
                      (item.sunnahId === 'puasa-sunnah' && item.puasaType
                        ? ` · ${PUASA_TYPE_OPTIONS.find((o) => o.value === item.puasaType)?.label ?? ''}`
                        : '')
                    : 'Tidak dikerjakan'
                }
                accentColor={accentColor}
              />
            ))}

        {(isWajib ? sortedTodos : sortedSunnah).length === 0 && (
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
