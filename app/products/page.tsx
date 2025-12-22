import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AllProductsGrid } from "@/components/all-products-grid"
import { LiveChatSupport } from "@/components/live-chat-support"
import { ScrollProgress } from "@/components/scroll-progress"

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">All Products</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our complete range of agricultural solutions for Indian farmers
            </p>
          </div>
        </div>
      </section>
      <AllProductsGrid />
      <Footer />
      <LiveChatSupport />
    </main>
  )
}
