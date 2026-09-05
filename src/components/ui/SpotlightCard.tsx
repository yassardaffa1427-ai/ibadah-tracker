import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
  style?: React.CSSProperties
  onClick?: () => void
}

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(229, 193, 88, 0.18)',
  style = {},
  onClick,
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseEnter = () => setOpacity(1)
  const handleMouseLeave = () => setOpacity(0)

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={`relative overflow-hidden rounded-2xl p-5 card-soft transition-shadow hover:shadow-lg ${className}`}
      style={{
        background: 'var(--c-surface)',
        border: '1px solid var(--c-border)',
        ...style,
      }}
    >
      {/* Dynamic spotlight radial gradient */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
