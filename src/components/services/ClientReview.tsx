'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { readImageDirectory } from './ImageDirectoryReader';
import { ImageFile, sortClientImages } from '@/lib/utils';

const ClientReview = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [images, setImages] = useState<ImageFile[]>([]);

  // Load images when component mounts
  useEffect(() => {
    const loadImages = async () => {
      const clientImages = await readImageDirectory('Client Reviews');
      // Sort images to ensure top reviews come first
      setImages(sortClientImages(clientImages));
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
    <section className="w-full py-28 bg-gradient-to-br from-pink-100/100 via-blue-100/50 to-purple-200/90 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
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
              Real Reviews
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-poppins font-semibold text-gray-900 mb-6 tracking-tight"
          >
            Client <span className='text-yellow-500'>Reviews</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 font-lexend font-light max-w-2xl mx-auto"
          >
            Explore our collection of authentic client testimonials and see the real impact we've created.
          </motion.p>
        </div>

        {/* Optimized Carousel */}
        <div className="relative px-4 md:px-16">
          {/* Navigation buttons */}
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
                      <div className="relative h-full w-full rounded-2xl shadow-lg overflow-hidden">
                        <Image
                          src={image.image}
                          alt={`Client Review ${image.id}`}
                          fill
                          priority={index < 3}
                          loading={index < 3 ? "eager" : "lazy"}
                          quality={75}
                          className="object-cover transition-transform duration-500 hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Optimized Pagination */}
          <div className="flex justify-center items-center mt-8 gap-3">
            {[0, Math.floor((totalPages - 1) / 2), totalPages - 1].map((index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentPage(index);
                }}
                className={`transition-all duration-300 ${
                  currentPage === index
                    ? 'w-3 h-3 bg-yellow-400 rounded-full transform scale-110 shadow-md'
                    : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
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
            href="/reviews/client-reviews"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-lexend font-light text-white overflow-hidden rounded-full transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-yellow-500"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-yellow-500 opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative font-light flex items-center">
              Tap to see all reviews
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
                alt="Full size client review"
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

export default ClientReview;