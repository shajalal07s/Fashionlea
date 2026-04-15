/**
 * Home Care Products Data
 */

import { FilterableProduct } from "./makeupProducts";

export const HOMECARE_PRODUCTS: FilterableProduct[] = [
  {
    id: 401,
    title: "All-Purpose Cleaner - Lemon Fresh",
    image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp",
    price: "৳299",
    priceNumeric: 299,
    category: "CLEANER",
    status: "In stock",
  },
  {
    id: 402,
    title: "Laundry Detergent - Floral Scent",
    image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp",
    price: "৳450",
    priceNumeric: 450,
    category: "DETERGENT",
    status: "In stock",
  },
  {
    id: 403,
    title: "Dishwashing Liquid - Grease Cutting",
    image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png",
    price: "৳199",
    priceNumeric: 199,
    category: "DISHWASH",
    status: "In stock",
  },
  {
    id: 404,
    title: "Floor Cleaner - Pine Scent",
    image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp",
    price: "৳250",
    priceNumeric: 250,
    category: "FLOOR",
    status: "On sale",
  },
  {
    id: 405,
    title: "Air Freshener - Lavender Spray",
    image: "/All Image/Shop Image/Aloe-4-600x600.jpg",
    price: "৳349",
    priceNumeric: 349,
    category: "FRESHENER",
    status: "In stock",
  },
  {
    id: 406,
    title: "Fabric Softener - Fresh Linen",
    image: "/All Image/Shop Image/Lemon-Group-Static-800x800-1-600x600.webp",
    price: "৳399",
    priceNumeric: 399,
    category: "SOFTENER",
    status: "In stock",
  },
  {
    id: 407,
    title: "Toilet Cleaner - Germ Protection",
    image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp",
    price: "৳179",
    priceNumeric: 179,
    category: "TOILET",
    status: "In stock",
  },
  {
    id: 408,
    title: "Glass Cleaner - Streak Free",
    image: "/All Image/Shop Image/Lotus-4-600x600.jpg",
    price: "৳229",
    priceNumeric: 229,
    category: "GLASS",
    status: "In stock",
  },
];

export const HOMECARE_CATEGORIES = [
  "CLEANER",
  "DETERGENT",
  "DISHWASH",
  "FLOOR",
  "FRESHENER",
  "SOFTENER",
  "TOILET",
  "GLASS",
];

export const HOMECARE_STATUSES = ["In stock", "Out of stock", "On sale"];
