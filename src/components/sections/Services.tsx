'use client';

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const services = [
	{
		title: "Shopify Store Creation",
		description:
			"Custom-built, mobile-first, high-converting stores designed for international success.",
		delay: 0.1,
		className: "col-span-1",
	},
	{
		title: "Manual Meta Ads Management",
		description:
			"Fully optimized campaigns with real results — crafted by experts, not algorithms.",
		delay: 0.2,
		className: "col-span-1",
	},
	{
		title: "Winning Product Research",
		description:
			"We find viral, high-demand products daily that align with market trends and consumer psychology.",
		delay: 0.3,
		className: "col-span-1",
	},
	{
		title: "Branding & Visual Identity",
		description:
			"From logo to tone to design — we shape your brand to stand out and sell out.",
		delay: 0.4,
		className: "col-span-1",
	},
	{
		title: "Full Brand Launch (Done-For-You)",
		description:
			"Domain, design, copy, store, ads — all handled professionally under one roof.",
		delay: 0.5,
		className: "col-span-1",
	},
	{
		title: "Copywriting & Sales Funnel",
		description:
			"Emotionally powerful product descriptions, hooks, and upsells that drive conversion.",
		delay: 0.6,
		className: "col-span-1",
	},
	{
		title: "International Client Support",
		description:
			"Zoom onboarding, WhatsApp support, live tracking, and premium customer care.",
		delay: 0.7,
		className: "lg:col-start-2 col-span-1",
	},
];

export default function Services() {
	return (
		<section
			id="services"
			className="relative w-full py-32 overflow-hidden bg-gradient-to-br from-purple-200/50 via-blue-100/50 to-pink-100/100"
			data-scroll-section
		>
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
						At Usama Bin Amir International Ecommerce Services, we deliver
						complete A to Z brand launch solutions — trusted by entrepreneurs
						across UAE, KSA, UK, USA, Pakistan & Europe.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4">
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
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
					className="-mt-8 text-center max-w-4xl mx-auto px-4"
					id="contact-whatsapp"
				>
					<div className="mb-8 space-y-3 sm:space-y-4">
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<img
								src="/AI.png"
								alt="AI Icon"
								className="w-20 h-20 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
							/>
							<div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-1 text-center sm:text-left">
								<span className="text-[28px] leading-tight sm:text-3xl md:text-4xl font-semibold text-gray-900 font-poppins tracking-tight">
									<span className="font-lexend text-gray-800">UBA</span> AI-Powered
									Digital
								</span>
								<span className="text-[28px] leading-tight sm:text-3xl md:text-4xl font-semibold text-gray-900 font-poppins tracking-tight">
									<span className="block sm:inline">
										Slip{" "}
										<span className="text-yellow-500">System.</span>
									</span>
								</span>
							</div>
						</div>

						<div className="space-y-4 sm:space-y-6">
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								className="text-lg sm:text-xl md:text-2xl text-gray-800 font-lexend font-light leading-relaxed"
							>
								Every client receives a{" "}
								<span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent font-medium">
									digitally generated appointment slip
								</span>{" "}
								powered by our AI-assisted booking system — confirming launch
								date, time, and scope of work.
							</motion.p>

							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								className="text-lg sm:text-xl md:text-2xl text-gray-800 font-lexend font-light leading-relaxed"
							>
								This ensures{" "}
								<span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent font-medium">
									no delays, no confusion — just professional execution.
								</span>
							</motion.p>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 space-y-4"
						>
							<p className="text-base sm:text-lg text-gray-700 font-lexend text-center">
								📱 To activate your slip and start your brand journey, contact Usama
								Bin Amir's team on WhatsApp:
							</p>

							<div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6">
								<div className="flex items-center gap-2">
									<FaWhatsapp className="text-[#25D366] text-2xl sm:text-3xl" />
									<a
										href="https://wa.me/923366789031"
										target="_blank"
										rel="noopener noreferrer"
										className="text-xl sm:text-2xl md:text-2xl font-poppins font-semibold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent hover:underline"
									>
										+92 336 6789031
									</a>
								</div>
								<span className="hidden sm:inline-block text-gray-400 text-2xl font-light">|</span>
								<div className="flex items-center gap-2">
									<FaWhatsapp className="text-[#25D366] text-2xl sm:text-3xl" />
									<a
										href="https://wa.me/923196829220"
										target="_blank"
										rel="noopener noreferrer"
										className="text-xl sm:text-2xl md:text-2xl font-poppins font-semibold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent hover:underline"
									>
										+92 319 6829220
									</a>
								</div>
							</div>

							<p className="text-sm sm:text-base text-gray-600 font-lexend italic text-center">
								Powered by human expertise. Enhanced by Artificial Intelligence.
							</p>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}