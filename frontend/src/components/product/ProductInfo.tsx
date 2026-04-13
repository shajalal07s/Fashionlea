"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "./productData";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingIndex = cart.findIndex((item: any) => item.id === product.id);

    if (existingIndex >= 0) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    window.location.href = "/cart";
  };

  const whatsappMessage = encodeURIComponent(
    `I want to order this product: ${product.name} - ${product.priceDisplay}`
  );
  const whatsappUrl = `https://wa.me/8801773667594?text=${whatsappMessage}`;

  const messengerUrl = "https://m.me/YOUR_PAGE_USERNAME";

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-sm text-gray-500 mb-3">
        <Link href="/" className="hover:text-gray-800 transition-colors">
          Home
        </Link>
        <span className="text-gray-400">›</span>
        <Link href={`/shop?category=${product.category}`} className="hover:text-gray-800 transition-colors">
          {product.category}
        </Link>
        <span className="text-gray-400">›</span>
        <span className="text-gray-800">{product.subCategory}</span>
      </nav>

      {/* Product Title */}
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-3">
        {product.name}
      </h1>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-4 leading-relaxed">
        {product.description}
      </p>

      {/* Price */}
      <p className="text-2xl md:text-3xl font-bold text-black mb-6">
        {product.priceDisplay}
      </p>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-6" />

      {/* Quantity + Add to Cart Row */}
      <div className="flex items-center gap-3 mb-3">
        {/* Quantity Selector */}
        <div className="relative">
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="appearance-none w-16 h-11 border border-gray-300 rounded-md px-3 text-sm text-gray-700 bg-white focus:outline-none focus:border-gray-500 cursor-pointer"
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <svg
            className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="flex-1 h-11 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm rounded-md flex items-center justify-center gap-2 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
            />
          </svg>
          Add To Cart
        </button>
      </div>

      {/* Buy Now Button */}
      <button
        onClick={handleBuyNow}
        className="w-full h-11 bg-black hover:bg-gray-800 text-white font-semibold text-sm rounded-md flex items-center justify-center gap-2 transition-colors mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        Buy Now
      </button>

      {/* OR Divider */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 border-t border-gray-300" />
        <span className="text-sm text-gray-500">or</span>
        <div className="flex-1 border-t border-gray-300" />
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-11 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm rounded-md flex items-center justify-center gap-2 transition-colors mb-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Shop via WhatsApp
      </a>

      {/* Messenger Button */}
      <a
        href={messengerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-11 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm rounded-md flex items-center justify-center gap-2 transition-colors mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.499 1.744 6.616 4.469 8.654V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.2l3.131 3.259 5.888-3.259-6.56 6.763z" />
        </svg>
        Chat & Order (Messenger)
      </a>

      {/* Delivery Info */}
      <div className="bg-gray-100 rounded-md px-4 py-3 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-red-500 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
        <span className="text-sm text-gray-700">
          ঢাকা সিটি ২৪ ঘন্টার মধ্যে ডেলিভারি।
        </span>
      </div>
    </div>
  );
};

export default ProductInfo;
