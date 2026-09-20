"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, Search, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/explore", label: "Explore" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    setSearchOpen(false);
    setMobileOpen(false);
    router.push(q ? `/explore?q=${encodeURIComponent(q)}` : "/explore");
  }

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-xl font-bold tracking-tight focus-ring"
            onClick={() => setMobileOpen(false)}
          >
            {/* <Sparkles className="h-5 w-5" aria-hidden="true" /> */}
            <div className="hidden min-[300px]:inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-violet to-accent-cyan shadow-md shadow-accent-violet/30">
              <Sparkles className="h-4 w-4 text-white" strokeWidth={2.5} />
            </div>
            <h1>
              Visour<span className="gradient-text">AI</span>
            </h1>
          </Link>

          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground focus-ring"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen((s) => !s)}
              aria-expanded={searchOpen}
              aria-label="Toggle search"
              className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-foreground hover:border-foreground/30 focus-ring"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
            </button>

            <Link
              href="/explore"
              className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-accent-violet to-accent-blue px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-accent-violet/20 transition-transform hover:scale-[1.03] focus-ring"
            >
              Start exploring
            </Link>

            <button
              type="button"
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground focus-ring"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {searchOpen && (
            <motion.form
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleSearchSubmit}
              className="hidden md:block overflow-hidden"
              role="search"
            >
              <div className="pb-4">
                <label htmlFor="header-search" className="sr-only">
                  Search prompts
                </label>
                <input
                  id="header-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for cinematic, portrait, cyberpunk…"
                  autoFocus
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus-ring"
                />
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-border bg-surface"
          >
            <div className="px-5 py-5 flex flex-col gap-5">
              <form onSubmit={handleSearchSubmit} role="search">
                <label htmlFor="mobile-search" className="sr-only">
                  Search prompts
                </label>
                <div className="flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-3 py-2.5">
                  <Search
                    className="h-4 w-4 text-muted shrink-0"
                    aria-hidden="true"
                  />
                  <input
                    id="mobile-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search prompts…"
                    className="w-full bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
                  />
                </div>
              </form>
              <nav
                className="flex flex-col gap-1"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-foreground/90 hover:bg-surface-2 focus-ring"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/explore"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent-violet to-accent-blue px-4 py-3 text-sm font-semibold text-white focus-ring"
              >
                Start exploring
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
