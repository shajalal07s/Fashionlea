"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Phone, Lock, MapPin, CreditCard, Truck } from "lucide-react";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import ProgressBar from "@/components/checkout/ProgressBar";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: string;
  priceNumeric: number;
  quantity: number;
}

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(true);

  // Load cart from localStorage
  useEffect(() => {
    const loadCart = () => {
      try {
        const saved = localStorage.getItem("cart");
        if (saved) {
          setCartItems(JSON.parse(saved));
        }
      } catch (error) {
        console.error("Error loading cart:", error);
      }
      setLoading(false);
    };

    loadCart();
  }, []);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.priceNumeric * item.quantity,
    0
  );
  const shipping = subtotal > 500 ? 0 : 60;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading checkout...</p>
        </div>
      </div>
    );
  }

  // If cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 lg:px-16">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold mb-8"
          >
            <ArrowLeft size={20} />
            Back to Shopping
          </Link>

          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock size={40} className="text-gray-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Your Cart is Empty
            </h1>
            <p className="text-gray-600 mb-8">
              Add items to your cart before checking out
            </p>
            <Link
              href="/shop"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto px-4 lg:px-16 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-red-600">
            Fashionlea
          </Link>
          <div className="flex items-center gap-2 text-gray-600">
            <Lock size={18} />
            <span className="text-sm font-medium">Secure Checkout</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <ProgressBar currentStep={currentStep} />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form - Left Side */}
          <div className="lg:col-span-2">
            <CheckoutForm
              currentStep={currentStep}
              onStepComplete={(nextStep) => setCurrentStep(nextStep)}
            />
          </div>

          {/* Order Summary - Right Side */}
          <div className="lg:col-span-1">
            <OrderSummary
              items={cartItems}
              subtotal={subtotal}
              shipping={shipping}
              tax={tax}
              total={total}
            />
          </div>
        </div>
      </div>

      {/* Footer Trust Badges */}
      <div className="mt-12 py-8 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Lock size={24} className="text-red-600" />
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">Secure</span>
                <br />
                Encrypted
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck size={24} className="text-red-600" />
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">Fast</span>
                <br />
                Delivery
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone size={24} className="text-red-600" />
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">24/7</span>
                <br />
                Support
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CreditCard size={24} className="text-red-600" />
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">100%</span>
                <br />
                Safe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
