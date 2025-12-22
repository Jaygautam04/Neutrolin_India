"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Search } from "lucide-react"
import { ShoppingCartDrawer } from "@/components/shopping-cart"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <span className="text-2xl font-bold text-primary-foreground">N</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                Neutrolin
              </span>
              <span className="text-xs text-muted-foreground -mt-1">India</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/pesticides"
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              Pesticides
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/fertilizers"
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              Fertilizers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors relative group">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative hover:scale-110 transition-transform">
              <Search className="h-5 w-5" />
            </Button>
            <ShoppingCartDrawer />
            <Button className="gap-2 hover:scale-105 transition-transform" asChild>
              <Link href="/contact">
                <Phone className="h-4 w-4" />
                Call Us
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Home
              </Link>
              <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Products
              </Link>
              <Link href="/pesticides" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Pesticides
              </Link>
              <Link href="/fertilizers" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Fertilizers
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors py-2">
                About Us
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Contact
              </Link>
              <div className="flex gap-2 pt-4">
                <Button className="flex-1 gap-2" asChild>
                  <Link href="/contact">
                    <Phone className="h-4 w-4" />
                    Call Us
                  </Link>
                </Button>
                <ShoppingCartDrawer />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
