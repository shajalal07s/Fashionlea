import ShopLayout from "@/components/shared/ShopLayout";
import type { FilterableProduct } from "@/components/shared";

const shopProducts: FilterableProduct[] = [
  { id: 1, image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp", title: "Acnol Berries Supplement for Clear Skin – 60 Capsules", price: "₹1,299.00", priceNumeric: 1299, category: "Body Care", status: "In stock" },
  { id: 2, image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp", title: "Aloe Vera Gel – Pure & Natural Hydration for Skin and Hair", price: "₹499.00", priceNumeric: 499, category: "Body Care", status: "In stock" },
  { id: 3, image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp", title: "Lemon Extract – Natural Cleanser & Brightener, 100ml", price: "₹350.00", priceNumeric: 350, category: "Cleanser", status: "On sale" },
  { id: 4, image: "/All Image/Shop Image/Lemon-Group-Static-800x800-1-600x600.webp", title: "Lemon Fresh Skin Care Kit – Cleanser, Toner & Moisturizer", price: "₹899.00", priceNumeric: 899, category: "Body Care", status: "In stock" },
  { id: 5, image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png", title: "Lime Fresh Face Wash – Oil Control & Glow, 150ml", price: "₹399.00", priceNumeric: 399, category: "Cleanser", status: "In stock" },
  { id: 6, image: "/All Image/Shop Image/Lotus-4-600x600.jpg", title: "Lotus Herbal Radiant Skin Cleanser – Gentle Formula", price: "₹650.00", priceNumeric: 650, category: "Cleanser", status: "In stock" },
  { id: 7, image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp", title: "White Shield Sunscreen SPF 50 – Broad Spectrum Protection", price: "₹799.00", priceNumeric: 799, category: "Body Care", status: "In stock" },
  { id: 8, image: "/All Image/Shop Image/Aloe-4-600x600.jpg", title: "Aloe Vera Soothing Body Lotion – Deep Moisturizing, 200ml", price: "₹550.00", priceNumeric: 550, category: "Body Lotion", status: "In stock" },
  { id: 9, image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp", title: "Vitamin C Serum – Brightening Face Serum 30ml", price: "₹699.00", priceNumeric: 699, category: "Body Care", status: "In stock" },
  { id: 10, image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp", title: "Charcoal Peel Off Mask – Deep Pore Cleansing, 100g", price: "₹449.00", priceNumeric: 449, category: "Cleanser", status: "On sale" },
  { id: 11, image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp", title: "Rose Water Toner – Alcohol-Free Refresh, 200ml", price: "₹299.00", priceNumeric: 299, category: "Cleanser", status: "In stock" },
  { id: 12, image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png", title: "Coconut Hair Oil – Nourishing & Strong, 200ml", price: "₹350.00", priceNumeric: 350, category: "Conditioner", status: "In stock" },
  { id: 13, image: "/All Image/Shop Image/Lotus-4-600x600.jpg", title: "Kajal Stick – Long Lasting & Smudge Proof, 3g", price: "₹199.00", priceNumeric: 199, category: "Concealer", status: "In stock" },
  { id: 14, image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp", title: "Baby Powder – Soft & Gentle Protection, 200g", price: "₹250.00", priceNumeric: 250, category: "Baby Care", status: "In stock" },
  { id: 15, image: "/All Image/Shop Image/Aloe-4-600x600.jpg", title: "Gold Bracelet – Elegant & Lightweight, 24K", price: "₹4,999.00", priceNumeric: 4999, category: "Jewelry", status: "In stock" },
  { id: 16, image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp", title: "Silver Earrings – Minimalist Everyday Wear", price: "₹1,499.00", priceNumeric: 1499, category: "Accessories", status: "On sale" },
  { id: 17, image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp", title: "Body Jelly – Strawberry Moisturizing Gel, 150ml", price: "₹399.00", priceNumeric: 399, category: "Body Jelly", status: "In stock" },
  { id: 18, image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp", title: "Hair Conditioner – Silk & Shine Formula, 250ml", price: "₹450.00", priceNumeric: 450, category: "Conditioner", status: "In stock" },
  { id: 19, image: "/All Image/Shop Image/Lemon-Group-Static-800x800-1-600x600.webp", title: "Necklace Set – Traditional Design with Pendant", price: "₹2,999.00", priceNumeric: 2999, category: "Jewelry", status: "Out of stock" },
  { id: 20, image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png", title: "Foundation Concealer – Full Coverage, 30ml", price: "₹599.00", priceNumeric: 599, category: "Concealer", status: "In stock" },
];

export default function ShopPage() {
  const categories = Array.from(new Set(shopProducts.map((p) => p.category)));

  return (
    <ShopLayout
      pageTitle="Result"
      pageSubtitle="Check each product page for other buying options."
      products={shopProducts}
      categories={categories}
      extraCategoryCount={44}
    />
  );
}
