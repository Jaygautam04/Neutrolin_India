"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Bug, Leaf, Droplets, Flower2, ArrowRight } from "lucide-react"

const categories = [
  {
    icon: Bug,
    title: "Insecticides",
    description: "Protect crops from harmful insects and pests",
    count: "120+ Products",
    color: "bg-red-500/10 text-red-600 dark:text-red-400",
    image: "/insecticide-spray-bottle-protecting-crops-from-ins.jpg",
    href: "/insecticides",
  },
  {
    icon: Leaf,
    title: "Herbicides",
    description: "Effective weed control solutions",
    count: "85+ Products",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
    image: "/herbicide-bottle-green-agricultural-field-weed-con.jpg",
    href: "/herbicides",
  },
  {
    icon: Droplets,
    title: "Fungicides",
    description: "Combat fungal diseases and molds",
    count: "95+ Products",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    image: "/fungicide-powder-protecting-plants-from-disease.jpg",
    href: "/fungicides",
  },
  {
    icon: Flower2,
    title: "Fertilizers",
    description: "Nutrient-rich formulas for optimal growth",
    count: "200+ Products",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    image: "/fertilizer-bag-with-healthy-growing-crops.jpg",
    href: "/fertilizers",
  },
]

export function Categories() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Browse by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive agricultural solutions for every farming need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link key={index} href={category.href}>
                <Card className="group relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer h-full">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="relative p-6">
                    <div
                      className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">{category.count}</span>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" />
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
