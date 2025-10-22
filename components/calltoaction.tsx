"use client";

import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Background Video */}
      <motion.video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <source src="/video3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Overlay to dim video */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Ready to Transform Your Space?{" "}
          <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#C49A6C] via-[#D2B48C] to-[#2F4F4F] animate-gradient">
            Choose Your Perfect Tile
          </span>
          <br />
          Today!
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Our premium tile collection is ready for your home or office. Browse now and get the perfect design delivered directly to you. Don’t wait — create your dream space today!
        </motion.p>

        <motion.div
          className="flex gap-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <a
            href="#products"
            className="px-6 py-3 bg-gradient-to-r from-[#C49A6C] via-[#D2B48C] to-[#F5E6D3] text-gray-900 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            View All Products
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
          >
            Enquire Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
