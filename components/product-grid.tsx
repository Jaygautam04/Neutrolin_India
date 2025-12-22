"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Eye } from "lucide-react"
import { ProductQuickView } from "@/components/product-quick-view"
import { ImageZoom } from "@/components/image-zoom"

interface Product {
  id: number
  name: string
  description: string
  price: string
  rating: number
  image: string
  features: string[]
  category: string
}

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const [favorites, setFavorites] = useState<number[]>([])
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [quickViewOpen, setQuickViewOpen] = useState(false)

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const handleQuickView = (product: Product) => {
    const formattedProduct = {
      ...product,
      price: Number.parseInt(product.price.replace(/[^0-9]/g, "")),
      reviews: Math.floor(Math.random() * 200) + 50,
      inStock: true,
    }
    setSelectedProduct(formattedProduct)
    setQuickViewOpen(true)
  }

  const handleAddToCart = (product: any) => {
    console.log("[v0] Adding to cart:", product)
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-square bg-muted">
                <ImageZoom
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" className="flex-1 gap-2" onClick={() => handleAddToCart(product)}>
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button size="sm" variant="secondary" onClick={() => handleQuickView(product)}>
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Heart className={`h-4 w-4 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : ""}`} />
                </Button>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{product.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{product.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="text-2xl font-bold text-primary">{product.price}</p>
                    <p className="text-xs text-muted-foreground">Per unit</p>
                  </div>
                  <Button size="sm" className="gap-2" onClick={() => handleAddToCart(product)}>
                    <ShoppingCart className="h-4 w-4" />
                    Buy Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <ProductQuickView
        product={selectedProduct}
        open={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </section>
  )
}
