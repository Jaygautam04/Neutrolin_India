"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { LiveChatSupport } from "@/components/live-chat-support"
import { BackToTop } from "@/components/back-to-top"
import { ScrollProgress } from "@/components/scroll-progress"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for contacting us! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Get in Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions? We're here to help you find the right solutions for your farming needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Our Location</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Chitsona, Bulandshahr, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Phone Number</h3>
                    <p className="text-sm text-muted-foreground">+91 8006522535</p>
                    <p className="text-xs text-muted-foreground mt-1">Contact: Abhay Kumar</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Email Address</h3>
                    <p className="text-sm text-muted-foreground break-all">ak8006522535@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Business Hours</h3>
                    <p className="text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 p-8">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="transition-all duration-300 focus:scale-[1.02] resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2 group">
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <LiveChatSupport />
      <BackToTop />
    </main>
  )
}
