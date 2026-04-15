"use client";

import { useState } from "react";
import { MapPin, CreditCard, CheckCircle, AlertCircle } from "lucide-react";

interface CheckoutFormProps {
  currentStep: number;
  onStepComplete: (nextStep: number) => void;
}

const CheckoutForm = ({ currentStep, onStepComplete }: CheckoutFormProps) => {
  const [formData, setFormData] = useState({
    // Shipping
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Bangladesh",

    // Payment
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    paymentMethod: "card",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateShippingForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name required";
    if (!formData.email.trim()) newErrors.email = "Email required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone required";
    if (!/^\+?[\d\s]{10,}$/.test(formData.phone.replace(/\s/g, "")))
      newErrors.phone = "Invalid phone number";
    if (!formData.address.trim()) newErrors.address = "Address required";
    if (!formData.city.trim()) newErrors.city = "City required";
    if (!formData.postalCode.trim()) newErrors.postalCode = "Postal code required";

    return newErrors;
  };

  const validatePaymentForm = () => {
    const newErrors: Record<string, string> = {};

    if (formData.paymentMethod === "card") {
      if (!formData.cardName.trim()) newErrors.cardName = "Name on card required";
      if (!formData.cardNumber.replace(/\s/g, "").match(/^\d{13,19}$/))
        newErrors.cardNumber = "Invalid card number";
      if (!formData.expiryDate.match(/^\d{2}\/\d{2}$/))
        newErrors.expiryDate = "Use MM/YY format";
      if (!formData.cvv.match(/^\d{3,4}$/))
        newErrors.cvv = "Invalid CVV";
    }

    return newErrors;
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateShippingForm();

    if (Object.keys(newErrors).length === 0) {
      onStepComplete(2);
    } else {
      setErrors(newErrors);
    }
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validatePaymentForm();

    if (Object.keys(newErrors).length === 0) {
      onStepComplete(3);
    } else {
      setErrors(newErrors);
    }
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate order processing
    setTimeout(() => {
      onStepComplete(4);
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      {/* Step 1: Shipping Information */}
      {currentStep === 1 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="text-red-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">
              Shipping Address
            </h2>
          </div>

          <form onSubmit={handleShippingSubmit} className="space-y-4">
            {/* Name Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${
                    errors.firstName
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${
                    errors.lastName
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${
                  errors.email ? "border-red-500 bg-red-50" : "border-gray-300"
                }`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${
                  errors.phone ? "border-red-500 bg-red-50" : "border-gray-300"
                }`}
                placeholder="+880 1234567890"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Street Address *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${
                  errors.address
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
                placeholder="123 Main Street"
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1">{errors.address}</p>
              )}
            </div>

            {/* City and Postal Code */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${
                    errors.city ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  placeholder="Dhaka"
                />
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Postal Code *
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${
                    errors.postalCode
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="1200"
                />
                {errors.postalCode && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.postalCode}
                  </p>
                )}
              </div>
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
              >
                <option>Bangladesh</option>
                <option>India</option>
                <option>Pakistan</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold text-lg transition-colors mt-6"
            >
              Continue to Payment
            </button>
          </form>
        </div>
      )}

      {/* Step 2: Payment Method */}
      {currentStep === 2 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="text-red-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Payment Method</h2>
          </div>

          <form onSubmit={handlePaymentSubmit} className="space-y-4">
            {/* Payment Method Selection */}
            <div className="space-y-3 mb-6">
              {[
                { value: "card", label: "Credit/Debit Card" },
                { value: "bkash", label: "bKash" },
                { value: "nagad", label: "Nagad" },
                { value: "cod", label: "Cash on Delivery" },
              ].map((method) => (
                <label
                  key={method.value}
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                    formData.paymentMethod === method.value
                      ? "border-red-600 bg-red-50"
                      : "border-gray-300 bg-white hover:border-red-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.value}
                    checked={formData.paymentMethod === method.value}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-red-600"
                  />
                  <span className="ml-3 font-medium text-gray-700">
                    {method.label}
                  </span>
                </label>
              ))}
            </div>

            {/* Card Details (shown only if card is selected) */}
            {formData.paymentMethod === "card" && (
              <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-4">
                  Card Details
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name on Card *
                  </label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${
                      errors.cardName
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.cardName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.cardName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number *
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\s/g, "");
                      value = value.replace(/(\d{4})/g, "$1 ").trim();
                      setFormData((prev) => ({
                        ...prev,
                        cardNumber: value,
                      }));
                    }}
                    maxLength={23}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${
                      errors.cardNumber
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300"
                    }`}
                    placeholder="1234 5678 9012 3456"
                  />
                  {errors.cardNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.cardNumber}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date *
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, "");
                        if (value.length >= 2) {
                          value = value.slice(0, 2) + "/" + value.slice(2, 4);
                        }
                        setFormData((prev) => ({
                          ...prev,
                          expiryDate: value,
                        }));
                      }}
                      maxLength={5}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${
                        errors.expiryDate
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300"
                      }`}
                      placeholder="MM/YY"
                    />
                    {errors.expiryDate && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.expiryDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVV *
                    </label>
                    <input
                      type="password"
                      name="cvv"
                      value={formData.cvv}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        setFormData((prev) => ({
                          ...prev,
                          cvv: value.slice(0, 4),
                        }));
                      }}
                      maxLength={4}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${
                        errors.cvv
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300"
                      }`}
                      placeholder="123"
                    />
                    {errors.cvv && (
                      <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Info Message */}
            {formData.paymentMethod !== "card" && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                <AlertCircle size={18} className="text-blue-600 flex-shrink-0" />
                <p className="text-sm text-blue-800">
                  Payment instructions will be sent to your email after you place
                  the order.
                </p>
              </div>
            )}

            {/* Button Group */}
            <div className="flex gap-4 mt-6">
              <button
                type="button"
                onClick={() => onStepComplete(1)}
                className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-bold transition-colors hover:bg-gray-100"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold text-lg transition-colors"
              >
                Review Order
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Step 3: Order Review */}
      {currentStep === 3 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="text-red-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Review Order</h2>
          </div>

          <div className="space-y-6">
            {/* Shipping Review */}
            <div className="border-b pb-6">
              <h3 className="font-bold text-gray-800 mb-3">Shipping To:</h3>
              <p className="text-gray-700">
                {formData.firstName} {formData.lastName}
              </p>
              <p className="text-gray-700">{formData.address}</p>
              <p className="text-gray-700">
                {formData.city}, {formData.postalCode}
              </p>
              <p className="text-gray-700">{formData.country}</p>
            </div>

            {/* Payment Method Review */}
            <div className="border-b pb-6">
              <h3 className="font-bold text-gray-800 mb-3">Payment Method:</h3>
              <p className="text-gray-700 capitalize">
                {formData.paymentMethod === "cod"
                  ? "Cash on Delivery"
                  : formData.paymentMethod === "card"
                  ? `Card ending in ${formData.cardNumber.slice(-4)}`
                  : formData.paymentMethod}
              </p>
            </div>

            {/* Contact Review */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Contact Info:</h3>
              <p className="text-gray-700">{formData.email}</p>
              <p className="text-gray-700">{formData.phone}</p>
            </div>

            {/* Terms Agreement */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 mt-1 text-red-600 rounded"
                  required
                />
                <p className="text-sm text-gray-700">
                  I agree to the{" "}
                  <button
                    type="button"
                    className="text-red-600 hover:text-red-700 font-semibold"
                  >
                    Terms & Conditions
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    className="text-red-600 hover:text-red-700 font-semibold"
                  >
                    Privacy Policy
                  </button>
                </p>
              </label>
            </div>

            {/* Button Group */}
            <div className="flex gap-4">
              <button
                onClick={() => onStepComplete(2)}
                className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-bold transition-colors hover:bg-gray-100"
              >
                Back
              </button>
              <button
                onClick={handleReviewSubmit}
                disabled={loading}
                className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Processing...
                  </>
                ) : (
                  "Place Order"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Order Confirmation */}
      {currentStep === 4 && (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} className="text-green-600" />
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Order Confirmed!
          </h2>
          <p className="text-gray-600 mb-4">
            Thank you for your purchase. Your order has been received.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800 mb-2">
              <span className="font-semibold">Order Number:</span>{" "}
              <span className="font-mono">#FL{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
            </p>
            <p className="text-sm text-blue-800">
              A confirmation email has been sent to{" "}
              <span className="font-semibold">{formData.email}</span>
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="/shop"
              className="inline-block w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition-colors"
            >
              Continue Shopping
            </a>
            <a
              href="/"
              className="inline-block w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-bold transition-colors hover:bg-gray-50"
            >
              Back to Home
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
