"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-[#fcf8f2] via-[#f8eedc] to-[#f2e2c3] py-16 md:py-24 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* ✅ Left Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Logo Box */}
          <div className="bg-white/90 p-3 w-fit rounded-xl shadow-md mx-auto lg:mx-0">
            <Image
              src="/images/SIA-Logo.png"
              alt="Sun Italia Associates Logo"
              width={160}
              height={90}
              className="object-contain"
              priority
            />
          </div>

          {/* Description */}
          <p className="text-[#7b2f2f] leading-relaxed text-base sm:text-lg max-w-md text-center lg:text-left mx-auto lg:mx-0">
            Wholesaler of Ceramic Tiles, Vitrified Tiles, Mosaic Tiles, Porcelain Floor Tiles & Vitrified Slabs.
            Bringing luxury & innovation to every space since 2017.
          </p>

          {/* Contact Info */}
          <div className="space-y-5 text-[#7b2f2f] text-center lg:text-left">
            <div>
              <h3 className="font-semibold text-[#a07534] text-lg">Email</h3>
              <p className="text-base">info@example.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#a07534] text-lg">Phone</h3>
              <p className="text-base">+91 8045209536</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#a07534] text-lg">Address</h3>
              <p className="text-base leading-relaxed">
                No.265/1,266 Mettukuppam Road,
                <br />
                Chennai - 600095, Tamil Nadu, India
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="pt-6 text-center lg:text-left">
            <h3 className="font-bold text-2xl text-[#a07534] mb-4">Follow Us</h3>
            <div className="flex justify-center lg:justify-start gap-6 text-[#7b2f2f] flex-wrap">
              <FaFacebookF size={28} className="cursor-pointer hover:text-[#a07534] transition-colors" />
              <FaInstagram size={28} className="cursor-pointer hover:text-[#a07534] transition-colors" />
              <FaWhatsapp size={28} className="cursor-pointer hover:text-[#a07534] transition-colors" />
              <FaMapMarkerAlt size={28} className="cursor-pointer hover:text-[#a07534] transition-colors" />
            </div>
          </div>
        </motion.div>

        {/* ✅ Right Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#fffdf8] p-6 sm:p-8 md:p-10 rounded-xl shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "email", "phone"].map((field, idx) => (
              <div key={idx}>
                <label className="block font-medium text-[#a07534] capitalize mb-2 text-sm sm:text-base">
                  {field}
                </label>
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  required
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border border-[#e0c88f] rounded-md p-3 sm:p-4 text-[#7b2f2f] bg-[#fffdf9] focus:ring-2 focus:ring-[#c9ad6d] outline-none transition text-sm sm:text-base"
                />
              </div>
            ))}

            <div>
              <label className="block font-medium text-[#a07534] mb-2 text-sm sm:text-base">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-[#e0c88f] rounded-md p-3 sm:p-4 text-[#7b2f2f] bg-[#fffdf9] focus:ring-2 focus:ring-[#c9ad6d] outline-none transition text-sm sm:text-base"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#7b2f2f] text-white font-semibold py-3 sm:py-4 rounded-full shadow hover:bg-[#5f2020] transition text-base sm:text-lg"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
