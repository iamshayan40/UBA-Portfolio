"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Navbar() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const { scrollTo } = useSmoothScroll();

  // Helper for smooth scroll and closing sheet
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
    isMobile: boolean = false
  ) => {
    e.preventDefault();
    if (id) {
      scrollTo(`#${id}`);
    }
    if (isMobile) setSheetOpen(false);
  };

  return (
    // Main navigation - fixed position for consistent user access
    <nav className="fixed top-7 sm:top-10 w-full px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 z-50" role="navigation" aria-label="Main Navigation">
      <div className="w-[95%] xs:w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] max-w-5xl mx-auto bg-gradient-to-r from-white/95 via-white/98 to-gray-100/95 backdrop-blur-lg rounded-full px-3 xs:px-4 sm:px-6 py-4 xs:py-3 sm:py-3 flex justify-between items-center border-[1.5px] border-gray-300/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)] transition-all duration-300">
        {/* Brand Logo - Now links to Hero section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/#hero"
            className="relative flex justify-center items-center w-16 xs:w-20 sm:w-24 md:w-28 h-10 xs:h-9 sm:h-10 -ml-1 xs:-ml-2 sm:-ml-4"
            aria-label="UBA Home"
          >
            <Image
              src="/logo.png"
              alt="UBA Logo - Usama Bin Amir International"
              height={70}
              width={75}
              className="object-contain"
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8" role="menubar">
          {/* Certifications */}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative"
          >
            <a
              href="#certifications"
              className="relative font-poppins font-light text-gray-700 hover:text-yellow-500 transition-colors duration-300 text-md group"
              onClick={e => handleNavClick(e, 'certifications')}
            >
              Certifications
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </motion.li>

          {/* About Us */}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative"
          >
            <a
              href="#about"
              className="relative font-poppins font-light text-gray-700 hover:text-yellow-500 transition-colors duration-300 text-md group"
              onClick={e => handleNavClick(e, 'about')}
            >
              About Us
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </motion.li>

          {/* Why Us */}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <a
              href="#why-me"
              className="relative font-poppins font-light text-gray-700 hover:text-yellow-500 transition-colors duration-300 text-md group"
              onClick={e => handleNavClick(e, 'why-me')}
            >
              Why Us
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </motion.li>

          {/* Work Dropdown */}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative"
          >
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 -mb-[0.2vh] font-poppins font-light text-gray-700 hover:text-yellow-500 transition-colors duration-300 text-md group focus:outline-none">
                Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mt-[2px] text-yellow-400 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg rounded-xl p-2 mt-2">
                <Link
                  href="/reviews/sales-proofs"
                  className="block px-3 py-2 font-poppins font-light text-gray-950 rounded-lg text-sm transition-colors duration-200 hover:bg-yellow-100"
                >
                  400+ Sales Proof
                </Link>
                <Link
                  href="/reviews/meta-results"
                  className="block px-3 py-2 font-poppins font-light text-gray-950 rounded-lg text-sm transition-colors duration-200 hover:bg-yellow-100"
                >
                  Meta Ads Results
                </Link>
                <Link
                  href="/reviews/client-reviews"
                  className="block px-3 py-2 font-poppins font-light text-gray-950  rounded-lg text-sm transition-colors duration-200 hover:bg-yellow-100"
                >
                  Client Reviews
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.li>

          {/* Services */}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a
              href="#services"
              className="relative -ml-1 font-poppins font-light text-gray-700 hover:text-yellow-500 transition-colors duration-300 text-md group"
              onClick={e => handleNavClick(e, 'services')}
            >
              Services
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </motion.li>

          {/* Contact */}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a
              href="#contact-whatsapp"
              className="relative font-poppins font-light text-gray-700 hover:text-yellow-500 transition-colors duration-300 text-md group"
              onClick={e => handleNavClick(e, 'contact-whatsapp')}
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </motion.li>
        </ul>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden" aria-label="Mobile Menu">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <motion.div
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SheetTrigger asChild>
                <button type="button" onClick={() => setSheetOpen(true)}>
                  <AlignRight className="w-8 h-8 -mb-[1vh] text-yellow-400" />
                </button>
              </SheetTrigger>
            </motion.div>
            <SheetContent
              side="right"
              className="bg-white text-black flex flex-col"
            >
              <SheetHeader className="mb-8">
                <SheetTitle className="text-center mt-8 text-3xl xs:text-4xl sm:text-5xl font-semibold font-lexend">
                  Explore <span className="text-yellow-400">Us</span>
                </SheetTitle>
                <div className="border-b border-gray-600 pt-4"></div>
              </SheetHeader>
              <ul className="flex-grow space-y-6 mt-4 text-center">
                {/* Certifications */}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <a
                    href="#certifications"
                    className="block font-lexend font-light text-[5vw] text-black hover:text-yellow-500"
                    onClick={e => handleNavClick(e, 'certifications', true)}
                  >
                    CERTIFICATIONS
                  </a>
                </motion.li>

                {/* About Us */}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <a
                    href="#about"
                    className="block font-lexend font-light text-[5vw] text-black hover:text-yellow-500"
                    onClick={e => handleNavClick(e, 'about', true)}
                  >
                    ABOUT US
                  </a>
                </motion.li>

                {/* Why Us */}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <a
                    href="#why-me"
                    className="block font-lexend font-light text-[5vw] text-black hover:text-yellow-500"
                    onClick={e => handleNavClick(e, 'why-me', true)}
                  >
                    WHY US
                  </a>
                </motion.li>

                {/* 400+ Sales Proof */}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                >
                  <Link
                    href="/reviews/sales-proofs"
                    className="block font-lexend font-light text-[5vw] text-black hover:text-yellow-500"
                    onClick={() => setSheetOpen(false)}
                  >
                    400+ SALES PROOF
                  </Link>
                </motion.li>

                {/* Meta Ads Results */}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  <Link
                    href="/reviews/meta-results"
                    className="block font-lexend font-light text-[5vw] text-black hover:text-yellow-500"
                    onClick={() => setSheetOpen(false)}
                  >
                    META ADS RESULTS
                  </Link>
                </motion.li>

                {/* Countless Client Reviews */}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <Link
                    href="/reviews/client-reviews"
                    className="block font-lexend font-light text-[5vw] text-black hover:text-yellow-500"
                    onClick={() => setSheetOpen(false)}
                  >
                    COUNTLESS CLIENT REVIEWS
                  </Link>
                </motion.li>

                {/* Services */}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                >
                  <a
                    href="#services"
                    className="block font-lexend font-light text-[5vw] text-black hover:text-yellow-500"
                    onClick={e => handleNavClick(e, 'services', true)}
                  >
                    SERVICES
                  </a>
                </motion.li>

                {/* Contact */}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  <a
                    href="#contact-whatsapp"
                    className="block font-lexend font-light text-[5vw] text-black hover:text-yellow-500"
                    onClick={e => handleNavClick(e, 'contact-whatsapp', true)}
                  >
                    CONTACT
                  </a>
                </motion.li>
              </ul>
              <div className="mt-auto pb-4">
                <div className="flex justify-center space-x-8">
                  <Link href="https://wa.me/923366789031" target="_blank" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300" aria-label="WhatsApp">
                    <i className="fab fa-whatsapp text-2xl sm:text-3xl"></i>
                  </Link>
                  <Link href="https://www.facebook.com/people/Usama-Bin-Amir/61568532788440/" target="_blank" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300"><i className="fab fa-facebook text-2xl sm:text-3xl"></i></Link>
                  <Link href="https://linkedin.com" target="_blank" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300"><i className="fab fa-linkedin text-2xl sm:text-3xl"></i></Link>
                  <Link href="https://www.instagram.com/usamabinamir.internationalecom?igsh=NjY0Z21laGZuMjRk" target="_blank" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300"><i className="fab fa-instagram text-2xl sm:text-3xl"></i></Link>
                  <Link href="mailto:usamabinamirecom@gmail.com" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300"><i className="fas fa-envelope text-2xl sm:text-3xl"></i></Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}