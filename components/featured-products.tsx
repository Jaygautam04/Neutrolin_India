"use client"

import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import Link from "next/link"
import { TrendingUp } from "lucide-react"

// Get featured products - first 6 products for homepage
const featuredProducts = products.slice(0, 6)

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12 animate-fadeInUp">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-white">Featured Products</h2>
            <p className="text-lg text-muted-foreground dark:text-slate-300">Bestselling agro-chemical solutions from Nutrolin India</p>
          </div>
          <Button asChild variant="outline" className="hidden md:flex gap-2 bg-primary hover:bg-secondary text-white dark:bg-secondary dark:hover:bg-primary">
            <Link href="/products">
              View All Products
              <TrendingUp className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Button asChild className="gap-2 bg-primary hover:bg-secondary text-white dark:bg-secondary dark:hover:bg-primary">
            <Link href="/products">
              View All Products
              <TrendingUp className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
