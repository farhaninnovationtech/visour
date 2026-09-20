import Link from "next/link";
import Image from "next/image";
import { Category } from "@/lib/data/categories";

export default function CategoryCard({
  category,
  count,
  priority = false,
}: {
  category: Category;
  count: number;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl border border-border focus-ring"
    >
      <Image
        src={category.image}
        alt={`${category.name} category preview`}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/0" />
      <div className="relative p-5">
        <h3 className="font-display text-xl font-bold text-white">
          {category.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-white/70">
          {category.description}
        </p>
        <p className="mt-3 text-xs font-medium uppercase tracking-wide text-accent-cyan">
          {count} {count === 1 ? "prompt" : "prompts"}
        </p>
      </div>
    </Link>
  );
}
