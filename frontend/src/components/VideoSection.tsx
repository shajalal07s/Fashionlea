"use client";

import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useCartContext } from "@/context/CartContext";

const niorProducts = [
  {
    id: 1,
    brand: "Nior",
    title: "Nior Aqua Splash Sunscreen SPF 50 PA+++ 50ml",
    oldPrice: "950৳",
    newPrice: "618৳",
    discount: "-35%",
    image: "/All Image/glorin-logo-square-300x300-1.png",
  },
  {
    id: 2,
    brand: "Nior",
    title: "Velveteen Matte Lipstick – Purple Rose",
    oldPrice: "550৳",
    newPrice: "413৳",
    discount: "-25%",
    image: "/All Image/nior-logo-300x300-1.png",
  },
  {
    id: 3,
    brand: "Nior",
    title: "Color Vibes Gel Liner – Secret Window",
    oldPrice: "950৳",
    newPrice: "950৳",
    discount: null,
    image: "/All Image/lily-essentials-logo-300x300-1.png",
  },
  {
    id: 4,
    brand: "Nior",
    title: "Nior Your Best Skin Soft Matte Pressed Powder – Warm Vanilla",
    oldPrice: "1,000৳",
    newPrice: "1,000৳",
    discount: null,
    image: "/All Image/essentials_beauty-skincare-clinic_skincare-300x300.jpg",
  },
  {
    id: 5,
    brand: "Nior",
    title: "Nior Pout N About Lip Gloss – Antique Pink",
    oldPrice: "550৳",
    newPrice: "440৳",
    discount: "-20%",
    image: "/All Image/herlan-logo-300x300-1.png",
  },
  {
    id: 6,
    brand: "Nior",
    title: "Nior Dreamy Glow Brightening Cream 50ml",
    oldPrice: "500৳",
    newPrice: "325৳",
    discount: "-35%",
    image: "/All Image/nior-logo-300x300-1.png",
  },
];

const ProductCard = ({ product }: { product: (typeof niorProducts)[0] }) => {
  const { addToCart } = useCart();
  const { openCart } = useCartContext();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Extract numeric price
    const priceNumeric = parseInt(product.newPrice.replace(/[^\d]/g, ""), 10);

    // Add item to cart
    const success = addToCart({
      id: product.id,
      name: product.title,
      image: product.image,
      price: product.newPrice,
      priceNumeric,
    });

    if (success) {
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
      openCart();
    }
  };

  return (
  <div className="bg-white p-1 flex flex-col h-full overflow-hidden">
    <div className="relative">
      {/* Discount Badge */}
      {product.discount && (
        <div className="absolute top-2 right-2 bg-[#ff0000] text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          {product.discount}
        </div>
      )}

      {/* Product Image */}
      <div className="w-full h-52 flex items-center justify-center mb-3 bg-white overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-full h-full"
        />
      </div>
    </div>

    {/* Brand Name */}
    <p className="text-sm text-gray-500 font-medium mb-1">{product.brand}</p>

    {/* Product Title */}
    <p className="text-sm font-medium text-gray-800 mb-3 line-clamp-2 leading-snug">
      {product.title}
    </p>

    {/* Prices */}
    <div className="flex items-center gap-2 mb-3 mt-auto">
      {product.oldPrice !== product.newPrice && (
        <span className="text-sm text-gray-400 line-through">
          {product.oldPrice}
        </span>
      )}
      <span className="text-sm font-bold text-red-600">{product.newPrice}</span>
    </div>

    {/* Add to Cart Button */}
    <button
      onClick={handleAddToCart}
      className={`py-1.5 px-4 text-xs font-medium rounded-full transition-all duration-300 flex items-center gap-1.5 w-fit ${
        isAdded
          ? "bg-green-600 text-white border-green-600"
          : "text-gray-700 border border-gray-300 hover:bg-black hover:text-white hover:border-black"
      }`}
    >
      {isAdded ? (
        <>
          <Check size={14} />
          Added!
        </>
      ) : (
        <>
          <ShoppingCart size={14} />
          ADD TO CART
        </>
      )}
    </button>
  </div>
  );
};

/* ============================================
   VIDEO SECTION START
   Video: NIOR - Red Carpet Flawless Matte Foundation
   Location: public/Video/
   ============================================ */

const ProductSection = () => {
  return (
    <section className="w-full bg-[#E60000] py-8">
      <div className="mx-auto px-4 lg:px-16">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Nior - Amp up the glam
          </h2>
          <button className="flex items-center gap-1 text-sm font-medium text-white border border-white rounded-full px-4 py-1.5 hover:bg-white hover:text-[#E60000] transition-colors">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {niorProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
