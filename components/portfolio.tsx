"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const portfolioItems = [
    {
      id: 1,
      category: "ceramic-tiles",
      title: "Castle Gris Ceramic Floor Tiles",
      description: "Elegant ceramic floor tiles",
      image: "/images/castlegris.webp",
    },
    {
      id: 2,
      category: "ceramic-tiles",
      title: "Pietra Sinnol Square Ceramic Floor Tiles",
      description: "Stylish ceramic designs",
      image: "/images/pietraazur.webp",
    },
    {
      id: 3,
      category: "ceramic-tiles",
      title: "Opus Grey Ceramic Floor Tiles",
      description: "Modern grey ceramic tiles",
      image: "/images/opus.webp",
    },
    {
      id: 4,
      category: "ceramic-tiles",
      title: "Canvs Brown Ceramic Floor Tiles",
      description: "Warm brown ceramic tiles",
      image: "/images/canvsbrown.webp",
    },
    {
      id: 5,
      category: "ceramic-tiles",
      title: "Pietra Flake Ceramic Floor Tiles",
      description: "Elegant flake design",
      image: "/images/pietrafbrown.webp",
    },
    {
      id: 6,
      category: "ceramic-tiles",
      title: "Adina Terracotta Ceramic Floor Tiles",
      description: "Terracotta ceramic floors",
      image: "/images/adinateracotta.webp",
    },
    {
      id: 7,
      category: "ceramic-tiles",
      title: "Joss Brown Ceramic Floor Tiles",
      description: "Brown textured floor tiles",
      image: "/images/jossbrown.webp",
    },
    {
      id: 8,
      category: "ceramic-tiles",
      title: "Accourd Brown Ceramic Floor Tiles",
      description: "Rich brown ceramic tiles",
      image: "/images/accordbrown.webp",
    },
    {
      id: 28,
      category: "vitrified-tiles",
      title: "Grey Glossy Vitrified Wall Tiles",
      description: "Durable and glossy vitrified tiles",
      image: "/images/greyglossy.webp",
    },
    {
      id: 29,
      category: "vitrified-tiles",
      title: "Plane White Vitrified Wall Tiles",
      description: "Pristine white wall finish",
      image: "/images/planwhite.webp",
    },
    {
      id: 30,
      category: "vitrified-tiles",
      title: "Dyna Brown Vitrified Wall Tiles",
      description: "Perfect flooring finish for high-traffic areas",
      image: "/images/dynabrown.webp",
    },
    {
      id: 31,
      category: "vitrified-tiles",
      title: "Alaska White Vitrified Wall Tiles",
      description: "Shimmering finishes for pools and bathrooms",
      image: "/images/alska.webp",
    },
    {
      id: 32,
      category: "mosaic-tiles",
      title: "Italia Glass Mosaic Tiles",
      description: "Handcrafted glass mosaic patterns",
      image: "/images/mosaic.webp",
    },
    {
      id: 33,
      category: "mosaic-tiles",
      title: "Swimming Pool Glass Mosaic Tiles",
      description: "Artistic and colorful mosaic tile patterns",
      image: "/images/swimpool.webp",
    },
    {
      id: 34,
      category: "mosaic-tiles",
      title: "Swimming Pool Mosaic Tile",
      description: "Perfect flooring finish for high-traffic areas",
      image: "/images/swimingpool.webp",
    },
    {
      id: 35,
      category: "vitrified-floor-tile",
      title: "800 X 1600 Mm Vitrified Floor Tile",
      description: "Large format contemporary tiles",
      image: "/images/floor1.webp",
    },
    {
      id: 36,
      category: "vitrified-floor-tile",
      title: "Porcelain Floor Tile",
      description: "Premium porcelain flooring solution",
      image: "/images/floor2.webp",
    },
    {
      id: 37,
      category: "glass-mosaics-tiles",
      title: "Glass Mosaic Tiles",
      description: "Luminous glass tile collection",
      image: "/images/glasstiles.webp",
    },
    {
      id: 38,
      category: "vitrified-slab",
      title: "Neve Statuario Venice Vitrified Slab",
      description: "Marble-inspired luxury slabs",
      image: "/images/slabimage.webp",
    },
    {
      id: 39,
      category: "porcelain-floor-tiles",
      title: "Geometric Porcelain Floor Tile",
      description: "Modern geometric patterns",
      image: "/images/geomtiles.webp",
    },
  ];

  const filters = [
    "All",
    "Ceramic Tiles",
    "Vitrified Tiles",
    "Mosaic Tiles",
    "Vitrified Floor Tile",
    "Glass Mosaics Tiles",
    "Vitrified Slab",
    "Porcelain Floor Tiles",
  ];
  const filterValues = [
    "all",
    "ceramic-tiles",
    "vitrified-tiles",
    "mosaic-tiles",
    "vitrified-floor-tile",
    "glass-mosaics-tiles",
    "vitrified-slab",
    "porcelain-floor-tiles",
  ];

  let filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  if (activeFilter === "ceramic-tiles" && !showAll) {
    filteredItems = filteredItems.slice(0, 4);
  }

  return (
    <section className="relative bg-gradient-to-b from-zinc-950 via-zinc-900 to-black py-32 px-4 overflow-hidden" id="products">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-amber-900/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-[120px] animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-900/10 to-teal-900/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full border border-amber-800/30 bg-amber-950/20 backdrop-blur-sm animate-fade-in">
            <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
            <span className="text-amber-600 text-sm font-medium tracking-[0.2em] uppercase">
              Premium Collection
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight leading-[1.1] animate-slide-up">
            Explore Our{" "}
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#C49A6C] via-[#D2B48C] via-50% via-[#F5E6D3] to-[#2F4F4F] animate-gradient">
              Exclusive
            </span>
            <br />
            Tile Collection
          </h2>

          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed">
            Discover handpicked designs that transform spaces into timeless
            masterpieces
          </p>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-8 animate-expand" />
        </div>

        <div className="flex justify-center gap-2 mb-16 flex-wrap max-w-5xl mx-auto animate-fade-in-delayed">
          {filters.map((filter, index) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filterValues[index]);
                setShowAll(false);
              }}
              className={`relative px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-500 hover:scale-105 hover:-translate-y-0.5 active:scale-95 overflow-hidden group ${
                activeFilter === filterValues[index]
                  ? "text-black shadow-lg shadow-amber-900/30"
                  : "text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 hover:shadow-md"
              }`}
            >
              {activeFilter === filterValues[index] && (
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-amber-500 to-teal-600 animate-gradient-shift" />
              )}
              <span className="relative z-10">{filter}</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.1)_0%,transparent_70%)]" />
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <TileCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {activeFilter === "ceramic-tiles" && !showAll && (
          <div className="text-center mt-16 animate-fade-in">
            <button
              onClick={() => setShowAll(true)}
              className="group relative px-10 py-4 bg-gradient-to-r from-amber-600 to-teal-600 text-white rounded-full font-medium tracking-wide overflow-hidden shadow-2xl shadow-amber-900/30 hover:shadow-amber-900/50 transition-all duration-500 hover:scale-105 hover:-translate-y-1 active:scale-95"
            >
              <span className="relative z-10">View Complete Collection</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-delayed {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          60% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes expand {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes gradient-shift {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delayed {
          animation: fade-in-delayed 1.5s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 1.2s ease-out;
        }
        .animate-expand {
          animation: expand 1.5s ease-out;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-gradient-shift::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          animation: gradient-shift 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

function TileCard({ item, index }: { item: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div
        className={`relative overflow-hidden rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 shadow-2xl transition-all duration-500 ${
          isHovered ? "-translate-y-3 shadow-amber-900/20" : ""
        }`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br from-amber-600/0 via-transparent to-teal-600/0 transition-all duration-700 ${
            isHovered ? "from-amber-600/10 to-teal-600/10" : ""
          }`}
        />

        <div className="relative w-full aspect-square overflow-hidden">
          <div
            className={`absolute inset-0 transition-transform duration-700 ease-out ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 ${
              isHovered ? "opacity-90" : "opacity-30"
            }`}
          />
        </div>

        <div
          className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <div
            className={`w-12 h-px bg-gradient-to-r from-amber-600 to-teal-500 mb-4 transition-all duration-600 ${
              isHovered ? "scale-x-100" : "scale-x-0"
            }`}
            style={{ transformOrigin: "left", transitionDelay: "100ms" }}
          />
          <h3 className="text-white text-xl font-light mb-2 tracking-wide leading-tight">
            {item.title}
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>

        <div
          className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-amber-500 transition-all duration-500 ${
            isHovered
              ? "scale-150 opacity-100 animate-pulse"
              : "scale-100 opacity-30"
          }`}
        />
      </div>

      <div
        className={`absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-600/30 via-teal-600/30 to-amber-600/30 blur-xl -z-10 transition-opacity duration-500 ${
          isHovered ? "opacity-100 animate-gradient" : "opacity-0"
        }`}
        style={{
          backgroundSize: "200% 200%",
        }}
      />
    </div>
  );
}
