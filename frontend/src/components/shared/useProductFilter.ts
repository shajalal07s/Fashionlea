"use client";

import { useState, useMemo, useCallback } from "react";

export interface FilterableProduct {
  id: number;
  image: string;
  title: string;
  price: string;
  priceNumeric: number;
  category: string;
  status: string;
}

export type SortOption = "default" | "popularity" | "latest" | "price-low" | "price-high";

export interface UseProductFilterReturn {
  currentPage: number;
  totalPages: number;
  paginatedProducts: FilterableProduct[];
  filteredProducts: FilterableProduct[];
  sort: SortOption;
  selectedStatus: string[];
  selectedCategories: string[];
  setSort: (sort: SortOption) => void;
  handleStatusChange: (status: string) => void;
  handleCategoryChange: (category: string) => void;
  handlePageChange: (page: number) => void;
}

export function useProductFilter(
  products: FilterableProduct[],
  itemsPerPage: number = 8
): UseProductFilterReturn {
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
    let result = [...products];

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
  }, [products, sort, selectedStatus, selectedCategories]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return {
    currentPage,
    totalPages,
    paginatedProducts,
    filteredProducts,
    sort,
    selectedStatus,
    selectedCategories,
    setSort,
    handleStatusChange,
    handleCategoryChange,
    handlePageChange,
  };
}
