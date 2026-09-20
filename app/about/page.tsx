"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardCopy,
  Compass,
  Layers3,
  Palette,
  Sparkles,
  Wand2,
} from "lucide-react";

const categories = [
  {
    title: "Portrait",
    description:
      "People, characters, expressions, and striking visual portraits.",
    href: "/explore?category=portrait",
    className: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    title: "Cinematic",
    description:
      "Atmosphere, dramatic lighting, storytelling, and film-inspired scenes.",
    href: "/explore?category=cinematic",
    className: "from-cyan-500/20 via-blue-500/10 to-transparent",
  },
  {
    title: "Fashion",
    description:
      "Editorial looks, styling, beauty, and creative fashion concepts.",
    href: "/explore?category=fashion",
    className: "from-pink-500/20 via-fuchsia-500/10 to-transparent",
  },
  {
    title: "Lifestyle",
    description:
      "Everyday moments, interiors, travel, food, and modern living.",
    href: "/explore?category=lifestyle",
    className: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
];

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Discover",
    description: "Explore prompts by style, category, or visual direction.",
  },
  {
    number: "02",
    icon: ClipboardCopy,
    title: "Copy",
    description: "Open a prompt you like and copy it in one click.",
  },
  {
    number: "03",
    icon: Wand2,
    title: "Create",
    description: "Take the prompt into your workflow and start creating.",
  },
];

