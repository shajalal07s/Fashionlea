import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        placeholder="Search in Fashionlea"
        className="w-full px-4 py-2 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-red-600 pr-12 text-sm"
      />
      <button className="absolute right-1 top-1 bottom-1 bg-black text-white px-3 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
        <Search size={18} />
      </button>
    </div>
  );
};

export default SearchBar;
