import React from 'react';
import Link from 'next/link';
import { User, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { name: 'HOME', href: '/', active: true },
    { name: 'MAKEUP', href: '/makeup' },
    { name: 'SKIN CARE', href: '/skin-care' },
    { name: 'HAIR CARE', href: '/hair-care' },
    { name: 'ORAL CARE', href: '/oral-care' },
    { name: 'HOME CARE', href: '/home-care' },
    { name: 'SALE', href: '/sale' },
    { name: 'SHOP', href: '/shop' },
  ];

  return (
    <nav className="bg-red-600 text-white w-full">
      <div className="container mx-auto px-4 flex items-center justify-between h-11">
        <div className="flex items-center space-x-6 text-sm font-bold tracking-wide h-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`hover:text-gray-200 transition-colors flex items-center h-full px-1 ${
                link.active ? 'text-yellow-400' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center space-x-6 text-sm font-bold">
          <Link href="/signin" className="flex items-center space-x-1 hover:text-gray-200">
            <User size={18} />
            <span>Sign in</span>
          </Link>
          <Link href="/dashboard" className="flex items-center space-x-1 hover:text-gray-200">
            <ShoppingCart size={20} />
            <span className="bg-white text-red-600 rounded-full w-4 h-4 flex items-center justify-center text-[10px] absolute -top-1 -right-2 border border-red-600">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
