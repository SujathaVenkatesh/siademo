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
    <header className="w-full fixed top-0 left-0 bg-white border-b border-[#c7a35a] z-50 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-3">
        <Image
          src="/images/SIA-Logo.png"
          alt="Sun Italia Associates Logo"
          width={60}
          height={60}
          className="object-contain rounded-md"
        />
        <span className="text-[#7b2f2f] font-extrabold text-xl tracking-wide hidden sm:inline">
          Sun Italia Associates
        </span>
      </div>

      <div className="bg-[#fffdf9]/90 backdrop-blur-sm">
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center justify-center gap-10 py-3">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={() => setActiveItem(item.label)}
              className={`font-semibold text-base py-2 px-3 rounded-md transition-all duration-200 ${
                activeItem === item.label
                  ? "text-[#7b2f2f] bg-[#e5c789]/30"
                  : "text-[#8a0303] hover:text-[#7b2f2f] hover:bg-[#e5c789]/25"
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
            className="p-2 rounded-lg hover:bg-[#e5c789]/25 transition"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#7b2f2f]" />
            ) : (
              <Menu className="w-6 h-6 text-[#7b2f2f]" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <nav className="md:hidden bg-[#fff9f2] border-t border-[#e5c789]">
            <div className="flex flex-col">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.label);
                    setIsOpen(false);
                  }}
                  className={`text-center py-3 text-base border-b border-[#f2e0b5] font-semibold transition ${
                    activeItem === item.label
                      ? "text-[#7b2f2f] bg-[#e5c789]/30"
                      : "text-[#7b4747] hover:bg-[#e5c789]/20"
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
