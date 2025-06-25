"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ImageWithFallback = ({
  src,
  alt,
  ...props
}: {
  src: string;
  alt: string;
  [key: string]: any;
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc("/team/usama.png");
      }}
    />
  );
};

const AboutUs = () => {
  const { ref: scrollRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Animation variants for small elements only
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="about"
      className="w-full py-12 bg-gradient-to-br from-pink-100/50 via-blue-100/50 to-purple-200/50 overflow-hidden relative"
      ref={scrollRef}
      data-scroll-section
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="mb-4">
            <span className="text-md font-lexend tracking-wider uppercase bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text font-semibold">
              Meet Our Founder & Team
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-poppins font-bold mb-4 text-gray-900">
            Visionaries Driving Our <span className="text-yellow-500">Mission</span>
          </h1>
          <p className="text-gray-600 font-lexend font-light text-base md:text-lg leading-relaxed">
            Get to know the passionate minds shaping our future and fueling our
            growth.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div
            className="flex flex-col md:flex-row gap-6 md:gap-8 items-center font-lexend bg-white/40 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/30 hover:border-white/50 transition-all duration-300"
          >
            <div className="w-full md:w-1/3">
              <div className="relative aspect-square max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[130px] xl:max-w-[165px] mx-auto group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-pink-600/20 to-purple-600/20 rounded-3xl transform rotate-6 scale-[0.98] opacity-70 blur-xl transition-all duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/30 via-pink-200/30 to-purple-200/30 rounded-3xl transform -rotate-3 scale-[0.98] opacity-50 group-hover:rotate-6 transition-all duration-300" />
                <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/70 shadow-2xl group-hover:scale-[1.02] transition-all duration-300">
                  <ImageWithFallback
                    src="/team/usama.png"
                    alt="Usama Bin Amir"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 200px, 240px"
                    priority
                  />
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 mt-6">
                {/* Keep Framer Motion only for small icon hover effects */}
                <motion.a
                  href="https://wa.me/+923366789031"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-green-500 text-gray-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  whileHover={{ y: -2 }}
                >
                  <FaWhatsapp className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/usama.internationalecom?igsh=NjY0Z21laGZuMjRk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 text-gray-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  whileHover={{ y: -2 }}
                >
                  <FaInstagram className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/profile.php?id=61568532788440"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-blue-600 text-gray-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  whileHover={{ y: -2 }}
                >
                  <FaFacebookF className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/usamabinamir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-blue-500 text-gray-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  whileHover={{ y: -2 }}
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Usama Amir Khosa
                  <div className="text-sm md:text-base font-normal text-gray-600">(Usama Bin Amir)</div>
                </h3>
                <p className="text-lg md:text-xl font-medium text-gray-900">
                  Founder & Head of Global Strategy
                </p>
              </div>
              <p className="text-gray-600 font-light leading-relaxed text-base border-l-4 border-gradient-to-r from-yellow-400 to-purple-400 pl-6 py-2 bg-white/50 rounded-r-lg">
                Leads brand vision, high-level execution, and global business
                expansion. Department: Strategy & Brand Development
              </p>

              <Link
                href="/team"
                className="group inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Meet Our Team</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          {/* Keep Framer Motion for blockquote fade-in if desired */}
          <motion.blockquote
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-xl md:text-2xl font-medium text-gray-700 italic relative"
          >
            <span className="absolute font-montserrat -left-6 top-0 text-4xl opacity-10">
              "
            </span>
            Let's create something remarkable. Something global. Something lasting.
            <span className="absolute -right-6 bottom-0 text-4xl opacity-10">
              "
            </span>
          </motion.blockquote>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-3 text-base bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-semibold"
          >
            — Usama, Founder & CEO
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
