import Link from "next/link";
import { Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
      <p className="font-display text-7xl font-extrabold gradient-text">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
        This page drifted out of frame.
      </h1>
      <p className="mt-3 text-muted">
        We couldn&apos;t find the page you were looking for. It may have been
        moved, or the link might be broken.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-violet to-accent-blue px-5 py-2.5 text-sm font-semibold text-white focus-ring"
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          Back home
        </Link>
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent-cyan/40 focus-ring"
        >
          <Compass className="h-4 w-4" aria-hidden="true" />
          Explore prompts
        </Link>
      </div>
    </div>
  );
}
