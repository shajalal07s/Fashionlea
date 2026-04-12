import Hero from "@/components/Hero";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white font-sans dark:bg-black">
      <Hero />
      <Categories />

      {/* Container for other sections */}
      <main className="container mx-auto px-4 py-16">
        <section className="text-center py-10">
          <h2 className="text-3xl font-bold mb-4">Trending Now</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Check out our most popular collections this season. From premium
            makeup to essential skin care.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Placeholder categories */}
            {["Makeup", "Skin Care", "Hair Care"].map((item) => (
              <div
                key={item}
                className="p-8 border rounded-2xl hover:shadow-lg transition-shadow bg-zinc-50 group cursor-pointer"
              >
                <div className="h-40 bg-zinc-200 rounded-xl mb-4 group-hover:bg-zinc-300 transition-colors" />
                <h3 className="text-xl font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
