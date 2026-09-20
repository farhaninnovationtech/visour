import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";
import {
  ArrowDown,
  ArrowLeft,
  Compass,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import { categories, getCategoryBySlug } from "@/lib/data/categories";
import {
  getPromptsByCategory,
  getCategoryPromptCount,
} from "@/lib/data/prompts";
import { sortPrompts, SortOption } from "@/lib/utils/search";
import PromptGrid from "@/components/PromptGrid";
import Tag from "@/components/Tag";
import CategorySortControl from "@/components/CategorySortControl";
import { CategoryViewTracker } from "@/components/PromptViewTracker";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ sort?: string }>;
}

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) return {};

  const count = getCategoryPromptCount(slug);

  return {
    title: `${category.name} Prompts`,
    description: `${category.description} Browse ${count} curated ${category.name.toLowerCase()} AI image prompts on Visour.`,
    alternates: {
      canonical: `/categories/${slug}`,
    },
    openGraph: {
      title: `${category.name} Prompts — Visour`,
      description: category.description,
      images: [{ url: category.image }],
    },
  };
}

export default async function CategoryDetailPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const { sort } = await searchParams;

  const currentSort = (sort as SortOption) ?? "featured";

  const categoryPrompts = sortPrompts(
    getPromptsByCategory(slug),
    currentSort,
  );

  const relatedTags = Array.from(
    new Set(categoryPrompts.flatMap((p) => p.tags)),
  ).slice(0, 8);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <CategoryViewTracker categorySlug={slug} />

      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[700px]"
        aria-hidden="true"
      >
        <div className="glow -left-40 top-20 h-[400px] w-[400px] bg-accent-violet/15" />
        <div className="glow right-[-120px] top-20 h-[420px] w-[420px] bg-accent-cyan/15" />
      </div>

      {/* Category hero */}
      <section className="relative">
        <div className="relative h-[320px] overflow-hidden sm:h-[400px] lg:h-[460px]">
          <Image
            src={category.image}
            alt={`${category.name} category cover`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Image treatment */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/30" />
          <div className="absolute inset-0 bg-accent-violet/5 mix-blend-screen" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative -mt-32 pb-12 sm:-mt-40 lg:-mt-44">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <Link
                href="/categories"
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur-xl transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                All categories
              </Link>

              {/* Category badge */}
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan">
                <Compass className="h-3.5 w-3.5" />
                Category
              </div>

              <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                {category.name}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                {category.longDescription}
              </p>

              {/* Stats / tags */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="rounded-full border border-border bg-surface/70 px-4 py-2 text-sm font-medium backdrop-blur-xl">
                  {categoryPrompts.length}{" "}
                  {categoryPrompts.length === 1 ? "prompt" : "prompts"}
                </div>

                {relatedTags.slice(0, 4).map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prompts */}
      <section className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="rounded-3xl border border-border bg-surface/40 p-5 backdrop-blur-xl sm:p-7">
          <div className="flex flex-col gap-4 border-b border-border/70 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent-violet" />

                <h2 className="font-display text-xl font-bold">
                  Prompts in {category.name}
                </h2>
              </div>

              <p className="mt-1 text-sm text-muted">
                Explore curated ideas from this visual world.
              </p>
            </div>

            <Suspense fallback={null}>
              <CategorySortControl currentSort={currentSort} />
            </Suspense>
          </div>

          <div className="mt-7">
            <PromptGrid
              prompts={categoryPrompts}
              emptyTitle="No prompts in this category yet"
              emptyDescription="Check back soon, or explore another category."
            />
          </div>
        </div>

        {/* Bottom discovery */}
        {categoryPrompts.length > 0 && (
          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-xs text-muted backdrop-blur">
              <ArrowDown className="h-3.5 w-3.5" />
              Keep exploring {category.name.toLowerCase()}.
            </div>
          </div>
        )}
      </section>
    </main>
  );
}