import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { CategoryHero } from "@/components/category-hero"
import { LiveChatSupport } from "@/components/live-chat-support"
import { ScrollProgress } from "@/components/scroll-progress"

const fertilizersProducts = [
  {
    id: 1,
    name: "NPK Gold 19:19:19",
    description: "Balanced NPK fertilizer for all growth stages",
    price: "₹1,250",
    rating: 4.9,
    image: "/npk-fertilizer-bag-agriculture.jpg",
    features: ["Water Soluble", "Balanced", "All Stages"],
    category: "Fertilizers",
  },
  {
    id: 2,
    name: "Urea Pro 46%",
    description: "High nitrogen content for vigorous vegetative growth",
    price: "₹580",
    rating: 4.7,
    image: "/white-urea-granules-fertilizer.jpg",
    features: ["46% Nitrogen", "Quick Release", "Cost Effective"],
    category: "Fertilizers",
  },
  {
    id: 3,
    name: "SuperPhosphate",
    description: "Single super phosphate for root development",
    price: "₹720",
    rating: 4.6,
    image: "/super-phosphate-fertilizer-bag-grey.jpg",
    features: ["Root Boost", "Phosphorus Rich", "Soil Conditioner"],
    category: "Fertilizers",
  },
  {
    id: 4,
    name: "Potash Plus",
    description: "Muriate of potash for fruit quality and disease resistance",
    price: "₹890",
    rating: 4.8,
    image: "/red-potash-granules-fertilizer.jpg",
    features: ["Fruit Quality", "Disease Resistance", "High K"],
    category: "Fertilizers",
  },
  {
    id: 5,
    name: "MicroMix Complete",
    description: "Complete micronutrient mixture for deficiency correction",
    price: "₹450",
    rating: 4.7,
    image: "/micronutrient-fertilizer-bottle-liquid.jpg",
    features: ["12 Micronutrients", "Chelated", "Quick Correction"],
    category: "Fertilizers",
  },
  {
    id: 6,
    name: "Organic Compost Supreme",
    description: "100% organic compost for sustainable farming",
    price: "₹380",
    rating: 4.9,
    image: "/organic-compost-bag-brown.jpg",
    features: ["100% Organic", "Soil Health", "Carbon Rich"],
    category: "Fertilizers",
  },
  {
    id: 7,
    name: "DAP Diamond",
    description: "Di-ammonium phosphate for early growth stages",
    price: "₹1,350",
    rating: 4.8,
    image: "/dap-fertilizer-granules-black.jpg",
    features: ["High P", "Early Stage", "Starter Fertilizer"],
    category: "Fertilizers",
  },
  {
    id: 8,
    name: "Calcium Nitrate Plus",
    description: "Water-soluble calcium nitrate for cell wall strength",
    price: "₹680",
    rating: 4.6,
    image: "/calcium-nitrate-white-powder.jpg",
    features: ["Water Soluble", "Cell Strength", "Fruit Crops"],
    category: "Fertilizers",
  },
]

export default function FertilizersPage() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      <CategoryHero
        title="Fertilizers"
        description="Nutrient-rich formulations for optimal crop growth and maximum yield"
        icon="flower"
        color="amber"
      />
      <ProductGrid products={fertilizersProducts} />
      <Footer />
      <LiveChatSupport />
    </main>
  )
}
