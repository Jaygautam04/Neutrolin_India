"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Leaf, Award, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-white to-muted dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeInUp">
          {/* Badge */}
          <div className="inline-block">
            <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary dark:text-accent">ISO 9001:2015 Certified Company</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              <span className="gradient-green bg-clip-text text-transparent">Premium Agro-Chemicals</span>
              <br />
              <span className="text-foreground dark:text-white">For Modern Farming</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Leading Manufacturer of Pesticides, Herbicides, Fungicides, Plant Growth Promoters and Bio-Organic Products
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-secondary text-white text-base px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link href="/products">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 text-base px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 dark:border-accent dark:text-accent dark:hover:bg-accent/10"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 pt-12 md:gap-8">
            <div className="glass rounded-lg p-4 md:p-6 space-y-2 animate-slideInDown">
              <p className="text-3xl md:text-4xl font-bold text-primary dark:text-accent">41+</p>
              <p className="text-sm md:text-base text-muted-foreground dark:text-slate-400">Premium Products</p>
            </div>
            <div className="glass rounded-lg p-4 md:p-6 space-y-2 animate-slideInDown" style={{ animationDelay: "0.1s" }}>
              <p className="text-3xl md:text-4xl font-bold text-primary dark:text-accent">6</p>
              <p className="text-sm md:text-base text-muted-foreground dark:text-slate-400">Categories</p>
            </div>
            <div className="glass rounded-lg p-4 md:p-6 space-y-2 animate-slideInDown" style={{ animationDelay: "0.2s" }}>
              <p className="text-3xl md:text-4xl font-bold text-primary dark:text-accent">100%</p>
              <p className="text-sm md:text-base text-muted-foreground dark:text-slate-400">Quality Assured</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground dark:text-slate-500">Scroll to explore</span>
          <svg className="w-6 h-6 text-primary dark:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
