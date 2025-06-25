"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let loco: any = null;
    let lastScrollY = 0;

    // Handler for both window and Locomotive
    const handleScroll = (obj?: any) => {
      // Locomotive event: obj.scroll.y, fallback: window.pageYOffset
      const scrollY =
        obj && obj.scroll && typeof obj.scroll.y === "number"
          ? obj.scroll.y
          : window.pageYOffset || document.documentElement.scrollTop;
      lastScrollY = scrollY;
      setIsVisible(scrollY > 300);
    };

    // Listen to window scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Listen to Locomotive scroll if available
    loco = (window as any).locomotive;
    if (loco && loco.on) {
      loco.on("scroll", handleScroll);
    }

    // If Locomotive is initialized later, listen for it
    const checkLoco = setInterval(() => {
      if (!(window as any).locomotive) return;
      if (loco !== (window as any).locomotive) {
        if (loco && loco.off) loco.off("scroll", handleScroll);
        loco = (window as any).locomotive;
        if (loco && loco.on) loco.on("scroll", handleScroll);
      }
    }, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (loco && loco.off) loco.off("scroll", handleScroll);
      clearInterval(checkLoco);
    };
  }, []);

  const scrollToTopHandler = () => {
    const loco = (window as any).locomotive;
    if (loco && loco.scrollTo) {
      loco.scrollTo(0, { duration: 1200, disableLerp: false });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTopHandler}
          className="fixed bottom-6 right-6 z-50 p-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;