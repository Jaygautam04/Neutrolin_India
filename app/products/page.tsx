import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { products, categories } from "@/lib/products"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const metadata = {
  title: "All Products | Nutrolin India - Premium Agro-Chemicals",
  description: "Browse all 41+ premium products from Nutrolin India. Insecticides, fungicides, herbicides, fertilizers, and bio-organic products.",
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted dark:bg-slate-900 pt-24 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-primary font-semibold">All Products</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mb-12 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">All Products</h1>
            <p className="text-lg text-muted-foreground dark:text-slate-300">
              Explore our complete range of 41+ premium agro-chemical products across 6 categories, manufactured with the highest quality standards.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products/${category.id}`}
                className="glass px-4 py-2 rounded-full text-sm font-medium text-primary dark:text-accent hover:bg-primary hover:text-white dark:hover:bg-secondary transition-all duration-300"
              >
                {category.name} ({category.count})
              </Link>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
