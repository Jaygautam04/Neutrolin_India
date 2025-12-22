"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"

interface ProductFiltersProps {
  onFilterChange: (filters: any) => void
  categories?: string[]
}

export function ProductFilters({ onFilterChange, categories = [] }: ProductFiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [inStockOnly, setInStockOnly] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const brands = ["Bayer", "Syngenta", "BASF", "Corteva", "UPL", "Dhanuka"]
  const ratings = [4, 3, 2, 1]

  const applyFilters = () => {
    onFilterChange({
      priceRange,
      categories: selectedCategories,
      inStockOnly,
    })
  }

  const resetFilters = () => {
    setPriceRange([0, 5000])
    setSelectedCategories([])
    setInStockOnly(false)
    onFilterChange({
      priceRange: [0, 5000],
      categories: [],
      inStockOnly: false,
    })
  }

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <Button variant="outline" onClick={() => setIsOpen(!isOpen)} className="w-full gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </Button>
      </div>

      {/* Filters */}
      <Card className={`p-6 space-y-6 ${isOpen ? "block" : "hidden"} lg:block sticky top-24`}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5" />
            Filters
          </h3>
          <Button variant="ghost" size="sm" onClick={resetFilters} className="text-primary">
            Reset
          </Button>
        </div>

        {/* Price Range */}
        <div className="space-y-4">
          <Label className="text-base font-semibold">Price Range</Label>
          <Slider value={priceRange} onValueChange={setPriceRange} max={5000} step={100} className="cursor-pointer" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </div>

        {/* Categories */}
        {categories.length > 0 && (
          <div className="space-y-3">
            <Label className="text-base font-semibold">Categories</Label>
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedCategories([...selectedCategories, category])
                    } else {
                      setSelectedCategories(selectedCategories.filter((c) => c !== category))
                    }
                  }}
                />
                <label htmlFor={category} className="text-sm cursor-pointer hover:text-primary transition-colors">
                  {category}
                </label>
              </div>
            ))}
          </div>
        )}

        {/* Brands */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">Brands</Label>
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox id={brand} />
              <label htmlFor={brand} className="text-sm cursor-pointer hover:text-primary transition-colors">
                {brand}
              </label>
            </div>
          ))}
        </div>

        {/* Availability */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">Availability</Label>
          <div className="flex items-center space-x-2">
            <Checkbox id="in-stock" checked={inStockOnly} onCheckedChange={(checked) => setInStockOnly(!!checked)} />
            <label htmlFor="in-stock" className="text-sm cursor-pointer hover:text-primary transition-colors">
              In Stock Only
            </label>
          </div>
        </div>

        {/* Apply Button */}
        <Button onClick={applyFilters} className="w-full">
          Apply Filters
        </Button>
      </Card>
    </>
  )
}
