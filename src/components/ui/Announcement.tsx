"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Announcement() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed left-0 right-0 bottom-3 md:bottom-10 mx-auto z-50 w-[95%] max-w-4xl rounded-2xl border border-yellow-300/50 bg-gradient-to-r from-yellow-200/70 via-yellow-300/60 to-yellow-200/70 shadow-xl shadow-yellow-400/20 backdrop-blur-md"
      style={{ margin: "0 auto" }}
    >
      <div className="relative px-6 sm:px-8 md:px-12 py-4">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-3 top-3 p-1 text-yellow-900 hover:text-yellow-700 transition"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Floating Badge */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold shadow-md">
          🎁 Eid Gift
        </div>

        <div className="text-center space-y-1 mt-2">
          <h2 className="text-base md:text-xl font-poppins font-semibold text-yellow-900 tracking-wide">
            EID GIFT ANNOUNCEMENT
          </h2>
          <p className="text-xs md:text-base font-lexend font-light text-yellow-900">
            As a thank you to our loyal clients from the past 3 months:
          </p>
          <p className="text-sm md:text-base font-lexend font-medium text-yellow-900">
            🎉 FREE STORE MANAGEMENT for the next 3 months!
          </p>
          <p className="text-xs md:text-base font-lexend font-light text-yellow-900 opacity-90">
            No monthly charges. A small token of gratitude from{" "}
            <span className="font-semibold">Usama Bin Amir</span> International.
          </p>
          <p className="mt-3 text-xs md:text-base font-poppins font-semibold text-yellow-900">
            🌙 Eid Mubarak! May this Eid bring peace, prosperity and blessings to you and your loved ones.❤
          </p>
        </div>
      </div>
    </motion.div>
  );
}
