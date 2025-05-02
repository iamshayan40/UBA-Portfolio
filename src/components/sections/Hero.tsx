"use client";

import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import {
  SiShopify,
  SiMeta,
  SiAliexpress,
  SiFacebook,
  SiInstagram,
} from "react-icons/si";
import { FaFlagUsa, FaGlobeEurope } from "react-icons/fa";
import { GB, AE, SA, PK, DE, QA, CA, KW, SE, AU, NL } from 'country-flag-icons/react/3x2';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const upperRowItems = [
    {
      icon: <SiShopify className="text-[#96BF48] text-5xl" />,
      title: "Shopify",
    },
    {
      icon: <img src="/Hero Carousel List/zendrop.png" alt="Zendrop" className="h-12 w-auto" />,
      title: "Zendrop",
    },
    {
      icon: <img src="/Hero Carousel List/spocket.png" alt="Spocket" className="h-12 w-auto" />,
      title: "Spocket",
    },
    {
      icon: <img src="/Hero Carousel List/Cj.png" alt="CJ Dropshipping" className="h-12 w-auto" />,
      title: "CJ Dropshipping",
    },
    {
      icon: <SiAliexpress className="text-[#FF4747] text-5xl" />,
      title: "Aliexpress Dropshipping",
    },
    {
      icon: <img src="/Hero Carousel List/zambeel.png" alt="Zambeel" className="h-12 w-auto" />,
      title: "Zambeel",
    },
    {
      icon: <img src="/Hero Carousel List/markaz.png" alt="Markaz" className="h-12 w-auto" />,
      title: "Markaz",
    },
  ];

  const lowerRowItems = [
    {
      icon: <FaFlagUsa className="text-[#B22234] text-5xl" />,
      title: "USA",
    },
    {
      icon: <AE className="w-12 h-8" />,
      title: "UAE",
    },
    {
      icon: <GB className="w-12 h-8" />,
      title: "UK",
    },
    {
      icon: <FaGlobeEurope className="text-[#0052B4] text-5xl" />,
      title: "EUROPE",
    },
    {
      icon: <SA className="w-12 h-8" />,
      title: "KSA",
    },
    {
      icon: <PK className="w-12 h-8" />,
      title: "Pakistan",
    },
    {
      icon: <DE className="w-12 h-8" />,
      title: "Germany",
    },
    {
      icon: <QA className="w-12 h-8" />,
      title: "Qatar",
    },
    {
      icon: <CA className="w-12 h-8" />,
      title: "Canada",
    },
    {
      icon: <KW className="w-12 h-8" />,
      title: "Kuwait",
    },
    {
      icon: <SE className="w-12 h-8" />,
      title: "Sweden",
    },
    {
      icon: <AU className="w-12 h-8" />,
      title: "Australia",
    },
    {
      icon: <NL className="w-12 h-8" />,
      title: "Netherlands",
    },
  ];

  return (
    <section  id="hero"
      className="h-screen overflow-hidden p-[10px] sm:p-[12px] md:p-[16px] lg:p-[20px] xl:p-[24px] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      role="banner"
      aria-label="Welcome to UBA International E-commerce Services"
    >
      <div className="h-[calc(100vh-20px)] sm:h-[calc(100vh-24px)] md:h-[calc(100vh-32px)] lg:h-[calc(100vh-40px)] xl:h-[calc(100vh-48px)] glass rounded-[15px] sm:rounded-[20px] md:rounded-[25px] pt-28 sm:pt-26 md:pt-44 overflow-y-auto">
        <div className="max-w-[90rem] pt-16 md:pt-0 mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[7.5vw] md:text-6xl font-poppins text-slate-800 font-semibold text-center leading-tight md:leading-[1]"
            aria-label="Usama Bin Amir International E-Commerce Services"
          >
            <span className="text-yellow-500 md:inline block">
              Usama Bin Amir
            </span>{" "}
            <span className="md:inline block mt-1 md:mt-0">
              <span className="text-slate-800">International</span>
            </span>
            <br className="hidden md:block" />
            <span className="block mt-1 md:mt-0">E-Commerce Services</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-2xl md:text-3xl text-gray-600 font-lexend font-light text-center"
            aria-label="Trusted Global Fast Setup E-commerce Solutions"
          >
            <span className="text-yellow-500 font-normal">Trusted.</span>{" "}
            <span className="text-black font-normal">Global.</span>{" "}
            <span className="text-yellow-500 font-normal">Fast Setup</span>
          </motion.h2>

          <div 
            className="mt-20 md:mt-16"
            role="complementary"
            aria-label="Supported Payment Methods"
          >
            <div className="relative overflow-hidden">
              <div
                className={`flex flex-col gap-12 transition-opacity duration-500 ${
                  mounted ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="wrapper">
                  <div className="slide-track">
                    {upperRowItems.map((method, index) => (
                      <div
                        className="slide"
                        key={`upper-${index}`}
                        style={{ opacity: mounted ? 1 : 0 }}
                      >
                        {method.icon}
                        <p className="text-black text-sm font-light font-poppins mt-2">
                          {method.title}
                        </p>
                      </div>
                    ))}
                    {upperRowItems.map((method, index) => (
                      <div
                        className="slide"
                        key={`upper-duplicate-${index}`}
                        style={{ opacity: mounted ? 1 : 0 }}
                      >
                        {method.icon}
                        <p className="text-black text-sm font-light font-poppins mt-2">
                          {method.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="wrapper -mt-16">
                  <div className="slide-track-reverse">
                    {lowerRowItems.map((method, index) => (
                      <div
                        className="slide"
                        key={`lower-${index}`}
                        style={{ opacity: mounted ? 1 : 0 }}
                      >
                        {method.icon}
                        <p className="text-black text-sm font-light font-poppins mt-2">
                          {method.title}
                        </p>
                      </div>
                    ))}
                    {lowerRowItems.map((method, index) => (
                      <div
                        className="slide"
                        key={`lower-duplicate-${index}`}
                        style={{ opacity: mounted ? 1 : 0 }}
                      >
                        {method.icon}
                        <p className="text-black text-sm font-light font-poppins mt-2">
                          {method.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass {
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .wrapper {
          width: 100%;
          height: 130px;
          position: relative;
          overflow: hidden;
          background: transparent;
          padding: 15px calc(1vw + 5px);
          opacity: 0;
          transform: translateY(20px);
          animation: ${mounted ? "slideUp 0.5s ease-out forwards" : "none"};
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .wrapper:first-child {
          padding: 15px calc(2vw + 5px);
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }

        .wrapper:last-child {
          padding: 15px calc(1.5vw + 5px);
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
        }

        .slide-track {
          display: flex;
          width: calc(180px * 14);
          animation: ${mounted ? "scroll 35s linear infinite" : "none"};
          transform: translateX(0);
          will-change: transform;
          position: relative;
          left: 0;
        }

        .slide-track-reverse {
          display: flex;
          width: calc(180px * 14);
          animation: ${mounted
            ? "scroll-reverse 35s linear infinite"
            : "none"};
          transform: translateX(calc(-180px * 7));
          will-change: transform;
          position: relative;
          left: 0;
        }

        .slide {
          width: clamp(160px, calc(15vw + 30px), 180px);
          height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: clamp(12px, 1.5vw, 16px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          margin: 0 clamp(10px, 1.5vw, 15px);
          flex-shrink: 0;
          transition: all 0.3s ease;
          opacity: ${mounted ? "1" : "0"};
          transform: translateZ(0);
          transition: opacity 0.5s ease-out, transform 0.3s ease;
        }

        .slide:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-180px * 7));
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(calc(-180px * 7));
          }
          100% {
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .slide-track,
          .slide-track-reverse {
            animation-duration: 70s;
          }
        }
      `}</style>
    </section>
  );
}
