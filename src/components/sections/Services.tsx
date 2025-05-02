'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Shopify Store Creation",
    description: "Custom-built, mobile-first, high-converting stores designed for international success.",
    delay: 0.1,
    className: "col-span-1"
  },
  {
    title: "Manual Meta Ads Management",
    description: "Fully optimized campaigns with real results — crafted by experts, not algorithms.",
    delay: 0.2,
    className: "col-span-1"
  },
  {
    title: "Winning Product Research",
    description: "We find viral, high-demand products daily that align with market trends and consumer psychology.",
    delay: 0.3,
    className: "col-span-1"
  },
  {
    title: "Branding & Visual Identity",
    description: "From logo to tone to design — we shape your brand to stand out and sell out.",
    delay: 0.4,
    className: "col-span-1"
  },
  {
    title: "Full Brand Launch (Done-For-You)",
    description: "Domain, design, copy, store, ads — all handled professionally under one roof.",
    delay: 0.5,
    className: "col-span-1"
  },
  {
    title: "Copywriting & Sales Funnel",
    description: "Emotionally powerful product descriptions, hooks, and upsells that drive conversion.",
    delay: 0.6,
    className: "col-span-1"
  },
  {
    title: "International Client Support",
    description: "Zoom onboarding, WhatsApp support, live tracking, and premium customer care.",
    delay: 0.7,
    className: "lg:col-start-2 col-span-1"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full py-32 overflow-hidden bg-gradient-to-br from-purple-200/50 via-blue-100/50 to-pink-100/100">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-light tracking-wider text-yellow-600 font-lexend bg-yellow-50 rounded-full backdrop-blur-sm border border-yellow-100">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
            <span className="text-gray-900">Our</span>{" "}
            <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-lexend font-light">
            At Usama Bin Amir International Ecommerce Services, we deliver complete A to Z brand launch solutions — trusted by entrepreneurs across UAE, KSA, UK, USA, Pakistan & Europe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.5 }}
              className={`group relative ${service.className}`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/80 rounded-xl sm:rounded-2xl transform rotate-1 scale-[1.01] transition-transform duration-500 group-hover:rotate-2 group-hover:scale-[1.02]" />
              <div className="relative h-full p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group-hover:border-yellow-100/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/0 to-yellow-50/50 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-4 font-poppins group-hover:text-yellow-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-lexend font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Elegant Separator */}
        <div className="my-24 flex items-center justify-center gap-4">
          <div className="h-px w-full max-w-[100px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
          </div>
          <div className="h-px w-full max-w-[100px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center max-w-2xl mx-auto"
          id="contact-whatsapp"
        >
          <div className="mb-8 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-poppins">
              Ready to Transform Your <span className="text-yellow-500">Business?</span>
            </h3>
            <p className="text-gray-600 font-lexend text-lg">
               Subscribe to a package or request custom pricing by contacting Usama Bin Amir&apos;s team on WhatsApp
            </p>
            <p className="text-yellow-600 font-poppins font-medium text-xl">
              Let&apos;s launch something legendary.
            </p>
          </div>

          <Link
            href="https://wa.me/923366789031"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#25D366] rounded-full transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#128C7E] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <svg
              className="relative w-6 h-6 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="relative">Contact Us on WhatsApp</span>
          </Link>
          <p className="mt-4 text-gray-500 font-lexend">+92 336 6789031</p>
        </motion.div>
      </div>
    </section>
  );
}