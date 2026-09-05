import { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import { saveBlob, getBlob, deleteBlob } from '@/data/repositories/mediaRepo'
import { updateFileBlobId } from '@/data/repositories/dailyRecordRepo'

interface KajianFileUploadProps {
  date: string
  fileBlobId?: string
  disabled?: boolean
}

interface PreviewState {
  url: string
  type: 'pdf' | 'txt'
  text?: string
}

export default function KajianFileUpload({ date, fileBlobId, disabled }: KajianFileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [preview, setPreview] = useState<PreviewState | null>(null)

  useEffect(() => {
    return () => {
      if (preview?.url) URL.revokeObjectURL(preview.url)
    }
  }, [preview])

  const handleFile = async (file: File) => {
    const ext = file.name.split('.').pop()?.toLowerCase()
    if (ext !== 'pdf' && ext !== 'txt') {
      toast.error('Format tidak didukung. Gunakan file .pdf atau .txt')
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      toast.error('File terlalu besar. Maksimal 10MB.')
      return
    }
    setLoading(true)
    try {
      if (fileBlobId) await deleteBlob(fileBlobId)
      const id = await saveBlob('kajian-file', file, file.type)
      await updateFileBlobId(date, id)
      toast.success('Catatan kajian disimpan')
      setOpen(false)
    } catch {
      toast.error('Gagal menyimpan file. Pastikan penyimpanan tidak penuh.')
    } finally {
      setLoading(false)
    }
  }

  const handlePreview = async () => {
    if (!fileBlobId) return
    const blob = await getBlob(fileBlobId)
    if (!blob) { toast.error('File tidak ditemukan'); return }
    const isPdf = blob.data.type === 'application/pdf' || blob.data.type === ''
    const isTxt = blob.data.type === 'text/plain'
    const url = URL.createObjectURL(blob.data)

    if (isTxt || (!isPdf && blob.data.type === '')) {
      // Try reading as text
      const text = await blob.data.text().catch(() => null)
      if (text !== null) {
        setPreview({ url, type: 'txt', text })
      } else {
        setPreview({ url, type: 'pdf' })
      }
    } else {
      setPreview({ url, type: 'pdf' })
    }
    setOpen(false)
  }

  const closePreview = () => {
    if (preview?.url) URL.revokeObjectURL(preview.url)
    setPreview(null)
  }

  const handleDelete = async () => {
    if (!fileBlobId) return
    try {
      await deleteBlob(fileBlobId)
      await updateFileBlobId(date, undefined)
      setOpen(false)
      toast.success('Catatan kajian dihapus')
    } catch {
      toast.error('Gagal menghapus file')
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        disabled={disabled}
        className="p-1.5 rounded-md transition-colors hover:bg-white/10 disabled:opacity-40"
        aria-label="Upload catatan kajian"
        title={fileBlobId ? 'Lihat/ganti catatan kajian' : 'Lampirkan catatan kajian'}
      >
        <svg
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke={fileBlobId ? 'var(--c-accent)' : 'var(--c-muted-fg)'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      </button>

      {/* Upload / manage modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(20,48,31,0.45)' }}
          onClick={() => setOpen(false)}
        >
          <div
            className="rounded-2xl card-soft p-6 max-w-sm w-full space-y-4"
            style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-display text-lg" style={{ color: 'var(--c-fg)' }}>
              Catatan Kajian
            </h3>
            {fileBlobId && (
              <div
                className="rounded-lg p-3 flex items-center gap-2"
                style={{ background: 'rgba(88,167,0,0.12)' }}
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" style={{ stroke: 'var(--c-accent)' }} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <span className="text-sm" style={{ color: 'var(--c-accent)' }}>File terlampir</span>
                <button
                  onClick={handlePreview}
                  className="ml-auto text-xs font-medium underline underline-offset-2"
                  style={{ color: 'var(--c-accent)' }}
                >
                  Preview
                </button>
              </div>
            )}
            <input
              ref={inputRef}
              type="file"
              accept=".pdf,.txt"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) handleFile(file)
              }}
            />
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => inputRef.current?.click()}
                disabled={loading}
                className="flex-1 py-2 rounded-lg text-sm font-medium btn-3d"
                style={{ background: 'var(--c-gold)', color: 'var(--c-ink)' }}
              >
                {loading ? 'Memproses...' : fileBlobId ? 'Ganti File' : 'Pilih File (PDF/TXT)'}
              </button>
              {fileBlobId && (
                <button
                  onClick={handleDelete}
                  className="py-2 px-3 rounded-lg text-sm font-medium"
                  style={{ background: 'rgba(224,74,63,0.12)', color: 'var(--c-danger)' }}
                >
                  Hapus
                </button>
              )}
              <button
                onClick={() => setOpen(false)}
                className="py-2 px-3 rounded-lg text-sm"
                style={{ color: 'var(--c-muted-fg)' }}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preview modal */}
      {preview && (
        <div
          className="fixed inset-0 z-[60] flex flex-col"
          style={{ background: 'rgba(20,48,31,0.6)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
        >
          {/* Header bar */}
          <div
            className="flex items-center justify-between px-4 py-3 shrink-0"
            style={{ background: 'var(--c-surface)', borderBottom: '1px solid var(--c-border)' }}
          >
            <div className="flex items-center gap-2">
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" style={{ stroke: 'var(--c-accent)' }} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              <span className="font-display text-sm font-bold" style={{ color: 'var(--c-fg)' }}>
                Preview Catatan Kajian
              </span>
              <span
                className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded"
                style={{ background: 'var(--c-muted)', color: 'var(--c-muted-fg)' }}
              >
                {preview.type}
              </span>
            </div>
            <button
              onClick={closePreview}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
              style={{ color: 'var(--c-muted-fg)' }}
              aria-label="Tutup preview"
            >
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Content area */}
          <div className="flex-1 overflow-hidden relative">
            {preview.type === 'pdf' ? (
              <iframe
                src={preview.url}
                title="Preview PDF"
                className="w-full h-full border-none"
                style={{ background: '#525659' }}
              />
            ) : (
              <div className="h-full overflow-y-auto p-4 md:p-8" style={{ background: 'var(--c-bg)' }}>
                <div
                  className="max-w-2xl mx-auto rounded-xl p-5 md:p-8"
                  style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', boxShadow: 'var(--shadow-card)' }}
                >
                  <pre
                    className="text-sm leading-relaxed whitespace-pre-wrap break-words font-sans"
                    style={{ color: 'var(--c-fg)', margin: 0 }}
                  >
                    {preview.text}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
