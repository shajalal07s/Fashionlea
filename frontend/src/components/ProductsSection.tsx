"use client";

import Image from "next/image";

const ProductsSection = () => {
  const skinMyntProducts = [
    {
      id: 1,
      brand: "Skin Mynt",
      title: "Skin Mynt Vitamin C Brightening Body Serum 100ml",
      oldPrice: "599৳",
      newPrice: "420৳",
      discount: "-30%",
      image: "/All Image/download-7.jpeg",
    },
    {
      id: 2,
      brand: "Skin Mynt",
      title: "Skin Mynt Vitamin C Brightening Foaming Face Wash 100ml",
      oldPrice: "550৳",
      newPrice: "385৳",
      discount: "-30%",
      image: "/All Image/essentials_beauty-skincare-clinic_skincare-300x300.jpg",
    },
    {
      id: 3,
      brand: "Skin Mynt",
      title: "Skin Mynt Vitamin C Brightening Body Lotion 100ml",
      oldPrice: "599৳",
      newPrice: "420৳",
      discount: "-30%",
      image: "/All Image/download-5.jpeg",
    },
    {
      id: 4,
      brand: "Skin Mynt",
      title: "Skin Mynt Vitamin C Brightening Toner 120ml",
      oldPrice: "649৳",
      newPrice: "455৳",
      discount: "-30%",
      image: "/All Image/images-7.jpeg",
    },
    {
      id: 5,
      brand: "Skin Mynt",
      title: "Skin Mynt Vitamin C Brightening Sleeping Mask 50g",
      oldPrice: "999৳",
      newPrice: "700৳",
      discount: "-30%",
      image: "/All Image/download-7.jpeg",
    },
    {
      id: 6,
      brand: "Skin Mynt",
      title: "Skin Mynt Vitamin C Brightening Night Cream 50gm",
      oldPrice: "780৳",
      newPrice: "546৳",
      discount: "-30%",
      image: "/All Image/essentials_beauty-skincare-clinic_skincare-300x300.jpg",
    },
  ];

  const glorinProducts = [
    {
      id: 7,
      brand: "Glorin",
      title: "Glorin Earring Lustra Ring",
      oldPrice: "600৳",
      newPrice: "480৳",
      discount: "-20%",
      image: "/All Image/download-5.jpeg",
    },
    {
      id: 8,
      brand: "Glorin",
      title: "Glorin Earring Dorelle",
      oldPrice: "999৳",
      newPrice: "749৳",
      discount: "-25%",
      image: "/All Image/images-7.jpeg",
    },
    {
      id: 9,
      brand: "Glorin",
      title: "Glorin Earring Goldenara",
      oldPrice: "1,199৳",
      newPrice: "899৳",
      discount: "-25%",
      image: "/All Image/download-7.jpeg",
    },
    {
      id: 10,
      brand: "Glorin",
      title: "Glorin Earring Shellso",
      oldPrice: "1,200৳",
      newPrice: "900৳",
      discount: "-25%",
      image: "/All Image/essentials_beauty-skincare-clinic_skincare-300x300.jpg",
    },
    {
      id: 11,
      brand: "Glorin",
      title: "Glorin Earring Solene",
      oldPrice: "599৳",
      newPrice: "449৳",
      discount: "-25%",
      image: "/All Image/download-5.jpeg",
    },
    {
      id: 12,
      brand: "Glorin",
      title: "Glorin Earring Glimmer",
      oldPrice: "599৳",
      newPrice: "449৳",
      discount: "-25%",
      image: "/All Image/images-7.jpeg",
    },
  ];

  const SectionHeader = ({ title }: { title: string }) => (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg md:text-xl font-bold text-gray-800">{title}</h2>
      <button className="flex items-center gap-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-full px-4 py-1.5 hover:bg-gray-800 hover:text-white transition-colors">
        See All
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );

  const ProductCard = ({
    product,
  }: {
    product: (typeof skinMyntProducts)[0];
  }) => (
    <div className="bg-white p-1.5 flex flex-col justify-items-start h-full relative ">
      {/* Discount Badge */}
      <div className="absolute top-2 right-2 bg-red-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full z-10">
        {product.discount}
      </div>

      {/* Product Image */}
      <div className="relative w-full aspect-square flex items-center justify-center mb-3">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
        />
      </div>

      {/* Brand Name */}
      <p className="text-xs text-gray-500 font-medium mb-1">{product.brand}</p>

      {/* Product Title */}
      <p className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 leading-snug min-h-[2.5rem]">
        {product.title}
      </p>

      {/* Prices */}
      <div className="flex items-center gap-2 mb-3 mt-auto">
        <span className="text-sm text-gray-400 line-through">
          {product.oldPrice}
        </span>
        <span className="text-sm font-bold text-red-600">
          {product.newPrice}
        </span>
      </div>

      {/* Add to Cart Button */}
      <button className="py-2 px-4 text-xs font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-800 hover:text-white transition-colors">
        ADD TO CART
      </button>
    </div>
  );

  return (
    <div className="bg-gray-100 py-8">
      <div className="lg:px-16 mx-auto md:px-5 sm:px-5">
        {/* Skin Mynt Section */}
        <div className="mb-8">
          <SectionHeader title="Skin Mynt Flat 30% Off" />
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {skinMyntProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Glorin Jewels Section */}
        <div>
          <SectionHeader title="Glorin Jewels - Adorned With Grace" />
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {glorinProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
