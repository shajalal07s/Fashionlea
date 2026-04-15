"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { User, ShoppingCart, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  onCartClick: () => void;
}

const Navbar = ({ onCartClick }: NavbarProps) => {
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

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

  // Check screen size for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "MAKEUP", href: "/makeup" },
    { name: "SKIN CARE", href: "/skin-care" },
    { name: "HAIR CARE", href: "/hair-care" },
    { name: "ORAL CARE", href: "/oral-care" },
    { name: "HOME CARE", href: "/home-care" },
    { name: "SALE", href: "/sale" },
    { name: "SHOP", href: "/shop" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleCartClick = () => {
    setMobileMenuOpen(false);
    onCartClick();
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="bg-red-600 text-white w-full hidden md:block">
        <div className="container mx-auto px-4 flex items-center justify-between h-11">
          <div className="flex items-center space-x-6 text-sm font-bold tracking-wide h-full overflow-x-auto scrollbar-hide">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-gray-200 transition-colors flex items-center h-full px-1 whitespace-nowrap ${
                  isActive(link.href) ? "text-yellow-400 border-b-2 border-yellow-400" : ""
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
              onClick={handleCartClick}
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

      {/* Mobile Navigation Bar */}
      <nav className="bg-red-600 text-white w-full md:hidden">
        <div className="flex items-center justify-between px-4 py-3 h-14">
          {/* Mobile Menu Links - Scrollable */}
          <div className="flex items-center space-x-3 overflow-x-auto flex-1 scrollbar-hide">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xs font-bold whitespace-nowrap px-2 py-1 rounded transition-colors ${
                  isActive(link.href)
                    ? "bg-yellow-400 text-red-600"
                    : "hover:bg-red-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Right Icons */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <Link href="/signin" className="flex items-center p-2 hover:bg-red-700 rounded transition-colors">
              <User size={20} strokeWidth={2} />
            </Link>
            <button
              onClick={handleCartClick}
              className="flex items-center p-2 hover:bg-red-700 rounded transition-colors relative"
            >
              <ShoppingCart size={20} strokeWidth={2} />
              {cartCount > 0 && (
                <span className="absolute -top-0 -right-0 bg-white text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center p-2 hover:bg-red-700 rounded transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={24} strokeWidth={2} />
              ) : (
                <Menu size={24} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && isMobile && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Drawer */}
          <div className="fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 overflow-y-auto md:hidden">
            {/* Close Button */}
            <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white">
              <h3 className="text-lg font-bold text-gray-800">Menu</h3>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* All Navigation Links */}
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded font-semibold transition-colors ${
                    isActive(link.href)
                      ? "bg-red-100 text-red-600 border-l-4 border-red-600"
                      : "text-gray-700 hover:bg-gray-100 hover:text-red-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Additional Menu Items */}
            <div className="px-4 py-4 border-t space-y-2">
              <h4 className="text-sm font-bold text-gray-600 px-2 uppercase">Account</h4>
              <Link
                href="/signin"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 rounded text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors"
              >
                <User size={18} />
                <span className="font-semibold">Sign In</span>
              </Link>
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 rounded text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors"
              >
                <User size={18} />
                <span className="font-semibold">Dashboard</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
