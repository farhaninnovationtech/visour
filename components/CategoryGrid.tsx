import { categories } from "@/lib/data/categories";
import { getCategoryPromptCount } from "@/lib/data/prompts";
import CategoryCard from "@/components/CategoryCard";

export default function CategoryGrid({ limit }: { limit?: number }) {
  const list = limit ? categories.slice(0, limit) : categories;

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((category, i) => (
        <CategoryCard
          key={category.slug}
          category={category}
          count={getCategoryPromptCount(category.slug)}
          priority={i < 3}
        />
      ))}
    </div>
  );
}
