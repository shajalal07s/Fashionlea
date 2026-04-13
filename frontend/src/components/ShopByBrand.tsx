import Image from "next/image";

const brands = [
  { id: 1, name: "Tylox", image: "/All Image/tylox-logo-300x300-1.png" },
  { id: 2, name: "Sunbit", image: "/All Image/sunbit-logo-300x300-1.png" },
  { id: 3, name: "Skin Mynt", image: "/All Image/skin-mynt-logo-300x300-1.png" },
  { id: 4, name: "Siodil", image: "/All Image/siodil-logo-300x300-1.png" },
  { id: 5, name: "Nior", image: "/All Image/nior-logo-300x300-1.png" },
  { id: 6, name: "Max Beu", image: "/All Image/max-beu-logo-300x300-1.png" },
  { id: 7, name: "Lily Essentials", image: "/All Image/lily-essentials-logo-300x300-1.png" },
  { id: 8, name: "Lily", image: "/All Image/lily-essentials-logo-300x300-1.png" },
  { id: 9, name: "Herlan", image: "/All Image/herlan-logo-300x300-1.png" },
  { id: 10, name: "Glorin Jewels", image: "/All Image/glorin-logo-square-300x300-1.png" },
];

const ShopByBrand = () => {
  return (
    <section className="w-full bg-gray-100 py-8">
      <div className="mx-auto px-4 lg:px-16">
        {/* Section Title */}
        <h2 className="text-2xl font-bold font-railway text-gray-800 mb-5">
          Shop by Brand
        </h2>

        {/* Brand Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white flex items-center justify-center p-4 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="relative w-[140px] h-32 p-2.5">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  sizes="135px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByBrand;
