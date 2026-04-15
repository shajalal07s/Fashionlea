"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="lg:px-16 px-5 mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Column 1 - Brand Info */}
          <div className="lg:col-span-1">
            {/* Logo Image */}
            <div className="mb-4">
              <Image
                src="/Fashionlea-logo-black-background-2.png"
                alt="Fashionlea Logo"
                width={160}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </div>

            {/* Highlight text */}
            <h3 className="text-yellow-500 font-bold text-lg mb-3">
              ফ্যাশন ও বিউটি শপ
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              ফ্যাশনলি অনলাইন শপে পাচ্ছেন ফ্যাশন ও বিউটি রিলেটেড সকল পণ্য। এবং
              সারা বাংলাদেশে ডেলিভারি। ২৪/৭ কাস্টমার সার্ভিস আমরা দিচ্ছি। যেকোনো
              সমস্যা সমাধিনে আমাদের কাস্টমার সাপোর্টে যোগাযোগ করুন।
            </p>

            {/* Facebook Button */}
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>

          {/* Column 2 - Our Story */}
          <div>
            <h4 className="text-gray-400 font-semibold text-sm uppercase tracking-wider mb-4">
              OUR STORY
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-yellow-400 text-sm transition-colors"
                >
                  Company Profile
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-yellow-400 text-sm transition-colors"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Categories */}
          <div>
            <h4 className="text-gray-400 font-semibold text-sm uppercase tracking-wider mb-4">
              CATEGORIES
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-yellow-400 text-sm transition-colors"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-yellow-400 text-sm transition-colors"
                >
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Quick Link */}
          <div>
            <h4 className="text-gray-400 font-semibold text-sm uppercase tracking-wider mb-4">
              QUICK LINK
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-yellow-400 text-sm transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-yellow-400 text-sm transition-colors"
                >
                  Sitemap
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-yellow-400 text-sm transition-colors"
                >
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 - Contact Us */}
          <div>
            <h4 className="text-gray-400 font-semibold text-sm uppercase tracking-wider mb-4">
              CONTACT US
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-yellow-400 text-sm transition-colors"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-yellow-400 text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-yellow-400 text-sm transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-yellow-400 text-sm transition-colors"
                >
                  Refund and Returns Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-yellow-400 text-sm transition-colors"
                >
                  Consumer enquiry
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
