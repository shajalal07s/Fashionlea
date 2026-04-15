/**
 * Hair Care Products Data
 */

import { FilterableProduct } from "./makeupProducts";

export const HAIRCARE_PRODUCTS: FilterableProduct[] = [
  {
    id: 201,
    title: "Shampoo - Keratin Repair",
    image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp",
    price: "৳419",
    priceNumeric: 419,
    category: "SHAMPOO",
    status: "In stock",
  },
  {
    id: 202,
    title: "Conditioner - Deep Nourishment",
    image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp",
    price: "৳399",
    priceNumeric: 399,
    category: "CONDITIONER",
    status: "In stock",
  },
  {
    id: 203,
    title: "Hair Oil - Coconut Cold Pressed",
    image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp",
    price: "৳249",
    priceNumeric: 249,
    category: "OIL",
    status: "In stock",
  },
  {
    id: 204,
    title: "Hair Mask - Protein Treatment",
    image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp",
    price: "৳449",
    priceNumeric: 449,
    category: "MASK",
    status: "In stock",
  },
  {
    id: 205,
    title: "Hair Serum - Frizz Control",
    image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png",
    price: "৳349",
    priceNumeric: 349,
    category: "SERUM",
    status: "In stock",
  },
  {
    id: 206,
    title: "Dry Shampoo - Oil Control",
    image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp",
    price: "৳299",
    priceNumeric: 299,
    category: "SHAMPOO",
    status: "On sale",
  },
  {
    id: 207,
    title: "Hair Growth Tonic",
    image: "/All Image/Shop Image/Aloe-4-600x600.jpg",
    price: "৳599",
    priceNumeric: 599,
    category: "TONIC",
    status: "In stock",
  },
  {
    id: 208,
    title: "Leave-In Conditioner Spray",
    image: "/All Image/Shop Image/Lotus-4-600x600.jpg",
    price: "৳349",
    priceNumeric: 349,
    category: "CONDITIONER",
    status: "In stock",
  },
];

export const HAIRCARE_CATEGORIES = [
  "SHAMPOO",
  "CONDITIONER",
  "OIL",
  "MASK",
  "SERUM",
  "TONIC",
];

export const HAIRCARE_STATUSES = ["In stock", "Out of stock", "On sale"];
