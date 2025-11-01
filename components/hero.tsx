"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const videos = ["/video1.mp4"]; // ✅ Make sure /public/video1.mp4 exists
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
      className="relative flex items-center justify-center min-h-[100vh] px-5 sm:px-8 py-20 overflow-hidden bg-black"
    >
      {/* ✅ Background Video */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.video
            key={currentVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <source src={videos[currentVideo]} type="video/mp4" />
            Your browser does not support HTML5 video.
          </motion.video>
        </AnimatePresence>

        {/* ✅ Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/70" />
      </div>

      {/* ✅ Hero Text Content */}
      <div className="relative z-20 text-center max-w-4xl px-3 sm:px-6">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-5 sm:mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#e8d49c] via-[#f4e3a6] to-[#c0a36e] drop-shadow-[0_0_10px_rgba(0,0,0,0.4)]">
            Design Beyond Ordinary
          </span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-[#F5E8C8] font-medium mb-8 sm:mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Unleash the potential of your interiors with tiles that inspire creativity.
          Choose from unique textures, bold colors, and elegant patterns to craft a
          space that truly reflects you.
        </motion.p>

        <motion.a
          href="#products"
          className="inline-block bg-[#b70e0e] hover:bg-[#8a0303] text-[#fff9ef] font-semibold tracking-wide px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg shadow-lg border border-[#caa35a] transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1,
            duration: 0.8,
            type: 'spring',
            stiffness: 100,
          }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Products
        </motion.a>
      </div>

      {/* ✅ Floating Glow Particles */}
      {particles.map((_, i) => {
        const size = 3 + Math.random() * 5;
        return (
          <motion.div
            key={i}
            style={{
              width: size,
              height: size,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            className="absolute rounded-full border border-[#D2B48C50] z-10"
            animate={{
              y: [0, -12 + Math.random() * 6, 0],
              x: [0, 6 - Math.random() * 6, 0],
              opacity: [0.25, 0.6, 0.25],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        );
      })}
    </section>
  );
}
