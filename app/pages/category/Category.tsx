import { categories } from "../../constant/categoryData";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import React from "react";

const Category = () => {
  return (
    <section className="px-6 py-24 lg:px-16 relative container mx-auto">
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-black text-4xl md:text-5xl  font-semibold font-playfair">
            Shop by Category
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-inter font-medium">
            Explore our curated collections
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 3xl:gap-10 ">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
