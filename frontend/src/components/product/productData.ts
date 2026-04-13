export interface Product {
  id: number;
  name: string;
  price: number;
  priceDisplay: string;
  description: string;
  images: string[];
  category: string;
  subCategory: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "ACNOL Advanced Hygiene Soap (Lime Fresh) 75gm",
    price: 50,
    priceDisplay: "50৳",
    description: "ACNOL is the go-to solution for daily hygiene having different variants of soaps.",
    images: [
      "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp",
      "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png",
      "/All Image/Shop Image/Lemon-Group-Static-800x800-1-600x600.webp",
      "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp",
      "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp",
      "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp",
    ],
    category: "Skin Care",
    subCategory: "Body Care",
  },
  {
    id: 2,
    name: "Aloe Vera Gel – Pure & Natural Hydration for Skin and Hair",
    price: 499,
    priceDisplay: "499৳",
    description: "Pure aloe vera gel for deep hydration of skin and hair. Natural and chemical-free formula.",
    images: [
      "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp",
      "/All Image/Shop Image/Aloe-4-600x600.jpg",
      "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp",
      "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png",
      "/All Image/Shop Image/Lemon-Group-Static-800x800-1-600x600.webp",
    ],
    category: "Skin Care",
    subCategory: "Body Care",
  },
  {
    id: 3,
    name: "Lime Fresh Face Wash – Oil Control & Glow, 150ml",
    price: 399,
    priceDisplay: "399৳",
    description: "Lime fresh face wash controls oil and gives a natural glow. Suitable for all skin types.",
    images: [
      "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png",
      "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp",
      "/All Image/Shop Image/Lemon-Group-Static-800x800-1-600x600.webp",
      "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp",
    ],
    category: "Skin Care",
    subCategory: "Face Care",
  },
  {
    id: 4,
    name: "White Shield Sunscreen SPF 50 – Broad Spectrum Protection",
    price: 799,
    priceDisplay: "799৳",
    description: "Broad spectrum sunscreen with SPF 50 protection. Lightweight and non-greasy formula.",
    images: [
      "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp",
      "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp",
      "/All Image/Shop Image/Aloe-4-600x600.jpg",
      "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp",
    ],
    category: "Skin Care",
    subCategory: "Sun Care",
  },
  {
    id: 5,
    name: "Lotus Herbal Radiant Skin Cleanser – Gentle Formula",
    price: 650,
    priceDisplay: "650৳",
    description: "Gentle herbal cleanser that removes impurities while maintaining skin's natural moisture.",
    images: [
      "/All Image/Shop Image/Lotus-4-600x600.jpg",
      "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp",
      "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp",
      "/All Image/Shop Image/Aloe-4-600x600.jpg",
    ],
    category: "Skin Care",
    subCategory: "Cleanser",
  },
  {
    id: 6,
    name: "Aloe Vera Soothing Body Lotion – Deep Moisturizing, 200ml",
    price: 550,
    priceDisplay: "550৳",
    description: "Deep moisturizing body lotion with aloe vera extract for soft and supple skin.",
    images: [
      "/All Image/Shop Image/Aloe-4-600x600.jpg",
      "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp",
      "/All Image/Shop Image/Lemon-Group-Static-800x800-1-600x600.webp",
      "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp",
    ],
    category: "Skin Care",
    subCategory: "Body Care",
  },
  {
    id: 7,
    name: "Vitamin C Serum – Brightening Face Serum 30ml",
    price: 699,
    priceDisplay: "699৳",
    description: "Vitamin C serum for brightening and evening skin tone. Antioxidant-rich formula.",
    images: [
      "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp",
      "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp",
      "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp",
    ],
    category: "Skin Care",
    subCategory: "Serum",
  },
  {
    id: 8,
    name: "Charcoal Peel Off Mask – Deep Pore Cleansing, 100g",
    price: 449,
    priceDisplay: "449৳",
    description: "Activated charcoal peel off mask for deep pore cleansing and blackhead removal.",
    images: [
      "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp",
      "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp",
      "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png",
    ],
    category: "Skin Care",
    subCategory: "Mask",
  },
];
