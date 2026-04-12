"use client";

import Image from "next/image";

const TopBrands = () => {
  const brands = [
    { name: "Nior", image: "/All Image/nior-logo-300x300-1.png" },
    { name: "Tylox", image: "/All Image/tylox-logo-300x300-1.png" },
    { name: "Sunbit", image: "/All Image/sunbit-logo-300x300-1.png" },
    { name: "Skin Mynt", image: "/All Image/skin-mynt-logo-300x300-1.png" },
    { name: "Lily Essentials", image: "/All Image/lily-essentials-logo-300x300-1.png" },
    { name: "Herlan", image: "/All Image/herlan-logo-300x300-1.png" },
    { name: "Glorin", image: "/All Image/glorin-logo-square-300x300-1.png" },
    { name: "Max Beu", image: "/All Image/max-beu-logo-300x300-1.png" },
    { name: "Siodi", image: "/All Image/siodil-logo-300x300-1.png" },
  ];

  return (
    <section className="py-8 overflow-hidden bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Top Brands</h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee">
            {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-27.5 h-27.5 mx-2 bg-white overflow-hidden flex items-center justify-center p-3"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    sizes="130px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>  
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TopBrands;
