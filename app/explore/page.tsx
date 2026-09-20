import type { Metadata } from "next";
import { Suspense } from "react";
import {
  ArrowDown,
  Compass,
  Sparkles,
  WandSparkles,
} from "lucide-react";

import { prompts } from "@/lib/data/prompts";
import { filterPrompts, SortOption } from "@/lib/utils/search";
import FilterBar from "@/components/FilterBar";
import PromptGrid from "@/components/PromptGrid";
import GridSkeleton from "@/components/LoadingSkeleton";

export const metadata: Metadata = {
  title: "Explore Prompts",
  description:
    "Explore curated AI image prompts by category, style, tags, and AI model. Find a prompt that fits your next idea.",
  alternates: { canonical: "/explore" },
};

interface ExplorePageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    model?: string;
    tag?: string;
    sort?: string;
  }>;
}

export default async function ExplorePage({
  searchParams,
}: ExplorePageProps) {
  const params = await searchParams;

  const results = filterPrompts(prompts, {
    q: params.q,
    category: params.category,
    model: params.model,
    tag: params.tag,
    sort: (params.sort as SortOption) ?? "featured",
  });

  const hasFilters = Boolean(
    params.q || params.category || params.model || params.tag,
  );

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[620px]"
        aria-hidden="true"
      >
        <div className="glow -left-40 -top-32 h-[420px] w-[420px] bg-accent-violet/20" />
        <div className="glow right-[-120px] top-10 h-[400px] w-[400px] bg-accent-cyan/15" />
        <div className="glow left-1/2 top-[280px] h-[300px] w-[300px] -translate-x-1/2 bg-accent-pink/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-8 sm:pt-20">
        {/* Header */}
        <section className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur">
            <Compass className="h-3.5 w-3.5 text-accent-violet" />
            Prompt library
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
                Explore
                <span className="gradient-text"> prompts.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                Search, browse, and discover curated prompts for your next
                visual idea. Find a direction you like and take it from there.
              </p>
            </div>

            {/* Prompt count */}
            <div className="hidden lg:block">
              <div className="rounded-2xl border border-border bg-surface/60 px-5 py-4 text-right backdrop-blur-xl">
                <div className="font-display text-2xl font-bold">
                  {prompts.length}
                </div>
                <div className="mt-0.5 text-xs text-muted">
                  curated prompts
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search / filters */}
        <section className="relative mt-10">
          <div className="rounded-3xl border border-border bg-surface/60 p-3 shadow-2xl shadow-black/5 backdrop-blur-xl sm:p-4">
            <Suspense fallback={<div className="h-20" />}>
              <FilterBar />
            </Suspense>
          </div>
        </section>

        {/* Results header */}
        <section className="mt-8 flex flex-col gap-4 border-b border-border/70 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div
            className="flex items-center gap-2 text-sm text-muted"
            role="status"
            aria-live="polite"
          >
            <Sparkles className="h-4 w-4 text-accent-violet" />

            <span>
              <span className="font-semibold text-foreground">
                {results.length}
              </span>{" "}
              {results.length === 1 ? "prompt" : "prompts"} found
            </span>

            {hasFilters && (
              <span className="text-muted">
                · filtered results
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs text-muted">
            <WandSparkles className="h-3.5 w-3.5" />
            Curated for creative exploration
          </div>
        </section>

        {/* Prompt grid */}
        <section className="mt-7">
          <Suspense fallback={<GridSkeleton />}>
            <PromptGrid
              prompts={results}
              emptyTitle="Nothing here yet"
              emptyDescription="Try a broader search term, remove a filter, or explore another category."
            />
          </Suspense>
        </section>

        {/* Bottom discovery note */}
        {results.length > 0 && (
          <div className="mt-16 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-xs text-muted backdrop-blur">
              <ArrowDown className="h-3.5 w-3.5" />
              Keep exploring — your next idea might be here.
            </div>
          </div>
        )}
      </div>
    </main>
  );
}