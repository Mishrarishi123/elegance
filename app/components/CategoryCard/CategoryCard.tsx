// components/category/CategoryCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Category } from "@/app/types/Product";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <section className="">
      <Link
        href={`/shop?category=${category.id}`}
        className="group relative aspect-4/5 rounded-xl block"
      >
        <Image
          src={category.image}
          alt={category.name}
          width={400}
          height={500}
          className="w-full h-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0  rounded-2xl bg-linear-to-t from-black/70 via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <h3 className="text-lg sm:text-2xl font-semibold text-white mb-1 font-inter">
            {category.name}
          </h3>
          <p className="text-sm text-white/80 font-inter">
            {category.productCount} products
          </p>
        </div>

        <div className="absolute inset-0 rounded-xl border-2 border-transparent transition-colors duration-300 group-hover:border-white/60" />
      </Link>
    </section>
  );
};

export default CategoryCard;
