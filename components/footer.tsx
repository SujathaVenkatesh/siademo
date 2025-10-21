"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-16">
        {/* About */}
        <div>
          <h3 className="font-bold text-3xl mb-6 text-[#d2b48c]">
            The Tile Studio
          </h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            Your trusted partner for premium building essentials in Perla,
            Kasaragod. Transform your space with our exceptional products and
            outstanding service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-3xl mb-6 text-[#4A7C7E]">Quick Links</h3>
          <ul className="space-y-3 text-lg">
            <li>
              <a href="#home" className="hover:text-[#d2b48c] transition">
                Home
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-[#d2b48c] transition">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-[#d2b48c] transition">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#d2b48c] transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#d2b48c] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-3xl mb-6 text-[#4A7C7E]">Contact Info</h3>
          <p className="text-lg text-gray-400 mb-1">
            Main Road, Perla, KASARAGOD
          </p>
          <p className="text-lg text-gray-400 mb-1">Kerala, 671552</p>
          <p className="text-lg text-gray-400 mb-1">Phone: +91 8147787801</p>
          <p className="text-lg text-gray-400">
            Email: Thetilestudioperla@gmail.com
          </p>
        </div>
      </div>

      {/* Follow Us */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
        <h3 className="font-bold text-3xl mb-6 text-[#d2b48c]">Follow Us</h3>
        <div className="flex gap-6 text-gray-400">
          <a href="#" className="hover:text-[#4A7C7E] transition">
            <FaFacebookF size={30} />
          </a>
          <a href="#" className="hover:text-[#4A7C7E] transition">
            <FaInstagram size={30} />
          </a>
          <a href="#" className="hover:text-[#4A7C7E] transition">
            <FaWhatsapp size={30} />
          </a>
          <a href="#" className="hover:text-[#4A7C7E] transition">
            <FaMapMarkerAlt size={30} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 border-t border-gray-800 pt-8 text-center text-gray-500 text-base">
        © 2025{" "}
        <span className="font-semibold text-[#d2b48c]">
          The Tile Studio by Ceramic Collection
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
}
