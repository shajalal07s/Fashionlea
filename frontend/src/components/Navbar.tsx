"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { User, ShoppingCart } from "lucide-react";

interface NavbarProps {
  onCartClick: () => void;
}

const Navbar = ({ onCartClick }: NavbarProps) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const cart = localStorage.getItem("cart");
      if (cart) {
        try {
          const items = JSON.parse(cart);
          const total = items.reduce((sum: number, item: any) => sum + item.quantity, 0);
          setCartCount(total);
        } catch {}
      } else {
        setCartCount(0);
      }
    };

    updateCount();
    window.addEventListener("cartUpdated", updateCount);
    return () => window.removeEventListener("cartUpdated", updateCount);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/", active: true },
    { name: "MAKEUP", href: "/makeup" },
    { name: "SKIN CARE", href: "/skin-care" },
    { name: "HAIR CARE", href: "/hair-care" },
    { name: "ORAL CARE", href: "/oral-care" },
    { name: "HOME CARE", href: "/home-care" },
    { name: "SALE", href: "/sale" },
    { name: "SHOP", href: "/shop" },
  ];

  return (
    <nav className="bg-red-600 text-white w-full">
      <div className="container mx-auto px-4 flex items-center justify-between h-11">
        <div className="flex items-center space-x-6 text-sm font-bold tracking-wide h-full overflow-x-auto scrollbar-hide">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`hover:text-gray-200 transition-colors flex items-center h-full px-1 whitespace-nowrap ${
                link.active ? "text-yellow-400" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6 text-sm font-bold flex-shrink-0">
          <Link href="/signin" className="flex items-center space-x-1.5 hover:text-gray-200 transition-colors">
            <User size={18} strokeWidth={2} />
            <span>Sign in</span>
          </Link>
          <button
            onClick={onCartClick}
            className="flex items-center hover:text-gray-200 transition-colors relative"
          >
            <ShoppingCart size={22} strokeWidth={2} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-red-600 rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold border border-red-600">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
