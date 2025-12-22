"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get Expert Farming Tips</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
            Subscribe to our newsletter for the latest agricultural insights, product updates, and exclusive offers
            tailored for Indian farmers.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/20 border-white/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-white/30"
            />
            <Button type="submit" variant="secondary" size="lg" className="hover:scale-105 transition-transform">
              Subscribe Now
            </Button>
          </form>

          <p className="text-sm text-primary-foreground/60 mt-4">
            Join 10,000+ farmers receiving weekly farming tips and updates
          </p>
        </div>
      </div>
    </section>
  )
}
