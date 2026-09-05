import { useEffect, useState } from 'react'
import { format, parseISO } from 'date-fns'
import { id as localeId } from 'date-fns/locale'
import { db } from '@/data/db'
import { TODO_LABELS } from '@/types/models'
import type { TodoId } from '@/types/models'
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
      style={{ background: 'rgba(20,48,31,0.5)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="bg-white relative rounded-t-[20px] sm:rounded-[16px] w-full sm:max-w-sm overflow-hidden"
        style={{ border: '1.174px solid #dbe8d2', boxShadow: '0 1px 0 #dbe8d2, 0 2px 10px rgba(31,59,40,0.1)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner image */}
        <div className="relative h-[160px] w-full overflow-hidden">
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            src={imgBanner}
          />
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.35)', color: '#fff' }}
            aria-label="Tutup"
          >
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {/* Date badge */}
          <div
            className="absolute bottom-3 left-4 px-3 py-1 rounded-full text-xs font-semibold"
            style={{ background: 'rgba(255,255,255,0.9)', color: '#1f3b28' }}
          >
            {format(parseISO(date), 'EEEE, d MMMM yyyy', { locale: localeId })}
          </div>
        </div>

        {/* Motivational header */}
        <div className="flex items-center gap-4 px-4 py-3">
          <div
            className="rounded-[10px] flex items-center justify-center shrink-0"
            style={{ background: '#edf8f3', width: 43, height: 43 }}
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

        {/* Progress row */}
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
            style={{ background: '#e9f3e3', height: 6 }}
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

        {/* Unfinished tasks */}
        {data && data.undoneIds.length > 0 && (
          <div className="px-4 pb-4 pt-2">
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
          <div className="px-4 pb-4 pt-1">
            <p className="text-sm font-semibold text-center" style={{ color: '#31b98b' }}>
              Mashaa Allah! Semua ibadah selesai 🌟
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
