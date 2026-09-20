import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Lightbulb,
  Sparkles,
  Tag as TagIcon,
} from "lucide-react";

import {
  prompts,
  getPromptBySlug,
  getRelatedPrompts,
} from "@/lib/data/prompts";
import { getCategoryBySlug } from "@/lib/data/categories";

import CopyButton from "@/components/CopyButton";
import ModelBadge from "@/components/ModelBadge";
import PromptGrid from "@/components/PromptGrid";
import PromptTextBlock from "@/components/PromptTextBlock";
import PromptViewTracker from "@/components/PromptViewTracker";
import Tag from "@/components/Tag";

interface PromptPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return prompts.map((prompt) => ({
    slug: prompt.slug,
  }));
}

export async function generateMetadata({
  params,
}: PromptPageProps): Promise<Metadata> {
  const { slug } = await params;
  const prompt = getPromptBySlug(slug);

  if (!prompt) {
    return {};
  }

  return {
    title: `${prompt.title} — Visour`,
    description: prompt.description,
    alternates: {
      canonical: `/prompt/${slug}`,
    },
    openGraph: {
      title: `${prompt.title} — Visour`,
      description: prompt.description,
      url: `/prompt/${slug}`,
      type: "article",
      images: [
        {
          url: prompt.image,
          width: 1200,
          height: 1500,
          alt: prompt.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${prompt.title} — Visour`,
      description: prompt.description,
      images: [prompt.image],
    },
  };
}

export default async function PromptDetailPage({
  params,
}: PromptPageProps) {
  const { slug } = await params;

  const prompt = getPromptBySlug(slug);

  if (!prompt) {
    notFound();
  }

  const category = getCategoryBySlug(prompt.category);
  const relatedPrompts = getRelatedPrompts(prompt, 4);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="glow -top-52 left-1/2 h-[560px] w-[800px] -translate-x-1/2 bg-accent-violet/20" />
        <div className="glow top-[520px] -left-48 h-[450px] w-[450px] bg-accent-cyan/10" />
        <div className="glow top-[900px] right-[-160px] h-[450px] w-[450px] bg-accent-pink/10" />
      </div>

      <PromptViewTracker
        promptId={prompt.id}
        promptTitle={prompt.title}
      />

      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 overflow-hidden text-sm text-muted"
        >
          <Link
            href="/"
            className="shrink-0 transition-colors hover:text-foreground focus-ring"
          >
            Home
          </Link>

          <ChevronRight
            className="h-3.5 w-3.5 shrink-0"
            aria-hidden="true"
          />

          <Link
            href="/explore"
            className="shrink-0 transition-colors hover:text-foreground focus-ring"
          >
            Explore
          </Link>

          {category && (
            <>
              <ChevronRight
                className="h-3.5 w-3.5 shrink-0"
                aria-hidden="true"
              />

              <Link
                href={`/categories/${category.slug}`}
                className="shrink-0 transition-colors hover:text-foreground focus-ring"
              >
                {category.name}
              </Link>
            </>
          )}

          <ChevronRight
            className="h-3.5 w-3.5 shrink-0"
            aria-hidden="true"
          />

          <span className="truncate text-foreground/75">
            {prompt.title}
          </span>
        </nav>

        {/* Main prompt area */}
        <section className="mt-8 grid gap-10 lg:grid-cols-[1.08fr_1fr] lg:gap-12">
          {/* Image */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl shadow-black/10">
              <Image
                src={prompt.image}
                alt={prompt.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.015]"
              />

              {/* Image overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"
                aria-hidden="true"
              />

              {/* Category */}
              {category && (
                <Link
                  href={`/categories/${category.slug}`}
                  className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:bg-black/50 focus-ring"
                >
                  {category.name}
                </Link>
              )}

              {/* Bottom image info */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md">
                  <Sparkles
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  />
                  Prompt example
                </div>

                <div className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs text-white/90 backdrop-blur-md">
                  {prompt.models.join(" · ")}
                </div>
              </div>
            </div>

            {/* Image caption */}
            <p className="mt-3 text-xs leading-5 text-muted">
              Example visual created using the prompt above.
            </p>
          </div>

          {/* Details */}
          <div>
            {/* Category */}
            {category && (
              <Link
                href={`/categories/${category.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan transition-colors hover:text-foreground focus-ring"
              >
                {category.name}
                <ArrowRight
                  className="h-3 w-3"
                  aria-hidden="true"
                />
              </Link>
            )}

            {/* Title */}
            <h1 className="mt-2 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              {prompt.title}
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {prompt.description}
            </p>

            {/* Models */}
            <div className="mt-7">
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Compatible AI models
              </h2>

              <div className="mt-3 flex flex-wrap gap-2">
                {prompt.models.map((model) => (
                  <ModelBadge
                    key={model}
                    label={model}
                  />
                ))}
              </div>
            </div>

            {/* Prompt */}
            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between gap-4">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                  Prompt
                </h2>

                <span className="shrink-0 text-xs text-muted">
                  {prompt.prompt.length.toLocaleString()} characters
                </span>
              </div>

              <PromptTextBlock
                text={prompt.prompt}
                previewLength={520}
              />

              <CopyButton
                text={prompt.prompt}
                promptId={prompt.id}
                promptTitle={prompt.title}
                className="mt-4 w-full"
              />
            </div>

            {/* Tags */}
            {prompt.tags.length > 0 && (
              <div className="mt-8">
                <h2 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  <TagIcon
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  />
                  Tags
                </h2>

                <div className="flex flex-wrap gap-2">
                  {prompt.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/explore?q=${encodeURIComponent(tag)}`}
                      className="focus-ring"
                    >
                      <Tag label={tag} />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Prompt tip */}
            {prompt.tips && (
              <div className="mt-7 rounded-2xl border border-accent-violet/20 bg-accent-violet/5 p-5">
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent-violet/20 bg-accent-violet/10">
                    <Lightbulb
                      className="h-4 w-4 text-accent-violet"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h2 className="text-sm font-semibold text-accent-violet">
                      Prompt tip
                    </h2>

                    <p className="mt-1.5 text-sm leading-6 text-muted">
                      {prompt.tips}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Related prompts */}
        {relatedPrompts.length > 0 && (
          <section className="mt-20 border-t border-border pt-14">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-violet">
                  Keep exploring
                </p>

                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  Related prompts
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-muted sm:text-base">
                  More prompts with a similar visual direction to explore.
                </p>
              </div>

              <Link
                href="/explore"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent-cyan focus-ring"
              >
                Explore all prompts
                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <div className="mt-7">
              <PromptGrid prompts={relatedPrompts} />
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="relative mt-20 overflow-hidden rounded-3xl border border-border bg-surface/60 px-6 py-12 text-center backdrop-blur-xl sm:px-10">
          <div
            className="glow -top-40 left-1/2 h-[300px] w-[520px] -translate-x-1/2 bg-accent-violet/15"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/60">
              <Sparkles
                className="h-5 w-5 text-accent-violet"
                aria-hidden="true"
              />
            </div>

            <h2 className="mt-5 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Your next idea starts here.
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-muted sm:text-base">
              Explore the Visour prompt library and find another direction
              for your next image.
            </p>

            <Link
              href="/explore"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-violet to-accent-blue px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-violet/20 transition-all hover:scale-[1.02] focus-ring"
            >
              Explore prompts
              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}