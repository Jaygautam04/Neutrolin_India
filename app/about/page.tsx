import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Users, Award, Truck, Target, Heart, Shield } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LiveChatSupport } from "@/components/live-chat-support"
import { BackToTop } from "@/components/back-to-top"
import { ScrollProgress } from "@/components/scroll-progress"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6 animate-in fade-in slide-in-from-top duration-500">
              <span className="text-sm font-semibold text-primary">Trusted by Farmers Across India</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-top duration-700 text-balance">
              About Neutrolin India
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-in fade-in slide-in-from-top duration-1000 text-pretty leading-relaxed">
              Empowering Indian farmers with premium quality pesticides and fertilizers since 2008. Your trusted partner
              in agricultural excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 group border-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide Indian farmers with world-class agricultural solutions that enhance crop yield, protect
                against pests and diseases, and promote sustainable farming practices. We are committed to making
                quality products accessible and affordable for every farmer.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 group border-2">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted agricultural solutions provider by 2030, recognized for innovation,
                quality, and farmer-centric approach. We envision a future where every farmer has access to the best
                tools and knowledge to succeed.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">Principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Every product undergoes rigorous testing to meet international standards",
              },
              {
                icon: Users,
                title: "Farmer First",
                description: "We listen, understand, and prioritize the needs of our farming community",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Continuously improving to deliver the best agricultural solutions",
              },
              {
                icon: CheckCircle,
                title: "Integrity",
                description: "Honest, transparent business practices in all our operations",
              },
              {
                icon: Truck,
                title: "Reliability",
                description: "Timely delivery and consistent product availability nationwide",
              },
              {
                icon: Heart,
                title: "Sustainability",
                description: "Promoting eco-friendly practices for a healthier planet",
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "50K+", label: "Happy Farmers" },
              { number: "200+", label: "Products" },
              { number: "28", label: "States Covered" },
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">Ready to Grow with Us?</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who trust Neutrolin India for their agricultural needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="hover:scale-105 transition-transform">
              <Link href="/products">Browse Products</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 transition-all bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <LiveChatSupport />
      <BackToTop />
    </div>
  )
}
