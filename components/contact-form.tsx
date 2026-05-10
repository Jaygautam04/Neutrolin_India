"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export function ContactForm() {
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
    <div className="glass rounded-lg p-8 animate-slideInDown">
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
  )
}
