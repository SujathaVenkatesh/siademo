"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 bg-white border-b border-[#caa35a] z-50 shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-3">
        <Image
          src="/images/SIA Logo.png"
          alt="Sun Italia Associates Logo"
          width={60}
          height={60}
          className="object-contain rounded-md"
        />

        <span className="text-[#8a0303] font-extrabold text-xl tracking-wide hidden sm:inline">
          Sun Italia Associates
        </span>
      </div>

      <div className="bg-white/90 backdrop-blur-sm">
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center justify-center gap-10 py-3">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={() => setActiveItem(item.label)}
              className={`font-semibold text-base py-2 px-3 rounded-md transition-all duration-200 ${
                activeItem === item.label
                  ? "text-[#8a0303] bg-[#caa35a]/30"
                  : "text-[#8a0303] hover:text-[#721010] hover:bg-[#caa35a]/20"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center justify-center py-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-[#caa35a]/25 transition"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#8a0303]" />
            ) : (
              <Menu className="w-6 h-6 text-[#8a0303]" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <nav className="md:hidden bg-white border-t border-[#caa35a]">
            <div className="flex flex-col">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.label);
                    setIsOpen(false);
                  }}
                  className={`text-center py-3 text-base border-b border-[#ead3a9] font-semibold transition ${
                    activeItem === item.label
                      ? "text-[#8a0303] bg-[#caa35a]/30"
                      : "text-[#7b4747] hover:bg-[#caa35a]/20"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
