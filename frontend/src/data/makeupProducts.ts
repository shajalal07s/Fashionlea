/**
 * Makeup Products Data
 * Fake data for makeup category - used as props in makeup page
 */

export interface FilterableProduct {
  id: number;
  title: string;
  image: string;
  price: string;
  priceNumeric: number;
  category: string;
  status: "In stock" | "Out of stock" | "On sale";
}

export const MAKEUP_PRODUCTS: FilterableProduct[] = [
  {
    id: 1,
    title: "Matte Lipstick - Red Velvet",
    image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp",
    price: "৳399",
    priceNumeric: 399,
    category: "LIPSTICK",
    status: "In stock",
  },
  {
    id: 2,
    title: "Liquid Foundation - Natural Beige",
    image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp",
    price: "৳549",
    priceNumeric: 549,
    category: "FOUNDATION",
    status: "In stock",
  },
  {
    id: 3,
    title: "Eyeshadow Palette - Nude Shimmer",
    image: "/All Image/Shop Image/Lotus-4-600x600.jpg",
    price: "৳599",
    priceNumeric: 599,
    category: "EYESHADOW",
    status: "In stock",
  },
  {
    id: 4,
    title: "Mascara - Volumizing Black",
    image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp",
    price: "৳449",
    priceNumeric: 449,
    category: "MASCARA",
    status: "In stock",
  },
  {
    id: 5,
    title: "Blush Powder - Rose Pink",
    image: "/All Image/Shop Image/Lemon-Group-Static-800x800-1-600x600.webp",
    price: "৳349",
    priceNumeric: 349,
    category: "BLUSH",
    status: "In stock",
  },
  {
    id: 6,
    title: "Concealer Pen - Fair",
    image: "/All Image/Shop Image/Aloe-4-600x600.jpg",
    price: "৳299",
    priceNumeric: 299,
    category: "CONCEALER",
    status: "On sale",
  },
  {
    id: 7,
    title: "Makeup Setting Spray",
    image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp",
    price: "৳399",
    priceNumeric: 399,
    category: "SPRAY",
    status: "In stock",
  },
  {
    id: 8,
    title: "Highlighter - Golden Glow",
    image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp",
    price: "৳449",
    priceNumeric: 449,
    category: "HIGHLIGHTER",
    status: "In stock",
  },
];

// Makeup product categories for filtering
export const MAKEUP_CATEGORIES = [
  "LIPSTICK",
  "FOUNDATION",
  "EYESHADOW",
  "MASCARA",
  "BLUSH",
  "CONCEALER",
  "SPRAY",
  "HIGHLIGHTER",
];

// Available statuses
export const MAKEUP_STATUSES = ["In stock", "Out of stock", "On sale"];
