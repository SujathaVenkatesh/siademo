"use client"
import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Home")

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Products", href: "#" },
    { label: "Contact", href: "#" },
  ]

  return (
    <header className="w-full fixed top-0 left-0 bg-white z-50 shadow-lg">
      <div className="border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center gap-3">
            <Image src="/images/logo1.jpg" alt="S2A Architects Logo" width={48} height={48} className="object-contain" />
            <span className="text-gray-800 font-bold text-xl tracking-wide hidden sm:inline">S2A ARCHITECTS</span>
          </div>
        </div>
      </div>

      {/* Row 2: Navigation Menu - Centered */}
      <div className="bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-8 py-4">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={`font-bold text-sm transition-all duration-200 relative group px-3 py-2 rounded-lg ${
                  activeItem === item.label
                    ? "text-amber-700 bg-amber-100"
                    : "text-gray-700 hover:text-amber-600 hover:bg-amber-50"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-center py-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-amber-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 text-amber-600" /> : <Menu className="w-6 h-6 text-amber-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden bg-white/90 border-t border-amber-200">
            <div className="flex flex-col gap-0 py-2">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.label)
                    setIsOpen(false)
                  }}
                  className={`px-6 py-3 font-bold text-sm transition-all duration-200 text-center border-b border-amber-100 last:border-b-0 ${
                    activeItem === item.label
                      ? "text-amber-700 bg-amber-100"
                      : "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
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
  )
}
