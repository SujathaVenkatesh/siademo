"use client";

import { Grid3x3, Bath, Utensils, Wrench, Paintbrush, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function Products() {
  const products = [
    { id: 1, title: "Ceramic Tiles", description: "Canvs Brown Ceramic Floor Tiles", image: "/images/cremonic.webp", icon: Grid3x3 },
    { id: 2, title: "Vitrified Tiles", description: "Hexa Angra Brown Vitrified Parking Tiles", image: "/images/brown.webp", icon: Bath },
    { id: 3, title: "Mosaic Tiles", description: "Swimming Pool Glass Mosaic Tiles", image: "/images/mosaic.webp", icon: Utensils },
    { id: 4, title: "Vitrified Floor Tile", description: "800 X 1600 Mm Vitrified Floor Tile", image: "/images/bathroom.webp", icon: Wrench },
    { id: 5, title: "Glass Mosaics Tiles", description: "Elegant and glossy glass mosaic designs", image: "/images/glass.webp", icon: Paintbrush },
    { id: 6, title: "Vitrified Slab", description: "Neve Statuario Venice Vitrified Slab", image: "/images/slab.webp", icon: Home },
  ];

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-white mb-4 tracking-wide animate-fadeIn">
            Our Products
          </h2>
          <div className="flex justify-center">
            <div className="w-28 h-1 bg-gradient-to-r from-[#d2b48c] to-[#4A7C7E] rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="space-y-16">
          {/* First Row - 4 Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.slice(0, 4).map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-neutral-900 rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 relative group"
                >
                  {/* Product Image with Overlay */}
                  <div className="relative h-72 overflow-hidden rounded-t-3xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <Icon className="w-14 h-14 text-transparent bg-clip-text bg-gradient-to-r from-[#d2b48c] to-[#4A7C7E]" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#d2b48c] mb-2">{product.title}</h3>
                    <p className="text-gray-300 text-base mb-6 leading-relaxed">{product.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: "#c9a76a" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-[#d2b48c] to-[#4A7C7E] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
                    >
                      Explore Collection
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Second Row - 2 Products Centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
              {products.slice(4, 6).map((product, index) => {
                const Icon = product.icon;
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="bg-neutral-900 rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 relative group"
                  >
                    <div className="relative h-72 overflow-hidden rounded-t-3xl">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl"></div>
                    </div>

                    <div className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        <Icon className="w-14 h-14 text-transparent bg-clip-text bg-gradient-to-r from-[#d2b48c] to-[#4A7C7E]" strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#d2b48c] mb-2">{product.title}</h3>
                      <p className="text-gray-300 text-base mb-6 leading-relaxed">{product.description}</p>
                      <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "#c9a76a" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-[#d2b48c] to-[#4A7C7E] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
                      >
                        Explore Collection
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
