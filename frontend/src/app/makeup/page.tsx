import ShopLayout from "@/components/shared/ShopLayout";
import { MAKEUP_PRODUCTS, MAKEUP_CATEGORIES, MAKEUP_STATUSES } from "@/data/makeupProducts";

export default function MakeupPage() {
  return (
    <ShopLayout
      pageTitle="Makeup"
      pageSubtitle="Discover the latest makeup trends and products."
      products={MAKEUP_PRODUCTS}
      categories={MAKEUP_CATEGORIES}
      statuses={MAKEUP_STATUSES}
      itemsPerPage={8}
      showSidebar={true}
    />
  );
}
