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
    <section
      className="bg-gradient-to-r from-[#f6f1e3] via-[#eaddc3] to-[#d8c7a0] py-24 px-4"
      id="contact"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <Image
            src="/images/SIA Logo.png"
            alt="Sun Italia Associates Logo"
            width={150}
            height={80}
          />

          <p className="text-[#6a4d2b] leading-relaxed text-lg max-w-md">
            Wholesaler of Ceramic Tiles, Vitrified Tiles, Mosaic Tiles, Porcelain Floor Tiles &
            Vitrified Slabs. Bringing luxury & innovation to every space since 2017.
          </p>

          <div className="space-y-4 text-lg text-[#6a4d2b]">
            <div>
              <h3 className="font-semibold text-[#8b6b43]">Email</h3>
              <p>info@example.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#8b6b43]">Phone</h3>
              <p>+91 8045209536</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#8b6b43]">Address</h3>
              <p>
                No.265/1,266 Mettukuppam Road,
                <br />
                Chennai - 600095, Tamil Nadu, India
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-8">
            <h3 className="font-bold text-2xl text-[#8b6b43] mb-4">Follow Us</h3>
            <div className="flex gap-6 text-[#6a4d2b]">
              <FaFacebookF size={28} className="cursor-pointer hover:text-[#8b6b43] transition-colors" />
              <FaInstagram size={28} className="cursor-pointer hover:text-[#8b6b43] transition-colors" />
              <FaWhatsapp size={28} className="cursor-pointer hover:text-[#8b6b43] transition-colors" />
              <FaMapMarkerAlt size={28} className="cursor-pointer hover:text-[#8b6b43] transition-colors" />
            </div>
          </div>
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#fefbf5] p-10 rounded-xl border border-[#bca57a] shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "email", "phone"].map((field, idx) => (
              <div key={idx}>
                <label className="block font-medium text-[#8b6b43] capitalize mb-2">{field}</label>
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  required
                  name={field}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  className="w-full border border-[#d8c7a0] rounded-md p-4 text-[#6a4d2b] bg-[#fffdf9] focus:ring-2 focus:ring-[#bca57a] outline-none transition"
                />
              </div>
            ))}

            <div>
              <label className="block font-medium text-[#8b6b43] mb-2">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-[#d8c7a0] rounded-md p-4 text-[#6a4d2b] bg-[#fffdf9] focus:ring-2 focus:ring-[#bca57a] outline-none transition"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#8b6b43] text-white font-bold py-4 rounded-full shadow hover:bg-[#6a4d2b] transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}


