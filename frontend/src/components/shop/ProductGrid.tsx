"use client";

import { useState, useMemo, useCallback } from "react";
import { allProducts, PRODUCTS_PER_PAGE } from "./productsData";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import SidebarFilter from "./SidebarFilter";

type SortOption =
  | "default"
  | "popularity"
  | "latest"
  | "price-low"
  | "price-high";

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState<SortOption>("default");
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleStatusChange = useCallback((status: string) => {
    setSelectedStatus((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
    setCurrentPage(1);
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
    setCurrentPage(1);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    if (selectedStatus.length > 0) {
      result = result.filter((p) => selectedStatus.includes(p.status));
    }

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.priceNumeric - b.priceNumeric);
        break;
      case "price-high":
        result.sort((a, b) => b.priceNumeric - a.priceNumeric);
        break;
      case "latest":
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return result;
  }, [sort, selectedStatus, selectedCategories]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  return (
    <div className="flex gap-6">
      {/* Sidebar */}
      <aside className="w-full lg:w-96">
        <SidebarFilter
          selectedStatus={selectedStatus}
          selectedCategories={selectedCategories}
          onStatusChange={handleStatusChange}
          onCategoryChange={handleCategoryChange}
        />
      </aside>

      {/* Product Listing */}
      <div className="lg:w-1-full">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2.5">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Result</h2>
            <p className="text-sm text-gray-500">
              Check each product page for other buying options.
            </p>
          </div>
          <select
            className="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-700 bg-white focus:outline-none"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value as SortOption);
              setCurrentPage(1);
            }}
          >
            <option value="default">Default sorting</option>
            <option value="popularity">Sort by popularity</option>
            <option value="latest">Sort by latest</option>
            <option value="price-low">Sort by price: low to high</option>
            <option value="price-high">Sort by price: high to low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
          {paginatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              productId={product.id}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            No products found.
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
