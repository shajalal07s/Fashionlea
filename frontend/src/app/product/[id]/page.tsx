import { notFound } from "next/navigation";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

interface Product {
  _id: string;
  name: string;
  description?: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  brand?: string;
  stock: number;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  try {
    // Fetch product from API
    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/products/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      notFound();
    }

    const data = await response.json();

    if (!data.success || !data.product) {
      notFound();
    }

    const product: any = data.product;

    // Transform API product to component format
    const transformedProduct = {
      ...product,
      images: product.images || [product.image],
      id: product._id,
    };

    return (
      <div className="bg-white min-h-screen">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left: Image Gallery */}
            <div className="w-full lg:w-1/2">
              <ProductGallery
                images={transformedProduct.images}
                productName={transformedProduct.name}
              />
            </div>

            {/* Right: Product Info */}
            <div className="w-full lg:w-1/2">
              <ProductInfo product={transformedProduct} />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    notFound();
  }
}
