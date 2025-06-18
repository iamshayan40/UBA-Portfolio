'use client'

import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'

export const useLenis = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    const l = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
      wheelMultiplier: 1,
    })

    setLenis(l)

    const raf = (time: number) => {
      l.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => l.destroy()
  }, [])

  return lenis
}
