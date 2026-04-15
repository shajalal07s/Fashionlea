import ShopLayout from "@/components/shared/ShopLayout";
import { MAKEUP_PRODUCTS } from "@/data/makeupProducts";
import { SKINCARE_PRODUCTS } from "@/data/skincareProducts";
import { HAIRCARE_PRODUCTS } from "@/data/haircareProducts";
import { ORALCARE_PRODUCTS } from "@/data/oralcareProducts";
import { HOMECARE_PRODUCTS } from "@/data/homecareProducts";

// Combine all products from all categories
const ALL_PRODUCTS = [
  ...MAKEUP_PRODUCTS,
  ...SKINCARE_PRODUCTS,
  ...HAIRCARE_PRODUCTS,
  ...ORALCARE_PRODUCTS,
  ...HOMECARE_PRODUCTS,
];

// Get unique categories from all products
const ALL_CATEGORIES = Array.from(
  new Set(ALL_PRODUCTS.map((p) => p.category))
).sort();

// Get all statuses
const ALL_STATUSES = ["In stock", "Out of stock", "On sale"];

export default function ShopPage() {
  return (
    <ShopLayout
      pageTitle="Shop All Products"
      pageSubtitle="Browse our entire collection of beauty and personal care products"
      products={ALL_PRODUCTS}
      categories={ALL_CATEGORIES}
      statuses={ALL_STATUSES}
      itemsPerPage={8}
      showSidebar={true}
    />
  );
}
