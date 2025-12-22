import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">N</span>
              </div>
              <div>
                <span className="text-lg font-bold block">Neutrolin</span>
                <span className="text-xs text-secondary-foreground/60">India</span>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed mb-4">
              Leading provider of premium agricultural solutions for Indian farmers since 2008.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Farming Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/insecticides"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Insecticides
                </Link>
              </li>
              <li>
                <Link
                  href="/fungicides"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Fungicides
                </Link>
              </li>
              <li>
                <Link
                  href="/herbicides"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Herbicides
                </Link>
              </li>
              <li>
                <Link
                  href="/fertilizers"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Fertilizers
                </Link>
              </li>
              <li>
                <Link
                  href="/organic"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Organic Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  Chitsona, Bulandshahr, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">+91 8006522535</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">ak8006522535@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60">© 2025 Neutrolin India. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link
              href="/shipping"
              className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
            >
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
