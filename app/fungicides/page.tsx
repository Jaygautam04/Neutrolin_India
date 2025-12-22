import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { CategoryHero } from "@/components/category-hero"
import { LiveChatSupport } from "@/components/live-chat-support"
import { BackToTop } from "@/components/back-to-top"
import { ScrollProgress } from "@/components/scroll-progress"

const fungicidesProducts = [
  {
    id: 1,
    name: "FungiShield Gold",
    description: "Broad-spectrum fungicide for preventive and curative action",
    price: "₹1,200",
    rating: 4.9,
    image: "/fungicide-bottle-blue.jpg",
    features: ["Preventive", "Curative", "Long Protection"],
    category: "Fungicides",
  },
  {
    id: 2,
    name: "MancoPro Super",
    description: "Mancozeb-based protective fungicide for multiple crops",
    price: "₹750",
    rating: 4.7,
    image: "/pesticide-spray-field.jpg",
    features: ["Multi-Crop", "Weather Proof", "Cost Effective"],
    category: "Fungicides",
  },
  {
    id: 3,
    name: "AzoxyStar",
    description: "Systemic fungicide with translaminar movement",
    price: "₹1,450",
    rating: 4.8,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Systemic", "Translaminar", "Resistant Free"],
    category: "Fungicides",
  },
  {
    id: 4,
    name: "CopperMax Plus",
    description: "Copper-based organic fungicide for fruit crops",
    price: "₹680",
    rating: 4.5,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Organic", "Fruit Safe", "Bactericide"],
    category: "Fungicides",
  },
  {
    id: 5,
    name: "PropiGuard Elite",
    description: "Advanced propiconazole formulation for cereals",
    price: "₹1,350",
    rating: 4.8,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Cereal Specialist", "Long Duration", "High Quality"],
    category: "Fungicides",
  },
  {
    id: 6,
    name: "SulphurPro Micronized",
    description: "Micronized sulphur for powdery mildew control",
    price: "₹550",
    rating: 4.6,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Micronized", "Mildew Control", "Budget Friendly"],
    category: "Fungicides",
  },
]

export default function FungicidesPage() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      <CategoryHero
        title="Fungicides"
        description="Advanced fungal disease management solutions for healthy crops"
        icon="droplets"
        color="blue"
      />
      <ProductGrid products={fungicidesProducts} />
      <Footer />
      <LiveChatSupport />
      <BackToTop />
    </main>
  )
}
