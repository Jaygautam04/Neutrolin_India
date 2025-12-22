import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { CategoryHero } from "@/components/category-hero"
import { LiveChatSupport } from "@/components/live-chat-support"
import { BackToTop } from "@/components/back-to-top"
import { ScrollProgress } from "@/components/scroll-progress"

const herbicidesProducts = [
  {
    id: 1,
    name: "GlyphoMax Ultra",
    description: "Non-selective herbicide for complete weed control",
    price: "₹890",
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Non-Selective", "Rain Fast", "Complete Kill"],
    category: "Herbicides",
  },
  {
    id: 2,
    name: "AtrazinePro",
    description: "Pre and post-emergence herbicide for maize and sugarcane",
    price: "₹720",
    rating: 4.6,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Maize & Sugarcane", "Dual Action", "Long Control"],
    category: "Herbicides",
  },
  {
    id: 3,
    name: "2,4-D Elite",
    description: "Selective herbicide for broadleaf weed control in cereals",
    price: "₹650",
    rating: 4.5,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Selective", "Cereal Safe", "Broadleaf Control"],
    category: "Herbicides",
  },
  {
    id: 4,
    name: "PendimethalinPro",
    description: "Pre-emergence herbicide for multiple crops",
    price: "₹980",
    rating: 4.8,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Pre-Emergence", "Multi-Crop", "Soil Active"],
    category: "Herbicides",
  },
  {
    id: 5,
    name: "QuizalofopGuard",
    description: "Selective grass herbicide for cotton and soybean",
    price: "₹1,150",
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Grass Killer", "Cotton Safe", "Fast Acting"],
    category: "Herbicides",
  },
  {
    id: 6,
    name: "ParaquatPower",
    description: "Contact herbicide for quick burn down of annual weeds",
    price: "₹850",
    rating: 4.4,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Contact Action", "Quick Results", "Burn Down"],
    category: "Herbicides",
  },
]

export default function HerbicidesPage() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      <CategoryHero
        title="Herbicides"
        description="Effective weed management solutions for cleaner, healthier fields"
        icon="leaf"
        color="green"
      />
      <ProductGrid products={herbicidesProducts} />
      <Footer />
      <LiveChatSupport />
      <BackToTop />
    </main>
  )
}
