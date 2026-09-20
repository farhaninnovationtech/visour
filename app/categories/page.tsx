import type { Metadata } from "next";
import { Compass, Sparkles } from "lucide-react";

import CategoryGrid from "@/components/CategoryGrid";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Browse curated AI image prompts by category — portrait, cinematic, fashion, anime, fantasy, sci-fi and more.",
  alternates: { canonical: "/categories" },
};

export default function CategoriesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[650px]"
        aria-hidden="true"
      >
        <div className="glow -left-40 -top-32 h-[420px] w-[420px] bg-accent-violet/20" />
        <div className="glow right-[-120px] top-20 h-[420px] w-[420px] bg-accent-cyan/15" />
        <div className="glow left-1/2 top-[320px] h-[320px] w-[320px] -translate-x-1/2 bg-accent-pink/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-8 sm:pt-20">
        {/* Header */}
        <section className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur">
            <Compass className="h-3.5 w-3.5 text-accent-violet" />
            Browse the collection
          </div>

          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
            Explore by
            <span className="gradient-text"> category.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Find prompts by style, mood, and the kind of image you want to create.
          </p>
        </section>

        {/* Category grid */}
        <section className="mt-12">
          <CategoryGrid />
        </section>

        {/* Bottom note */}
        <div className="mt-14 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-xs text-muted backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent-violet" />
            Find a category. Discover a direction.
          </div>
        </div>
      </div>
    </main>
  );
}