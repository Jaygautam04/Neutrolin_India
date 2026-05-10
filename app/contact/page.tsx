"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Send, Award, Globe } from "lucide-react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const metadata = {
  title: "Contact Nutrolin India | Premium Agro-Chemicals",
  description: "Get in touch with Nutrolin India. Contact us for product inquiries, bulk orders, or distribution opportunities.",
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Product Inquiry",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for contacting us! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "Product Inquiry", message: "" })
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted dark:bg-slate-900 pt-24 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-primary font-semibold">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-white to-muted dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary dark:text-white">Get in Touch</h1>
            <p className="text-xl text-muted-foreground dark:text-slate-300 leading-relaxed">
              Have questions about our products or need bulk orders? Contact Nutrolin India today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="animate-fadeInUp">
                <h2 className="text-2xl font-bold text-primary dark:text-white mb-6">Contact Information</h2>

                {/* Company */}
                <div className="glass rounded-lg p-6 space-y-3 hover:shadow-lg transition-shadow mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Award className="w-6 h-6 text-primary dark:text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary dark:text-white">Company</h3>
                      <p className="text-muted-foreground dark:text-slate-400">Nutrolin India Private Limited</p>
                      <p className="text-sm text-muted-foreground dark:text-slate-500 mt-1">ISO 9001:2015 Certified</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="glass rounded-lg p-6 space-y-3 hover:shadow-lg transition-shadow mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary dark:text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary dark:text-white">Location</h3>
                      <p className="text-muted-foreground dark:text-slate-400">Chitsona, Bulandshahr</p>
                      <p className="text-sm text-muted-foreground dark:text-slate-500">Uttar Pradesh, India</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="glass rounded-lg p-6 space-y-3 hover:shadow-lg transition-shadow mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary dark:text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary dark:text-white">Phone</h3>
                      <p className="text-muted-foreground dark:text-slate-400">Contact: Abhay Kumar</p>
                      <a href="tel:+91" className="text-primary dark:text-accent font-medium hover:underline">
                        +91 8006522535
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="glass rounded-lg p-6 space-y-3 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary dark:text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary dark:text-white">Email</h3>
                      <a href="mailto:ak8006522535@gmail.com" className="text-primary dark:text-accent font-medium hover:underline text-sm break-all">
                        ak8006522535@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 glass rounded-lg p-8 animate-slideInDown">
              <h2 className="text-2xl font-bold text-primary dark:text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white dark:bg-slate-900 text-foreground dark:text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white dark:bg-slate-900 text-foreground dark:text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white dark:bg-slate-900 text-foreground dark:text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white dark:bg-slate-900 text-foreground dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  >
                    <option>Product Inquiry</option>
                    <option>Bulk Order</option>
                    <option>Distribution</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white dark:bg-slate-900 text-foreground dark:text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 rounded-lg gap-2 transition-all duration-300 hover:scale-105">
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="mt-20 pt-20 border-t border-border">
            <h2 className="text-3xl font-bold text-primary dark:text-white text-center mb-12">Why Choose Nutrolin India</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="glass rounded-lg p-8 text-center space-y-4 hover:shadow-lg transition-shadow animate-fadeInUp">
                <div className="inline-block p-3 bg-primary/10 rounded-lg">
                  <Award className="w-8 h-8 text-primary dark:text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary dark:text-white">ISO Certified</h3>
                <p className="text-muted-foreground dark:text-slate-400">ISO 9001:2015 certified for highest quality standards</p>
              </div>

              <div className="glass rounded-lg p-8 text-center space-y-4 hover:shadow-lg transition-shadow animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
                <div className="inline-block p-3 bg-primary/10 rounded-lg">
                  <Globe className="w-8 h-8 text-primary dark:text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary dark:text-white">Wide Range</h3>
                <p className="text-muted-foreground dark:text-slate-400">41+ premium products across 6 categories</p>
              </div>

              <div className="glass rounded-lg p-8 text-center space-y-4 hover:shadow-lg transition-shadow animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
                <div className="inline-block p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-8 h-8 text-primary dark:text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary dark:text-white">Expert Support</h3>
                <p className="text-muted-foreground dark:text-slate-400">Dedicated team for product guidance & support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
