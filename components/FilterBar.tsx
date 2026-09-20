"use client";

import { useCallback, useState, useTransition } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { categories } from "@/lib/data/categories";
import { allModels } from "@/lib/data/prompts";
import { trackEvent } from "@/lib/analytics";

const sortOptions: { value: string; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
];

export default function FilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const category = searchParams.get("category") ?? "";
  const model = searchParams.get("model") ?? "";
  const sort = searchParams.get("sort") ?? "featured";

  const updateParams = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([key, value]) => {
        if (!value) {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });
      startTransition(() => {
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
      });
    },
    [pathname, router, searchParams]
  );

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    updateParams({ q: query || null });
    if (query.trim()) {
      trackEvent("search", { query: query.trim() });
    }
  }

  function clearAll() {
    setQuery("");
    router.push(pathname, { scroll: false });
  }

  const hasActiveFilters = Boolean(
    searchParams.get("q") || category || model || sort !== "featured"
  );

  return (
    <div className="space-y-4">
      <form onSubmit={handleSearchSubmit} role="search" className="flex gap-2">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 focus-within:border-accent-cyan/50">
          <Search className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
          <label htmlFor="explore-search" className="sr-only">
            Search prompts
          </label>
          <input
            id="explore-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, tags, model, prompt text…"
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="rounded-xl bg-gradient-to-r from-accent-violet to-accent-blue px-5 py-3 text-sm font-semibold text-white focus-ring"
        >
          Search
        </button>
        <button
          type="button"
          onClick={() => setMobileFiltersOpen((o) => !o)}
          aria-expanded={mobileFiltersOpen}
          className="sm:hidden inline-flex items-center justify-center rounded-xl border border-border px-3 text-muted focus-ring"
          aria-label="Toggle filters"
        >
          <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
        </button>
      </form>

      <div
        className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center ${
          mobileFiltersOpen ? "flex" : "hidden sm:flex"
        }`}
      >
        <div>
          <label htmlFor="filter-category" className="sr-only">
            Filter by category
          </label>
          <select
            id="filter-category"
            value={category}
            onChange={(e) =>
              updateParams({ category: e.target.value || null })
            }
            className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground focus-ring"
          >
            <option value="">All categories</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="filter-model" className="sr-only">
            Filter by AI model
          </label>
          <select
            id="filter-model"
            value={model}
            onChange={(e) => updateParams({ model: e.target.value || null })}
            className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground focus-ring"
          >
            <option value="">All models</option>
            {allModels.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="filter-sort" className="sr-only">
            Sort prompts
          </label>
          <select
            id="filter-sort"
            value={sort}
            onChange={(e) => updateParams({ sort: e.target.value })}
            className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground focus-ring"
          >
            {sortOptions.map((s) => (
              <option key={s.value} value={s.value}>
                Sort: {s.label}
              </option>
            ))}
          </select>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearAll}
            className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-foreground focus-ring"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
            Clear filters
          </button>
        )}

        {isPending && (
          <span className="text-xs text-muted" role="status">
            Updating…
          </span>
        )}
      </div>
    </div>
  );
}
