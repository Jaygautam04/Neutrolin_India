"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Heart, Star, Truck, Shield, Info } from "lucide-react"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  category: string
  description: string
  features?: string[]
  inStock: boolean
}

interface ProductQuickViewProps {
  product: Product | null
  open: boolean
  onClose: () => void
  onAddToCart: (product: Product) => void
}

export function ProductQuickView({ product, open, onClose, onAddToCart }: ProductQuickViewProps) {
  const [quantity, setQuantity] = useState(1)

  if (!product) return null

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative group">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg border-2 border-border"
            />
            {discount > 0 && <Badge className="absolute top-4 right-4 bg-red-500 text-white">-{discount}%</Badge>}
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center">
                <p className="text-white text-xl font-bold">Out of Stock</p>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">
                {product.category}
              </Badge>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <p className="text-3xl font-bold text-primary">₹{product.price}</p>
              {product.originalPrice && (
                <p className="text-xl text-muted-foreground line-through">₹{product.originalPrice}</p>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="space-y-2">
                <p className="font-semibold flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Key Features:
                </p>
                <ul className="space-y-1 pl-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-sm text-muted-foreground list-disc">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Trust Badges */}
            <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-5 w-5 text-primary" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-5 w-5 text-primary" />
                <span>Quality Assured</span>
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="flex gap-4">
              <div className="flex items-center gap-2 border rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={!product.inStock}
                >
                  -
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button variant="ghost" size="sm" onClick={() => setQuantity(quantity + 1)} disabled={!product.inStock}>
                  +
                </Button>
              </div>

              <Button
                className="flex-1 gap-2"
                onClick={() => {
                  onAddToCart({ ...product, quantity } as any)
                  onClose()
                }}
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>

              <Button variant="outline" size="icon" disabled={!product.inStock}>
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
