"use client"

import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Punjab",
    role: "Wheat Farmer",
    image: "/indian-farmer-portrait-happy-smiling.jpg",
    rating: 5,
    text: "Neutrolin products have increased my wheat yield by 35%. The quality is exceptional and the expert guidance is invaluable.",
  },
  {
    name: "Lakshmi Devi",
    location: "Karnataka",
    role: "Cotton Farmer",
    image: "/indian-woman-farmer-smiling-agricultural-field.jpg",
    rating: 5,
    text: "Best pesticides for cotton farming. The insecticides work wonderfully against bollworms. Highly recommended!",
  },
  {
    name: "Suresh Patel",
    location: "Gujarat",
    role: "Vegetable Farmer",
    image: "/indian-farmer-agriculture-vegetables-farming.jpg",
    rating: 5,
    text: "Fast delivery and genuine products. The organic fertilizers have transformed my vegetable farm completely.",
  },
]

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">What Farmers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from farmers who trust Neutrolin India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 border-2 border-primary">
                  <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                </Avatar>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
