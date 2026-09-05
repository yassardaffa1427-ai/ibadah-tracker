import { useEffect, useState } from 'react'
import { format, parseISO } from 'date-fns'
import { id as localeId } from 'date-fns/locale'
import { motion, AnimatePresence } from 'framer-motion'
import { db } from '@/data/db'
import { TODO_LABELS } from '@/types/models'
import type { TodoId } from '@/types/models'
import LogoIcon from '@/components/LogoIcon'
import imgBanner from '@/imports/CekUp/1bbb101f773530ebcd1dbd3a585aa20886c29ed5.png'

interface DayData {
  done: number
  total: number
  rate: number
  undoneIds: TodoId[]
}

function getMotivation(rate: number): { emoji: string; title: string; sub: string } {
  if (rate === 100) return { emoji: '🌟', title: 'Sempurna!', sub: 'Alhamdulillah, semua ibadah selesai hari ini!' }
  if (rate >= 70) return { emoji: '😊', title: 'Hampir Sempurna', sub: 'Sedikit lagi! Besok harus lebih semangat lagi! 🔥' }
  if (rate >= 40) return { emoji: '💪', title: 'Lumayan', sub: 'Tetap semangat, kamu pasti bisa lebih baik lagi!' }
  return { emoji: '🤲', title: 'Ayo Bangkit!', sub: 'Jangan menyerah, setiap ibadah bernilai di sisi Allah.' }
}

