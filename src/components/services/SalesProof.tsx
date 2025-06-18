'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { readImageDirectory } from './ImageDirectoryReader';
import { ImageFile } from '@/lib/utils';

const SalesProof = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [images, setImages] = useState<ImageFile[]>([]);

  // Load images when component mounts
  useEffect(() => {
    const loadImages = async () => {
      const salesImages = await readImageDirectory('Sales Proofs');
      setImages(salesImages);
      if (typeof window !== 'undefined' && window.locomotive) {
        setTimeout(() => window.locomotive.update(), 100);
      }
    };
    loadImages();
  }, []);

  // Handle window resize
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Optimize with useMemo
  const itemsPerPage = useMemo(() => {
    if (windowWidth < 768) return 1; // Mobile
    if (windowWidth < 1024) return 2; // Tablet
    return 3; // Desktop
  }, [windowWidth]);

  const totalPages = useMemo(() => 
    Math.ceil(images.length / itemsPerPage)
  , [images.length, itemsPerPage]);

  // Preload first page of images
  useEffect(() => {
    const preloadImages = async () => {
      const firstPageImages = images.slice(0, itemsPerPage);
      await Promise.all(
        firstPageImages.map(image => {
          return new Promise((resolve) => {
            const img = document.createElement('img');
            img.src = image.image;
            img.onload = resolve;
          });
        })
      );
      setImagesLoaded(true);
    };
    preloadImages();
  }, [images, itemsPerPage]);

  // Optimize carousel autoplay
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentPage(prev => (prev === totalPages - 1 ? 0 : prev + 1));
    }, 12000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, totalPages]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const handleImageClick = useCallback((imageSrc: string) => {
    setSelectedImage(imageSrc);
  }, []);

  if (images.length === 0) return null;

  return (
    <section className="w-full py-28 bg-gradient-to-br from-blue-100/100 via-purple-100/50 to-pink-200/50 relative overflow-hidden" data-scroll-section>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-yellow-500/10 to-yellow-500/20 rounded-full text-yellow-600 text-sm font-lexend font-light mb-4 backdrop-blur-sm border border-yellow-200">
              Real Sales
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-poppins font-semibold text-gray-900 mb-6 tracking-tight"
          >
            Sales <span className="text-yellow-500">Proofs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 font-lexend font-light max-w-2xl mx-auto"
          >
            Real sales proofs from satisfied clients.
          </motion.p>
        </div>

        {/* Optimized Carousel */}
        <div className="relative px-4 md:px-16">
          {images.length > itemsPerPage && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-gray-700 transition-all duration-300 hover:scale-110 z-20"
                aria-label="Previous slide"
              >
                <IoIosArrowBack className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-gray-700 transition-all duration-300 hover:scale-110 z-20"
                aria-label="Next slide"
              >
                <IoIosArrowForward className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentPage}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center gap-4 md:gap-8"
              >
                {images
                  .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
                  .map((image, index) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="relative w-full md:w-96 aspect-[3/4] cursor-pointer"
                      onClick={() => handleImageClick(image.image)}
                    >
                      <div className="relative h-full w-full overflow-hidden">
                        <Image
                          src={image.image}
                          alt={`Sales Proof ${image.id}`}
                          fill
                          priority={index < 3}
                          loading={index < 3 ? "eager" : "lazy"}
                          quality={100}
                          className="object-contain w-full h-full"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Optimized Pagination */}
          {images.length > itemsPerPage && (
            <div className="flex justify-center items-center mt-8 gap-2">
              {/* Previous button */}
              <button
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentPage(prev => (prev === 0 ? totalPages - 1 : prev - 1));
                }}
                className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all duration-200"
                aria-label="Previous slide"
              >
                <IoIosArrowBack className="w-4 h-4" />
              </button>

              {(() => {
                let pages = [];
                let startPage = currentPage;
                let endPage = Math.min(startPage + 3, totalPages - 1);

                // Adjust start and end page numbers
                if (endPage - startPage < 3) {
                  startPage = Math.max(0, endPage - 3);
                }

                // First page
                if (startPage > 0) {
                  pages.push(
                    <button
                      key={0}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setCurrentPage(0);
                      }}
                      className={`w-8 h-8 rounded-lg transition-all duration-200 ${
                        currentPage === 0
                          ? 'bg-yellow-400 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                      aria-label="Go to first slide"
                    >
                      1
                    </button>
                  );
                  if (startPage > 1) {
                    pages.push(
                      <span key="dots1" className="px-1 text-gray-400">...</span>
                    );
                  }
                }

                // Page numbers
                for (let i = startPage; i <= endPage; i++) {
                  pages.push(
                    <button
                      key={i}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setCurrentPage(i);
                      }}
                      className={`w-8 h-8 rounded-lg transition-all duration-200 ${
                        currentPage === i
                          ? 'bg-yellow-400 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    >
                      {i + 1}
                    </button>
                  );
                }

                // Last page
                if (endPage < totalPages - 1) {
                  if (endPage < totalPages - 2) {
                    pages.push(
                      <span key="dots2" className="px-1 text-gray-400">...</span>
                    );
                  }
                  pages.push(
                    <button
                      key={totalPages - 1}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setCurrentPage(totalPages - 1);
                      }}
                      className={`w-8 h-8 rounded-lg transition-all duration-200 ${
                        currentPage === totalPages - 1
                          ? 'bg-yellow-400 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                      aria-label="Go to last slide"
                    >
                      {totalPages}
                    </button>
                  );
                }

                return pages;
              })()}

              {/* Next button */}
              <button
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentPage(prev => (prev === totalPages - 1 ? 0 : prev + 1));
                }}
                className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all duration-200"
                aria-label="Next slide"
              >
                <IoIosArrowForward className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link 
            href="/reviews/sales-proofs"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-lexend font-light text-white overflow-hidden rounded-full transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-yellow-500"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-yellow-500 opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative font-light flex items-center">
              View all proofs
              <svg
                className="w-5 h-5 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </span>
          </Link>
        </motion.div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-5xl aspect-[3/4]">
              <Image
                src={selectedImage}
                alt="Full size image"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SalesProof;