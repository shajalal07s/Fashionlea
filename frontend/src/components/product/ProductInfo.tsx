"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "./productData";
import { Check, ShoppingCart, ShoppingBag, MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { generateMessengerLink } from "@/lib/messenger";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingIndex = cart.findIndex((item: any) => item.id === product.id);

    if (existingIndex >= 0) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({ id: product.id, name: product.name, image: product.images[0], price: product.priceDisplay, priceNumeric: product.price, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setAdded(true);
    window.dispatchEvent(new Event("cartUpdated"));
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
  };

  // Generate dynamic WhatsApp message with product details
  const whatsappUrl = generateWhatsAppLink({
    productName: product.name,
    quantity: quantity,
    price: product.price,
    category: product.category,
    productUrl: typeof window !== "undefined" ? window.location.href : "",
  });

  // Generate dynamic Messenger message
  const messengerUrl = generateMessengerLink({
    productName: product.name,
  });

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-sm text-gray-500 mb-3">
        <Link href="/" className="hover:text-gray-800 transition-colors">Home</Link>
        <span className="text-gray-400">›</span>
        <Link href="/" className="hover:text-gray-800 transition-colors">{product.category}</Link>
        <span className="text-gray-400">›</span>
        <span className="text-gray-800">{product.subCategory}</span>
      </nav>

      {/* Product Title */}
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-3">{product.name}</h1>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-4 leading-relaxed">{product.description}</p>

      {/* Price */}
      <p className="text-2xl md:text-3xl font-bold text-black mb-6">{product.priceDisplay}</p>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-6" />

      {/* Quantity + Add to Cart Row */}
      <div className="flex items-center gap-3 mb-3">
        <div className="relative">
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="appearance-none w-16 h-11 border border-gray-300 rounded-md px-3 text-sm text-gray-700 bg-white focus:outline-none focus:border-gray-500 cursor-pointer"
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <button
          onClick={handleAddToCart}
          className={`flex-1 h-11 font-semibold text-sm rounded-md flex items-center justify-center gap-2 transition-all duration-300 ${added ? "bg-green-600 text-white" : "bg-red-600 hover:bg-red-700 text-white"}`}
        >
          {added ? (
            <><Check size={18} /> Added to Cart!</>
          ) : (
            <><ShoppingCart size={18} /> Add To Cart</>
          )}
        </button>
      </div>

      {/* Buy Now Button */}
      <button
        onClick={handleBuyNow}
        className="w-full h-11 bg-black hover:bg-gray-800 text-white font-semibold text-sm rounded-md flex items-center justify-center gap-2 transition-colors mb-6"
      >
        <ShoppingBag size={18} />
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
        <MessageCircle size={18} />
        Shop via WhatsApp
      </a>

      {/* Messenger Button */}
      <a
        href={messengerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-11 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm rounded-md flex items-center justify-center gap-2 transition-colors mb-6"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.499 1.744 6.616 4.469 8.654V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.2l3.131 3.259 5.888-3.259-6.56 6.763z" />
        </svg>
        Chat & Order (Messenger)
      </a>

      {/* Delivery Info */}
      <div className="bg-gray-100 rounded-md px-4 py-3 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        <span className="text-sm text-gray-700">ঢাকা সিটি ২৪ ঘন্টার মধ্যে ডেলিভারি।</span>
      </div>
    </div>
  );
};

export default ProductInfo;
