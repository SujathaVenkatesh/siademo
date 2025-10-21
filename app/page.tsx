import Header from "@/components/header"
import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import Portfolio from "@/components/portfolio"
import Products from "@/components/products"
import Footer from "@/components/footer"
import Contact from "@/components/contact-us"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <AboutUs />
      <Portfolio />
      <Products />
      <Contact/>
      <Footer />
    </main>
  )
}
