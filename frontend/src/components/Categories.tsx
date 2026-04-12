import Image from "next/image";

const Categories = () => {
  const categories = [
    { name: "Soap", image: "/All Image/download-7.jpeg" },
    { name: "Skin Care", image: "/All Image/essentials_beauty-skincare-clinic_skincare-300x300.jpg" },
    { name: "Nail", image: "/All Image/download-5.jpeg" },
    { name: "Moisturizer", image: "/All Image/images-7.jpeg" },
    { name: "Makeup", image: "/All Image/download-7.jpeg" },
    { name: "Liquid Lipstick", image: "/All Image/essentials_beauty-skincare-clinic_skincare-300x300.jpg" },
    { name: "Lipstick", image: "/All Image/download-5.jpeg" },
    { name: "Lip Gloss", image: "/All Image/images-7.jpeg" },
    { name: "Lip", image: "/All Image/download-7.jpeg" },
    { name: "Home Care", image: "/All Image/essentials_beauty-skincare-clinic_skincare-300x300.jpg" },
    { name: "Face Care", image: "/All Image/download-5.jpeg" },
    { name: "Lip Gloss", image: "/All Image/images-7.jpeg" },

  ];

  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Top Categories</h2>

        <div className="flex gap-4 pb-4 no-scrollbar">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-32 h-32 md:w-24 md:h-24 relative rounded-4xl overflow-hidden bg-gray-100 transition-transform hover:scale-105 active:scale-95 shadow-md">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </div>
              <p className="mt-2 text-xs md:text-sm font-semibold text-gray-700 text-center">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
