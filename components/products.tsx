"use client";

import { Grid3x3, Bath, Utensils, Wrench, Paintbrush, Home } from "lucide-react";

export default function Products() {
  const products = [
    {
      id: 1,
      title: "Ceramic Tiles",
      description: "Canvs Brown Ceramic Floor Tiles",
      image: "/images/cremonic.webp",
      icon: Grid3x3,
    },
    {
      id: 2,
      title: "Vitrified Tiles",
      description: "Hexa Angra Brown Vitrified Parking Tiles",
      image: "/images/brown.webp",
      icon: Bath,
    },
    {
      id: 3,
      title: "Mosaic Tiles",
      description: "Swimming Pool Glass Mosaic Tiles",
      image: "/images/mosaic.webp",
      icon: Utensils,
    },
    {
      id: 4,
      title: "Vitrified Floor Tile",
      description: "800 X 1600 Mm Vitrified Floor Tile",
      image: "/images/bathroom.webp",
      icon: Wrench,
    },
    {
      id: 5,
      title: "Glass Mosaics Tiles",
      description: "Elegant and glossy glass mosaic designs",
      image: "/images/glass.webp",
      icon: Paintbrush,
    },
    {
      id: 6,
      title: "Vitrified Slab",
      description: "Neve Statuario Venice Vitrified Slab",
      image: "/images/slab.webp",
      icon: Home,
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-4 tracking-wide">
            Our Products
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-[#d2b48c] to-[#4A7C7E] rounded-full"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="space-y-8">
          {/* First Row - 4 Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.id}
                  className="bg-neutral-900 rounded-2xl overflow-hidden group cursor-pointer hover:transform hover:scale-105 transition-all duration-500"
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <Icon
                        className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-[#d2b48c] to-[#4A7C7E]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-[#d2b48c] mb-3">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-base mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <button className="bg-gradient-to-r from-[#d2b48c] to-[#4A7C7E] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300">
                      Explore Collection
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Second Row - 2 Products Centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl lg:max-w-4xl">
              {products.slice(4, 6).map((product) => {
                const Icon = product.icon;
                return (
                  <div
                    key={product.id}
                    className="bg-neutral-900 rounded-2xl overflow-hidden group cursor-pointer hover:transform hover:scale-105 transition-all duration-500"
                  >
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        <Icon
                          className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-[#d2b48c] to-[#4A7C7E]"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-[#d2b48c] mb-3">
                        {product.title}
                      </h3>
                      <p className="text-gray-300 text-base mb-6 leading-relaxed">
                        {product.description}
                      </p>
                      <button className="bg-gradient-to-r from-[#d2b48c] to-[#4A7C7E] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300">
                        Explore Collection
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
