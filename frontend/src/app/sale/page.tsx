import ShopLayout from "@/components/shared/ShopLayout";
import type { FilterableProduct } from "@/components/shared";

const saleProducts: FilterableProduct[] = [
  { id: 601, image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp", title: "ACNOL Advanced Hygiene Soap (Lime Fresh) 75gm", price: "₹35.00", priceNumeric: 35, category: "Soap", status: "On sale" },
  { id: 602, image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp", title: "Aloe Vera Gel – Pure & Natural, 200ml", price: "₹349.00", priceNumeric: 349, category: "Skin Care", status: "On sale" },
  { id: 603, image: "/All Image/Shop Image/Lotus-4-600x600.jpg", title: "Matte Lipstick – Red Velvet, 4.2g", price: "₹399.00", priceNumeric: 399, category: "Makeup", status: "On sale" },
  { id: 604, image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp", title: "Sunscreen SPF 50 – Broad Spectrum, 60ml", price: "₹549.00", priceNumeric: 549, category: "Sun Care", status: "On sale" },
  { id: 605, image: "/All Image/Shop Image/Aloe-4-600x600.jpg", title: "Body Lotion – Deep Moisturizing, 300ml", price: "₹399.00", priceNumeric: 399, category: "Body Care", status: "On sale" },
  { id: 606, image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png", title: "Face Wash – Oil Control, 150ml", price: "₹279.00", priceNumeric: 279, category: "Face Care", status: "On sale" },
  { id: 607, image: "/All Image/Shop Image/Lemon-Group-Static-800x800-1-600x600.webp", title: "Hair Mask – Protein Treatment, 250g", price: "₹449.00", priceNumeric: 449, category: "Hair Care", status: "On sale" },
  { id: 608, image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp", title: "Vitamin C Serum – Brightening, 30ml", price: "₹499.00", priceNumeric: 499, category: "Serum", status: "On sale" },
  { id: 609, image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp", title: "Eyeshadow Palette – Nude Shimmer, 12 Shades", price: "₹599.00", priceNumeric: 599, category: "Makeup", status: "On sale" },
  { id: 610, image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp", title: "Shampoo – Keratin Repair, 500ml", price: "₹419.00", priceNumeric: 419, category: "Hair Care", status: "On sale" },
  { id: 611, image: "/All Image/Shop Image/Lotus-4-600x600.jpg", title: "Night Cream – Anti-Wrinkle, 50g", price: "₹849.00", priceNumeric: 849, category: "Skin Care", status: "On sale" },
  { id: 612, image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp", title: "Mascara – Volumizing Black", price: "₹449.00", priceNumeric: 449, category: "Makeup", status: "On sale" },
  { id: 613, image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png", title: "Hair Oil – Coconut Cold Pressed, 200ml", price: "₹249.00", priceNumeric: 249, category: "Hair Care", status: "On sale" },
  { id: 614, image: "/All Image/Shop Image/Aloe-4-600x600.jpg", title: "Concealer Pen – Under Eye, 3ml", price: "₹315.00", priceNumeric: 315, category: "Makeup", status: "On sale" },
  { id: 615, image: "/All Image/Shop Image/Lemon-Group-Static-800x800-1-600x600.webp", title: "Body Jelly – Strawberry Gel, 150ml", price: "₹279.00", priceNumeric: 279, category: "Body Care", status: "On sale" },
  { id: 616, image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp", title: "Toner – Niacinamide Pore Minimizer", price: "₹385.00", priceNumeric: 385, category: "Skin Care", status: "On sale" },
];

export default function SalePage() {
  const categories = Array.from(new Set(saleProducts.map((p) => p.category)));

  return (
    <ShopLayout
      pageTitle="Sale 🔥"
      pageSubtitle="Huge discounts on premium products. Limited time offer!"
      products={saleProducts}
      categories={categories}
      statuses={["On sale"]}
    />
  );
}
