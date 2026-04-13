"use client";

import { useState } from "react";
import { Filter, X, SlidersHorizontal } from "lucide-react";
import SharedProductCard from "./ProductCard";
import SharedSidebarFilter from "./SidebarFilter";
import SharedPagination from "./Pagination";
import {
  useProductFilter,
  FilterableProduct,
  SortOption,
} from "./useProductFilter";

export interface ShopLayoutProps {
  pageTitle: string;
  pageSubtitle?: string;
  products: FilterableProduct[];
  categories: string[];
  statuses?: string[];
  extraCategoryCount?: number;
  itemsPerPage?: number;
  showSidebar?: boolean;
  onProductClick?: (id: number) => void;
}

const ShopLayout = ({
  pageTitle = "Result",
  pageSubtitle = "Check each product page for other buying options.",
  products,
  categories,
  statuses = ["In stock", "Out of stock", "On sale"],
  extraCategoryCount = 0,
  itemsPerPage = 8,
  showSidebar = true,
}: ShopLayoutProps) => {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const {
    currentPage,
    totalPages,
    paginatedProducts,
    sort,
    selectedStatus,
    selectedCategories,
    setSort,
    handleStatusChange,
    handleCategoryChange,
    handlePageChange,
  } = useProductFilter(products, itemsPerPage);

  return (
    <div className="bg-[#f5f5f5] min-h-screen py-8">
      <div className="mx-auto w-1-full lg:px-16 px-6">
        {/* Mobile Filter Toggle */}
        {showSidebar && (
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <SlidersHorizontal size={18} />
              Filters
              {(selectedStatus.length + selectedCategories.length) > 0 && (
                <span className="bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {selectedStatus.length + selectedCategories.length}
                </span>
              )}
            </button>
          </div>
        )}

        <div className="flex gap-6">
          {/* Sidebar */}
          {showSidebar && (
            <>
              {/* Mobile Sidebar Overlay */}
              {mobileFilterOpen && (
                <div
                  className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                  onClick={() => setMobileFilterOpen(false)}
                />
              )}

              <aside
                className={`fixed lg:sticky top-0 lg:top-auto left-0 h-screen lg:h-auto w-72 lg:w-[260px] xl:w-[300px] flex-shrink-0 z-50 lg:z-0 bg-white lg:bg-transparent p-4 lg:p-0 transform transition-transform duration-300 lg:transform-none ${
                  mobileFilterOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                }`}
              >
                <div className="flex items-center justify-between lg:hidden mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>
                <SharedSidebarFilter
                  categories={categories}
                  statuses={statuses}
                  extraCount={extraCategoryCount}
                  selectedStatus={selectedStatus}
                  selectedCategories={selectedCategories}
                  onStatusChange={(s) => {
                    handleStatusChange(s);
                    setMobileFilterOpen(false);
                  }}
                  onCategoryChange={(c) => {
                    handleCategoryChange(c);
                    setMobileFilterOpen(false);
                  }}
                />
              </aside>
            </>
          )}

          {/* Product Listing */}
          <div className="flex-1 min-w-0">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
              <div>
                <h2 className="text-lg font-bold text-gray-800">{pageTitle}</h2>
                {pageSubtitle && (
                  <p className="text-sm text-gray-500">{pageSubtitle}</p>
                )}
              </div>
              <select
                className="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-700 bg-white focus:outline-none"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
              >
                <option value="default">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="latest">Sort by latest</option>
                <option value="price-low">Sort by price: low to high</option>
                <option value="price-high">Sort by price: high to low</option>
              </select>
            </div>

            {/* Product Grid */}
            {paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {paginatedProducts.map((product) => (
                  <SharedProductCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    priceNumeric={product.priceNumeric}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl">
                <Filter size={48} className="text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No products found</p>
                <p className="text-sm text-gray-400 mt-1">Try adjusting your filters</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <SharedPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopLayout;
