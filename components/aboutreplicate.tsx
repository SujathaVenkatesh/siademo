"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cards = [
    { title: "Nature of Business", value: "Trader - Retailer" },
    { title: "Total Employees", value: "Upto 10 People" },
    { title: "GST Registration Date", value: "01-07-2017" },
    { title: "Legal Status", value: "Proprietorship" },
    { title: "Annual Turnover", value: "0 - 40 L" },
    { title: "GST No.", value: "33AADPM2098K1ZK" },
  ];

  return (
    <section
      id="about"
      className="relative flex flex-col lg:flex-row items-start justify-between min-h-screen gap-12 lg:gap-20 px-6 md:px-12 lg:px-32 py-20 bg-white overflow-hidden"
    >
      {/* --- LEFT SIDE CONTENT --- */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full lg:w-5/12 mb-16 lg:mb-0"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 mb-3"
        >
          <div className="w-2 h-2 bg-[#C49A6C] rounded-full animate-pulse" />
          <p className="uppercase text-sm font-semibold text-gray-700 tracking-wide">
            Our About Us
          </p>
        </motion.div>

        {/* Welcome Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 border-l-4 border-[#C49A6C] bg-gray-50 shadow-md rounded-md hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            WELCOME TO Sun Italia Associates
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Wholesaler of Ceramic Tiles, Vitrified Tiles, Mosaic Tiles,
            Vitrified Slab & Porcelain Floor Tiles since 2017 in Chennai, Tamil
            Nadu.
          </p>
        </motion.div>

        {/* Quick Info Grid with Staggered Animations */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 15px 25px rgba(0,0,0,0.1)",
              }}
              transition={{ type: "spring", stiffness: 120 }}
              className="p-4 bg-gray-50 rounded-md shadow-md cursor-pointer"
            >
              <p className="font-semibold text-gray-800">{card.title}</p>
              <p className="text-gray-700">{card.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(196,154,108,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="mt-8 group bg-black text-white px-8 py-4 font-semibold rounded-md text-lg flex items-center gap-3"
        >
          GET IN TOUCH
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
        </motion.button>
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
              25+
            </h1>
            <p className="text-gray-800 font-medium text-lg">
              Years Of Experience
            </p>
          </motion.div>

          {/* First Image */}
          <motion.img
            initial={{ opacity: 0, y: 0, scale: 0.9 }}
            animate={{ opacity: 1, y: 20, scale: 1 }} // moved slightly down
            transition={{ delay: 0.8, duration: 0.8 }}
            src="/images/aboutimage.jpg"
            alt="marble interior"
            className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:left-12 lg:translate-x-0 w-[65%] md:w-[70%] h-auto rounded-lg shadow-xl object-cover z-10"
          />

          {/* Second Image (on top) */}
          <motion.img
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 30, y: -20, scale: 1 }} // moved up and right
            transition={{ delay: 1, duration: 0.8 }}
            src="/images/about-image2.jpg"
            alt="marble detail"
            className="ml-10 lg:ml-80 w-[40%] md:w-[50%] h-130 rounded-lg shadow-xl object-cover z-20"
          />
        </div>
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

          {/* Mobile-friendly badge */}
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
