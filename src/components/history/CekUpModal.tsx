import { useEffect, useState, useRef } from 'react'
import { format, parseISO } from 'date-fns'
import { id as localeId } from 'date-fns/locale'
import { motion, AnimatePresence } from 'framer-motion'
import { db } from '@/data/db'
import { TODO_IDS, TODO_LABELS, SUNNAH_IDS, SUNNAH_LABELS, PUASA_TYPE_OPTIONS } from '@/types/models'
import type { TodoId } from '@/types/models'
import LogoIcon from '@/components/LogoIcon'
import imgBanner from '@/imports/CekUp/1bbb101f773530ebcd1dbd3a585aa20886c29ed5.png'
import { getSunnahForDate } from '@/data/repositories/dailyRecordRepo'

interface DayData {
  done: number
  total: number
  rate: number
  undoneIds: TodoId[]
}

interface SunnahData {
  done: number
  total: number
  rate: number
  doneLabels: string[]
}

function ProgressIcon({ gradientId, topColor, bottomColor }: { gradientId: string; topColor: string; bottomColor: string }) {
  return (
    <div className="h-[12.8px] w-[8px] shrink-0 relative">
      <svg className="absolute inset-0 size-full" fill="none" height="12.8" width="8" viewBox="0 0 8 12.8">
        <path
          d="M4 0C4 0 0 4.8 0 8.8C0 9.86087 0.421427 10.8783 1.17157 11.6284C1.92172 12.3786 2.93913 12.8 4 12.8C5.06087 12.8 6.07828 12.3786 6.82843 11.6284C7.57857 10.8783 8 9.86087 8 8.8C8 4.8 4 0 4 0ZM4 12C3.46957 12 2.96086 11.7893 2.58579 11.4142C2.21071 11.0391 2 10.5304 2 10C2 8 4 5.6 4 5.6C4 5.6 6 8 6 10C6 10.5304 5.78929 11.0391 5.41421 11.4142C5.03914 11.7893 4.53043 12 4 12Z"
          fill={`url(#${gradientId})`}
        />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id={gradientId} x1="4" x2="4" y1="0.8" y2="12">
            <stop stopColor={topColor} />
            <stop offset="1" stopColor={bottomColor} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function getMotivation(rate: number): { emoji: string; title: string; sub: string } {
  if (rate === 100) return { emoji: '🌟', title: 'Sempurna!', sub: 'Alhamdulillah, semua ibadah selesai hari ini!' }
  if (rate >= 70) return { emoji: '😊', title: 'Hampir Sempurna', sub: 'Sedikit lagi! Besok harus lebih semangat lagi! 🔥' }
  if (rate >= 40) return { emoji: '💪', title: 'Lumayan', sub: 'Tetap semangat, kamu pasti bisa lebih baik lagi!' }
  return { emoji: '🤲', title: 'Ayo Bangkit!', sub: 'Jangan menyerah, setiap ibadah bernilai di sisi Allah.' }
}

function clamp(v: number, min: number, max: number) {
  return v < min ? min : v > max ? max : v
}

export default function CekUpModal({ date, onClose }: { date: string; onClose: () => void }) {
  const [data, setData] = useState<DayData | null>(null)
  const [sunnah, setSunnah] = useState<SunnahData | null>(null)
  const [imgError, setImgError] = useState(false)

  const cardRef = useRef<HTMLDivElement>(null)
  const glareFrontRef = useRef<HTMLDivElement>(null)
  const glareBackRef = useRef<HTMLDivElement>(null)

  const rotYRef = useRef(0)
  const rotXRef = useRef(0)
  const velYRef = useRef(0)
  const draggingRef = useRef(false)
  const pointerIdRef = useRef<number | null>(null)
  const lastXRef = useRef(0)
  const startYRef = useRef(0)
  const baseRotXRef = useRef(0)
  const lastTRef = useRef(0)
  const rafIdRef = useRef<number | null>(null)

  useEffect(() => {
    async function load() {
      const [record, todos, sunnahItems] = await Promise.all([
        db.dailyRecords.get(date),
        db.todoItems.where('dailyRecordDate').equals(date).toArray(),
        getSunnahForDate(date),
      ])
      const done = todos.filter((t) => t.isDone).length
      const total = TODO_IDS.length
      const rate = record?.completionRate ?? Math.round((done / total) * 100)
      const undoneIds = todos.filter((t) => !t.isDone).map((t) => t.todoId as TodoId)
      setData({ done, total, rate, undoneIds })

      const sunnahDone = sunnahItems.filter((s) => s.isDone)
      const sunnahRate = record?.sunnahCompletionRate ?? Math.round((sunnahDone.length / SUNNAH_IDS.length) * 100)
      const doneLabels = sunnahDone.map((s) =>
        s.sunnahId === 'puasa-sunnah'
          ? `Puasa ${PUASA_TYPE_OPTIONS.find((o) => o.value === s.puasaType)?.label ?? 'Sunnah'}`
          : SUNNAH_LABELS[s.sunnahId],
      )
      setSunnah({ done: sunnahDone.length, total: SUNNAH_IDS.length, rate: sunnahRate, doneLabels })
    }
    load()
  }, [date])

  function render() {
    if (!cardRef.current) return
    const rotX = rotXRef.current
    const rotY = rotYRef.current
    const dragging = draggingRef.current

    cardRef.current.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale(${dragging ? 1.03 : 1})`

    const norm = ((rotY % 360) + 360) % 360
    const backFacing = norm > 90 && norm < 270

    const intensity = dragging ? 1 : 0
    const gx = 50 + clamp(rotY % 180, -90, 90) * 0.4
    const gy = 50 - rotX * 1.2

    const active = backFacing ? glareBackRef.current : glareFrontRef.current
    const idle = backFacing ? glareFrontRef.current : glareBackRef.current

    if (active) {
      active.style.setProperty('--gx', `${gx}%`)
      active.style.setProperty('--gy', `${gy}%`)
      active.style.opacity = `${intensity}`
    }
    if (idle) {
      idle.style.opacity = '0'
    }
  }

  function stopInertia() {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current)
      rafIdRef.current = null
    }
  }

  function snap() {
    if (!cardRef.current) return
    const target = Math.round(rotYRef.current / 180) * 180
    cardRef.current.classList.add('snapping')
    rotYRef.current = target
    rotXRef.current = 0
    render()
  }

  function inertia() {
    rotYRef.current += velYRef.current
    velYRef.current *= 0.93
    rotXRef.current *= 0.90
    render()

    if (Math.abs(velYRef.current) > 0.25) {
      rafIdRef.current = requestAnimationFrame(inertia)
    } else {
      rafIdRef.current = null
      snap()
    }
  }

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    function onDown(e: PointerEvent) {
      // Don't drag if clicking buttons
      const target = e.target as HTMLElement
      if (target.closest('button')) return

      stopInertia()
      card?.classList.remove('snapping')
      card?.classList.add('grabbing')
      draggingRef.current = true
      velYRef.current = 0

      rotYRef.current = rotYRef.current % 360

      lastXRef.current = e.clientX
      startYRef.current = e.clientY
      baseRotXRef.current = rotXRef.current
      lastTRef.current = performance.now()

      if (e.pointerId !== undefined && card?.setPointerCapture) {
        pointerIdRef.current = e.pointerId
        try {
          card.setPointerCapture(e.pointerId)
        } catch {}
      }
      render()
    }

    function onMove(e: PointerEvent) {
      if (!draggingRef.current) return
      const now = performance.now()
      const dt = Math.max(now - lastTRef.current, 1)
      const dx = e.clientX - lastXRef.current

      const ROT_PER_PX = 0.55
      const MAX_TILT_X = 20
      const MAX_VEL = 26

      rotYRef.current += dx * ROT_PER_PX

      const norm = ((rotYRef.current % 360) + 360) % 360
      const flipSign = norm > 90 && norm < 270 ? -1 : 1
      rotXRef.current = clamp(
        baseRotXRef.current + -(e.clientY - startYRef.current) * 0.12 * flipSign,
        -MAX_TILT_X,
        MAX_TILT_X
      )

      velYRef.current = clamp((dx * ROT_PER_PX) * (16.7 / dt), -MAX_VEL, MAX_VEL)

      lastXRef.current = e.clientX
      lastTRef.current = now
      render()
      if (e.cancelable) e.preventDefault()
    }

    function onUp() {
      if (!draggingRef.current) return
      draggingRef.current = false
      card?.classList.remove('grabbing')

      if (pointerIdRef.current !== null && card?.releasePointerCapture) {
        try {
          card.releasePointerCapture(pointerIdRef.current)
        } catch {}
        pointerIdRef.current = null
      }

      if (Math.abs(velYRef.current) > 0.25) {
        stopInertia()
        rafIdRef.current = requestAnimationFrame(inertia)
      } else {
        snap()
      }
    }

    function onDblClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (target.closest('button')) return
      flipCard()
    }

    card.addEventListener('pointerdown', onDown)
    window.addEventListener('pointermove', onMove, { passive: false })
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointercancel', onUp)
    card.addEventListener('dblclick', onDblClick)

    return () => {
      stopInertia()
      card.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
      card.removeEventListener('dblclick', onDblClick)
    }
  }, [])

  function flipCard() {
    stopInertia()
    if (cardRef.current) {
      cardRef.current.classList.add('snapping')
    }
    rotYRef.current = Math.round(rotYRef.current / 180) * 180 + 180
    rotXRef.current = 0
    render()
  }

  const mot = data ? getMotivation(data.rate) : null
  const barWidth = data ? Math.round((data.done / data.total) * 100) : 0

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[70] flex flex-col items-center justify-center p-4 overflow-hidden"
        style={{
          background: 'rgba(20,48,31,0.65)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          touchAction: 'none',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          perspective: 1600,
        }}
        onClick={onClose}
      >
        <style>{`
          .card-3d-wrapper {
            position: relative;
            width: 100%;
            max-width: 320px;
            transform-style: preserve-3d;
            cursor: grab;
            will-change: transform;
            transform: rotateX(0deg) rotateY(0deg) scale(1);
          }
          .card-3d-wrapper.grabbing {
            cursor: grabbing;
          }
          .card-3d-wrapper.snapping {
            transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .face-3d {
            position: relative;
            width: 100%;
            border-radius: 24px;
            overflow: hidden;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            box-shadow: 0 30px 60px -18px rgba(0,0,0,0.5), 0 8px 24px -8px rgba(0,0,0,0.3);
          }
          .face-3d-back {
            position: absolute;
            inset: 0;
            transform: rotateY(180deg);
          }
          .glare-3d {
            position: absolute;
            inset: 0;
            border-radius: inherit;
            pointer-events: none;
            background: radial-gradient(circle at var(--gx, 50%) var(--gy, 30%), rgba(255,255,255,0.35), rgba(255,255,255,0) 60%);
            opacity: 0;
            mix-blend-mode: overlay;
            transition: opacity 0.2s ease;
          }
        `}</style>

        {/* 3D Card Container */}
        <div
          ref={cardRef}
          className="card-3d-wrapper"
          onClick={(e) => e.stopPropagation()}
        >
          {/* FRONT FACE */}
          <div className="face-3d bg-white text-slate-800">
            <div ref={glareFrontRef} className="glare-3d" />

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
                onClick={flipCard}
                className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1 transition-all hover:bg-white active:scale-95 shadow-md"
                style={{ background: 'rgba(255,255,255,0.85)', color: '#1f3b28' }}
                title="Putar kartu ke belakang"
              >
                <span>🔄</span> Putar
              </button>
            </div>

            {/* Motivational Header */}
            <div className="flex items-center gap-3.5 px-4 py-3">
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
                <span className="flex items-center gap-1 font-medium text-[13px]" style={{ fontFamily: 'Outfit, sans-serif', color: '#61967a' }}>
                  {data ? `${data.done} dari ${data.total} selesai` : '…'}
                  <ProgressIcon gradientId="taskIconGradient" topColor="#34BA8B" bottomColor="#BDEB77" />
                </span>
                <span
                  className="font-extrabold text-[19px] leading-none"
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
                <p className="font-medium text-[11px] mb-1.5" style={{ fontFamily: 'Outfit, sans-serif', color: '#61967a' }}>
                  Task Belum dikerjakan:
                </p>
                <div className="flex flex-wrap gap-1.5 max-h-[100px] overflow-y-auto pr-1">
                  {data.undoneIds.map((id) => (
                    <span
                      key={id}
                      className="text-[11px] font-medium px-[8px] py-[2px] rounded-full shrink-0"
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        background: 'rgba(239,68,68,0.1)',
                        color: '#e04a3f',
                        border: '1px solid rgba(239,68,68,0.2)',
                      }}
                    >
                      {TODO_LABELS[id]}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Sunnah Progress */}
            <div className="px-4 pb-2 pt-1">
              <div className="flex items-center justify-between mb-1.5">
                <span className="flex items-center gap-1 font-medium text-[13px]" style={{ fontFamily: 'Outfit, sans-serif', color: '#3888ff' }}>
                  {sunnah ? `Sunnah: ${sunnah.done} dari ${sunnah.total} selesai` : '…'}
                  <ProgressIcon gradientId="sunnahIconGradient" topColor="#1B73F6" bottomColor="#86E4FF" />
                </span>
                <span
                  className="font-extrabold text-[19px] leading-none"
                  style={{ fontFamily: '"DM Sans", sans-serif', fontVariationSettings: '"opsz" 14', color: '#3888ff' }}
                >
                  {sunnah ? `${sunnah.rate}%` : '…'}
                </span>
              </div>
              <div
                className="rounded-full overflow-hidden"
                style={{ background: 'rgba(56,136,255,0.12)', height: 7 }}
              >
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${sunnah?.rate ?? 0}%`,
                    background: 'linear-gradient(90deg, #88e5ff, #1971f6)',
                  }}
                />
              </div>
            </div>

            {/* Sunnah Done */}
            {sunnah && sunnah.doneLabels.length > 0 && (
              <div className="px-4 pb-3 pt-1">
                <p className="font-medium text-[11px] mb-1.5" style={{ fontFamily: 'Outfit, sans-serif', color: '#65726d' }}>
                  Sunnah yg dikerjakan
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {sunnah.doneLabels.map((label) => (
                    <span
                      key={label}
                      className="text-[11px] font-medium px-[8px] py-[2px] rounded-full shrink-0"
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        background: 'rgba(56,136,255,0.1)',
                        color: '#3888ff',
                        border: '1px solid rgba(56,136,255,0.2)',
                      }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {data && data.rate === 100 && (
              <div className="px-4 pb-3 pt-1">
                <p className="text-xs font-semibold text-center" style={{ color: '#31b98b' }}>
                  Mashaa Allah! Semua ibadah selesai 🌟
                </p>
              </div>
            )}

            {/* Bottom Flip Button Bar */}
            <div className="p-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] text-gray-400 font-medium">Drag / double click untuk putar</span>
              <button
                onClick={flipCard}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all hover:bg-emerald-600 active:scale-95 shadow-sm"
                style={{ background: '#31b98b', color: '#fff' }}
              >
                <span>🔄</span> Putar Kartu
              </button>
            </div>
          </div>

          {/* BACK FACE */}
          <div
            className="face-3d face-3d-back h-full flex flex-col items-center justify-between p-6"
            style={{
              background: 'linear-gradient(135deg, #17261f 0%, #0c1812 100%)',
              border: '1px solid rgba(229, 193, 88, 0.4)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
            }}
          >
            <div ref={glareBackRef} className="glare-3d" />

            {/* Close Button Top Right */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95 z-10"
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
                className="rounded-2xl p-3 shadow-2xl transition-transform hover:scale-105"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  boxShadow: '0 8px 32px rgba(49,185,139,0.3)',
                  border: '1px solid rgba(229, 193, 88, 0.5)',
                }}
              >
                <LogoIcon size={72} />
              </div>

              <div className="space-y-1">
                <h2 className="font-display text-2xl font-bold tracking-wide" style={{ color: 'var(--c-gold)' }}>
                  Ibadah Tracker
                </h2>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                  Track & Audit Amalan Harian
                </p>
              </div>

              <div
                className="px-4 py-2.5 rounded-xl text-xs space-y-1 max-w-[240px]"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'var(--c-fg)',
                }}
              >
                <p className="font-medium text-amber-300">"Istiqomah di Setiap Langkah"</p>
                <p className="text-[11px] text-emerald-300/80 font-mono pt-1">
                  Ibadah tracker app by <span className="font-bold text-amber-300">@yasraffad_sensei</span>
                </p>
              </div>
            </div>

            {/* Flip Back Button */}
            <button
              onClick={flipCard}
              className="w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
              style={{ background: 'var(--c-gold)', color: 'var(--c-ink)' }}
            >
              <span>🔄</span> Kembali ke Detail Rekap
            </button>
          </div>
        </div>

        {/* Modal Bottom Instruction Hint */}
        <p className="mt-4 text-xs font-medium text-emerald-200/70 text-center pointer-events-none">
          Drag / usap kartu ke kiri-kanan untuk memutar 3D &middot; Double tap / klik tombol untuk balik
        </p>
      </motion.div>
    </AnimatePresence>
  )
}

