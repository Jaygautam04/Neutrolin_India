import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { FeaturedProducts } from "@/components/featured-products"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { LiveChatSupport } from "@/components/live-chat-support"
import { BackToTop } from "@/components/back-to-top"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <Footer />
      <LiveChatSupport />
      <BackToTop />
    </main>
  )
}
