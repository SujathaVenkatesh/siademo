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
    <section className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
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
              <p>+91 98765 43210</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#4A7C7E] mb-1">Address</h3>
              <p>123, Main Street, City Name, State, Country</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-[#1a1a1a] p-10 rounded-2xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-medium text-[#d2b48c] mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-[#4A7C7E] rounded-md p-4 bg-black text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
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
                className="w-full border border-[#4A7C7E] rounded-md p-4 bg-black text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
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
                className="w-full border border-[#4A7C7E] rounded-md p-4 bg-black text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
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
                className="w-full border border-[#4A7C7E] rounded-md p-4 bg-black text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
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
