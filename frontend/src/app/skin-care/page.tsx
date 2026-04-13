import ShopLayout from "@/components/shared/ShopLayout";
import type { FilterableProduct } from "@/components/shared";

const skinCareProducts: FilterableProduct[] = [
  { id: 201, image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp", title: "Vitamin C Serum – Brightening & Anti-Aging, 30ml", price: "₹699.00", priceNumeric: 699, category: "Serum", status: "In stock" },
  { id: 202, image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp", title: "Hyaluronic Acid Moisturizer – Deep Hydration, 50ml", price: "₹899.00", priceNumeric: 899, category: "Moisturizer", status: "In stock" },
  { id: 203, image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp", title: "Sunscreen SPF 50 – PA+++ Broad Spectrum, 60ml", price: "₹799.00", priceNumeric: 799, category: "Sunscreen", status: "In stock" },
  { id: 204, image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png", title: "Niacinamide Toner – Pore Minimizing, 200ml", price: "₹550.00", priceNumeric: 550, category: "Toner", status: "In stock" },
  { id: 205, image: "/All Image/Shop Image/Lotus-4-600x600.jpg", title: "Retinol Night Cream – Anti-Wrinkle Formula, 50g", price: "₹1,199.00", priceNumeric: 1199, category: "Night Cream", status: "In stock" },
  { id: 206, image: "/All Image/Shop Image/Aloe-4-600x600.jpg", title: "Salicylic Acid Cleanser – Acne Control, 150ml", price: "₹450.00", priceNumeric: 450, category: "Cleanser", status: "On sale" },
  { id: 207, image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp", title: "Rosehip Oil – Organic & Cold Pressed, 30ml", price: "₹750.00", priceNumeric: 750, category: "Face Oil", status: "In stock" },
  { id: 208, image: "/All Image/Shop Image/Lemon-Group-Static-800x800-1-600x600.webp", title: "Clay Mask – Deep Pore Purifying, 100g", price: "₹399.00", priceNumeric: 399, category: "Mask", status: "In stock" },
  { id: 209, image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp", title: "Eye Cream – Dark Circle Reducer, 15ml", price: "₹650.00", priceNumeric: 650, category: "Eye Care", status: "In stock" },
  { id: 210, image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp", title: "AHA BHA Peeling Solution – Exfoliating, 30ml", price: "₹850.00", priceNumeric: 850, category: "Exfoliant", status: "In stock" },
  { id: 211, image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp", title: "Centella Asiatica Cream – Soothing Repair, 50ml", price: "₹599.00", priceNumeric: 599, category: "Moisturizer", status: "In stock" },
  { id: 212, image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png", title: "Tea Tree Spot Treatment – Blemish Control, 15ml", price: "₹299.00", priceNumeric: 299, category: "Treatment", status: "On sale" },
];

export default function SkinCarePage() {
  const categories = Array.from(new Set(skinCareProducts.map((p) => p.category)));

  return (
    <ShopLayout
      pageTitle="Skin Care"
      pageSubtitle="Premium skincare products for glowing, healthy skin."
      products={skinCareProducts}
      categories={categories}
    />
  );
}
