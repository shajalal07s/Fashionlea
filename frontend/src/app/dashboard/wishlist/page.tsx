"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Trash2, ShoppingBag } from "lucide-react";

const wishlistItems = [
  {
    id: 1,
    name: "ACNOL Advanced Hygiene Soap (Lime Fresh) 75gm",
    image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp",
    price: "50৳",
    priceNumeric: 50,
  },
  {
    id: 2,
    name: "Aloe Vera Gel – Pure & Natural Hydration",
    image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp",
    price: "499৳",
    priceNumeric: 499,
  },
  {
    id: 3,
    name: "White Shield Sunscreen SPF 50",
    image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp",
    price: "799৳",
    priceNumeric: 799,
  },
  {
    id: 4,
    name: "Lime Fresh Face Wash – Oil Control & Glow",
    image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png",
    price: "399৳",
    priceNumeric: 399,
  },
  {
    id: 5,
    name: "Lotus Herbal Radiant Skin Cleanser",
    image: "/All Image/Shop Image/Lotus-4-600x600.jpg",
    price: "650৳",
    priceNumeric: 650,
  },
  {
    id: 6,
    name: "Vitamin C Serum – Brightening Face Serum 30ml",
    image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp",
    price: "699৳",
    priceNumeric: 699,
  },
];

export default function WishlistPage() {
  const [items, setItems] = useState(wishlistItems);

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const totalValue = items.reduce((sum, item) => sum + item.priceNumeric, 0);

  return (
    <div className="p-4 md:p-8">
      <div className="max-w-5xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
          {items.length > 0 && (
            <p className="text-sm text-gray-500">
              {items.length} item{items.length > 1 ? "s" : ""} • Total value:{" "}
              <span className="font-semibold text-gray-900">৳{totalValue.toLocaleString()}</span>
            </p>
          )}
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <Heart size={48} className="text-gray-300 mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-500">Your wishlist is empty</p>
            <p className="text-sm text-gray-400 mt-1">
              Save items you love to buy later
            </p>
            <Link
              href="/shop"
              className="inline-block mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              <ShoppingBag className="inline mr-2" size={18} />
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden group"
              >
                {/* Image */}
                <Link href={`/product/${item.id}`} className="block relative">
                  <div className="relative w-full h-48 bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  {/* Remove button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-red-50 transition-colors"
                  >
                    <Trash2 size={16} className="text-gray-500 hover:text-red-600" />
                  </button>
                </Link>

                {/* Info */}
                <div className="p-4">
                  <Link href={`/product/${item.id}`}>
                    <h3 className="text-sm text-gray-800 line-clamp-2 mb-2 hover:text-red-600 transition-colors">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-lg font-bold text-gray-900 mb-3">
                    {item.price}
                  </p>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors">
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
