import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock3, Mail, MessageCircle, Sparkles } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Visour team. Send feedback, report an issue, or let us know how we can improve.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[550px] w-[750px] -translate-x-1/2 rounded-full bg-accent-violet/20 blur-[130px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute top-[600px] -right-40 h-[450px] w-[450px] rounded-full bg-accent-cyan/10 blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-0 -left-40 h-[350px] w-[350px] rounded-full bg-accent-pink/10 blur-[110px]"
        aria-hidden="true"
      />

      {/* Hero */}
      <section className="relative px-5 pb-10 pt-20 sm:px-8 sm:pt-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur-xl">
              <Sparkles
                className="h-3.5 w-3.5 text-accent-cyan"
                aria-hidden="true"
              />
              We&apos;d love to hear from you
            </div>

            <h1 className="mt-7 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Have something
              <br />
              <span className="gradient-text">to tell us?</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Found something that needs fixing, have an idea for Visour, or
              simply want to share some feedback? Drop us a message.
            </p>
          </div>
        </div>
      </section>

      {/* Contact area */}
      <section className="relative px-5 pb-24 pt-12 sm:px-8 lg:pb-32 lg:pt-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          {/* Info panel */}
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-accent-violet/15 via-surface/70 to-accent-cyan/10 p-7 backdrop-blur-xl sm:p-8">
            <div
              className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent-violet/20 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-violet/30 to-accent-cyan/20 ring-1 ring-white/10">
                <Mail
                  className="h-5 w-5 text-accent-cyan"
                  aria-hidden="true"
                />
              </div>

              <h2 className="mt-7 font-display text-2xl font-bold">
                Let&apos;s talk.
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted">
                Whether it&apos;s a bug, feedback, suggestion, or something
                else, your message helps us make Visour better.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-background/30 p-4">
                  <MessageCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent-cyan"
                    aria-hidden="true"
                  />

                  <div>
                    <p className="text-sm font-semibold">Feedback</p>
                    <p className="mt-1 text-xs leading-5 text-muted">
                      Tell us what you like, what could be better, or what you
                      would love to see next.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-border bg-background/30 p-4">
                  <Clock3
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent-cyan"
                    aria-hidden="true"
                  />

                  <div>
                    <p className="text-sm font-semibold">Need a fix?</p>
                    <p className="mt-1 text-xs leading-5 text-muted">
                      Found a broken prompt, image, link, or feature? Let us
                      know what happened.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="text-xs leading-5 text-muted">
                  We read every message and use feedback to improve the
                  experience.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent-violet/10 via-transparent to-accent-cyan/10 blur-xl" />

            <div className="relative rounded-[2rem] border border-border bg-surface/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan">
                  Contact form
                </p>

                <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                  Send us a message
                </h2>

                <p className="mt-2 text-sm leading-6 text-muted">
                  A few details and we&apos;ll know how to help.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm text-muted">
            Looking for prompts instead?
          </p>

          <Link
            href="/explore"
            className="group mt-3 inline-flex items-center gap-2 font-display text-xl font-bold transition-colors hover:text-accent-cyan"
          >
            Explore Visour

            <ArrowRight
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}