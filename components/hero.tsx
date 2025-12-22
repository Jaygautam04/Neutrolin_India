"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sprout, Shield, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/indian-farmer-working-in-green-agricultural-field-.jpg" alt="Indian farming" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-in fade-in slide-in-from-bottom duration-700">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">Trusted by 50,000+ Indian Farmers</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            Empowering Indian
            <span className="text-primary block mt-2">Agriculture</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            Premium quality pesticides and fertilizers designed specifically for Indian soil and climate. Boost your
            crop yield and protect your harvest with Neutrolin India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <Button size="lg" className="gap-2 group hover:scale-105 transition-transform">
              Explore Products
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform bg-transparent">
              Contact Expert
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <Sprout className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-3xl font-bold text-foreground">500+</span>
              </div>
              <p className="text-sm text-muted-foreground">Premium Products</p>
            </div>
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-3xl font-bold text-foreground">100%</span>
              </div>
              <p className="text-sm text-muted-foreground">Quality Assured</p>
            </div>
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-3xl font-bold text-foreground">40%</span>
              </div>
              <p className="text-sm text-muted-foreground">Yield Increase</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
