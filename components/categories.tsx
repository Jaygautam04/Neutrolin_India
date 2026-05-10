"use client"

import Link from "next/link"
import { Bug, Leaf, Droplets, Flower2, ArrowRight, Sprout, Beaker } from "lucide-react"

const categories = [
  {
    icon: Bug,
    title: "Insecticides",
    description: "Protect crops from harmful insects and pests",
    count: "17 Products",
    color: "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300",
    href: "/products/insecticides",
  },
  {
    icon: Droplets,
    title: "Fungicides",
    description: "Combat fungal diseases and crop infections",
    count: "6 Products",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
    href: "/products/fungicides",
  },
  {
    icon: Leaf,
    title: "Herbicides",
    description: "Effective weed control solutions",
    count: "3 Products",
    color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
    href: "/products/herbicides",
  },
  {
    icon: Sprout,
    title: "Plant Growth Regulators",
    description: "Enhance flowering, fruiting and yield",
    count: "4 Products",
    color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-300",
    href: "/products/pgr",
  },
  {
    icon: Beaker,
    title: "Bio-Fertilizers",
    description: "Sustainable biological nutrient solutions",
    count: "2 Products",
    color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900 dark:text-cyan-300",
    href: "/products/bio-fertilizers",
  },
  {
    icon: Flower2,
    title: "Fertilizers & Micronutrients",
    description: "Complete nutrition for optimal growth",
    count: "9 Products",
    color: "bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-300",
    href: "/products/fertilizers",
  },
]

export function Categories() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-white dark:from-slate-900/30 dark:to-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-primary dark:text-white text-balance">
            Complete Product Range
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore our 6 premium product categories with 41 specialized solutions designed for comprehensive crop protection and nutrition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link key={index} href={category.href}>
                <div className="glass rounded-xl p-8 group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full animate-fadeInUp border border-primary/10 hover:border-primary/30" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="space-y-4">
                    <div
                      className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-black text-primary dark:text-white mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground dark:text-slate-400 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-primary/10 dark:border-primary/20">
                      <span className="text-xs font-bold text-primary dark:text-accent uppercase tracking-wide">{category.count}</span>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary dark:group-hover:text-accent group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
