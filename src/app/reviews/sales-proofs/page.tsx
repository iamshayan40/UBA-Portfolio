'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { readImageDirectory } from '@/components/services/ImageDirectoryReader';
import { ImageFile } from '@/lib/utils';

const ITEMS_PER_PAGE = 12;

export default function SalesProofsPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState<ImageFile[]>([]);

  // Load images when component mounts
  useEffect(() => {
    const loadImages = async () => {
      const salesImages = await readImageDirectory('Sales Proofs');
      setImages(salesImages);
      setMounted(true);
    };
    loadImages();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);

  // Get current images
  const getCurrentImages = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return images.slice(startIndex, endIndex);
  };

  useEffect(() => {
    if (mounted && typeof window !== 'undefined' && (window as any).locomotive) {
      setTimeout(() => (window as any).locomotive.update(), 100);
    }
  }, [images, mounted]);

  if (!mounted) return null;

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 relative" data-scroll-section>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0866FF]/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10">
        {/* Back button */}
        <div className="absolute top-4 left-5 z-50">
          <Link 
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <span className="w-10 h-10 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <IoIosArrowBack className="w-5 h-5 text-black" />
            </span>
            <span className="font-lexend font-light">Back to home</span>
          </Link>
        </div>

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block"
            >
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-yellow-500/10 to-yellow-500/20 rounded-full text-yellow-600 text-sm font-lexend font-light mb-4 backdrop-blur-sm">
                Sales Portfolio
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-poppins font-semibold text-gray-900 mb-6 tracking-tight"
            >
              Sales <span className="text-yellow-500">Proofs</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 font-lexend font-light max-w-3xl mx-auto"
            >
              Browse through our complete collection of sales proofs.
            </motion.p>
          </div>

          {/* Results Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 xl:gap-10"
          >
            {getCurrentImages().map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: (index % 8) * 0.1,
                  duration: 0.4,
                  ease: "easeOut"
                }}
                onClick={() => setSelectedImage(image.image)}
                className="group relative cursor-pointer overflow-hidden"
              >
                <div className="relative w-full pt-[133%]">
                  <Image
                    src={image.image}
                    alt={`Sales Proof ${image.id}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading={index < 8 ? "eager" : "lazy"}
                    quality={100}
                    className="object-contain w-full h-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2">
              {/* Previous button */}
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg transition-all duration-200 font-lexend font-light ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <IoIosArrowBack className="w-5 h-5" />
              </button>

              {/* Page numbers */}
              {(() => {
                let pages = [];
                let startPage = currentPage;
                let endPage = currentPage + 3;

                // Adjust start and end page numbers
                if (endPage > totalPages) {
                  startPage = Math.max(1, totalPages - 3);
                  endPage = totalPages;
                }
                if (startPage > 1) {
                  pages.push(
                    <button
                      key={1}
                      onClick={() => setCurrentPage(1)}
                      className="px-4 py-2 rounded-lg transition-all duration-200 font-lexend font-light bg-gray-100 text-gray-600 hover:bg-gray-200"
                    >
                      1
                    </button>
                  );
                  if (startPage > 2) {
                    pages.push(
                      <span key="dots1" className="px-2 text-gray-400">...</span>
                    );
                  }
                }

                // Add page numbers
                for (let i = startPage; i <= endPage; i++) {
                  pages.push(
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      className={`px-4 py-2 rounded-lg transition-all duration-200 font-lexend font-light ${
                        currentPage === i
                          ? 'bg-yellow-400 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {i}
                    </button>
                  );
                }

                // Add last page if needed
                if (endPage < totalPages) {
                  if (endPage < totalPages - 1) {
                    pages.push(
                      <span key="dots2" className="px-2 text-gray-400">...</span>
                    );
                  }
                  pages.push(
                    <button
                      key={totalPages}
                      onClick={() => setCurrentPage(totalPages)}
                      className="px-4 py-2 rounded-lg transition-all duration-200 font-lexend font-light bg-gray-100 text-gray-600 hover:bg-gray-200"
                    >
                      {totalPages}
                    </button>
                  );
                }

                return pages;
              })()}

              {/* Next button */}
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg transition-all duration-200 font-lexend font-light ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <IoIosArrowForward className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>

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
              quality={100}
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}