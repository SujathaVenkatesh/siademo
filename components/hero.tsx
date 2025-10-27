"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const videos = ["/video1.mp4", "/video2.mp4"];
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [videos.length]);

  const particles = Array.from({ length: 12 });

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen px-6 py-20 overflow-hidden"
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.video
            key={currentVideo}
            autoPlay
            loop
            muted
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 left-0 w-full h-full object-cover blur-[0.5px]"
          >
            <source src={videos[currentVideo]} type="video/mp4" />
          </motion.video>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/60 backdrop-blur-[0.5px]"></div>
      </div>
      <div className="relative z-20 text-center text-white max-w-4xl">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D2B48C] to-[#2F4F4F]">
            Design Beyond Ordinary
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 font-medium mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Unleash the potential of your interiors with tiles that inspire
          creativity. Choose from unique textures, bold colors, and elegant
          patterns to craft a space that truly reflects you.
        </motion.p>

        <motion.a
          href="#products"
          className="inline-block bg-[#b70e0e] hover:bg-[#8a0303] text-[#fff9ef] font-semibold tracking-wide px-10 py-4 rounded-full text-lg shadow-lg border border-[#caa35a] transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Products
        </motion.a>
      </div>
      {particles.map((_, i) => {
        const size = 4 + Math.random() * 4;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        return (
          <motion.div
            key={i}
            style={{
              width: size,
              height: size,
              top: `${top}%`,
              left: `${left}%`,
              zIndex: 15,
              borderRadius: "50%",
              border: "1px solid rgba(210, 180, 140, 0.3)",
              position: "absolute",
            }}
            animate={{
              y: [0, -10 + Math.random() * 5, 0],
              x: [0, 5 - Math.random() * 5, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        );
      })}

      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#D2B48C]/0 via-[#D2B48C]/20 to-[#D2B48C]/0 pointer-events-none"
        animate={{ x: [0, -50, 0] }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      ></motion.div>
    </section>
  );
}
