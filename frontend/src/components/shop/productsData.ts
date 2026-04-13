export interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  priceNumeric: number;
  category: string;
  status: "In stock" | "Out of stock" | "On sale";
}

export const allProducts: Product[] = [
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
  { id: 21, image: "/All Image/Shop Image/Lotus-4-600x600.jpg", title: "Baby Shampoo – Tear-Free Gentle Care, 200ml", price: "₹320.00", priceNumeric: 320, category: "Baby Care", status: "In stock" },
  { id: 22, image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp", title: "Sunglasses – UV Protection Aviator Style", price: "₹899.00", priceNumeric: 899, category: "Accessories", status: "In stock" },
  { id: 23, image: "/All Image/Shop Image/Aloe-4-600x600.jpg", title: "Shea Butter Body Lotion – Intensive Repair, 300ml", price: "₹650.00", priceNumeric: 650, category: "Body Lotion", status: "In stock" },
  { id: 24, image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp", title: "Mango Body Jelly – Tropical Fresh Gel, 150ml", price: "₹375.00", priceNumeric: 375, category: "Body Jelly", status: "On sale" },
  { id: 25, image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp", title: "Face Wash – Neem & Tea Tree Oil, 100ml", price: "₹280.00", priceNumeric: 280, category: "Cleanser", status: "In stock" },
  { id: 26, image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp", title: "Pearl Face Cream – Glow & Radiance, 50g", price: "₹520.00", priceNumeric: 520, category: "Body Care", status: "In stock" },
  { id: 27, image: "/All Image/Shop Image/Lemon-Group-Static-800x800-1-600x600.webp", title: "Anti-Aging Serum – Retinol & Hyaluronic Acid", price: "₹999.00", priceNumeric: 999, category: "Body Care", status: "In stock" },
  { id: 28, image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png", title: "Lip Balm – SPF 15 Moisture Lock, 10g", price: "₹149.00", priceNumeric: 149, category: "Body Care", status: "In stock" },
  { id: 29, image: "/All Image/Shop Image/Lotus-4-600x600.jpg", title: "Hair Mask – Deep Conditioning Treatment, 200ml", price: "₹599.00", priceNumeric: 599, category: "Conditioner", status: "Out of stock" },
  { id: 30, image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp", title: "Diamond Ring – Solitaire Classic, 18K", price: "₹12,999.00", priceNumeric: 12999, category: "Jewelry", status: "In stock" },
  { id: 31, image: "/All Image/Shop Image/Aloe-4-600x600.jpg", title: "Baby Lotion – Gentle Daily Moisture, 250ml", price: "₹380.00", priceNumeric: 380, category: "Baby Care", status: "In stock" },
  { id: 32, image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp", title: "Eye Shadow Palette – Nude & Shimmer, 12 Shades", price: "₹799.00", priceNumeric: 799, category: "Concealer", status: "In stock" },
  { id: 33, image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp", title: "Watch – Leather Strap Vintage Design", price: "₹1,899.00", priceNumeric: 1899, category: "Accessories", status: "In stock" },
  { id: 34, image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp", title: "Body Butter – Cocoa & Shea Mix, 200g", price: "₹499.00", priceNumeric: 499, category: "Body Lotion", status: "On sale" },
  { id: 35, image: "/All Image/Shop Image/Lemon-Group-Static-800x800-1-600x600.webp", title: "Lavender Body Jelly – Calming Night Gel, 150ml", price: "₹425.00", priceNumeric: 425, category: "Body Jelly", status: "In stock" },
  { id: 36, image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png", title: "Micellar Water – Makeup Remover, 250ml", price: "₹350.00", priceNumeric: 350, category: "Cleanser", status: "In stock" },
  { id: 37, image: "/All Image/Shop Image/Lotus-4-600x600.jpg", title: "Bracelet – Gold Plated Chain Design", price: "₹1,299.00", priceNumeric: 1299, category: "Jewelry", status: "In stock" },
  { id: 38, image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp", title: "Baby Wipes – Sensitive Skin Pack, 80pcs", price: "₹199.00", priceNumeric: 199, category: "Baby Care", status: "In stock" },
  { id: 39, image: "/All Image/Shop Image/Aloe-4-600x600.jpg", title: "Handbag – Leather Tote Classic Brown", price: "₹2,499.00", priceNumeric: 2499, category: "Accessories", status: "Out of stock" },
  { id: 40, image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp", title: "Night Cream – Repair & Rejuvenate, 50g", price: "₹750.00", priceNumeric: 750, category: "Body Care", status: "In stock" },
];

export const PRODUCTS_PER_PAGE = 8;
