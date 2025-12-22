"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { GitCompare, X, Star } from "lucide-react"

interface Product {
  id: number
  name: string
  price: string
  rating: number
  image: string
  features: string[]
  category: string
}

export function ProductComparison() {
  const [compareList, setCompareList] = useState<Product[]>([])

  const removeFromCompare = (id: number) => {
    setCompareList((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="fixed bottom-6 left-6 gap-2 shadow-2xl z-40 bg-transparent">
          <GitCompare className="h-5 w-5" />
          Compare ({compareList.length})
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[80vh]">
        <SheetHeader>
          <SheetTitle>Compare Products ({compareList.length}/4)</SheetTitle>
        </SheetHeader>

        <div className="mt-8">
          {compareList.length === 0 ? (
            <div className="text-center py-12">
              <GitCompare className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No products to compare</p>
              <p className="text-sm text-muted-foreground mt-2">Add products to compare their features</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-auto">
              {compareList.map((product) => (
                <div key={product.id} className="border rounded-lg p-4 relative">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2 h-6 w-6"
                    onClick={() => removeFromCompare(product.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>

                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded mb-4"
                  />

                  <Badge className="mb-2">{product.category}</Badge>
                  <h3 className="font-bold mb-2 text-sm">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-medium">{product.rating}</span>
                  </div>

                  <p className="text-lg font-bold text-primary mb-4">{product.price}</p>

                  <div className="space-y-1">
                    <p className="text-xs font-semibold mb-2">Features:</p>
                    {product.features.map((feature, idx) => (
                      <p key={idx} className="text-xs text-muted-foreground">
                        • {feature}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
