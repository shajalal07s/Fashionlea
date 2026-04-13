"use client";

import { allProducts } from "./productsData";

interface SidebarFilterProps {
  selectedStatus: string[];
  selectedCategories: string[];
  onStatusChange: (status: string) => void;
  onCategoryChange: (category: string) => void;
}

const productStatus = ["In stock", "Out of stock", "On sale"];

const SidebarFilter = ({
  selectedStatus,
  selectedCategories,
  onStatusChange,
  onCategoryChange,
}: SidebarFilterProps) => {
  const allCategories = Array.from(
    new Set(allProducts.map((p) => p.category))
  );
  const extraCount = Math.max(0, 44 - allCategories.length);

  return (
    <div className="bg-white p-2.5 ">
      {/* Product Status */}
      <div className="mb-6">
        <h3 className="font-bold text-gray-800 mb-3 text-sm">Product Status</h3>
        <div className="space-y-2">
          {productStatus.map((status) => (
            <label
              key={status}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedStatus.includes(status)}
                onChange={() => onStatusChange(status)}
                className="w-4 h-4 rounded border-gray-300 text-black focus:ring-0 cursor-pointer"
              />
              <span className="text-sm text-gray-700">{status}</span>
            </label>
          ))}
        </div>
      </div>

      {/* All Categories */}
      <div>
        <h3 className="font-bold text-gray-800 mb-3 text-sm">All Categories</h3>
        <div className="space-y-2">
          {allCategories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => onCategoryChange(category)}
                className="w-4 h-4 rounded border-gray-300 text-black focus:ring-0 cursor-pointer"
              />
              <span className="text-sm text-gray-700">{category}</span>
            </label>
          ))}
        </div>
        {extraCount > 0 && (
          <button className="text-orange-500 text-xs mt-3 hover:underline">
            +{extraCount} more
          </button>
        )}
      </div>
    </div>
  );
};

export default SidebarFilter;