export default function CekUpModal({ date, onClose }: { date: string; onClose: () => void }) {
  const [data, setData] = useState<DayData | null>(null)
  const [isFlipped, setIsFlipped] = useState(false)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    async function load() {
      const [record, todos] = await Promise.all([
        db.dailyRecords.get(date),
        db.todoItems.where('dailyRecordDate').equals(date).toArray(),
      ])
      const done = todos.filter((t) => t.isDone).length
      const total = todos.length || 11
      const rate = record?.completionRate ?? Math.round((done / total) * 100)
      const undoneIds = todos.filter((t) => !t.isDone).map((t) => t.todoId as TodoId)
      setData({ done, total, rate, undoneIds })
    }
    load()
  }, [date])

  const mot = data ? getMotivation(data.rate) : null
  const barWidth = data ? Math.round((data.done / data.total) * 100) : 0

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: 'rgba(20,48,31,0.55)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-sm"
        style={{ perspective: 1200 }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative bg-white rounded-t-[20px] sm:rounded-[20px] shadow-2xl overflow-hidden"
        >
          {/* DEPAN (FRONT CARD) */}
          <div
            className="w-full"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            {/* Banner Header */}
            <div className="relative h-[150px] w-full overflow-hidden bg-gradient-to-br from-[#1b3a27] via-[#0f281a] to-[#0a1c12]">
              {!imgError ? (
                <img
                  alt="Banner Header"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-90"
                  src={imgBanner}
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-[#17261f] to-[#1f3b28] p-4 text-center">
                  <span className="font-display text-lg font-bold" style={{ color: 'var(--c-gold)' }}>
                    Ibadah Tracker
                  </span>
                </div>
              )}

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                style={{ background: 'rgba(0,0,0,0.4)', color: '#fff' }}
                aria-label="Tutup"
              >
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Date Badge */}
              <div
                className="absolute bottom-3 left-4 px-3 py-1 rounded-full text-xs font-semibold shadow-md"
                style={{ background: 'rgba(255,255,255,0.92)', color: '#1f3b28' }}
              >
                {format(parseISO(date), 'EEEE, d MMMM yyyy', { locale: localeId })}
              </div>

              {/* Flip Hint Button Top Right */}
              <button
                onClick={() => setIsFlipped(true)}
                className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1 transition-all hover:bg-white"
                style={{ background: 'rgba(255,255,255,0.85)', color: '#1f3b28' }}
                title="Putar kartu ke belakang"
              >
                <span>🔄</span> Putar
              </button>
            </div>

            {/* Motivational Header */}
            <div className="flex items-center gap-4 px-4 py-3">
              <div
                className="rounded-[12px] flex items-center justify-center shrink-0 shadow-sm"
                style={{ background: '#edf8f3', width: 44, height: 44 }}
              >
                <span style={{ fontSize: 22, lineHeight: 1 }}>{mot?.emoji ?? '😇'}</span>
              </div>
              <div className="flex flex-col">
                <p
                  className="font-extrabold text-[16px] leading-tight"
                  style={{ fontFamily: '"DM Sans", sans-serif', fontVariationSettings: '"opsz" 14', color: '#1f3b28' }}
                >
                  {mot?.title ?? '…'}
                </p>
                <p
                  className="font-medium text-[12px] leading-tight mt-0.5"
                  style={{ fontFamily: '"DM Sans", sans-serif', fontVariationSettings: '"opsz" 14', color: '#65726d' }}
                >
                  {mot?.sub ?? ''}
                </p>
              </div>
            </div>

            {/* Progress Row */}
            <div className="px-4 pb-2">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-medium text-[14px]" style={{ fontFamily: 'Outfit, sans-serif', color: '#61967a' }}>
                  {data ? `${data.done} dari ${data.total} selesai` : '…'}
                </span>
                <span
                  className="font-extrabold text-[20px] leading-none"
                  style={{ fontFamily: '"DM Sans", sans-serif', fontVariationSettings: '"opsz" 14', color: '#31b98b' }}
                >
                  {data ? `${data.rate}%` : '…'}
                </span>
              </div>
              {/* Progress bar */}
              <div
                className="rounded-full overflow-hidden"
                style={{ background: '#e9f3e3', height: 7 }}
              >
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${barWidth}%`,
                    background: 'linear-gradient(90deg, #016742, #2db486)',
                  }}
                />
              </div>
            </div>

            {/* Unfinished Tasks */}
            {data && data.undoneIds.length > 0 && (
              <div className="px-4 pb-3 pt-2">
                <p className="font-medium text-[12px] mb-2" style={{ fontFamily: 'Outfit, sans-serif', color: '#61967a' }}>
                  Task Belum dikerjakan:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {data.undoneIds.map((id) => (
                    <span
                      key={id}
                      className="text-[12px] font-medium px-[9px] py-[3px] rounded-full"
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        background: 'rgba(239,68,68,0.1)',
                        color: '#e04a3f',
                        border: '1.174px solid rgba(239,68,68,0.2)',
                      }}
                    >
                      {TODO_LABELS[id]}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {data && data.rate === 100 && (
              <div className="px-4 pb-3 pt-1">
                <p className="text-sm font-semibold text-center" style={{ color: '#31b98b' }}>
                  Mashaa Allah! Semua ibadah selesai 🌟
                </p>
              </div>
            )}

            {/* Bottom Flip Button Bar */}
            <div className="p-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] text-gray-500 font-medium">Klik untuk lihat info belakang</span>
              <button
                onClick={() => setIsFlipped(true)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all hover:bg-emerald-600 active:scale-95"
                style={{ background: '#31b98b', color: '#fff' }}
              >
                <span>🔄</span> Putar Kartu
              </button>
            </div>
          </div>

          {/* BELAKANG (BACK CARD) */}
          <div
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-between p-6 rounded-t-[20px] sm:rounded-[20px]"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              background: 'linear-gradient(135deg, #17261f 0%, #0f1914 100%)',
              border: '1px solid rgba(229, 193, 88, 0.35)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
            }}
          >
            {/* Close Button Top Right */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}
              aria-label="Tutup"
            >
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Back Side Content */}
            <div className="w-full flex-1 flex flex-col items-center justify-center text-center space-y-4 py-4">
              <div
                className="rounded-2xl p-2 shadow-xl"
                style={{
                  boxShadow: '0 8px 32px rgba(49,185,139,0.3)',
                  border: '1px solid rgba(229, 193, 88, 0.4)',
                }}
              >
                <LogoIcon size={68} />
              </div>

              <div className="space-y-1">
                <h2 className="font-display text-2xl font-bold tracking-wide" style={{ color: 'var(--c-gold)' }}>
                  Ibadah Tracker
                </h2>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                  Check Kegiatan Ibadahmu
                </p>
              </div>

              <div
                className="px-4 py-2 rounded-xl text-xs space-y-1 max-w-[240px]"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'var(--c-fg)',
                }}
              >
                <p className="font-medium text-amber-300">"Istiqomah di Setiap Langkah"</p>
                <p className="text-[11px] text-gray-400">App by @yasraffad_sensei</p>
              </div>
            </div>

            {/* Flip Back Button */}
            <button
              onClick={() => setIsFlipped(false)}
              className="w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 btn-3d"
              style={{ background: 'var(--c-gold)', color: 'var(--c-ink)' }}
            >
              <span>🔄</span> Kembali ke Detail Rekap
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
