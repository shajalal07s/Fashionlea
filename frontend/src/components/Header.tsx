import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="flex flex-col w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Logo />
        </div>
        <div className="flex-1 flex justify-end">
          <SearchBar />
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
