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
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Why Choose Neutrolin India?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in modern agriculture with comprehensive solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="group p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
