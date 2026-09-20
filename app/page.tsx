import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import PromptGrid from "@/components/PromptGrid";
import CategoryGrid from "@/components/CategoryGrid";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import { getFeaturedPrompts } from "@/lib/data/prompts";

export default function HomePage() {
  const featured = getFeaturedPrompts().slice(0, 8);

  return (
    <>
      <Hero />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Handpicked"
              title="Featured prompts"
              description="Explore a selection of prompts picked to inspire your next image."
            />
            <Link
              href="/explore"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-cyan hover:underline focus-ring"
            >
              View all
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10">
            <PromptGrid prompts={featured} />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Browse"
              title="Explore by category"
              description="Find prompts by style, mood, and the kind of image you want to create."
            />
            <Link
              href="/categories"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-cyan hover:underline focus-ring"
            >
              All categories
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10">
            <CategoryGrid limit={6} />
          </div>
        </div>
      </section>

      <HowItWorks />
      <CTASection />
    </>
  );
}
