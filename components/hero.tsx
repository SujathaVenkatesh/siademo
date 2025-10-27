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
      {/* Background Video Slider */}
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

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-[0.5px]"></div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-20 text-center max-w-4xl">

        {/* ✅ NEW TITLE COLORS */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#e8d49c] via-[#f4e3a6] to-[#c0a36e] drop-shadow-[0_0_10px_rgba(0,0,0,0.4)]">
            Design Beyond Ordinary
          </span>
        </motion.h1>

        {/* ✅ NEW DESCRIPTION COLOR */}
        <motion.p
          className="text-lg md:text-xl text-[#F5E8C8] font-medium mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Unleash the potential of your interiors with tiles that inspire creativity.
          Choose from unique textures, bold colors, and elegant patterns to craft a
          space that truly reflects you.
        </motion.p>

        {/* CTA Button */}
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

      {/* Floating Glow Particles */}
      {particles.map((_, i) => {
        const size = 4 + Math.random() * 4;
        return (
          <motion.div
            key={i}
            style={{
              width: size,
              height: size,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            className="absolute rounded-full border border-[#D2B48C50] z-15"
            animate={{
              y: [0, -10 + Math.random() * 5, 0],
              x: [0, 5 - Math.random() * 5, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        );
      })}

      {/* Subtle Shine Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#e8d49c00] via-[#e8d49c30] to-[#e8d49c00] pointer-events-none"
        animate={{ x: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}
