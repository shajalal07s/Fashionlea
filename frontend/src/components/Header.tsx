"use client";

import { useState } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import CartDrawer from "./CartDrawer";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header className="flex flex-col w-full bg-white shadow-sm sticky top-0 z-40">
        <div className="lg:px-20 py-3 flex justify-between items-center">
          <div className="w-full lg:w-1/3 flex justify-start items-start">
            <Logo />
          </div>
          <div className="w-full lg:w-1/2 flex justify-end items-end">
            <SearchBar />
          </div>
        </div>
        <Navbar onCartClick={() => setCartOpen(true)} />
      </header>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Header;
