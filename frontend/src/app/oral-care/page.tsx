import ShopLayout from "@/components/shared/ShopLayout";
import { ORALCARE_PRODUCTS, ORALCARE_CATEGORIES, ORALCARE_STATUSES } from "@/data/oralcareProducts";

export default function OralCarePage() {
  return (
    <ShopLayout
      pageTitle="Oral Care"
      pageSubtitle="Complete oral care solutions for healthy teeth and gums."
      products={ORALCARE_PRODUCTS}
      categories={ORALCARE_CATEGORIES}
      statuses={ORALCARE_STATUSES}
      itemsPerPage={8}
      showSidebar={true}
    />
  );
}

/**
const oralCareProducts: FilterableProduct[] = [
  { id: 401, image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp", title: "Whitening Toothpaste – Activated Charcoal, 120g", price: "₹299.00", priceNumeric: 299, category: "Toothpaste", status: "In stock" },
  { id: 402, image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png", title: "Electric Toothbrush – Sonic Clean, USB Rechargeable", price: "₹1,499.00", priceNumeric: 1499, category: "Toothbrush", status: "In stock" },
  { id: 403, image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp", title: "Mouthwash – Fresh Mint, Alcohol-Free, 500ml", price: "₹350.00", priceNumeric: 350, category: "Mouthwash", status: "In stock" },
  { id: 404, image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp", title: "Dental Floss – Mint Waxed, 50m", price: "₹150.00", priceNumeric: 150, category: "Dental Floss", status: "In stock" },
  { id: 405, image: "/All Image/Shop Image/Aloe-4-600x600.jpg", title: "Tongue Cleaner – Stainless Steel", price: "₹199.00", priceNumeric: 199, category: "Tongue Cleaner", status: "On sale" },
  { id: 406, image: "/All Image/Shop Image/Lotus-4-600x600.jpg", title: "Teeth Whitening Strips – 14 Day Kit", price: "₹999.00", priceNumeric: 999, category: "Whitening", status: "In stock" },
  { id: 407, image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp", title: "Sensitive Toothpaste – Gentle Formula, 100g", price: "₹250.00", priceNumeric: 250, category: "Toothpaste", status: "In stock" },
  { id: 408, image: "/All Image/Shop Image/Lemon-Group-Static-800x800-1-600x600.webp", title: "Interdental Brushes – Pack of 10", price: "₹299.00", priceNumeric: 299, category: "Interdental", status: "In stock" },
  { id: 409, image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp", title: "Natural Toothpaste – Neem & Clove, 100g", price: "₹199.00", priceNumeric: 199, category: "Toothpaste", status: "In stock" },
  { id: 410, image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png", title: "Water Flosser – Portable Cordless", price: "₹2,499.00", priceNumeric: 2499, category: "Water Flosser", status: "In stock" },
];

*/
