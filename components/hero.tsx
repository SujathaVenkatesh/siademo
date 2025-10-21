"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const videos = ["/video1.mp4", "/video2.mp4", "/video3.mp4"];
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000); // 10 seconds per video
    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen px-6 py-20 overflow-hidden"
    >
      {/* --- Video Background --- */}
      <div className="absolute inset-0">
        <video
          key={currentVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90 blur-[2px] transition-all duration-1000"
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </video>

        {/* Gradient + Blur Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80 backdrop-blur-sm"></div>
      </div>

      {/* --- Content --- */}
      <div className="relative z-10 text-center text-white max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D2B48C] to-[#2F4F4F]">
            Transform Your Space
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 font-medium mb-10 leading-relaxed">
          Discover our premium collection of tiles, ceramics, and building
          essentials. Elevate your home with exquisite designs and unmatched
          quality.
        </p>

        <a
          href="#portfolio"
          className="inline-block bg-[#D2B48C] hover:bg-[#2F4F4F] text-black font-semibold tracking-wide px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-[#D2B48C]/40 transition-all duration-300"
        >
          View Our Portfolio
        </a>
      </div>
    </section>
  );
}

