"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup
    gsap.set([logoRef.current, textRef.current], { opacity: 0 });
    gsap.set(containerRef.current, { backgroundColor: "#ffffff" });

    // Create a dynamic flash effect
    tl.to(containerRef.current, {
      backgroundColor: "#FFD700",
      duration: 0.2,
      ease: "power2.inOut"
    })
    .to(containerRef.current, {
      backgroundColor: "#ffffff",
      duration: 0.2,
      ease: "power2.inOut"
    })

    // Logo animation with multiple effects
    .fromTo(
      logoRef.current,
      { 
        opacity: 0, 
        scale: 0.2,
        rotate: -180,
        filter: "blur(10px)",
      },
      { 
        opacity: 1, 
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
      }
    )

    // Create pulsing glow effect for logo
    .to(logoRef.current, {
      boxShadow: "0 0 30px rgba(255, 215, 0, 0.7)",
      repeat: 1,
      yoyo: true,
      duration: 1,
      ease: "power2.inOut",
    }, "-=0.5")

    // Text animation with characters appearing one by one
    .fromTo(
      textRef.current,
      { 
        opacity: 0,
        scale: 0.8,
        y: 20,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "back.out(1.7)",
        onStart: () => {
          if (!textRef.current) return;

          const originalText = textRef.current.textContent || "";
          const textElement = textRef.current;
          textElement.innerHTML = "";
          
          const chars = originalText.split("");
          chars.forEach((char: string, index: number) => {
            const span = document.createElement("span");
            span.textContent = char === " " ? "\u00A0" : char; // Handle spaces properly
            span.style.opacity = "0";
            span.style.display = "inline-block";
            textElement.appendChild(span);
            
            gsap.to(span, {
              opacity: 1,
              y: 0,
              rotate: 0,
              duration: 0.3,
              delay: index * 0.05,
              ease: "back.out(2)",
              from: { opacity: 0, y: -20, rotate: -45 }
            });
          });
        }
      },
      "-=0.8"
    )

    // Floating animation for both elements
    .to([logoRef.current, textRef.current], {
      y: "-=10",
      duration: 1,
      ease: "power1.inOut",
      yoyo: true,
      repeat: 1
    });

    // Exit animation sequence
    const timer = setTimeout(() => {
      gsap.timeline()
        .to([logoRef.current, textRef.current], {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.in"
        })
        .to([logoRef.current, textRef.current], {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: "back.in(1.7)"
        })
        .to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            if (preloaderRef.current) {
              preloaderRef.current.style.display = "none";
            }
          }
        });
    }, 3500);

    // Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 overflow-hidden"
      style={{ pointerEvents: "none" }}
    >
      <div 
        ref={containerRef}
        className="w-full h-full flex flex-col items-center justify-center bg-white"
      >
        <div 
          ref={logoRef} 
          className="w-32 h-32 relative mb-2 rounded-full overflow-hidden"
          style={{ 
            filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.3))",
          }}
        >
          <Image
            src="/logo.png"
            alt="UBA Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h2
          ref={textRef}
          className="text-2xl font-bold"
          style={{ 
            color: "#FFD700",
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Usama Bin Amir
        </h2>
      </div>
    </div>
  );
};

export default Preloader;