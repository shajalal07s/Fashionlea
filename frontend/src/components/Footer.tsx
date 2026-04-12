"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="lg:px-16 md:px-5 sm:px-5 mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Column 1 - Brand Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-4">
              <div className="text-3xl md:text-4xl font-bold tracking-tight">
                FASHI
                <span className="text-red-500">
                  <span className="inline-block mx-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </span>
                </span>
                NLEA
              </div>
              <p className="text-gray-400 text-sm text-center -mt-1">
                ফ্যাশনলিয়া
              </p>
            </div>

            {/* Highlight text */}
            <h3 className="text-yellow-500 font-bold text-lg mb-3">
              ফ্যাশন ও বিউটি শপ
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              ফ্যাশনলি অনলাইন শপে পাচ্ছেন ফ্যাশন ও বিউটি রিলেটেড সকল পণ্য। এবং
              সারা বাংলাদেশে ডেলিভারি। ২৪/৭ কাস্টমার সার্ভিস আমরা দিচ্ছি।
              যেকোনো সমস্যা সমাধিনে আমাদের কাস্টমার সাপোর্টে যোগাযোগ করুন।
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

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1280px] mx-auto px-4 py-6">
          <p className="text-gray-400 text-xs leading-relaxed">
            Copyright © 2020-2025 Fashionlea Inc. All Rights Reserved. |
            Website Developed by Global IT Solutions Inc.
          </p>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="fixed right-4 bottom-20 flex flex-col gap-3 z-50">
        <button className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </button>
        <button className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 2.92 1.25 5.54 3.23 7.37.18.17.29.41.29.67v2.45c0 .28.22.51.5.51.15 0 .29-.07.38-.18L9.6 20.4c.05-.06.11-.09.18-.09.02 0 .04 0 .06.01.75.21 1.55.32 2.38.32 5.52 0 10-4.48 10-10S17.52 2 12 2zm1.05 13.39l-2.55-2.72c-.12-.13-.19-.3-.19-.48V9.31c0-.39.32-.71.71-.71.2 0 .37.08.5.21l2.55 2.72c.12.13.19.3.19.48v2.88c0 .39-.32.71-.71.71-.2 0-.37-.08-.5-.21z" />
          </svg>
        </button>
        <button className="w-12 h-12 bg-green-400 hover:bg-green-500 rounded-full flex items-center justify-center shadow-lg transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </button>
        <button className="w-12 h-12 bg-blue-gray-500 hover:bg-blue-gray-600 rounded-full flex items-center justify-center shadow-lg transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
