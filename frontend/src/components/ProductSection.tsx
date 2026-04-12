"use client";

import Image from "next/image";

interface Product {
  id: number;
  brand: string;
  title: string;
  oldPrice: string;
  newPrice: string;
  discount: string;
  image: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection = ({ title, products }: ProductSectionProps) => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-800">{title}</h2>
          <button className="flex items-center gap-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-full px-4 py-1.5 hover:bg-gray-800 hover:text-white transition-colors">
            See All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-3 flex flex-col h-full relative"
            >
              {/* Discount Badge */}
              <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full z-10">
                {product.discount}
              </div>

              {/* Product Image */}
              <div className="relative w-full aspect-square flex items-center justify-center mb-3">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>

              {/* Brand Name */}
              <p className="text-xs text-gray-500 font-medium mb-1">{product.brand}</p>

              {/* Product Title */}
              <p className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 leading-snug">
                {product.title}
              </p>

              {/* Prices */}
              <div className="flex items-center gap-2 mb-3 mt-auto">
                <span className="text-sm text-gray-400 line-through">
                  {product.oldPrice}
                </span>
                <span className="text-sm font-bold text-red-600">
                  {product.newPrice}
                </span>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full text-xs font-medium text-gray-700 border border-gray-300 rounded-full py-1.5 hover:bg-gray-800 hover:text-white transition-colors">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
