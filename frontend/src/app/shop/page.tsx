import ProductGrid from "@/components/shop/ProductGrid";

export default function ShopPage() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen py-8">
      <div className="mx-auto lg:px-16 px-6"> 
        <ProductGrid />
      </div>
    </div>
  );
}
