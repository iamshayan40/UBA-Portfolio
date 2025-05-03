'use client';

import { useEffect, useRef, useMemo, memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: "4+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "300+", label: "Happy Clients" },
  { number: "96%", label: "Success Rate" }
] as const;

const generateParticles = (count: number) => {
  return Array.from({ length: count }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    scale: Math.random() * 0.5 + 0.5,
  }));
};

const StatCard = memo(({ number, label }: { number: string; label: string }) => (
  <motion.div
    className="group p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-white/80 backdrop-blur-sm border border-gray-200 shadow-sm transition-transform duration-300 hover:scale-105 will-change-transform"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-2xl font-lexend font-light bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text will-change-transform">
      {number}
    </div>
    <div className="text-sm text-gray-600 font-lexend font-light mt-1">{label}</div>
  </motion.div>
));

StatCard.displayName = 'StatCard';

const Background = memo(() => {
  const particles = useMemo(() => generateParticles(12), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[100px] will-change-transform animate-blob"/>
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-purple-200/40 rounded-full mix-blend-multiply filter blur-[100px] will-change-transform animate-blob animation-delay-2000"/>
      <div className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] bg-pink-200/40 rounded-full mix-blend-multiply filter blur-[100px] will-change-transform animate-blob animation-delay-4000"/>
      
      {particles.map((particle, i) => (
        <div
          key={i}
          className="particle absolute w-1 h-1 bg-gray-400/30 rounded-full will-change-transform animate-float"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: `${particle.delay}s`,
            transform: `scale(${particle.scale})`,
          }}
        />
      ))}
    </div>
  );
});

Background.displayName = 'Background';

export default function WhyMe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.animate-item',
        { 
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center+=100',
            end: 'center center',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id='why-me'
      ref={containerRef} 
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <Background />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="space-y-4">
          
            <motion.h1 
              className="text-5xl md:text-6xl font-poppins font-semibold text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Building
              <span className="text-yellow-500 will-change-transform animate-gradient">
                {' '}Digital Excellence.
              </span>
            </motion.h1>
          </div>

          <motion.p 
            className="text-md font-light text-gray-600 font-lexend leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
           With 4+ years of global eCommerce experience, We specialize in building scalable brands. We’ve launched 300+ Shopify stores and managed 500+ Meta Ads campaigns, delivering real results across UAE, KSA, Pakistan, and UK.
          </motion.p>

          <motion.p 
            className="text-md font-light text-gray-600 font-lexend leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our approach is hands-on and results-driven, led personally with CEO-level dedication. From product research to profit scaling, We handle everything. With a proven 96%+ success rate and data-backed strategies, We ensure your brand is positioned for long-term success.
          </motion.p>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

        </motion.div>

        {/* Right Column */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative p-12">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-gray-200 shadow-lg will-change-transform transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/WhyUsLogo.jpg"
                alt="Professional Portrait"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover will-change-transform transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/20 to-transparent" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -left-6 top-1/3 font-lexend font-light p-2 sm:p-4 backdrop-blur-sm bg-gradient-to-br from-purple-100 to-pink-100 border border-gray-200 shadow-lg rounded-xl hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:-translate-x-1 group z-20"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center group-hover:from-purple-300 group-hover:to-pink-300 transition-all">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 group-hover:text-purple-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-800 font-medium text-sm sm:text-base">100%</h3>
                  <p className="text-gray-600 text-xs sm:text-sm group-hover:text-gray-700">Project Success</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute font-lexend font-light -right-6 top-2/3 p-2 sm:p-4 backdrop-blur-sm bg-gradient-to-br from-blue-100 to-purple-100 border border-gray-200 shadow-lg rounded-xl hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:translate-x-1 group z-20"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center group-hover:from-blue-300 group-hover:to-purple-300 transition-all">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 group-hover:text-blue-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-800 font-medium text-sm sm:text-base">Fast</h3>
                  <p className="text-gray-600 text-xs sm:text-sm group-hover:text-gray-700">Delivery</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 left-6 right-6 p-4 sm:p-6 backdrop-blur-sm bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-lg rounded-xl hover:border-gray-300 transition-all duration-300 hover:scale-[1.02] group z-20"
            >
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center group-hover:from-blue-300 group-hover:to-purple-300 transition-all">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-blue-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-800 font-lexend font-light text-sm sm:text-base group-hover:text-gray-900">Available for Work</h3>
                  <p className="font-lexend font-light text-xs sm:text-sm text-gray-600 group-hover:text-gray-700">Open to new opportunities</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}