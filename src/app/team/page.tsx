'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/sections/Navbar'

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Yousaf",
      role: "Co-Founder & Head of Internal Operations",
      description: "Manages backend setups, internal systems, and seamless project flow. Department: Store Operations & Technical Management Also Oversees: Marketplace Strategy & Offer Engineering",
    },
    {
      name: "Muhammad Shayan",
      role: "Website & Backend Development Lead",
      description: "Manages website architecture, backend systems, and technical infrastructure. Specializes in full-stack development and system optimization. Department: Technical Development & Infrastructure",
    },
    {
      name: "Ramla",
      role: "Head of International Client Relations",
      description: "Handles Zoom calls, onboarding, and foreign client deal closing. Department: Client Experience & Global Sales Also Oversees: Client Loyalty & Re-Engagement Tactics",
    },
    {
      name: "Mubina",
      role: "Head of Product Research",
      description: "Sources high-demand, global-winning products daily. Department: Product Research & Market Intelligence Also Assists: UGC Angle Ideation for Product Selection",
    },
    {
      name: "Muqeet",
      role: "Head of Brand Design & Shopify UI",
      description: "Designs high-converting stores and premium brand identities. Department: Store Design & Brand Identity",
    },
    {
      name: "Noreen",
      role: "Head of Copy & Funnel Strategy",
      description: "Writes descriptions, landing pages, and ad copy that converts. Department: Copywriting & Conversion Funnels Also Oversees: Email Flows & Recovery Sequences",
    },
    {
      name: "Sawera",
      role: "Head of Visuals & Creatives",
      description: "Creates scroll-stopping images, reels, and ad visuals. Department: Visual Content & Creative Direction Also Handles: Short-form content for Reels & Ads",
    },
    {
      name: "Faizan",
      role: "Head of Analytics & Performance Optimization",
      description: "Monitors store & ad data, suggests scaling decisions & reports performance. Department: Data Analytics & Growth Optimization",
    },
    {
      name: "Arbab",
      role: "Client Support, Scheduling & Retention Manager",
      description: "Handles WhatsApp support, books appointments, and builds client loyalty. Department: Communication, Scheduling & After-Sales Support Also Manages: Feedback, Reviews & Repeat Client Flow",
    }
  ];

  return (
    <main className="bg-gradient-to-br overflow-x-hidden from-pink-50 via-white to-blue-50 min-h-screen">
      <Navbar />
      <section className="relative w-full py-32 md:py-40">
        {/* Subtle background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[800px] h-[800px] bg-pink-100/30 rounded-full blur-3xl -top-48 -left-24 animate-pulse"/>
          <div className="absolute w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl top-96 right-12 animate-pulse delay-700"/>
          <div className="absolute w-[900px] h-[900px] bg-purple-100/30 rounded-full blur-3xl bottom-0 left-1/2 animate-pulse delay-1000"/>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-lexend tracking-[0.4em] uppercase bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-transparent bg-clip-text font-bold"
            >
              Meet Our Experts
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-poppins font-bold mt-6 mb-8 text-gray-800"
            >
              The Dream <span className='text-yellow-500'>Team</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 font-lexend text-lg leading-relaxed"
            >
              Exceptional talents united by passion, driving innovation and excellence in every project.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                
                <div className="relative h-full bg-white rounded-2xl p-8 
                  shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]
                  transition-all duration-500 
                  group-hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.2)]
                  border border-gray-100
                  group-hover:border-transparent"
                >
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 font-medium mt-2 text-sm tracking-wider uppercase">
                      {member.role}
                    </p>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6"></div>
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamPage;