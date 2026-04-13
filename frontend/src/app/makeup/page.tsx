import ShopLayout from "@/components/shared/ShopLayout";
import type { FilterableProduct } from "@/components/shared";

const makeupProducts: FilterableProduct[] = [
  { id: 101, image: "/All Image/Shop Image/Lotus-4-600x600.jpg", title: "Matte Lipstick – Long Lasting Red Velvet, 4.2g", price: "₹599.00", priceNumeric: 599, category: "Lipstick", status: "In stock" },
  { id: 102, image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp", title: "Foundation Stick – Full Coverage, Natural Beige", price: "₹1,299.00", priceNumeric: 1299, category: "Foundation", status: "In stock" },
  { id: 103, image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp", title: "Concealer Pen – Under Eye Brightening, 3ml", price: "₹450.00", priceNumeric: 450, category: "Concealer", status: "In stock" },
  { id: 104, image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png", title: "Eyeshadow Palette – Nude Shimmer, 12 Shades", price: "₹899.00", priceNumeric: 899, category: "Eyeshadow", status: "In stock" },
  { id: 105, image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp", title: "Mascara – Volumizing & Lengthening, Black", price: "₹650.00", priceNumeric: 650, category: "Mascara", status: "In stock" },
  { id: 106, image: "/All Image/Shop Image/Aloe-4-600x600.jpg", title: "Kajal Pencil – Waterproof & Smudge Proof", price: "₹250.00", priceNumeric: 250, category: "Kajal", status: "On sale" },
  { id: 107, image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp", title: "Blush Powder – Peachy Pink Glow, 5g", price: "₹499.00", priceNumeric: 499, category: "Blush", status: "In stock" },
  { id: 108, image: "/All Image/Shop Image/Lemon-Group-Static-800x800-1-600x600.webp", title: "Setting Spray – All Day Matte Finish, 100ml", price: "₹550.00", priceNumeric: 550, category: "Setting Spray", status: "In stock" },
  { id: 109, image: "/All Image/Shop Image/Lotus-4-600x600.jpg", title: "Lip Gloss – Crystal Clear Shine, 10ml", price: "₹350.00", priceNumeric: 350, category: "Lip Gloss", status: "In stock" },
  { id: 110, image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp", title: "Bronzer Compact – Sun-Kissed Glow, 8g", price: "₹750.00", priceNumeric: 750, category: "Bronzer", status: "In stock" },
  { id: 111, image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp", title: "Eyeliner Pen – Precision Tip, Jet Black", price: "₹399.00", priceNumeric: 399, category: "Eyeliner", status: "In stock" },
  { id: 112, image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png", title: "Highlighter Stick – Golden Radiance, 4g", price: "₹699.00", priceNumeric: 699, category: "Highlighter", status: "On sale" },
  { id: 113, image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp", title: "Makeup Remover Wipes – Gentle Cleansing, 25pcs", price: "₹199.00", priceNumeric: 199, category: "Makeup Remover", status: "In stock" },
  { id: 114, image: "/All Image/Shop Image/Aloe-4-600x600.jpg", title: "Contour Palette – Sculpt & Define, 6 Shades", price: "₹850.00", priceNumeric: 850, category: "Contour", status: "In stock" },
  { id: 115, image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp", title: "Lip Liner – Precision Outline, Mauve", price: "₹299.00", priceNumeric: 299, category: "Lip Liner", status: "In stock" },
  { id: 116, image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp", title: "Brow Gel – Tinted & Shaping, Clear", price: "₹450.00", priceNumeric: 450, category: "Brow", status: "In stock" },
];

export default function MakeupPage() {
  const categories = Array.from(new Set(makeupProducts.map((p) => p.category)));

  return (
    <ShopLayout
      pageTitle="Makeup"
      pageSubtitle="Discover the latest makeup trends and products."
      products={makeupProducts}
      categories={categories}
    />
  );
}
