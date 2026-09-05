import { useEffect, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

interface CountUpProps {
  value: number
  className?: string
  duration?: number
}

export default function CountUp({ value, className = '', duration = 0.8 }: CountUpProps) {
  const spring = useSpring(0, { mass: 0.5, stiffness: 100, damping: 15 })
  const display = useTransform(spring, (current) => Math.round(current))
  const [currentVal, setCurrentVal] = useState(value)

  useEffect(() => {
    spring.set(value)
    const unsub = display.on('change', (v) => setCurrentVal(v))
    return () => unsub()
  }, [value, spring, display])

  return <motion.span className={className}>{currentVal}</motion.span>
}
