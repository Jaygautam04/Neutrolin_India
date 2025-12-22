import { Bug, Leaf, Droplets, Flower2 } from "lucide-react"

interface CategoryHeroProps {
  title: string
  description: string
  icon: "bug" | "leaf" | "droplets" | "flower"
  color: "red" | "green" | "blue" | "amber"
}

const iconMap = {
  bug: Bug,
  leaf: Leaf,
  droplets: Droplets,
  flower: Flower2,
}

const colorMap = {
  red: "from-red-500/20 to-red-600/20 text-red-600",
  green: "from-green-500/20 to-green-600/20 text-green-600",
  blue: "from-blue-500/20 to-blue-600/20 text-blue-600",
  amber: "from-amber-500/20 to-amber-600/20 text-amber-600",
}

export function CategoryHero({ title, description, icon, color }: CategoryHeroProps) {
  const Icon = iconMap[icon]
  const colorClass = colorMap[color]

  return (
    <section className={`pt-32 pb-16 bg-gradient-to-br ${colorClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-card shadow-xl mb-6 animate-in zoom-in duration-500">
            <Icon className="h-12 w-12" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance animate-in slide-in-from-bottom duration-700">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-in slide-in-from-bottom duration-700 delay-100">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
