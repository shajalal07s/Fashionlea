"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Tag } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: string;
  priceNumeric: number;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const defaultCartItems: CartItem[] = [
  {
    id: 1,
    name: "ACNOL Advanced Hygiene Soap (Lime Fresh) 75gm",
    image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp",
    price: "50৳",
    priceNumeric: 50,
    quantity: 2,
  },
  {
    id: 2,
    name: "Aloe Vera Gel – Pure & Natural Hydration",
    image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp",
    price: "499৳",
    priceNumeric: 499,
    quantity: 1,
  },
  {
    id: 3,
    name: "White Shield Sunscreen SPF 50",
    image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp",
    price: "799৳",
    priceNumeric: 799,
    quantity: 1,
  },
];

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const [items, setItems] = useState<CartItem[]>(defaultCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const loadCart = () => {
      const saved = localStorage.getItem("cart");
      if (saved) {
        try {
          setItems(JSON.parse(saved));
        } catch {}
      }
    };
    loadCart();
    window.addEventListener("cartUpdated", loadCart);
    return () => window.removeEventListener("cartUpdated", loadCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const updateQuantity = (id: number, delta: number) => {
    setItems(
      items
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.priceNumeric * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 60;
  const total = subtotal + shipping - discount;
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === "FASHION10") {
      setAppliedCoupon("FASHION10");
      setDiscount(Math.round(subtotal * 0.1));
    } else if (couponCode.toUpperCase() === "SAVE20") {
      setAppliedCoupon("SAVE20");
      setDiscount(Math.round(subtotal * 0.2));
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <ShoppingBag size={22} className="text-red-600" />
            <h2 className="text-lg font-bold text-gray-900">
              Shopping Cart
            </h2>
            {totalItems > 0 && (
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Free Shipping Bar */}
        {items.length > 0 && subtotal < 500 && (
          <div className="px-6 py-3 bg-green-50 border-b border-green-100">
            <div className="flex items-center gap-2 text-sm text-green-700 mb-2">
              <Tag size={14} />
              <span className="font-medium">
                Add ৳{500 - subtotal} more for FREE shipping!
              </span>
            </div>
            <div className="w-full bg-green-200 rounded-full h-1.5">
              <div
                className="bg-green-500 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${Math.min((subtotal / 500) * 100, 100)}%` }}
              />
            </div>
          </div>
        )}

        {items.length > 0 && subtotal >= 500 && (
          <div className="px-6 py-3 bg-green-50 border-b border-green-100">
            <div className="flex items-center gap-2 text-sm text-green-700 font-medium">
              <Tag size={14} />
              🎉 You've unlocked FREE shipping!
            </div>
          </div>
        )}

        {/* Cart Items */}
        {items.length > 0 ? (
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-gray-50 rounded-xl p-3 group"
              >
                {/* Product Image */}
                <Link
                  href={`/product/${item.id}`}
                  onClick={onClose}
                  className="relative w-20 h-20 bg-white rounded-lg overflow-hidden flex-shrink-0 border border-gray-100"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </Link>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/product/${item.id}`}
                    onClick={onClose}
                    className="text-sm font-medium text-gray-800 line-clamp-2 hover:text-red-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                  <p className="text-base font-bold text-gray-900 mt-1">
                    {item.price}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-gray-200 rounded-lg bg-white">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1.5 hover:bg-gray-100 rounded-l-lg transition-colors"
                      >
                        <Minus size={14} className="text-gray-600" />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1.5 hover:bg-gray-100 rounded-r-lg transition-colors"
                      >
                        <Plus size={14} className="text-gray-600" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1.5 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 size={16} className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Coupon Code */}
            <div className="pt-2">
              <p className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
                Have a coupon?
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                  placeholder="Enter code (FASHION10)"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button
                  onClick={applyCoupon}
                  className="px-4 py-2 bg-gray-900 hover:bg-black text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Apply
                </button>
              </div>
              {appliedCoupon && (
                <p className="text-xs text-green-600 mt-1.5 font-medium">
                  ✓ Coupon "{appliedCoupon}" applied!
                </p>
              )}
            </div>
          </div>
        ) : (
          /* Empty Cart */
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag size={40} className="text-gray-300" />
            </div>
            <p className="text-lg font-semibold text-gray-800">
              Your cart is empty
            </p>
            <p className="text-sm text-gray-500 mt-1 text-center">
              Looks like you haven't added anything yet
            </p>
            <Link
              href="/shop"
              onClick={onClose}
              className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors"
            >
              Start Shopping
              <ArrowRight size={16} />
            </Link>
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 px-6 py-4 space-y-3 bg-white">
            {/* Summary */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>৳{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>
                  {shipping === 0 ? "FREE" : `৳${shipping}`}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600 font-medium">
                  <span>Discount</span>
                  <span>-৳{discount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-100">
                <span>Total</span>
                <span>৳{total.toLocaleString()}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2">
              <ShoppingBag size={18} />
              Checkout — ৳{total.toLocaleString()}
            </button>

            {/* Continue Shopping */}
            <button
              onClick={onClose}
              className="w-full text-center text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
