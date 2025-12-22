import { Card } from "@/components/ui/card"

export function ProductSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square bg-muted animate-pulse" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-muted rounded animate-pulse" />
        <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
        <div className="h-6 bg-muted rounded w-1/2 animate-pulse" />
      </div>
    </Card>
  )
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(count)].map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  )
}
