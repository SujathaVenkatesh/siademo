"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { useRef } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Jeni Dev",
      location: "Padappai, Tamil Nadu",
      date: "25 September 2025",
      rating: 5,
      product: "Glass Mosaic Tiles",
      response: "Excellent quality and timely delivery!",
    },
    {
      id: 2,
      name: "Srinivasan. T T",
      location: "Chennai, Tamil Nadu",
      date: "19 August 2025",
      rating: 5,
      product: "Glossy Ceramic Wall Tile",
      response: "Response 👍 Very satisfied with the service!",
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.3, 1, 0.6]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-[#faf9f6] to-[#f1f0ed]"
    >
      {/* Layered Parallax Backgrounds */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 bg-gradient-to-tr from-[#d2b48c]/15 via-transparent to-[#4A7C7E]/15 blur-3xl"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute top-1/3 -left-20 w-96 h-96 bg-[#d2b48c]/20 rounded-full blur-[120px]"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#4A7C7E]/20 rounded-full blur-[120px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-wide">
            Our Clients Speak
          </h2>
          <p className="text-gray-500 text-lg mt-3">
            Trusted by professionals and homeowners alike
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center mt-4"
          >
            <div className="w-28 h-1 bg-gradient-to-r from-[#d2b48c] to-[#4A7C7E] rounded-full origin-left" />
          </motion.div>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {testimonials.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.9,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.04,
                rotateX: 3,
                boxShadow:
                  "0 15px 40px rgba(74, 124, 126, 0.15), 0 5px 10px rgba(0,0,0,0.05)",
              }}
              className="relative rounded-3xl bg-white/70 backdrop-blur-lg border border-[#d2b48c]/30 p-8 shadow-lg transition-transform duration-700"
            >
              {/* Floating accent light */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#d2b48c]/10 to-[#4A7C7E]/10 opacity-0 group-hover:opacity-100 transition-all duration-700"
              ></motion.div>

              {/* Star Rating */}
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.2 + i * 0.1,
                    }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Review Text */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                className="text-gray-700 text-lg leading-relaxed italic mb-6"
              >
                “{review.response}”
              </motion.p>

              {/* Product */}
              <p className="text-gray-800 font-medium mb-1">
                Product:{" "}
                <span className="text-gray-600">{review.product}</span>
              </p>

              {/* User Info */}
              <div className="mt-4 pt-4 border-t border-gray-300/40">
                <p className="font-semibold text-gray-900 text-lg">
                  {review.name}
                </p>
                <p className="text-sm text-gray-500">{review.location}</p>
                <p className="text-xs text-gray-400 mt-1">{review.date}</p>
              </div>

              {/* Subtle Accent Glow */}
              <motion.div
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute -bottom-5 -right-5 w-24 h-24 bg-gradient-to-tr from-[#d2b48c]/30 to-[#4A7C7E]/20 blur-2xl rounded-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Footer Summary */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mt-20"
        >
          <motion.h3
            whileInView={{ scale: [0.9, 1.05, 1] }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl font-bold text-[#4A7C7E] mb-2"
          >
            5.0 ★
          </motion.h3>
          <p className="text-gray-600 font-medium text-lg">
            Perfect Ratings From All Our Clients
          </p>
        </motion.div>
      </div>
    </section>
  );
}
