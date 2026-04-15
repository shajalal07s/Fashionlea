/**
 * Sale Products Data
 */

import { FilterableProduct } from "./makeupProducts";

export const SALE_PRODUCTS: FilterableProduct[] = [
  {
    id: 501,
    title: "Aloe Vera Gel - Pure & Natural",
    image: "/All Image/Shop Image/Aloe-4-600x600.jpg",
    price: "৳349",
    priceNumeric: 349,
    category: "SKINCARE",
    status: "On sale",
  },
  {
    id: 502,
    title: "Sunscreen SPF 50 - Broad Spectrum",
    image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp",
    price: "৳549",
    priceNumeric: 549,
    category: "SKINCARE",
    status: "On sale",
  },
  {
    id: 503,
    title: "Body Lotion - Deep Moisturizing",
    image: "/All Image/Shop Image/Lemon-Group-Static-800x800-1-600x600.webp",
    price: "৳399",
    priceNumeric: 399,
    category: "SKINCARE",
    status: "On sale",
  },
  {
    id: 504,
    title: "Matte Lipstick - Red Velvet",
    image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp",
    price: "৳299",
    priceNumeric: 299,
    category: "MAKEUP",
    status: "On sale",
  },
  {
    id: 505,
    title: "Hair Oil - Coconut Cold Pressed",
    image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp",
    price: "৳199",
    priceNumeric: 199,
    category: "HAIRCARE",
    status: "On sale",
  },
  {
    id: 506,
    title: "Toothpaste - Whitening Formula",
    image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png",
    price: "৳199",
    priceNumeric: 199,
    category: "ORALCARE",
    status: "On sale",
  },
  {
    id: 507,
    title: "All-Purpose Cleaner - Lemon Fresh",
    image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp",
    price: "৳199",
    priceNumeric: 199,
    category: "HOMECARE",
    status: "On sale",
  },
  {
    id: 508,
    title: "Vitamin C Serum - Brightening",
    image: "/All Image/Shop Image/Lotus-4-600x600.jpg",
    price: "৳399",
    priceNumeric: 399,
    category: "SKINCARE",
    status: "On sale",
  },
];

export const SALE_CATEGORIES = [
  "SKINCARE",
  "MAKEUP",
  "HAIRCARE",
  "ORALCARE",
  "HOMECARE",
];

export const SALE_STATUSES = ["On sale"];
