"use client";

import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: string;
  priceNumeric: number;
  quantity: number;
}

interface OrderSummaryProps {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

const OrderSummary = ({
  items,
  subtotal,
  shipping,
  tax,
  total,
}: OrderSummaryProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
      <h3 className="text-lg font-bold text-gray-800 mb-6">Order Summary</h3>

      {/* Items List */}
      <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3 pb-4 border-b border-gray-100">
            {/* Product Image */}
            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 line-clamp-2">
                {item.name}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Qty: <span className="font-semibold">{item.quantity}</span>
              </p>
              <p className="text-sm font-bold text-red-600 mt-1">
                ৳{(item.priceNumeric * item.quantity).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t-2 border-gray-200 my-4"></div>

      {/* Summary Details */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium text-gray-800">
            ৳{subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium text-gray-800">
            {shipping === 0 ? (
              <span className="text-green-600 font-semibold">FREE</span>
            ) : (
              `৳${shipping}`
            )}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax (5%)</span>
          <span className="font-medium text-gray-800">৳{tax.toLocaleString()}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-gray-200 my-4"></div>

      {/* Total */}
      <div className="flex justify-between mb-6">
        <span className="text-lg font-bold text-gray-800">Total</span>
        <span className="text-2xl font-bold text-red-600">
          ৳{total.toLocaleString()}
        </span>
      </div>

      {/* Info Message */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <p className="text-xs text-blue-800">
          <span className="font-semibold">💡 Tip:</span> Orders over ৳500 get
          free shipping
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
