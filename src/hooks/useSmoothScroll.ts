'use client';

import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollTo = useCallback((target: string | HTMLElement, options?: {
    offset?: number;
    duration?: number;
    easing?: [number, number, number, number];
  }) => {
    // Check if Locomotive Scroll is available
    const locomotiveScroll = (window as any).locomotive;
    
    if (locomotiveScroll) {
      // Use Locomotive Scroll for smooth scrolling
      locomotiveScroll.scrollTo(target, {
        offset: options?.offset || -100, // Account for fixed navbar
        duration: options?.duration || 1.5,
        easing: options?.easing || [0.25, 0.46, 0.45, 0.94], // Ease out cubic
      });
    } else {
      // Fallback to native smooth scroll
      const element = typeof target === 'string' ? document.querySelector(target) : target;
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, []);

  const scrollToTop = useCallback((duration?: number) => {
    const locomotiveScroll = (window as any).locomotive;
    
    if (locomotiveScroll) {
      locomotiveScroll.scrollTo('top', {
        duration: duration || 1.5,
        easing: [0.25, 0.46, 0.45, 0.94],
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, []);

  return { scrollTo, scrollToTop };
}; 