"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight } from "lucide-react";

const suggestions = [
  "cinematic",
  "portrait",
  "cyberpunk",
  "anime",
  "fashion",
  "fantasy",
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/explore?q=${encodeURIComponent(q)}` : "/explore");
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      <form onSubmit={handleSubmit} role="search" className="relative">
        <label htmlFor="hero-search" className="sr-only">
          Search AI image prompts
        </label>
        <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface/80 px-5 py-4 shadow-2xl shadow-black/40 backdrop-blur-md transition-colors focus-within:border-accent-cyan/50">
          <Search className="h-5 w-5 shrink-0 text-muted" aria-hidden="true" />
          <input
            id="hero-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search “moody cinematic portrait”, “cyberpunk city”…"
            className="w-full bg-transparent text-base text-foreground placeholder:text-muted focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Search"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-accent-violet to-accent-blue text-white transition-transform hover:scale-105 focus-ring"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </form>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <span className="text-xs text-muted">Popular:</span>
        {suggestions.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => router.push(`/explore?q=${encodeURIComponent(s)}`)}
            className="rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent-cyan/40 hover:text-foreground focus-ring"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
