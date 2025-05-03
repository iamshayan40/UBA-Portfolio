"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion
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

export default function Navbar() {
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
          {/* About */}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative"
          >
            <Link
              href="#about"
              className="relative font-poppins font-light text-gray-700 hover:text-yellow-500 transition-colors duration-300 text-md group"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ 
                  behavior: 'smooth'
                });
              }}
            >
              About Us
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </motion.li>

          {/* Why Me */}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <Link
              href="#why-me"
              className="relative font-poppins font-light text-gray-700 hover:text-yellow-500 transition-colors duration-300 text-md group"
            >
              Why Us
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
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
            <Link
              href="/#services"
              className="relative -ml-1 font-poppins font-light text-gray-700 hover:text-yellow-500 transition-colors duration-300 text-md group"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ 
                  behavior: 'smooth'
                });
              }}
            >
              Services
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </motion.li>

          {/* Contact */}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link
              href="#contact-whatsapp"
              className="relative font-poppins font-light text-gray-700 hover:text-yellow-500 transition-colors duration-300 text-md group"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact-whatsapp')?.scrollIntoView({ 
                  behavior: 'smooth'
                });
              }}
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </motion.li>
        </ul>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden" aria-label="Mobile Menu">
          <Sheet>
            <motion.div
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SheetTrigger>
                <AlignRight className="w-8 h-8 -mb-[1vh] text-yellow-400" />
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
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <Link
                    href="/#about"
                    className="block font-lexend font-light text-[5vw] text-black hover:text-yellow-500"
                  >
                    ABOUT
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Link
                    href="/why-me"
                    className="block font-lexend font-light text-[5vw] text-black hover:text-yellow-500"
                  >
                    WHY US
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <Link
                    href="/reviews/client-reviews"
                    className="block font-lexend font-light text-[5vw] text-black hover:text-yellow-500"
                  >
                    COUNTLESS CLIENT REVIEWS
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                >
                  <Link
                    href="/proof/sales-proof"
                    className="block font-lexend font-light text-[5vw] text-black hover:text-yellow-500"
                  >
                    400+ SALES PROOF
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  <Link
                    href="/ads/meta-results"
                    className="block font-lexend font-light text-[5vw] text-black hover:text-yellow-500"
                  >
                    META ADS RESULT
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <Link
                    href="/#services"
                    className="block font-lexend font-light text-[5vw] text-black hover:text-yellow-500"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('services')?.scrollIntoView({ 
                        behavior: 'smooth'
                      });
                    }}
                  >
                    SERVICES
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                >
                  <Link
                    href="#contact-whatsapp"
                    className="block font-lexend font-light text-[5vw] text-black hover:text-yellow-500"
                    scroll={false}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact-whatsapp')?.scrollIntoView({ 
                        behavior: 'smooth'
                      });
                    }}
                  >
                    CONTACT
                  </Link>
                </motion.li>
              </ul>

              <div className="mt-auto pb-4">
                <div className="flex justify-center space-x-8">
                  <Link
                    href="https://github.com"
                    target="_blank"
                    className="text-gray-700 hover:text-yellow-500 transition-colors duration-300"
                  >
                    <i className="fab fa-whatsapp text-2xl sm:text-3xl"></i>
                  </Link>
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    className="text-gray-700 hover:text-yellow-500 transition-colors duration-300"
                  >
                    <i className="fab fa-facebook text-2xl sm:text-3xl"></i>
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    className="text-gray-700 hover:text-yellow-500 transition-colors duration-300"
                  >
                    <i className="fab fa-linkedin text-2xl sm:text-3xl"></i>
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    className="text-gray-700 hover:text-yellow-500 transition-colors duration-300"
                  >
                    <i className="fab fa-instagram text-2xl sm:text-3xl"></i>
                  </Link>
                  <Link
                    href="mailto:example@example.com"
                    className="text-gray-700 hover:text-yellow-500 transition-colors duration-300"
                  >
                    <i className="fas fa-envelope text-2xl sm:text-3xl"></i>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
