import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-surface p-10 text-center sm:p-16">
        <div
          className="glow left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-accent-indigo/25"
          aria-hidden="true"
        />
        <div className="relative">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Your next great image starts with the{" "}
            <span className="gradient-text">right words.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Explore curated AI image prompts across different visual styles, and find the one that fits your idea.
          </p>
          <Link
            href="/explore"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-violet to-accent-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-violet/25 transition-transform hover:scale-[1.03] focus-ring"
          >
            Explore all prompts
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
