"use client";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Updated nav items
  const navItems = ["Home", "About", "Products", "Contact"];

  return (
    <header className="bg-black border-b border-gray-800 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-20 h-20 relative">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Outer diamond */}
                <g stroke="#D4AF8F" strokeWidth="8" fill="none">
                  <path d="M 100 20 L 180 100 L 100 180 L 20 100 Z" />
                </g>

                {/* Decorative curves */}
                <g stroke="#D4AF8F" strokeWidth="6" fill="none">
                  <path d="M 60 80 Q 100 60 140 80" />
                  <path d="M 60 120 Q 100 140 140 120" />
                </g>

                {/* Accent diamonds */}
                <rect x="85" y="35" width="30" height="30" fill="#4A7C7E" transform="rotate(45 100 50)" />
                <rect x="85" y="135" width="30" height="30" fill="#4A7C7E" transform="rotate(45 100 150)" />
                <rect x="35" y="85" width="20" height="20" fill="#C9915F" transform="rotate(45 45 95)" />
                <rect x="145" y="85" width="20" height="20" fill="#C9915F" transform="rotate(45 155 95)" />

                {/* S2A Text */}
                <text
                  x="100"
                  y="115"
                  fontSize="60"
                  fontWeight="bold"
                  fill="#F5E6D3"
                  textAnchor="middle"
                  fontFamily="Poppins, sans-serif"
                >
                  S2A
                </text>
              </svg>
            </div>
            <span className="text-white font-bold text-2xl tracking-wide hidden sm:inline">
              S2A ARCHITECTS
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 text-lg font-medium">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-200 hover:text-[#C9915F] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 mt-3 pb-4 text-lg font-medium">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-200 hover:text-[#C9915F] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
