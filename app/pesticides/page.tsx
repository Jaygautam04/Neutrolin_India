import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bug, Flower2, Sprout, ShoppingCart, Heart, Eye } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LiveChatSupport } from "@/components/live-chat-support"
import { BackToTop } from "@/components/back-to-top"
import { ScrollProgress } from "@/components/scroll-progress"

export default function PesticidesPage() {
  const categories = [
    {
      name: "Insecticides",
      icon: Bug,
      description: "Control and eliminate harmful insects",
      link: "/insecticides",
      color: "bg-red-500/10 text-red-600",
    },
    {
      name: "Fungicides",
      icon: Flower2,
      description: "Prevent and treat fungal diseases",
      link: "/fungicides",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      name: "Herbicides",
      icon: Sprout,
      description: "Effective weed control solutions",
      link: "/herbicides",
      color: "bg-green-500/10 text-green-600",
    },
  ]

  const featuredProducts = [
    {
      name: "Chlorpyrifos 20% EC",
      category: "Insecticide",
      price: 450,
      image: "/pesticide-bottle-chlorpyrifos.jpg",
      rating: 4.5,
      inStock: true,
    },
    {
      name: "Mancozeb 75% WP",
      category: "Fungicide",
      price: 380,
      image: "/fungicide-powder-mancozeb.jpg",
      rating: 4.8,
      inStock: true,
    },
    {
      name: "Glyphosate 41% SL",
      category: "Herbicide",
      price: 520,
      image: "/herbicide-bottle-glyphosate.jpg",
      rating: 4.6,
      inStock: true,
    },
    {
      name: "Imidacloprid 17.8% SL",
      category: "Insecticide",
      price: 410,
      image: "/insecticide-bottle-imidacloprid.jpg",
      rating: 4.7,
      inStock: true,
    },
    {
      name: "Carbendazim 50% WP",
      category: "Fungicide",
      price: 390,
      image: "/fungicide-carbendazim-white-powder.jpg",
      rating: 4.5,
      inStock: true,
    },
    {
      name: "2,4-D Amine Salt",
      category: "Herbicide",
      price: 340,
      image: "/herbicide-bottle-2-4-d.jpg",
      rating: 4.4,
      inStock: true,
    },
  ]

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-accent/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 animate-in fade-in slide-in-from-top duration-500">Premium Quality Pesticides</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-top duration-700 text-balance">
              Protect Your Crops with Advanced Pesticides
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-in fade-in slide-in-from-top duration-1000 text-pretty leading-relaxed mb-8">
              Comprehensive pest control solutions for healthier crops and better yields
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pesticide Categories</h2>
            <p className="text-muted-foreground text-lg">Choose the right solution for your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <Link key={index} href={category.link}>
                  <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer border-2 hover:border-primary">
                    <div
                      className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{category.description}</p>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Pesticides</h2>
            <p className="text-muted-foreground text-lg">Our most popular and effective solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden bg-secondary/50">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-9 w-9 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-9 w-9 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                  {product.inStock && <Badge className="absolute top-3 left-3 bg-primary">In Stock</Badge>}
                </div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-2">
                    {product.category}
                  </Badge>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <Button className="w-full gap-2 hover:scale-105 transition-transform">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="hover:scale-105 transition-transform">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Pesticides?</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Certified Quality", description: "All products meet international standards" },
                { title: "Effective Results", description: "Proven efficacy in field trials" },
                { title: "Safe to Use", description: "Environmentally responsible formulations" },
                { title: "Expert Support", description: "Technical guidance from agronomists" },
              ].map((benefit, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <LiveChatSupport />
      <BackToTop />
    </div>
  )
}
