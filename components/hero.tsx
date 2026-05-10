"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Leaf, Award, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-white to-muted dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      {/* Premium gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/8 via-transparent to-accent/5" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-32 w-96 h-96 bg-primary/12 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent dark:via-slate-900/5" />
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
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-balance leading-tight">
              <span className="block text-primary dark:text-white">Superior Quality</span>
              <span className="block gradient-green bg-clip-text text-transparent">Agro-Chemical Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Nutrolin India manufactures premium pesticides, fungicides, herbicides, and bio-fertilizers trusted by thousands of Indian farmers. Complete crop protection with proven efficacy.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-sm font-semibold text-primary dark:text-accent">
                ✓ 41+ Premium Products
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary dark:text-white">
                ✓ 6 Product Categories
              </span>
            </div>
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

          {/* Premium Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 md:gap-8 max-w-3xl mx-auto">
            <div className="glass rounded-xl p-6 md:p-8 space-y-3 animate-slideInDown hover:shadow-lg transition-shadow duration-300 border border-primary/10">
              <div className="text-4xl md:text-5xl font-black text-primary dark:text-accent">41+</div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-primary dark:text-white">Premium Products</p>
                <p className="text-xs text-muted-foreground dark:text-slate-400">Across all categories</p>
              </div>
            </div>
            <div className="glass rounded-xl p-6 md:p-8 space-y-3 animate-slideInDown hover:shadow-lg transition-shadow duration-300 border border-primary/10" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl md:text-5xl font-black text-primary dark:text-accent">6</div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-primary dark:text-white">Categories</p>
                <p className="text-xs text-muted-foreground dark:text-slate-400">Complete crop protection</p>
              </div>
            </div>
            <div className="glass rounded-xl p-6 md:p-8 space-y-3 animate-slideInDown hover:shadow-lg transition-shadow duration-300 border border-primary/10" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl md:text-5xl font-black text-primary dark:text-accent">ISO</div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-primary dark:text-white">9001:2015</p>
                <p className="text-xs text-muted-foreground dark:text-slate-400">Certified quality</p>
              </div>
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
