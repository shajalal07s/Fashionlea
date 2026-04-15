/**
 * Oral Care Products Data
 */

import { FilterableProduct } from "./makeupProducts";

export const ORALCARE_PRODUCTS: FilterableProduct[] = [
  {
    id: 301,
    title: "Toothpaste - Whitening Formula",
    image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png",
    price: "৳299",
    priceNumeric: 299,
    category: "TOOTHPASTE",
    status: "In stock",
  },
  {
    id: 302,
    title: "Mouthwash - Fresh Mint",
    image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp",
    price: "৳350",
    priceNumeric: 350,
    category: "MOUTHWASH",
    status: "In stock",
  },
  {
    id: 303,
    title: "Dental Floss - Mint Waxed",
    image: "/All Image/Shop Image/Aloe-4-600x600.jpg",
    price: "৳150",
    priceNumeric: 150,
    category: "FLOSS",
    status: "In stock",
  },
  {
    id: 304,
    title: "Electric Toothbrush - Sonic",
    image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp",
    price: "৳1499",
    priceNumeric: 1499,
    category: "TOOTHBRUSH",
    status: "In stock",
  },
  {
    id: 305,
    title: "Toothbrush - Bamboo Natural",
    image: "/All Image/Shop Image/Lemon-Group-Static-800x800-1-600x600.webp",
    price: "৳99",
    priceNumeric: 99,
    category: "TOOTHBRUSH",
    status: "On sale",
  },
  {
    id: 306,
    title: "Teeth Whitening Strips - 14 Day",
    image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp",
    price: "৳999",
    priceNumeric: 999,
    category: "WHITENING",
    status: "In stock",
  },
  {
    id: 307,
    title: "Tongue Scraper - Stainless Steel",
    image: "/All Image/Shop Image/Lotus-4-600x600.jpg",
    price: "৳199",
    priceNumeric: 199,
    category: "SCRAPER",
    status: "In stock",
  },
  {
    id: 308,
    title: "Water Flosser - Cordless",
    image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp",
    price: "৳2499",
    priceNumeric: 2499,
    category: "FLOSSER",
    status: "In stock",
  },
];

export const ORALCARE_CATEGORIES = [
  "TOOTHPASTE",
  "MOUTHWASH",
  "FLOSS",
  "TOOTHBRUSH",
  "WHITENING",
  "SCRAPER",
];

export const ORALCARE_STATUSES = ["In stock", "Out of stock", "On sale"];
