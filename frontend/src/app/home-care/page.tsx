import ShopLayout from "@/components/shared/ShopLayout";
import { HOMECARE_PRODUCTS, HOMECARE_CATEGORIES, HOMECARE_STATUSES } from "@/data/homecareProducts";

export default function HomeCarePage() {
  return (
    <ShopLayout
      pageTitle="Home Care"
      pageSubtitle="Essential home care and cleaning products."
      products={HOMECARE_PRODUCTS}
      categories={HOMECARE_CATEGORIES}
      statuses={HOMECARE_STATUSES}
      itemsPerPage={8}
      showSidebar={true}
    />
  );
}

/**
const homeCareProducts: FilterableProduct[] = [
  { id: 501, image: "/All Image/Shop Image/Lemon-Group-Static-800x800-1-600x600.webp", title: "All-Purpose Cleaner – Lemon Fresh, 1L", price: "₹299.00", priceNumeric: 299, category: "Cleaner", status: "In stock" },
  { id: 502, image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp", title: "Laundry Detergent – Floral Scent, 2kg", price: "₹450.00", priceNumeric: 450, category: "Laundry", status: "In stock" },
  { id: 503, image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png", title: "Dishwashing Liquid – Grease Cutting, 750ml", price: "₹199.00", priceNumeric: 199, category: "Dishwash", status: "In stock" },
  { id: 504, image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp", title: "Floor Cleaner – Pine Scent, 1L", price: "₹250.00", priceNumeric: 250, category: "Floor Care", status: "On sale" },
  { id: 505, image: "/All Image/Shop Image/Lotus-4-600x600.jpg", title: "Air Freshener Spray – Lavender, 300ml", price: "₹350.00", priceNumeric: 350, category: "Air Freshener", status: "In stock" },
  { id: 506, image: "/All Image/Shop Image/Aloe-4-600x600.jpg", title: "Fabric Softener – Fresh Linen, 1L", price: "₹399.00", priceNumeric: 399, category: "Fabric Care", status: "In stock" },
  { id: 507, image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp", title: "Toilet Cleaner – Germ Protection, 500ml", price: "₹179.00", priceNumeric: 179, category: "Toilet Care", status: "In stock" },
  { id: 508, image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp", title: "Glass Cleaner – Streak-Free, 500ml", price: "₹229.00", priceNumeric: 229, category: "Glass Care", status: "In stock" },
  { id: 509, image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png", title: "Scouring Pad – Heavy Duty, Pack of 5", price: "₹99.00", priceNumeric: 99, category: "Cleaning Tools", status: "In stock" },
  { id: 510, image: "/All Image/Shop Image/Lemon-Group-Static-800x800-1-600x600.webp", title: "Hand Wash – Antibacterial, 500ml", price: "₹299.00", priceNumeric: 299, category: "Hand Wash", status: "In stock" },
];

*/
