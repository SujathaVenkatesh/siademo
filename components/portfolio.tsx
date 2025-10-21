"use client";

import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  // --- Portfolio items ---
  const portfolioItems = [
    {
      id: 1,
      category: "bathroom",
      title: "Modern Bathroom",
      description: "Elegant tiles and clean lines",
      image: "/images/bath1.jpg",
    },
    {
      id: 2,
      category: "kitchen",
      title: "Kitchen Tiles",
      description: "Stylish backsplash designs",
      image: "/images/kitchen-tiles-and-ceramics.jpg",
    },
    {
      id: 3,
      category: "living-room",
      title: "Living Room Floor",
      description: "Warm tones and smooth finish",
      image: "/images/living-room-floor-tiles.jpg",
    },
    {
      id: 4,
      category: "bathroom",
      title: "Luxury Bathroom",
      description: "Gold accents and marble style",
      image: "/images/luxury-bathroom.png",
    },
    {
      id: 5,
      category: "kitchen",
      title: "Modern Kitchen",
      description: "Sleek countertops and decor",
      image: "/images/modern-kitchen-backsplash.jpg",
    },
    {
      id: 6,
      category: "living-room",
      title: "Elegant Living Room",
      description: "Minimalist and stylish interior",
      image: "/images/living.jpg",
    },
  ];

  const filters = ["All", "Bathroom", "Kitchen", "Living Room"];
  const filterValues = ["all", "bathroom", "kitchen", "living-room"];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-wide">
            Our Portfolio
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-[#d2b48c] to-[#4A7C7E] rounded-full"></div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filters.map((filter, index) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filterValues[index])}
              className={`px-8 py-3 rounded-full font-semibold text-lg tracking-wide transition-all duration-300 ${
                activeFilter === filterValues[index]
                  ? "bg-gradient-to-r from-[#d2b48c] to-[#4A7C7E] text-white shadow-lg"
                  : "text-gray-300 hover:text-white hover:border-[#d2b48c] border border-transparent"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative w-full aspect-square">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* Bottom Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-1/2 
                bg-gradient-to-t from-[#4A7C7E]/90 via-black/80 to-transparent 
                opacity-0 group-hover:opacity-100 
                transition-all duration-500 ease-in-out flex flex-col justify-end p-8">
                
                <h3 className="text-[#d2b48c] text-2xl md:text-3xl font-bold mb-2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-lg md:text-xl font-medium translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-75">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
