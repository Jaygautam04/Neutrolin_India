"use client";

import { useState } from "react";
import { type Product } from "@/lib/products";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [open, setOpen] = useState(false);

  const categoryColors: Record<Product["category"], string> = {
    Insecticides: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    Herbicides: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    Fungicides: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    PGR: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "Bio-Fertilizers": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    Fertilizers: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  };

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="glass rounded-lg p-6 cursor-pointer hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-accent/10 transition-all duration-300 hover:scale-105 group animate-fadeInUp"
      >
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-primary dark:text-accent group-hover:text-secondary transition-colors line-clamp-2">
                {product.name}
              </h3>
              <Badge className={`mt-2 ${categoryColors[product.category]}`}>{product.category}</Badge>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div>
              <p className="text-muted-foreground dark:text-muted-foreground font-semibold">Composition:</p>
              <p className="text-foreground dark:text-card-foreground font-medium">{product.composition}</p>
            </div>

            <div>
              <p className="text-muted-foreground dark:text-muted-foreground font-semibold">Recommended Dose:</p>
              <p className="text-foreground dark:text-card-foreground font-medium">{product.dose}</p>
            </div>

            <div>
              <p className="text-muted-foreground dark:text-muted-foreground font-semibold">Packing Sizes:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {product.packingSizes.slice(0, 3).map((size) => (
                  <span key={size} className="text-xs px-2 py-1 bg-muted dark:bg-secondary/20 rounded text-foreground">
                    {size}
                  </span>
                ))}
                {product.packingSizes.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-muted dark:bg-secondary/20 rounded text-foreground">
                    +{product.packingSizes.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>

          <Button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
            className="w-full bg-primary hover:bg-secondary text-white dark:bg-secondary dark:hover:bg-primary"
          >
            View Details <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary dark:text-accent">{product.name}</DialogTitle>
            <DialogDescription className="text-base">
              <Badge className={`mt-2 ${categoryColors[product.category]}`}>{product.category}</Badge>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div>
              <h4 className="font-semibold text-primary mb-2">Composition</h4>
              <p className="text-foreground">{product.composition}</p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-2">Recommended Dose</h4>
              <p className="text-foreground">{product.dose}</p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-2">Available Packing Sizes</h4>
              <div className="flex flex-wrap gap-2">
                {product.packingSizes.map((size) => (
                  <Badge key={size} variant="outline" className="bg-muted text-foreground">
                    {size}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-2">Suitable Crops</h4>
              <div className="grid grid-cols-2 gap-2">
                {product.suitableCrops.map((crop) => (
                  <div key={crop} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground">{crop}</span>
                  </div>
                ))}
              </div>
            </div>

            {product.description && (
              <div>
                <h4 className="font-semibold text-primary mb-2">Description</h4>
                <p className="text-foreground">{product.description}</p>
              </div>
            )}
          </div>

          <div className="flex gap-3 pt-4 border-t">
            <Button onClick={() => setOpen(false)} variant="outline" className="flex-1">
              Close
            </Button>
            <Button className="flex-1 bg-primary hover:bg-secondary text-white dark:bg-secondary dark:hover:bg-primary">
              Contact for Quote
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
