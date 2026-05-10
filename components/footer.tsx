import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-lg font-bold text-primary">N</span>
              </div>
              <div>
                <span className="text-lg font-bold block">Nutrolin</span>
                <span className="text-xs text-primary-foreground/80">India</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/90 leading-relaxed mb-4">
              Leading manufacturer of premium pesticides, fungicides, herbicides, plant growth promoters and bio-organic products. ISO 9001:2015 Certified Company.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
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
                <Link href="/" className="text-sm text-primary-foreground/90 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-primary-foreground/90 hover:text-accent transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products/insecticides"
                  className="text-sm text-primary-foreground/90 hover:text-accent transition-colors"
                >
                  Insecticides
                </Link>
              </li>
              <li>
                <Link
                  href="/products/fungicides"
                  className="text-sm text-primary-foreground/90 hover:text-accent transition-colors"
                >
                  Fungicides
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary-foreground/90 hover:text-accent transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Product Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/insecticides"
                  className="text-sm text-primary-foreground/90 hover:text-accent transition-colors"
                >
                  Insecticides (17)
                </Link>
              </li>
              <li>
                <Link
                  href="/products/fungicides"
                  className="text-sm text-primary-foreground/90 hover:text-accent transition-colors"
                >
                  Fungicides (6)
                </Link>
              </li>
              <li>
                <Link
                  href="/products/herbicides"
                  className="text-sm text-primary-foreground/90 hover:text-accent transition-colors"
                >
                  Herbicides (3)
                </Link>
              </li>
              <li>
                <Link
                  href="/products/pgr"
                  className="text-sm text-primary-foreground/90 hover:text-accent transition-colors"
                >
                  Plant Growth Regulators (4)
                </Link>
              </li>
              <li>
                <Link
                  href="/products/fertilizers"
                  className="text-sm text-primary-foreground/90 hover:text-accent transition-colors"
                >
                  Fertilizers (9)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/90">
                  Chitsona, Bulandshahr, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/90">+91 8006522535</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/90">ak8006522535@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/80">© 2025 Nutrolin India Private Limited. All rights reserved. ISO 9001:2015 Certified.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
