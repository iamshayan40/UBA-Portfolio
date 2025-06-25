'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// Dynamically import LocomotiveScroll only on client
let LocomotiveScroll: any = null;
if (typeof window !== 'undefined') {
  LocomotiveScroll = require('locomotive-scroll').default;
  require('locomotive-scroll/dist/locomotive-scroll.css');
}

interface LocomotiveScrollProviderProps {
  children: React.ReactNode;
}

export default function LocomotiveScrollProvider({ children }: LocomotiveScrollProviderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveRef = useRef<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!scrollRef.current || !LocomotiveScroll) return;

    if (locomotiveRef.current) {
      locomotiveRef.current.destroy();
    }
   locomotiveRef.current = new LocomotiveScroll({
  el: scrollRef.current,
  smooth: true,

  // ✅ DESKTOP
  lerp: 0.07,             // natural smoothness
  multiplier: 1.6,        // decent scroll distance
  touchMultiplier: 2.5,   // trackpad/mobile boost

  // ✅ SMARTPHONE
  smartphone: {
    smooth: true,
    lerp: 0.07,           // buttery without lag
    multiplier: 2.5,      // enough jump
    touchMultiplier: 3.5, // nice swipe feel
    breakpoint: 768,
  },

  // ✅ TABLET
  tablet: {
    smooth: true,
    lerp: 0.075,
    multiplier: 2.0,
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

  useEffect(() => {
    if (locomotiveRef.current) {
      setTimeout(() => {
        locomotiveRef.current.update();
      }, 500);
    }
  }, [children]);

  return (
    <div ref={scrollRef} data-scroll-container style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}