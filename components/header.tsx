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
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors relative group px-3 py-2">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors relative group px-3 py-2">
              All Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            
            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium hover:text-primary transition-colors relative px-3 py-2 flex items-center gap-1">
                Categories
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full mt-0 w-48 bg-card rounded-lg shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40">
                <Link href="/products/insecticides" className="block px-4 py-2 text-sm hover:bg-primary/10 rounded-md transition-colors">
                  Insecticides (17)
                </Link>
                <Link href="/products/fungicides" className="block px-4 py-2 text-sm hover:bg-primary/10 rounded-md transition-colors">
                  Fungicides (6)
                </Link>
                <Link href="/products/herbicides" className="block px-4 py-2 text-sm hover:bg-primary/10 rounded-md transition-colors">
                  Herbicides (3)
                </Link>
                <Link href="/products/pgr" className="block px-4 py-2 text-sm hover:bg-primary/10 rounded-md transition-colors">
                  Plant Growth Regulators (4)
                </Link>
                <Link href="/products/bio-fertilizers" className="block px-4 py-2 text-sm hover:bg-primary/10 rounded-md transition-colors">
                  Bio-Fertilizers (2)
                </Link>
                <Link href="/products/fertilizers" className="block px-4 py-2 text-sm hover:bg-primary/10 rounded-md transition-colors">
                  Fertilizers (9)
                </Link>
              </div>
            </div>
            
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors relative group px-3 py-2">
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
          <div className="md:hidden py-4 animate-in slide-in-from-top duration-300 border-t border-border/50">
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors py-2 px-2 rounded hover:bg-primary/5">
                Home
              </Link>
              <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors py-2 px-2 rounded hover:bg-primary/5">
                All Products
              </Link>
              
              {/* Categories Section */}
              <div className="py-2 px-2 border-t border-border/30 mt-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase py-2">Categories</p>
                <Link href="/products/insecticides" className="text-sm hover:text-primary transition-colors py-2 px-2 block rounded hover:bg-primary/5">
                  Insecticides (17)
                </Link>
                <Link href="/products/fungicides" className="text-sm hover:text-primary transition-colors py-2 px-2 block rounded hover:bg-primary/5">
                  Fungicides (6)
                </Link>
                <Link href="/products/herbicides" className="text-sm hover:text-primary transition-colors py-2 px-2 block rounded hover:bg-primary/5">
                  Herbicides (3)
                </Link>
                <Link href="/products/pgr" className="text-sm hover:text-primary transition-colors py-2 px-2 block rounded hover:bg-primary/5">
                  Plant Growth Regulators (4)
                </Link>
                <Link href="/products/bio-fertilizers" className="text-sm hover:text-primary transition-colors py-2 px-2 block rounded hover:bg-primary/5">
                  Bio-Fertilizers (2)
                </Link>
                <Link href="/products/fertilizers" className="text-sm hover:text-primary transition-colors py-2 px-2 block rounded hover:bg-primary/5">
                  Fertilizers (9)
                </Link>
              </div>
              
              <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors py-2 px-2 rounded hover:bg-primary/5 border-t border-border/30 mt-2">
                Contact
              </Link>
              
              <div className="flex gap-2 pt-4 border-t border-border/30 mt-2">
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
