/**
 * Skin Care Products Data
 */

import { FilterableProduct } from "./makeupProducts";

export const SKINCARE_PRODUCTS: FilterableProduct[] = [
  {
    id: 101,
    title: "Facial Cleanser - Gentle Formula",
    image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png",
    price: "৳279",
    priceNumeric: 279,
    category: "CLEANSER",
    status: "In stock",
  },
  {
    id: 102,
    title: "Moisturizer - Night Cream",
    image: "/All Image/Shop Image/Aloe-4-600x600.jpg",
    price: "৳849",
    priceNumeric: 849,
    category: "MOISTURIZER",
    status: "In stock",
  },
  {
    id: 103,
    title: "Vitamin C Serum - Brightening",
    image: "/All Image/Shop Image/Lemon-Group-Static-800x800-1-600x600.webp",
    price: "৳499",
    priceNumeric: 499,
    category: "SERUM",
    status: "In stock",
  },
  {
    id: 104,
    title: "Face Mask - Sheet Hydrating",
    image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp",
    price: "৳199",
    priceNumeric: 199,
    category: "MASK",
    status: "In stock",
  },
  {
    id: 105,
    title: "Sunscreen SPF 50",
    image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp",
    price: "৳549",
    priceNumeric: 549,
    category: "SUNSCREEN",
    status: "On sale",
  },
  {
    id: 106,
    title: "Toner - Pore Minimizer",
    image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp",
    price: "৳349",
    priceNumeric: 349,
    category: "TONER",
    status: "In stock",
  },
  {
    id: 107,
    title: "Moisturizer - Day Cream SPF",
    image: "/All Image/Shop Image/Lotus-4-600x600.jpg",
    price: "৳429",
    priceNumeric: 429,
    category: "MOISTURIZER",
    status: "In stock",
  },
  {
    id: 108,
    title: "Eye Cream - Anti Wrinkle",
    image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp",
    price: "৳599",
    priceNumeric: 599,
    category: "EYE_CARE",
    status: "In stock",
  },
];

export const SKINCARE_CATEGORIES = [
  "CLEANSER",
  "MOISTURIZER",
  "SERUM",
  "MASK",
  "SUNSCREEN",
  "TONER",
  "EYE_CARE",
];

export const SKINCARE_STATUSES = ["In stock", "Out of stock", "On sale"];
