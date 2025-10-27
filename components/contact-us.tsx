"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Form Submitted Successfully!")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section className="bg-[#f8e9c9] py-24 px-4" id="contact">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <Image src="/images/logo1.jpg" alt="Sun Italia Associates Logo" width={150} height={80} />

          <p className="text-[#8a0303] leading-relaxed text-lg max-w-md">
            Wholesaler of Ceramic Tiles, Vitrified Tiles, Mosaic Tiles, Porcelain Floor Tiles & Vitrified Slabs.
            Bringing luxury & innovation to every space since 2017.
          </p>

          <div className="space-y-4 text-lg text-[#8a0303]">
            <div>
              <h3 className="font-semibold text-[#b70e0e]">Email</h3>
              <p>info@example.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#b70e0e]">Phone</h3>
              <p>+91 8045209536</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#b70e0e]">Address</h3>
              <p>
                No.265/1,266 Mettukuppam Road,
                <br />
                Chennai - 600095, Tamil Nadu, India
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-8">
            <h3 className="font-bold text-2xl text-[#b70e0e] mb-4">Follow Us</h3>
            <div className="flex gap-6 text-[#8a0303]">
              <FaFacebookF size={28} className="cursor-pointer hover:text-[#b70e0e] transition-colors" />
              <FaInstagram size={28} className="cursor-pointer hover:text-[#b70e0e] transition-colors" />
              <FaWhatsapp size={28} className="cursor-pointer hover:text-[#b70e0e] transition-colors" />
              <FaMapMarkerAlt size={28} className="cursor-pointer hover:text-[#b70e0e] transition-colors" />
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#fff8e8] p-10 rounded-xl border border-[#caa35a] shadow-md"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "email", "phone"].map((field, idx) => (
              <div key={idx}>
                <label className="block font-medium text-[#b70e0e] capitalize mb-2">{field}</label>
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  required
                  name={field}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  className="w-full border border-[#caa35a] rounded-md p-4 text-[#8a0303] bg-[#fff9ef] focus:ring-2 focus:ring-[#b70e0e] outline-none transition"
                />
              </div>
            ))}

            <div>
              <label className="block font-medium text-[#b70e0e] mb-2">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-[#caa35a] rounded-md p-4 text-[#8a0303] bg-[#fff9ef] focus:ring-2 focus:ring-[#b70e0e] outline-none transition"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#b70e0e] text-white font-bold py-4 rounded-full shadow hover:bg-[#8a0303] transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#f8e9c9] py-6 border-t border-[#caa35a]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[#8a0303] text-sm font-medium">
          © 2025 <span className="font-bold text-[#b70e0e]">Sun Italia Associates</span> — All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
