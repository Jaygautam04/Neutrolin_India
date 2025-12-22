"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, ArrowUp } from "lucide-react"

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      {/* Call Button */}
      <Button
        size="icon"
        className="h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-all bg-green-600 hover:bg-green-700"
        asChild
      >
        <a href="tel:+918006522535" aria-label="Call us">
          <Phone className="h-6 w-6" />
        </a>
      </Button>

      {/* WhatsApp Button */}
      <Button
        size="icon"
        className="h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-all bg-green-500 hover:bg-green-600"
        asChild
      >
        <a href="https://wa.me/918006522535" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp us">
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>

      {/* Back to Top */}
      {showBackToTop && (
        <Button
          size="icon"
          onClick={scrollToTop}
          className="h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-all animate-in fade-in slide-in-from-bottom"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
