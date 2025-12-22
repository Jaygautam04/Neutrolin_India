import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { CategoryHero } from "@/components/category-hero"
import { LiveChatSupport } from "@/components/live-chat-support"
import { ScrollProgress } from "@/components/scroll-progress"

const insecticidesProducts = [
  {
    id: 1,
    name: "CyperGuard Plus",
    description: "Powerful cypermethrin-based insecticide for broad-spectrum control",
    price: "₹850",
    rating: 4.8,
    image: "/insecticide-spray-bottle-cypermethrin.jpg",
    features: ["Fast Acting", "Long Lasting", "Crop Safe"],
    category: "Insecticides",
  },
  {
    id: 2,
    name: "BioNeem Pro",
    description: "Natural neem-based insecticide for organic farming",
    price: "₹650",
    rating: 4.6,
    image: "/organic-neem-oil-bottle-green.jpg",
    features: ["100% Organic", "Eco-Friendly", "Multi-Pest Control"],
    category: "Insecticides",
  },
  {
    id: 3,
    name: "ImidaShield",
    description: "Systemic insecticide for sucking pests and borers",
    price: "₹920",
    rating: 4.9,
    image: "/imidacloprid-insecticide-bottle.jpg",
    features: ["Systemic Action", "Root Protection", "Weather Resistant"],
    category: "Insecticides",
  },
  {
    id: 4,
    name: "ChloroPro Max",
    description: "Contact insecticide for cotton and vegetable crops",
    price: "₹780",
    rating: 4.5,
    image: "/chlorpyrifos-pesticide-spray-can.jpg",
    features: ["Quick Knockdown", "Cost Effective", "Tested Formula"],
    category: "Insecticides",
  },
  {
    id: 5,
    name: "DiamondBack Killer",
    description: "Specialized insecticide for diamondback moth control",
    price: "₹1,100",
    rating: 4.7,
    image: "/pest-control-spray-bottle-agriculture.jpg",
    features: ["Target Specific", "Low Toxicity", "High Efficacy"],
    category: "Insecticides",
  },
  {
    id: 6,
    name: "AphidDestroy",
    description: "Effective solution against aphids and whiteflies",
    price: "₹690",
    rating: 4.4,
    image: "/green-spray-bottle-pesticide-aphid-control.jpg",
    features: ["Selective Action", "Safe for Bees", "Residue Free"],
    category: "Insecticides",
  },
]

export default function InsecticidesPage() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      <CategoryHero
        title="Insecticides"
        description="Premium insect control solutions to protect your crops from harmful pests"
        icon="bug"
        color="red"
      />
      <ProductGrid products={insecticidesProducts} />
      <Footer />
      <LiveChatSupport />
    </main>
  )
}
