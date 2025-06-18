'use client'

import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { usePathname } from 'next/navigation'

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const lenis = new Lenis({
      duration: isMobile ? 1.1 : 0.55,
      easing: (t) => t,
      touchMultiplier: isMobile ? 2.1 : 1.1,
      wheelMultiplier: isMobile ? 1 : 1.25,
      autoResize: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    // ✅ instantly trigger raf after user scrolls (prevent lag spike)
    const handleScroll = () => lenis.raf(performance.now());
    window.addEventListener('scroll', handleScroll);

    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return <>{children}</>;
};
