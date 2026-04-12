import React from 'react';

const Logo = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center text-3xl font-bold tracking-tighter">
        <span className="text-black">FASHI</span>
        <span className="relative flex items-center justify-center mx-[-2px]">
          {/* SVG Flower Icon for 'O' */}
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 text-red-600 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C11.5 2 11 2.5 11 3C11 3.5 11.5 4 12 4C14.21 4 16 5.79 16 8C16 9.38 15.3 10.6 14.2 11.33L16.27 12.5C17.38 11.39 18 9.77 18 8C18 4.69 15.31 2 12 2ZM12 22C12.5 22 13 21.5 13 21C13 20.5 12.5 20 12 20C9.79 20 8 18.21 8 16C8 14.62 8.7 13.4 9.8 12.67L7.73 11.5C6.62 12.61 6 14.23 6 16C6 19.31 8.69 22 12 22ZM2 12C2 12.5 2.5 13 3 13C3.5 13 4 12.5 4 12C4 9.79 5.79 8 8 8C9.38 8 10.6 8.7 11.33 9.8L12.5 7.73C11.39 6.62 9.77 6 8 6C4.69 6 2 8.69 2 12ZM22 12C22 11.5 21.5 11 21 11C20.5 11 20 11.5 20 12C20 14.21 18.21 16 16 16C14.62 16 13.4 15.3 12.67 14.2L11.5 16.27C12.61 17.38 14.23 18 16 18C19.31 18 22 15.31 22 12Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </span>
        <span className="text-red-600">NLEA</span>
      </div>
      <div className="text-[10px] font-medium text-gray-500 tracking-[0.2em] -mt-1">
        ফ্যাশনলি
      </div>
    </div>
  );
};

export default Logo;
