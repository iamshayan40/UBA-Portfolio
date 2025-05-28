"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Simple fade in animation
    tl.fromTo(logoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut"
      }
    );

    // Simple fade out
    const timer = setTimeout(() => {
      gsap.to(preloaderRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          if (preloaderRef.current) {
            preloaderRef.current.style.display = "none";
          }
        }
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 overflow-hidden bg-white"
      style={{ pointerEvents: "none" }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div 
          ref={logoRef} 
          className="w-32 h-32 relative"
        >
          <Image
            src="/logo.png"
            alt="UBA Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;