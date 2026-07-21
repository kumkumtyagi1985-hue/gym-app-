import { useEffect, useState } from 'react'
import Logo from './Logo'

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const duration = 1800 // ms — total splash time
    let raf

    function tick() {
      const elapsed = Date.now() - start
      const pct = Math.min(100, (elapsed / duration) * 100)
      setProgress(pct)
      if (pct < 100) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(onFinish, 250)
      }
    }
    tick()
    return () => cancelAnimationFrame(raf)
  }, [onFinish])

  return (
    <div className="fixed inset-0 bg-base-900 flex flex-col items-center justify-center z-50">
      <div className="animate-pulse">
        <Logo size={88} />
      </div>

      <p className="font-display text-2xl font-bold text-white mt-6 tracking-wide">Alpha Lift</p>
      <p className="text-gray-500 text-xs mt-1 uppercase tracking-[0.2em]">Forge Your Peak</p>

      <div className="w-48 h-1 bg-base-700 rounded-full mt-8 overflow-hidden">
        <div
          className="h-full bg-accent-teal rounded-full"
          style={{ width: `${progress}%`, transition: 'width 100ms linear' }}
        />
      </div>
    </div>
  )
}
