import Link from "next/link";
import { Sparkles } from "lucide-react";
import { categories } from "@/lib/data/categories";

const columns = [
  {
    title: "Categories",
    links: [
      { href: "/explore?category=portrait", label: "Portrait" },
      { href: "/explore?category=cinematic", label: "Cinematic" },
      { href: "/explore?category=fashion", label: "Fashion" },
      { href: "/explore?category=lifestyle", label: "Lifestyle" },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/explore?sort=latest", label: "Latest" },
      { href: "/explore?sort=popular", label: "Popular" },
      { href: "/explore", label: "All Prompts" },
      { href: "/categories", label: "All Categories" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-xl font-bold tracking-tight focus-ring"
            >
              <div className="hidden min-[300px]:inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-violet to-accent-cyan shadow-md shadow-accent-violet/30">
                <Sparkles className="h-4 w-4 text-white" strokeWidth={2.5} />
              </div>
              <h1>
                Visour<span className="gradient-text">AI</span>
              </h1>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Discover high-quality AI image prompts, find the one that fits
              your idea, copy it, and create with the AI tool you already use.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground focus-ring"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} VISOUR by Farhan Innovation &amp;
            Technology (FIT). All rights reserved.
          </p>
          <p>Prompts are for use with third-party AI image generators.</p>
        </div>
      </div>
    </footer>
  );
}
