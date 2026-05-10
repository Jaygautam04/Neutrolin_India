"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { products, categories, getProductsByCategory } from "@/lib/products";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryData = categories.find((c) => c.id === params.category);
  const categoryProducts = getProductsByCategory(params.category);

  if (!categoryData || categoryProducts.length === 0) {
    notFound();
  }

  const categoryDescriptions: Record<string, string> = {
    insecticides:
      "Our insecticide range protects crops from harmful insects and pests. Each product is formulated with proven active ingredients to ensure maximum efficacy.",
    herbicides:
      "Effective weed control solutions designed to eliminate unwanted vegetation without harming your crops. Available in various formulations for different applications.",
    fungicides:
      "Combat fungal diseases with our comprehensive range of fungicides. Proven to prevent and cure diseases like powdery mildew, blast, blight, and more.",
    pgr: "Plant growth regulators to enhance crop productivity, improve flowering, and increase fruit quality. Scientifically formulated for optimal results.",
    "bio-fertilizers":
      "Sustainable bio-fertilizer solutions that enhance soil fertility and promote beneficial microbial activity for healthier, more productive crops.",
    fertilizers:
      "Complete range of macro and micronutrient fertilizers designed to meet the nutritional needs of various crops and soil conditions.",
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted dark:bg-slate-900 pt-24 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-primary font-semibold">{categoryData.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mb-12 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">{categoryData.name}</h1>
            <p className="text-lg text-muted-foreground dark:text-slate-300">
              {categoryDescriptions[params.category]}
            </p>
            <p className="text-sm text-muted-foreground dark:text-slate-400 mt-4">
              {categoryProducts.length} products available
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products/${category.id}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category.id === params.category
                    ? "bg-primary text-white dark:bg-secondary"
                    : "glass text-primary dark:text-accent hover:bg-primary hover:text-white dark:hover:bg-secondary"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
