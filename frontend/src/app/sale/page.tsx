import ShopLayout from "@/components/shared/ShopLayout";
import { SALE_PRODUCTS, SALE_CATEGORIES, SALE_STATUSES } from "@/data/saleProducts";

export default function SalePage() {
  return (
    <ShopLayout
      pageTitle="Sale 🔥"
      pageSubtitle="Huge discounts on premium products. Limited time offer!"
      products={SALE_PRODUCTS}
      categories={SALE_CATEGORIES}
      statuses={SALE_STATUSES}
      itemsPerPage={8}
      showSidebar={true}
    />
  );
}
