"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Eye } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductQuickView } from "@/components/product-quick-view"
import { ImageZoom } from "@/components/image-zoom"

const allProducts = [
  // Insecticides
  {
    id: 1,
    name: "CyperGuard Plus",
    description: "Powerful cypermethrin-based insecticide",
    price: "₹850",
    rating: 4.8,
    image: "/insecticide-spray-bottle-cypermethrin.jpg",
    features: ["Fast Acting", "Long Lasting"],
    category: "Insecticides",
  },
  {
    id: 2,
    name: "BioNeem Pro",
    description: "Natural neem-based insecticide",
    price: "₹650",
    rating: 4.6,
    image: "/organic-neem-oil-bottle.jpg",
    features: ["100% Organic", "Eco-Friendly"],
    category: "Insecticides",
  },
  // Fungicides
  {
    id: 3,
    name: "FungiShield Gold",
    description: "Broad-spectrum fungicide",
    price: "₹1,200",
    rating: 4.9,
    image: "/blue-fungicide-bottle-agriculture.jpg",
    features: ["Preventive", "Curative"],
    category: "Fungicides",
  },
  {
    id: 4,
    name: "MancoPro Super",
    description: "Mancozeb-based protective fungicide",
    price: "₹750",
    rating: 4.7,
    image: "/mancozeb-fungicide-powder-white.jpg",
    features: ["Multi-Crop", "Weather Proof"],
    category: "Fungicides",
  },
  // Herbicides
  {
    id: 5,
    name: "GlyphoMax Ultra",
    description: "Non-selective herbicide",
    price: "₹890",
    rating: 4.7,
    image: "/glyphosate-herbicide-bottle.jpg",
    features: ["Non-Selective", "Rain Fast"],
    category: "Herbicides",
  },
  {
    id: 6,
    name: "AtrazinePro",
    description: "Pre and post-emergence herbicide",
    price: "₹720",
    rating: 4.6,
    image: "/atrazine-herbicide-container-agriculture.jpg",
    features: ["Dual Action", "Long Control"],
    category: "Herbicides",
  },
  // Fertilizers
  {
    id: 7,
    name: "NPK Gold 19:19:19",
    description: "Balanced NPK fertilizer",
    price: "₹1,250",
    rating: 4.9,
    image: "/npk-fertilizer-bag-agriculture.jpg",
    features: ["Water Soluble", "All Stages"],
    category: "Fertilizers",
  },
  {
    id: 8,
    name: "Urea Pro 46%",
    description: "High nitrogen content fertilizer",
    price: "₹580",
    rating: 4.7,
    image: "/white-urea-granules-fertilizer.jpg",
    features: ["46% Nitrogen", "Quick Release"],
    category: "Fertilizers",
  },
]

export function AllProductsGrid() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [quickViewOpen, setQuickViewOpen] = useState(false)

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const handleQuickView = (product: any) => {
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

  const filteredProducts =
    selectedCategory === "All" ? allProducts : allProducts.filter((p) => p.category === selectedCategory)

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="All" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 max-w-3xl mx-auto">
            <TabsTrigger value="All" onClick={() => setSelectedCategory("All")}>
              All Products
            </TabsTrigger>
            <TabsTrigger value="Insecticides" onClick={() => setSelectedCategory("Insecticides")}>
              Insecticides
            </TabsTrigger>
            <TabsTrigger value="Fungicides" onClick={() => setSelectedCategory("Fungicides")}>
              Fungicides
            </TabsTrigger>
            <TabsTrigger value="Herbicides" onClick={() => setSelectedCategory("Herbicides")}>
              Herbicides
            </TabsTrigger>
            <TabsTrigger value="Fertilizers" onClick={() => setSelectedCategory("Fertilizers")}>
              Fertilizers
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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
                    <Button size="sm" className="flex-1 text-xs gap-1" onClick={() => handleAddToCart(product)}>
                      <ShoppingCart className="h-3 w-3" />
                      Add
                    </Button>
                    <Button size="sm" variant="secondary" onClick={() => handleQuickView(product)}>
                      <Eye className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-2 right-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Heart className={`h-4 w-4 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : ""}`} />
                </Button>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-bold group-hover:text-primary transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-medium">{product.rating}</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {product.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs px-2 py-0">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t">
                  <p className="text-lg font-bold text-primary">{product.price}</p>
                  <Button size="sm" className="gap-1 text-xs h-8" onClick={() => handleAddToCart(product)}>
                    <ShoppingCart className="h-3 w-3" />
                    Buy
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
