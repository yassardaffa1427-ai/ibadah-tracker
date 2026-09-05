import confetti from 'canvas-confetti'

export function triggerCelebrationConfetti() {
  const duration = 2.5 * 1000
  const animationEnd = Date.now() + duration
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 }

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  // Semburan pertama (burst tengah)
  confetti({
    particleCount: 80,
    spread: 100,
    origin: { y: 0.6 },
    colors: ['#e5c158', '#31b98b', '#ffffff', '#ffd700'],
  })

  // Semburan lanjutan kiri-kanan
  const interval: ReturnType<typeof setInterval> = setInterval(function () {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    const particleCount = 50 * (timeLeft / duration)

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ['#e5c158', '#31b98b', '#ffd700'],
    })
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ['#e5c158', '#31b98b', '#ffffff'],
    })
  }, 250)
}
