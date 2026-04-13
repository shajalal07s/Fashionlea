import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import TopBrands from "@/components/TopBrands";
import ProductSection from "@/components/VideoSection";
import ShopByBrand from "@/components/ShopByBrand";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white font-sans dark:bg-black">
      <Hero />
      <Categories />
      <TopBrands />
      <ProductSection />
      <ShopByBrand />
      <ProductsSection />
    </div>
  );
}
