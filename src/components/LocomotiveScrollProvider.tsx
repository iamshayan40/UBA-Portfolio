'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface LocomotiveScrollProviderProps {
  children: React.ReactNode;
}

export default function LocomotiveScrollProvider({ children }: LocomotiveScrollProviderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveRef = useRef<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!scrollRef.current) return;

    if (locomotiveRef.current) {
      locomotiveRef.current.destroy();
    }

    locomotiveRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      lerp: 0.1,
      multiplier: 1,
      class: 'is-revealed',
      reloadOnContextChange: true,
      touchMultiplier: 2,
      smartphone: {
        smooth: true,
        lerp: 0.1,
        multiplier: 1,
      },
      tablet: {
        smooth: true,
        lerp: 0.1,
        multiplier: 1,
      },
    });

    (window as any).locomotive = locomotiveRef.current;

    locomotiveRef.current.on('load', () => {
      locomotiveRef.current?.update();
    });

    const handleResize = () => {
      locomotiveRef.current?.update();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (locomotiveRef.current) {
        locomotiveRef.current.destroy();
      }
      delete (window as any).locomotive;
    };
  }, [pathname]);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
} 