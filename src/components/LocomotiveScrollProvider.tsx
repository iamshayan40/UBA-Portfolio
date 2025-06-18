'use client';

import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface LocomotiveScrollProviderProps {
  children: React.ReactNode;
}

export default function LocomotiveScrollProvider({ children }: LocomotiveScrollProviderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    // Initialize Locomotive Scroll
    locomotiveRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      lerp: 0.1, // Linear interpolation for smoothness (0.1 = very smooth)
      multiplier: 1, // Scroll speed multiplier
      class: 'is-revealed',
      reloadOnContextChange: true,
      touchMultiplier: 2, // Touch scroll sensitivity
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

    // Make locomotive instance globally available
    (window as any).locomotive = locomotiveRef.current;

    // Update scroll on page load
    locomotiveRef.current.on('load', () => {
      locomotiveRef.current?.update();
    });

    // Handle resize
    const handleResize = () => {
      locomotiveRef.current?.update();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (locomotiveRef.current) {
        locomotiveRef.current.destroy();
      }
      // Clean up global reference
      delete (window as any).locomotive;
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
} 