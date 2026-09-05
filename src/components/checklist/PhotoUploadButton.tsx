import { useRef, useState, useEffect } from 'react'
import { toast } from 'sonner'
import { saveBlob, getBlob, deleteBlob } from '@/data/repositories/mediaRepo'
import { updatePhotoBlobId } from '@/data/repositories/dailyRecordRepo'
import { compressImage } from '@/lib/imageCompression'
import type { TodoId } from '@/types/models'

interface PhotoUploadButtonProps {
  date: string
  todoId: TodoId
  photoBlobId?: string
  disabled?: boolean
}

export default function PhotoUploadButton({
  date,
  todoId,
  photoBlobId,
  disabled,
}: PhotoUploadButtonProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!photoBlobId) {
      setPreviewUrl(null)
      return
    }
    let url: string
    getBlob(photoBlobId).then((b) => {
      if (b) {
        url = URL.createObjectURL(b.data)
        setPreviewUrl(url)
      }
    })
    return () => {
      if (url) URL.revokeObjectURL(url)
    }
  }, [photoBlobId])

  const handleFile = async (file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      toast.info('Foto terlalu besar, sedang dikompresi...')
    }
    setLoading(true)
    try {
      const blob = await compressImage(file)
      if (photoBlobId) await deleteBlob(photoBlobId)
      const id = await saveBlob('photo', blob, file.type)
      await updatePhotoBlobId(date, todoId, id)
      toast.success('Foto berhasil disimpan')
      setOpen(false)
    } catch {
      toast.error('Gagal menyimpan foto. Pastikan penyimpanan tidak penuh.')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!photoBlobId) return
    try {
      await deleteBlob(photoBlobId)
      await updatePhotoBlobId(date, todoId, undefined)
      setPreviewUrl(null)
      setOpen(false)
      toast.success('Foto dihapus')
    } catch {
      toast.error('Gagal menghapus foto')
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        disabled={disabled}
        className="p-1.5 rounded-md transition-colors hover:bg-white/10 disabled:opacity-40"
        aria-label="Upload foto bukti"
        title={photoBlobId ? 'Lihat/ganti foto bukti' : 'Tambah foto bukti'}
      >
        {/* Camera icon */}
        <svg
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke={photoBlobId ? 'var(--c-accent)' : 'var(--c-muted-fg)'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      </button>

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
              Foto Bukti
            </h3>
            {previewUrl && (
              <img
                src={previewUrl}
                alt="Foto bukti ibadah"
                className="w-full rounded-lg object-cover"
                style={{ maxHeight: 240 }}
              />
            )}
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              capture="environment"
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
                className="flex-1 py-2 rounded-lg text-sm font-medium transition-colors btn-3d"
                style={{ background: "var(--c-gold)", color: "var(--c-ink)" }}
              >
                {loading ? 'Memproses...' : photoBlobId ? 'Ganti Foto' : 'Pilih Foto'}
              </button>
              {photoBlobId && (
                <button
                  onClick={handleDelete}
                  className="py-2 px-3 rounded-lg text-sm font-medium"
                  style={{ background: 'rgba(239,68,68,0.15)', color: '#ef4444' }}
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
    </>
  )
}
