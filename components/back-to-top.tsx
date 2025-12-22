"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!isVisible) return null

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className="fixed bottom-24 right-6 h-12 w-12 rounded-full shadow-2xl z-40 animate-in fade-in slide-in-from-bottom-5"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}
