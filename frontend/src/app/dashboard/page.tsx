"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Package,
  Heart,
  MapPin,
  ShoppingBag,
  TrendingUp,
  Clock,
  CheckCircle,
  Truck,
} from "lucide-react";

const recentOrders = [
  {
    id: "ORD-001",
    product: "ACNOL Advanced Hygiene Soap (Lime Fresh) 75gm",
    image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp",
    price: "50৳",
    status: "Delivered",
    date: "2026-04-10",
  },
  {
    id: "ORD-002",
    product: "Aloe Vera Gel – Pure & Natural Hydration",
    image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp",
    price: "499৳",
    status: "Processing",
    date: "2026-04-12",
  },
  {
    id: "ORD-003",
    product: "White Shield Sunscreen SPF 50",
    image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp",
    price: "799৳",
    status: "Shipped",
    date: "2026-04-11",
  },
];

const statusColors: Record<string, string> = {
  Delivered: "bg-green-100 text-green-700",
  Processing: "bg-yellow-100 text-yellow-700",
  Shipped: "bg-blue-100 text-blue-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) setUser(JSON.parse(userData));
  }, []);

  const stats = [
    {
      label: "Total Orders",
      value: "12",
      icon: ShoppingBag,
      color: "bg-blue-500",
      lightBg: "bg-blue-50",
    },
    {
      label: "Wishlist Items",
      value: "8",
      icon: Heart,
      color: "bg-red-500",
      lightBg: "bg-red-50",
    },
    {
      label: "Saved Addresses",
      value: "3",
      icon: MapPin,
      color: "bg-green-500",
      lightBg: "bg-green-50",
    },
    {
      label: "Total Spent",
      value: "৳4,550",
      icon: TrendingUp,
      color: "bg-purple-500",
      lightBg: "bg-purple-50",
    },
  ];

  return (
    <div className="p-4 md:p-8">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Welcome back, {user?.name || "User"}! 👋
        </h1>
        <p className="text-gray-500 mt-1">
          Here's what's happening with your account today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`${stat.lightBg} p-3 rounded-lg`}>
                  <Icon size={22} className={stat.color.replace("bg-", "text-")} />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
            <Link
              href="/dashboard/orders"
              className="text-sm text-red-600 hover:text-red-700 font-medium"
            >
              View All →
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {recentOrders.map((order) => (
              <div key={order.id} className="p-5 flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={order.image}
                    alt={order.product}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {order.product}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {order.id} • {order.date}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-bold text-gray-900">{order.price}</p>
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${
                      statusColors[order.status] || "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link
                href="/shop"
                className="flex items-center gap-3 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors group"
              >
                <ShoppingBag size={20} className="text-red-600" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-red-700">
                  Start Shopping
                </span>
              </Link>
              <Link
                href="/dashboard/wishlist"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <Heart size={20} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  View Wishlist
                </span>
              </Link>
              <Link
                href="/dashboard/address"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <MapPin size={20} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  Manage Addresses
                </span>
              </Link>
            </div>
          </div>

          {/* Order Status Trackers */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Active Orders</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">2 Processing</p>
                  <p className="text-xs text-gray-500">Awaiting shipment</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck size={18} className="text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">1 In Transit</p>
                  <p className="text-xs text-gray-500">Out for delivery</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">9 Delivered</p>
                  <p className="text-xs text-gray-500">Completed orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
