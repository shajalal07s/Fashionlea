import ShopLayout from "@/components/shared/ShopLayout";
import { SKINCARE_PRODUCTS, SKINCARE_CATEGORIES, SKINCARE_STATUSES } from "@/data/skincareProducts";

export default function SkinCarePage() {
  return (
    <ShopLayout
      pageTitle="Skin Care"
      pageSubtitle="Discover premium skincare products for healthy, glowing skin."
      products={SKINCARE_PRODUCTS}
      categories={SKINCARE_CATEGORIES}
      statuses={SKINCARE_STATUSES}
      itemsPerPage={8}
      showSidebar={true}
    />
  );
}
