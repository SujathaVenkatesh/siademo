export default function AboutUs() {
  return (
   <section className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-[#D2B48C]"></div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-center text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
          The Tile Studio (by ceramic collection) is committed to providing top-quality building essentials, combining
          innovation and customer satisfaction. Our dedication to excellence makes us the preferred choice for
          architects, designers, and homeowners in Perla, Kasaragod and surrounding areas.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Phone Card */}
          <div className="bg-[#D2B48C]/10 border border-[#D2B48C] rounded-lg p-8 text-center hover:bg-[#D2B48C]/20 transition">
            <div className="text-[#D2B48C] text-4xl mb-4 flex justify-center">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.265 1.215 2.807 2.453 4.045s2.78 2.035 4.045 2.453l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <p className="text-white font-semibold mb-2">+91 8147787801</p>
            <p className="text-gray-300">+91 9746387052</p>
          </div>

          {/* Email Card */}
          <div className="bg-[#D2B48C]/10 border border-[#D2B48C] rounded-lg p-8 text-center hover:bg-[#D2B48C]/20 transition">
            <div className="text-[#D2B48C] text-4xl mb-4 flex justify-center">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <p className="text-white font-semibold">Thetilestudioperla@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
