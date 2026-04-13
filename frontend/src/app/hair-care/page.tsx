import ShopLayout from "@/components/shared/ShopLayout";
import type { FilterableProduct } from "@/components/shared";

const hairCareProducts: FilterableProduct[] = [
  { id: 301, image: "/All Image/Shop Image/Aloe-4-600x600.jpg", title: "Keratin Shampoo – Repair & Strengthen, 500ml", price: "₹599.00", priceNumeric: 599, category: "Shampoo", status: "In stock" },
  { id: 302, image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp", title: "Argan Oil Conditioner – Deep Nourishment, 400ml", price: "₹499.00", priceNumeric: 499, category: "Conditioner", status: "In stock" },
  { id: 303, image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp", title: "Hair Serum – Frizz Control & Shine, 100ml", price: "₹750.00", priceNumeric: 750, category: "Serum", status: "In stock" },
  { id: 304, image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png", title: "Coconut Hair Oil – Traditional Cold Pressed, 200ml", price: "₹350.00", priceNumeric: 350, category: "Hair Oil", status: "In stock" },
  { id: 305, image: "/All Image/Shop Image/Lotus-4-600x600.jpg", title: "Hair Mask – Protein Treatment, 250g", price: "₹650.00", priceNumeric: 650, category: "Hair Mask", status: "On sale" },
  { id: 306, image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp", title: "Dry Shampoo Spray – Oil Absorbing, 200ml", price: "₹450.00", priceNumeric: 450, category: "Dry Shampoo", status: "In stock" },
  { id: 307, image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp", title: "Leave-In Conditioner – Detangling Spray, 250ml", price: "₹550.00", priceNumeric: 550, category: "Leave-In", status: "In stock" },
  { id: 308, image: "/All Image/Shop Image/Lemon-Group-Static-800x800-1-600x600.webp", title: "Hair Growth Serum – Biotin Enriched, 60ml", price: "₹899.00", priceNumeric: 899, category: "Growth Serum", status: "In stock" },
  { id: 309, image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp", title: "Sulfate-Free Shampoo – Gentle Clean, 400ml", price: "₹499.00", priceNumeric: 499, category: "Shampoo", status: "In stock" },
  { id: 310, image: "/All Image/Shop Image/Aloe-4-600x600.jpg", title: "Curl Defining Cream – Bounce & Hold, 150ml", price: "₹599.00", priceNumeric: 599, category: "Styling", status: "In stock" },
  { id: 311, image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp", title: "Anti-Dandruff Treatment – Tea Tree Formula, 100ml", price: "₹399.00", priceNumeric: 399, category: "Treatment", status: "In stock" },
  { id: 312, image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png", title: "Heat Protectant Spray – 230°C Protection, 200ml", price: "₹450.00", priceNumeric: 450, category: "Heat Protectant", status: "On sale" },
];

export default function HairCarePage() {
  const categories = Array.from(new Set(hairCareProducts.map((p) => p.category)));

  return (
    <ShopLayout
      pageTitle="Hair Care"
      pageSubtitle="Nourish and style your hair with premium products."
      products={hairCareProducts}
      categories={categories}
    />
  );
}
