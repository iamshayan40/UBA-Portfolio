'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setStatus('loading');

      const formData = new FormData();
      formData.append("access_key", "f75682cd-ed36-4731-8861-802e48e704aa");
      formData.append("from_name", "Newsletter Subscription");
      formData.append("subject", "New Newsletter Subscription");
      formData.append("email", email);
      formData.append("message", `New newsletter subscription from email: ${email}`);

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage('Thank you for subscribing!');
        
        // Also store in local file as backup
        await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        
        setEmail('');
      } else {
        throw new Error(data.message || 'Failed to subscribe');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again.');
      console.error('Subscription error:', error);
    }

    // Reset status after 3 seconds
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 3000);
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 pb-0 mb-0" data-scroll-section>
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          <div className="space-y-2 md:space-y-4">
            <div className="flex items-start md:items-center gap-3 md:gap-4">
              <Link href="/" className="block group shrink-0">
                <Image
                  src="/logo.png"
                  alt="UBA Logo"
                  width={65}
                  height={60}
                  className="md:w-[75px] md:h-[70px] object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 group-hover:filter-none transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,0,0.5)]"
                />
              </Link>
              <div className="space-y-1 md:space-y-2">
                <p className="text-xs md:text-sm font-lexend font-light max-w-[200px] leading-tight">
                  Building digital excellence with proven success across UAE, KSA, Pakistan, UK and more.
                </p>
                <p className="text-xs md:text-sm font-lexend font-medium text-yellow-400">
                  CEO & Founder: Usama Amir Khosa
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-2 md:mt-0">
            <h4 className="font-semibold text-white mb-1 md:mb-3 font-poppins text-sm md:text-base">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-0 md:gap-x-0.5 gap-y-0.5 md:gap-y-1 max-w-[200px]">
              {/* Left Column */}
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 font-lexend font-light text-xs md:text-sm">
                  About Us
                </Link>
              </li>
              {/* Right Column */}
              <li>
                <Link href="/reviews/sales-proofs" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 font-lexend font-light text-sm">
                  Sales Proof
                </Link>
              </li>
              <li>
                <Link href="/#why-me" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 font-lexend font-light text-sm">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/reviews/meta-results" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 font-lexend font-light text-sm">
                  Meta Results
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 font-lexend font-light text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/reviews/client-reviews" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 font-lexend font-light text-sm">
                  Client Reviews
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-semibold text-white mb-4 font-poppins">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://wa.me/+923416019234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 font-lexend font-light text-sm"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp Support
                </a>
              </li>
              <li>
                <p className="text-gray-400 font-lexend font-light text-sm">Response Time: Within 24 hours</p>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4 font-poppins">Connect With Us</h4>
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-lexend font-light">Subscribe to our newsletter</p>
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-sm font-lexend font-light text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 transition-colors pr-24"
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="absolute right-1.5 top-1.5 min-w-[80px] px-3 py-1 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 text-sm font-lexend rounded-md transition-all duration-300 disabled:opacity-50"
                    >
                      {status === 'loading' ? 'Wait...' : 'Subscribe'}
                    </button>
                  </div>
                  {status === 'success' && (
                    <p className="text-xs text-green-400 font-lexend">{message}</p>
                  )}
                  {status === 'error' && (
                    <p className="text-xs text-red-400 font-lexend">{message}</p>
                  )}
                </form>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/+923416019234"
                  className="text-gray-400 hover:text-green-400 transform hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={24} />
                </a>
                <a
                  href="https://www.instagram.com/usama.internationalecom?igsh=NjY0Z21laGZuMjRk"
                  className="text-gray-400 hover:text-pink-400 transform hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61568532788440"
                  className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/usamabinamir"
                  className="text-gray-400 hover:text-blue-500 transform hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 md:mt-12 pt-4 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-lexend font-light">
              Copyright © {new Date().getFullYear()} UBA International. All rights reserved.
            </p>
            <p className="text-sm font-lexend font-light">
              Website developed by{' '}
              <a 
                href="https://portfolio-devshayan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group"
              >
                <span className="relative z-10">DevShayan</span>
                <span className="absolute inset-0 -z-10 bg-yellow-400/20 blur-sm scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
