"use client";

import { useMemo } from "react";

export interface SidebarFilterProps {
  categories: string[];
  statuses: string[];
  extraCount?: number;
  selectedStatus: string[];
  selectedCategories: string[];
  onStatusChange: (status: string) => void;
  onCategoryChange: (category: string) => void;
}

const SidebarFilter = ({
  categories,
  statuses,
  extraCount = 0,
  selectedStatus,
  selectedCategories,
  onStatusChange,
  onCategoryChange,
}: SidebarFilterProps) => {
  const displayCategories = useMemo(() => {
    return categories.length > 9 ? categories.slice(0, 9) : categories;
  }, [categories]);

  return (
    <div className="bg-white p-4">
      {/* Product Status */}
      {statuses.length > 0 && (
        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-3 text-sm">Product Status</h3>
          <div className="space-y-2">
            {statuses.map((status) => (
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
      )}

      {/* All Categories */}
      {displayCategories.length > 0 && (
        <div>
          <h3 className="font-bold text-gray-800 mb-3 text-sm">All Categories</h3>
          <div className="space-y-2">
            {displayCategories.map((category) => (
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
      )}
    </div>
  );
};

export default SidebarFilter;
