"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Package, Truck, CheckCircle, XCircle, Clock, Eye } from "lucide-react";

const orders = [
  {
    id: "ORD-001",
    date: "2026-04-10",
    items: [
      {
        name: "ACNOL Advanced Hygiene Soap (Lime Fresh) 75gm",
        image: "/All Image/Shop Image/Lemon-01-800x800-1-600x600.webp",
        price: "50৳",
        qty: 2,
      },
      {
        name: "Aloe Vera Gel – Pure & Natural Hydration",
        image: "/All Image/Shop Image/Aloe-1-800x800-1-600x600.webp",
        price: "499৳",
        qty: 1,
      },
    ],
    total: "599৳",
    status: "Delivered",
    payment: "Cash on Delivery",
  },
  {
    id: "ORD-002",
    date: "2026-04-12",
    items: [
      {
        name: "White Shield Sunscreen SPF 50",
        image: "/All Image/Shop Image/White-Shield-01-800x800-1-600x600.webp",
        price: "799৳",
        qty: 1,
      },
    ],
    total: "799৳",
    status: "Processing",
    payment: "Online Payment",
  },
  {
    id: "ORD-003",
    date: "2026-04-11",
    items: [
      {
        name: "Lotus Herbal Radiant Skin Cleanser",
        image: "/All Image/Shop Image/Lotus-4-600x600.jpg",
        price: "650৳",
        qty: 1,
      },
      {
        name: "Lime Fresh Face Wash – Oil Control & Glow",
        image: "/All Image/Shop Image/Lime-fresh-2-1-800x800-1-600x600.png",
        price: "399৳",
        qty: 1,
      },
    ],
    total: "1,049৳",
    status: "Shipped",
    payment: "Cash on Delivery",
  },
  {
    id: "ORD-004",
    date: "2026-04-08",
    items: [
      {
        name: "Vitamin C Serum – Brightening Face Serum 30ml",
        image: "/All Image/Shop Image/Acnol-Berries-01-800x800-1-600x600.webp",
        price: "699৳",
        qty: 1,
      },
    ],
    total: "699৳",
    status: "Cancelled",
    payment: "Online Payment",
  },
];

const statusConfig: Record<string, { color: string; icon: any; label: string }> = {
  Delivered: { color: "bg-green-100 text-green-700", icon: CheckCircle, label: "Delivered" },
  Processing: { color: "bg-yellow-100 text-yellow-700", icon: Clock, label: "Processing" },
  Shipped: { color: "bg-blue-100 text-blue-700", icon: Truck, label: "Shipped" },
  Cancelled: { color: "bg-red-100 text-red-700", icon: XCircle, label: "Cancelled" },
};

const tabs = ["All", "Processing", "Shipped", "Delivered", "Cancelled"];

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredOrders =
    activeTab === "All"
      ? orders
      : orders.filter((o) => o.status === activeTab);

  return (
    <div className="p-4 md:p-8">
      <div className="max-w-4xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
              <Package size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No orders found</p>
              <Link
                href="/shop"
                className="inline-block mt-4 text-red-600 hover:text-red-700 font-medium text-sm"
              >
                Start Shopping →
              </Link>
            </div>
          ) : (
            filteredOrders.map((order) => {
              const status = statusConfig[order.status];
              const StatusIcon = status.icon;
              return (
                <div
                  key={order.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  {/* Order Header */}
                  <div className="p-5 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-sm font-bold text-gray-900">
                          {order.id}
                        </p>
                        <p className="text-xs text-gray-500">{order.date}</p>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${status.color}`}
                      >
                        <StatusIcon size={14} />
                        {status.label}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">
                        Payment: {order.payment}
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        {order.total}
                      </p>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="p-5">
                    <div className="space-y-3">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-800 truncate">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              Qty: {item.qty}
                            </p>
                          </div>
                          <p className="text-sm font-semibold text-gray-900">
                            {item.price}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Footer */}
                  <div className="px-5 py-3 bg-gray-50 flex items-center justify-between">
                    <button className="text-sm text-gray-600 hover:text-gray-800 font-medium">
                      Need Help?
                    </button>
                    <Link
                      href={`/product/1`}
                      className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
                    >
                      <Eye size={16} />
                      View Details
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
