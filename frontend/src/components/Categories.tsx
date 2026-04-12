import Image from "next/image";

const Categories = () => {
  const categories = [
    { name: "Soap", image: "https://placehold.co/120x120/png?text=Soap" },
    {
      name: "Skin Care",
      image: "https://placehold.co/120x120/png?text=Skin+Care",
    },
    { name: "Nail", image: "https://placehold.co/120x120/png?text=Nail" },
    {
      name: "Moisturizer",
      image: "https://placehold.co/120x120/png?text=Moisturizer",
    },
    { name: "Makeup", image: "https://placehold.co/120x120/png?text=Makeup" },
    {
      name: "Liquid Lipstick",
      image: "https://placehold.co/120x120/png?text=Liquid+Lipstick",
    },
    {
      name: "Lipstick",
      image: "https://placehold.co/120x120/png?text=Lipstick",
    },
    {
      name: "Lip Gloss",
      image: "https://placehold.co/120x120/png?text=Lip+Gloss",
    },
    { name: "Lip", image: "https://placehold.co/120x120/png?text=Lip" },
    {
      name: "Home Care",
      image: "https://placehold.co/120x120/png?text=Home+Care",
    },
    {
      name: "Face Care",
      image: "https://placehold.co/120x120/png?text=Face+Care",
    },
    { name: "Face", image: "https://placehold.co/120x120/png?text=Face" },
  ];

  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Top Categories</h2>

        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center group cursor-pointer"
            >
              <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] relative rounded-[2rem] overflow-hidden bg-gray-100 transition-transform hover:scale-105 active:scale-95 shadow-sm border border-gray-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-[12px] md:text-[13px] font-bold text-gray-700 text-center leading-tight">
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
