"use client";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import CartDrawer from "./CartDrawer";
import { useCartContext } from "@/context/CartContext";

const Header = () => {
  const { cartOpen, openCart, closeCart } = useCartContext();

  return (
    <>
      <header className="flex flex-col w-full bg-white shadow-sm sticky top-0 z-40">
        <div className="lg:px-20 px-4 py-3 flex justify-between items-center">
          <div className="w-full lg:w-1/3 flex justify-start items-start">
            <Logo />
          </div>
          <div className="w-full lg:w-1/2 flex justify-end items-end">
            <SearchBar />
          </div>
        </div>
        <Navbar onCartClick={openCart} />
      </header>

      <CartDrawer isOpen={cartOpen} onClose={closeCart} />
    </>
  );
};

export default Header;
