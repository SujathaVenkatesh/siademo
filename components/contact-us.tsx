"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted! (Check console for data)");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="relative py-20 px-4" id="contact">
      {/* Background Image with Overlay and Blur */}
      <div className="absolute inset-0">
        <img
          src="/images/contact-bg.png" 
          alt="tiles background"
          className="w-full h-full object-cover blur-sm"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-start space-y-6">
          <h2 className="text-5xl font-bold text-[#d2b48c] mb-4">Contact Us</h2>
          <p className="text-gray-300 text-lg">
            Feel free to reach out to us. We would love to hear from you!
          </p>
          <div className="space-y-4 text-lg text-gray-300">
            <div>
              <h3 className="font-semibold text-[#4A7C7E] mb-1">Email</h3>
              <p>info@example.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#4A7C7E] mb-1">Phone</h3>
              <p>+91 8045209536</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#4A7C7E] mb-1">Address</h3>
              <p>No.265/1,266, Mettukuppam Road Chennai - 600095, Tamil Nadu, India</p>
            </div>
          </div>
        </div>
        <div className="bg-[#1a1a1a]/90 p-10 rounded-2xl shadow-xl backdrop-blur-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-medium text-[#d2b48c] mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-[#4A7C7E] rounded-md p-4 bg-black/70 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
              />
            </div>
            <div>
              <label className="block font-medium text-[#d2b48c] mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-[#4A7C7E] rounded-md p-4 bg-black/70 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
              />
            </div>
            <div>
              <label className="block font-medium text-[#d2b48c] mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-[#4A7C7E] rounded-md p-4 bg-black/70 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
              />
            </div>
            <div>
              <label className="block font-medium text-[#d2b48c] mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-[#4A7C7E] rounded-md p-4 bg-black/70 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#d2b48c] text-black font-bold py-4 rounded-full hover:bg-[#4A7C7E] transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
