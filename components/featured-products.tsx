"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, TrendingUp } from "lucide-react"

const products = [
  {
    id: 1,
    name: "NeutroShield Pro",
    category: "Insecticide",
    description: "Advanced protection against bollworms and leaf-eating caterpillars",
    price: "₹1,299",
    originalPrice: "₹1,599",
    rating: 4.8,
    reviews: 245,
    badge: "Bestseller",
    image: "/modern-insecticide-spray-bottle-with-green-label-f.jpg",
  },
  {
    id: 2,
    name: "GrowMax NPK 19:19:19",
    category: "Fertilizer",
    description: "Complete nutrition for all stages of crop growth",
    price: "₹899",
    originalPrice: "₹1,099",
    rating: 4.9,
    reviews: 389,
    badge: "New",
    image: "/npk-fertilizer-bag-with-blue-packaging-agriculture.jpg",
  },
  {
    id: 3,
    name: "WeedOut Plus",
    category: "Herbicide",
    description: "Selective herbicide for broadleaf weed control",
    price: "₹749",
    originalPrice: "₹949",
    rating: 4.7,
    reviews: 156,
    badge: "Sale",
    image: "/herbicide-bottle-with-orange-label-for-weed-contro.jpg",
  },
  {
    id: 4,
    name: "FungiGuard Elite",
    category: "Fungicide",
    description: "Systemic fungicide for powdery mildew and rust",
    price: "₹1,499",
    originalPrice: null,
    rating: 4.6,
    reviews: 198,
    badge: "Trending",
    image: "/fungicide-spray-bottle-with-purple-label-systemic-.jpg",
  },
  {
    id: 5,
    name: "OrganicBoost Bio",
    category: "Fertilizer",
    description: "Organic fertilizer with beneficial microorganisms",
    price: "₹1,099",
    originalPrice: "₹1,299",
    rating: 4.9,
    reviews: 421,
    badge: "Organic",
    image: "/organic-bio-fertilizer-bottle-with-green-eco-frien.jpg",
  },
  {
    id: 6,
    name: "CropSafe Premium",
    category: "Insecticide",
    description: "Broad spectrum insecticide for multiple pests",
    price: "₹1,799",
    originalPrice: "₹2,199",
    rating: 4.8,
    reviews: 312,
    badge: "Bestseller",
    image: "/premium-insecticide-bottle-with-red-label-broad-sp.jpg",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Featured Products</h2>
            <p className="text-lg text-muted-foreground">Top-rated solutions trusted by farmers across India</p>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2 bg-transparent">
            View All Products
            <TrendingUp className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground font-semibold">
                  {product.badge}
                </Badge>
              </div>

              <div className="p-6">
                <p className="text-sm text-primary font-medium mb-2">{product.category}</p>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-semibold">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-foreground">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button className="flex-1 gap-2 group/btn hover:scale-105 transition-transform">
                    <ShoppingCart className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="icon" className="hover:scale-110 transition-transform bg-transparent">
                    <Star className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Button className="gap-2">
            View All Products
            <TrendingUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
