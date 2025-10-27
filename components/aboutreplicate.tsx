"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex flex-col lg:flex-row items-start justify-between min-h-screen gap-12 lg:gap-20 px-6 md:px-12 lg:px-32 py-20 bg-white overflow-hidden"
    >
      {/* --- LEFT SIDE CONTENT --- */}
      {/* MAIN ABOUT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl space-y-6 text-justify"
      >
        {/* Heading Tag */}
        <p className="text-[#C49A6C] text-sm tracking-[3px] font-semibold uppercase">
          About Us
        </p>

        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
          Sun Italia Associates
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed">
          For over 30 years, Sun Italia Associates has been a trusted wholesale
          dealer of premium quality tiles in Chennai, delivering style,
          durability, and elegance across India.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed">
          We bring world-class designs that transform homes, workplaces, and
          luxury spaces into timeless masterpieces.
        </p>
      </motion.div>

      {/* --- RIGHT SIDE IMAGES --- */}
      <div className="relative z-10 w-full lg:w-6/12 flex items-center justify-center lg:justify-start">
        <div className="hidden lg:block relative w-full h-full">
          {/* Experience Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-10 text-center lg:text-left z-20"
          >
            <h1 className="text-[100px] md:text-[120px] font-extrabold text-[#C49A6C] leading-none animate-bounce">
              30+
            </h1>
            <p className="text-gray-800 font-medium text-lg">
              Years Of Experience
            </p>
          </motion.div>

          {/* First Image */}
          <motion.img
            initial={{ opacity: 0, y: 0, scale: 0.9 }}
            animate={{ opacity: 1, y: 20, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            src="/images/aboutimage.jpg"
            alt="marble interior"
            className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:left-12 lg:translate-x-0 w-[65%] md:w-[70%] h-auto rounded-lg shadow-xl object-cover z-10"
          />

          {/* Second Image */}
          <motion.img
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 30, y: -20, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            src="/images/about-image2.jpg"
            alt="marble detail"
            className="ml-10 lg:ml-80 w-[40%] md:w-[50%] h-130 rounded-lg shadow-xl object-cover z-20"
          />
        </div>

        {/* Mobile View Images */}
        <div className="flex flex-col lg:hidden gap-6 w-full">
          <motion.img
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            src="/images/aboutimage.jpg"
            alt="marble interior"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />

          <motion.img
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            src="/images/about-image2.jpg"
            alt="marble detail"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />

          {/* Mobile badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-[#C49A6C]">25+</h1>
            <p className="text-gray-800 font-medium text-base">
              Years Of Experience
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
