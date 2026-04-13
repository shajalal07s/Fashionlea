import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  productId: number;
}

const ProductCard = ({ image, title, price, productId }: ProductCardProps) => {
  return (
    <Link href={`/product/${productId}`} className="bg-white p-1 flex flex-col gap-2.5 overflow-hidden group">
      {/* Product Image */}
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Title */}
      <h3 className="text-sm text-gray-800 mb-2 line-clamp-2">{title}</h3>

      {/* Price */}
      <p className="text-base font-bold text-black mb-3">{price}</p>

      {/* Add to Cart Button */}
      <button className="mt-auto self-start px-4 py-1.5 text-xs font-medium rounded-full border border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-colors">
        ADD TO CART
      </button>
    </Link>
  );
};

export default ProductCard;
