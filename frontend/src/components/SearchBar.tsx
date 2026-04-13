import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        placeholder="Search in Fashionlea"
        className="w-full px-4 py-2.5 text-black bg-white border
         border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-black pr-12 text-sm"
      />
      <button className="absolute right-1 top-1 bottom-1 bg-black text-white py-4 px-3 
              rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors">
        <Search size={16} />
      </button>
    </div>
  );
};

export default SearchBar;
