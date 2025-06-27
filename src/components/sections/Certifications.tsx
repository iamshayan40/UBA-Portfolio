'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certificates = [
  {
    img: '/Certificates/meta.png',
    title: 'Social Media Marketing',
  },
  {
    img: '/Certificates/pannclveniya.png',
    title: 'Marketing',
  },
  {
    img: '/Certificates/llinios.png',
    title: 'Marketing in a Digital World',
  },
  {
    img: '/Certificates/google.png',
    title: 'Digital Marketing and E-commerce',
  },
];

const fallbackImg = '/logo.png';

const Certifications = () => {
  const [imgError, setImgError] = useState(Array(certificates.length).fill(false));
  const [zoomImg, setZoomImg] = useState<string | null>(null);

  const handleImgError = (idx: number) => {
    setImgError((prev) => {
      const arr = [...prev];
      arr[idx] = true;
      return arr;
    });
  };

  return (
    <section id='certifications' data-scroll-section className="w-full bg-gradient-to-br from-pink-100/45 to-blue-100/30 py-16 px-4 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-black">Certification</span>
          <span className="text-yellow-500">'s</span>
        </h2>
        <p className="text-center font-light font-lexend text-gray-600 text-base md:text-lg mb-12 max-w-2xl mx-auto">
          Certified by Google, Meta and Top Global Universities.
        </p>

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {certificates.slice(0, 3).map((cert, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center transition-transform hover:scale-[1.03]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div
                className="w-full h-60 sm:h-72 flex items-center justify-center cursor-pointer"
                onClick={() => setZoomImg(imgError[idx] ? fallbackImg : cert.img)}
              >
                <img
                  src={imgError[idx] ? fallbackImg : cert.img}
                  alt={cert.title}
                  onError={() => handleImgError(idx)}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-lg font-lexend font-light text-gray-800 mt-5">{cert.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex justify-center mt-12">
          <motion.div
            className="flex flex-col items-center text-center transition-transform hover:scale-[1.03] w-full max-w-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div
              className="w-full h-60 sm:h-72 flex items-center justify-center cursor-pointer"
              onClick={() => setZoomImg(imgError[3] ? fallbackImg : certificates[3].img)}
            >
              <img
                src={imgError[3] ? fallbackImg : certificates[3].img}
                alt={certificates[3].title}
                onError={() => handleImgError(3)}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h3 className="text-lg font-lexend font-light text-gray-800 mt-5">
              {certificates[3].title}
            </h3>
          </motion.div>
        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
      {zoomImg && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity"
          onClick={() => setZoomImg(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-4 rounded-xl shadow-xl max-w-3xl w-full animate-scale-in cursor-pointer"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <img
              src={zoomImg}
              alt="Zoom Preview"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
