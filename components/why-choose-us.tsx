"use client"

import { Card } from "@/components/ui/card"
import { Shield, Truck, Headphones, Award, Leaf, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "All products tested and certified by agricultural experts",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Pan-India delivery within 2-5 business days",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert agronomists available for consultation",
  },
  {
    icon: Award,
    title: "Trusted Brand",
    description: "15+ years serving Indian farmers with excellence",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable and environment-safe formulations",
  },
  {
    icon: Users,
    title: "Farmer Community",
    description: "Join 50,000+ satisfied farmers across India",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted/50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-white">Why Choose Nutrolin India?</h2>
          <p className="text-lg text-muted-foreground dark:text-slate-300 max-w-2xl mx-auto">
            Leading manufacturer of premium agro-chemicals trusted by thousands of farmers across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="glass rounded-lg p-8 group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fadeInUp cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/15 text-primary dark:bg-secondary/20 dark:text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-primary dark:text-white group-hover:text-secondary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground dark:text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
