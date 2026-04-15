"use client";

import { useEffect, useState } from "react";
import ShopLayout from "@/components/shared/ShopLayout";
import type { FilterableProduct } from "@/components/shared";

interface CategoryPageProps {
  category: string;
  title: string;
  description: string;
}

export default function CategoryPage({
  category,
  title,
  description,
}: CategoryPageProps) {
  const [products, setProducts] = useState<FilterableProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/products?category=${category}`);
        const data = await response.json();

        if (data.success && data.products) {
          const mappedProducts: FilterableProduct[] = data.products.map(
            (p: any) => ({
              id: p._id,
              title: p.name,
              price: `৳${p.price.toLocaleString()}`,
              priceNumeric: p.price,
              category: p.category
                ?.replace("-", " ")
                ?.toUpperCase() || category,
              image: p.image || "/placeholder-image.jpg",
              status: p.stock > 0 ? "In stock" : "Out of stock",
            })
          );
          setProducts(mappedProducts);
        } else {
          setError("Failed to load products");
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Could not load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading {title.toLowerCase()}...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <ShopLayout
      pageTitle={title}
      pageSubtitle={description}
      products={products}
      categories={categories}
      extraCategoryCount={0}
    />
  );
}
