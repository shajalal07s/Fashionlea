"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { useCartContext } from "@/context/CartContext";
import { ShoppingCart, Check } from "lucide-react";

export interface SharedProductCardProps {
  id: number;
  image: string;
  title: string;
  price: string;
  priceNumeric: number;
}

const SharedProductCard = ({
  id,
  image,
  title,
  price,
  priceNumeric,
}: SharedProductCardProps) => {
  const { addToCart } = useCart();
  const { openCart } = useCartContext();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Add item to cart
    const success = addToCart({
      id,
      name: title,
      image,
      price,
      priceNumeric,
    });

    if (success) {
      // Show confirmation
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);

      // Open cart drawer
      openCart();
    }
  };

  return (
    <Link
      href={`/product/${id}`}
      className="bg-white p-1 flex flex-col gap-2.5 overflow-hidden group"
    >
      {/* Product Image */}
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Title */}
      <h3 className="text-sm text-gray-800 mb-2 line-clamp-2">{title}</h3>

      {/* Price */}
      <p className="text-base font-bold text-black mb-3">{price}</p>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className={`mt-auto self-start px-4 py-1.5 text-xs font-medium rounded-full border transition-all duration-300 flex items-center gap-1.5 ${
          isAdded
            ? "bg-green-600 border-green-600 text-white"
            : "border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black"
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
    </Link>
  );
};

export default SharedProductCard;