const audiences = [
  {
    title: "Creators",
    text: "Find fresh visual ideas for content, personal projects, and creative experiments.",
  },
  {
    title: "Designers",
    text: "Explore visual directions for concepts, campaigns, moodboards, and presentations.",
  },
  {
    title: "AI Explorers",
    text: "Discover styles and ideas you might not have thought to try yourself.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-48 left-1/2 h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-accent-violet/20 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-[750px] -left-48 h-[500px] w-[500px] rounded-full bg-accent-cyan/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-[1500px] -right-48 h-[550px] w-[550px] rounded-full bg-accent-pink/10 blur-[130px]"
        aria-hidden="true"
      />
      
      {/* HERO */}
      <section className="relative px-5 pb-24 pt-20 sm:px-8 sm:pt-28 lg:pb-32 lg:pt-36">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur-xl"
          >
            <Sparkles
              className="h-3.5 w-3.5 text-accent-cyan"
              aria-hidden="true"
            />
            Built for visual discovery
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mx-auto mt-7 max-w-5xl font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl"
          >
            Find ideas.
            <br />
            <span className="gradient-text">Create something</span>
            <br />
            worth seeing.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-muted"
          >
            Visour is a curated space for discovering AI image prompts,
            exploring visual styles, and finding the right starting point for
            your next idea.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            <Link
              href="/explore"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-violet to-accent-blue px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-accent-violet/20 transition-all hover:-translate-y-0.5 hover:shadow-accent-violet/30 focus-ring"
            >
              Explore Prompts
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/categories"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold backdrop-blur-xl transition-all hover:bg-surface focus-ring"
            >
              Browse Categories
            </Link>
          </motion.div>
        </div>

        {/* Hero visual panel */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto mt-16 max-w-6xl"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-accent-violet/20 via-accent-cyan/10 to-accent-pink/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface/70 p-4 shadow-2xl backdrop-blur-xl sm:p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-violet-500/20 via-surface to-background p-6">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />
                <Sparkles
                  className="relative h-6 w-6 text-violet-300"
                  aria-hidden="true"
                />
                <p className="relative mt-16 text-sm text-muted">Discover</p>

                <p className="relative mt-1 font-display text-xl font-bold">
                  New visual ideas
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-cyan-500/20 via-surface to-background p-6">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />
                <Layers3
                  className="relative h-6 w-6 text-cyan-300"
                  aria-hidden="true"
                />
                <p className="relative mt-16 text-sm text-muted">Explore</p>
                <p className="relative mt-1 font-display text-xl font-bold">
                  Different styles
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-pink-500/20 via-surface to-background p-6">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-pink-500/20 blur-3xl" />
                <Palette
                  className="relative h-6 w-6 text-pink-300"
                  aria-hidden="true"
                />
                <p className="relative mt-16 text-sm text-muted">Create</p>
                <p className="relative mt-1 font-display text-xl font-bold">
                  Your own direction
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* WHY VISOUR */}
      <section className="relative px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
              Why Visour
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Inspiration should be easier <span className="gradient-text">to find</span>.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] border border-border bg-surface/60 p-8 backdrop-blur-xl sm:p-10"
          >
            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent-violet/20 blur-3xl" />

            <div className="relative">
              <p className="text-lg leading-8 text-foreground/90">
                There are endless ways to create with AI. The hard part is often
                finding an idea that gives you somewhere to begin.
              </p>

              <p className="mt-5 leading-7 text-muted">
                Visour brings useful prompts and visual directions together so
                you can spend less time searching and more time exploring what
                you could create.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Ideas", "Styles", "Prompts", "Inspiration"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background/50 px-4 py-2 text-xs font-medium text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="relative px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
                Explore
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Find your visual direction.
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-muted">
                Start with a style, a mood, or simply something that catches
                your eye.
              </p>
            </div>
            <Link
              href="/categories"
              className="group inline-flex items-center gap-2 text-sm font-semibold"
            >
              View all categories
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <Link
                  href={category.href}
                  className={`group relative block min-h-[220px] overflow-hidden rounded-[1.75rem] border border-border bg-gradient-to-br ${category.className} p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20`}
                >
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/[0.03] blur-2xl transition-transform duration-500 group-hover:scale-125" />

                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <span className="rounded-full border border-border bg-background/30 px-3 py-1 text-[11px] font-medium text-muted backdrop-blur-sm">
                        0{index + 1}
                      </span>

                      <ArrowUpRight
                        className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="mt-16">
                      <h3 className="font-display text-2xl font-bold">
                        {category.title}
                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-6 text-muted">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="relative px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
              How it works
            </p>

            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              From idea to image.
            </h2>

            <p className="mt-4 leading-7 text-muted">
              A simple flow for finding something you want to create.
            </p>
          </div>

          <div className="relative mt-14 grid gap-5 md:grid-cols-3">
            <div
              className="pointer-events-none absolute left-[16%] right-[16%] top-14 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
              aria-hidden="true"
            />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-[1.75rem] border border-border bg-surface/60 p-7 backdrop-blur-xl"
              >
                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.25em] text-muted">
                    {step.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet/20 to-accent-cyan/20">
                    <step.icon
                      className="h-5 w-5 text-accent-cyan"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <h3 className="mt-8 font-display text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="relative px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-accent-violet/10 via-surface/70 to-accent-cyan/10 p-8 backdrop-blur-xl sm:p-12 lg:p-14">
            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent-violet/15 blur-[90px]" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
                  Built for your workflow
                </p>

                <h2 className="mt-4 max-w-xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  Find a prompt.
                  <br />
                  <span className="gradient-text">Take it anywhere.</span>
                </h2>

                <p className="mt-5 max-w-xl leading-7 text-muted">
                  Explore prompts here, then use them with the AI image tools
                  that fit your workflow.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {["Midjourney", "FLUX", "DALL·E", "Gemini"].map((tool) => (
                  <div
                    key={tool}
                    className="rounded-2xl border border-border bg-background/40 p-5 backdrop-blur-sm transition-colors hover:bg-background/60"
                  >
                    <p className="font-display text-lg font-semibold">{tool}</p>

                    <p className="mt-1 text-xs text-muted">AI image creation</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="relative px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
              Who it&apos;s for
            </p>

            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Made for people who create.
            </h2>

            <p className="mt-4 leading-7 text-muted">
              Different workflows, same need: a good idea to start with.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {audiences.map((audience, index) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-[1.75rem] border border-border bg-surface/60 p-7 backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-surface"
              >
                <span className="font-mono text-xs tracking-[0.2em] text-muted">
                  0{index + 1}
                </span>

                <h3 className="mt-12 font-display text-2xl font-bold">
                  {audience.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {audience.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="relative px-5 py-24 sm:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-border bg-background p-8 text-center sm:p-12 lg:p-20"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-accent-violet/15 via-transparent to-accent-cyan/15"
            aria-hidden="true"
          />

          <div
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-violet/10 blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
              Our vision
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Make visual inspiration
              <br />
              <span className="gradient-text">easier to discover.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-7 text-muted">
              Visour is built around a simple idea: when good prompts are
              easier to discover, more people can turn ideas into something
              visual.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {["Discover", "Explore", "Copy", "Create"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-xs font-medium text-muted backdrop-blur-sm"
                >
                  <Check
                    className="h-3.5 w-3.5 text-accent-cyan"
                    aria-hidden="true"
                  />

                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative px-5 pb-28 pt-12 sm:px-8 lg:pb-36">
        <div className="relative mx-auto max-w-4xl text-center">
          <div
            className="absolute left-1/2 top-1/2 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-violet/15 blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative">
            <Sparkles
              className="mx-auto h-7 w-7 text-accent-cyan"
              aria-hidden="true"
            />

            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Your next idea is
              <br />
              <span className="gradient-text">somewhere in here.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-muted">
              Explore the collection and find a prompt worth creating with.
            </p>

            <Link
              href="/explore"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-violet to-accent-blue px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-accent-violet/20 transition-all hover:-translate-y-0.5 hover:shadow-accent-violet/30 focus-ring"
            >
              Explore Prompts
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            <p className="mt-8 text-xs text-muted">
              Visour — A product by Farhan Innovation &amp; Technology (FIT)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
