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
      lerp: 0.02, // higher lerp for more responsive inertia
      multiplier: 2.2, // much faster scroll for desktop
      smartphone: {
        smooth: true,
        lerp: 0.18, // very responsive for touch
        // multiplier: 3.2, // much faster scroll for mobile
      },
      tablet: {
        smooth: true,
        lerp: 0.15,
        multiplier: 2.5,
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