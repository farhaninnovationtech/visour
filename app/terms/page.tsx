import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  FileText,
  Gavel,
  Globe,
  Lock,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the Terms of Use governing access to and use of the Visour website and its content.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  { id: "acceptance", number: "01", title: "Acceptance of Terms" },
  { id: "website", number: "02", title: "Using Visour" },
  { id: "prompts", number: "03", title: "Prompts & Content" },
  { id: "ai-output", number: "04", title: "AI-Generated Images" },
  { id: "intellectual", number: "05", title: "Intellectual Property" },
  { id: "acceptable", number: "06", title: "Acceptable Use" },
  { id: "third-party", number: "07", title: "Third-Party Services" },
  { id: "availability", number: "08", title: "Availability & Changes" },
  { id: "disclaimer", number: "09", title: "Disclaimer" },
  { id: "liability", number: "10", title: "Limitation of Liability" },
  { id: "changes", number: "11", title: "Changes to These Terms" },
  { id: "law", number: "12", title: "Governing Law" },
  { id: "contact", number: "13", title: "Contact Us" },
];

function SectionHeading({
  number,
  title,
  icon: Icon,
}: {
  number: string;
  title: string;
  icon: React.ElementType;
}) {
  return (
    <div className="mb-6 flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface">
        <Icon className="h-4 w-4 text-accent-violet" />
      </div>

      <div>
        <div className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-violet">
          {number}
        </div>

        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

function PolicySection({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-border/70 py-10 last:border-0"
    >
      {children}
    </section>
  );
}

export default function TermsPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[750px]"
        aria-hidden="true"
      >
        <div className="glow -left-40 -top-40 h-[420px] w-[420px] bg-accent-violet/20" />
        <div className="glow right-[-120px] top-20 h-[420px] w-[420px] bg-accent-cyan/15" />
        <div className="glow left-1/2 top-[340px] h-[350px] w-[350px] -translate-x-1/2 bg-accent-pink/10" />
      </div>

      {/* Hero */}
      <section className="relative px-5 pb-14 pt-16 sm:px-8 sm:pt-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_340px]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur">
                <Scale className="h-3.5 w-3.5 text-accent-violet" />
                Terms of Use
              </div>

              <h1 className="max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
                Clear rules for
                <br />
                <span className="gradient-text">using Visour.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                These terms explain the rules for using Visour and the
                responsibilities that come with using the website and its
                content.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/70 p-6 shadow-2xl shadow-accent-violet/5 backdrop-blur-xl">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-violet/15 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-violet to-accent-cyan shadow-lg shadow-accent-violet/20">
                  <Gavel className="h-5 w-5 text-white" />
                </div>

                <p className="text-sm font-semibold">
                  Simple, transparent terms.
                </p>

                <p className="mt-2 text-sm leading-6 text-muted">
                  Please read these terms before using Visour so you understand
                  how the website and its content may be used.
                </p>

                <div className="mt-5 border-t border-border pt-4 text-xs text-muted">
                  Last updated: september 19, 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="relative px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
          {/* Table of contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-border bg-surface/60 p-4 backdrop-blur-xl">
              <div className="mb-4 px-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                On this page
              </div>

              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-center justify-between rounded-xl px-2 py-2 text-xs text-muted transition-colors hover:bg-surface hover:text-foreground"
                  >
                    <span>{section.title}</span>
                    <ChevronRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Terms */}
          <article className="rounded-3xl border border-border bg-surface/50 px-6 shadow-2xl shadow-black/5 backdrop-blur-xl sm:px-10">
            {/* Intro */}
            <div className="border-b border-border/70 py-10">
              <div className="rounded-2xl border border-border bg-background/50 p-5">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-violet/10">
                    <FileText className="h-4 w-4 text-accent-violet" />
                  </div>

                  <div className="text-sm leading-7 text-muted">
                    <p>
                      Welcome to Visour. These Terms and Conditions govern
                      your access to and use of the Visour website.
                    </p>

                    <p className="mt-3">
                      By accessing or using Visour, you agree to these Terms.
                      If you do not agree with any part of these Terms, please
                      do not use the website.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-muted">
                Visour provides prompts and creative resources for informational
                and creative purposes. AI-generated results can vary
                significantly depending on the model, platform, settings, and
                other factors.
              </p>
            </div>

            <PolicySection id="acceptance">
              <SectionHeading
                number="01"
                title="Acceptance of Terms"
                icon={Scale}
              />

              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  By visiting or using Visour, you confirm that you have read,
                  understood, and agree to be bound by these Terms and our
                  Privacy Policy.
                </p>

                <p>
                  If you are using Visour on behalf of another person or
                  organization, you confirm that you have the authority to
                  accept these Terms on their behalf.
                </p>
              </div>
            </PolicySection>

            <PolicySection id="website">
              <SectionHeading
                number="02"
                title="Using Visour"
                icon={Search}
              />

              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  Visour provides a searchable and curated collection of AI
                  image prompts intended to help users explore ideas and
                  create visual content.
                </p>

                <p>
                  You may browse the website and use its available features
                  for lawful purposes and in accordance with these Terms.
                </p>

                <p>
                  Visour does not currently require user accounts to access
                  its public prompt library.
                </p>
              </div>
            </PolicySection>

            <PolicySection id="prompts">
              <SectionHeading
                number="03"
                title="Prompts & Content"
                icon={BookOpen}
              />

              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  Visour publishes AI image prompts covering different
                  subjects, styles, categories, and creative directions.
                </p>

                <p>
                  Prompts are provided as creative starting points. We do not
                  guarantee that a prompt will produce a particular image,
                  style, composition, quality, or result on any AI platform.
                </p>

                <p>
                  AI models can interpret the same prompt differently based on
                  their model version, parameters, safety systems, settings,
                  and other factors.
                </p>

                <p>
                  Visour may edit, update, reorganize, replace, or remove
                  prompts and other website content at any time.
                </p>
              </div>
            </PolicySection>

            <PolicySection id="ai-output">
              <SectionHeading
                number="04"
                title="AI-Generated Images"
                icon={Sparkles}
              />

              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  Visour does not directly generate images through an AI API.
                  Prompts may be used with third-party AI image generation
                  platforms at the user's discretion.
                </p>

                <p>
                  Any image generated from a Visour prompt is created through
                  the third-party platform selected by the user. The terms,
                  licenses, restrictions, and policies of that platform may
                  apply to the resulting image.
                </p>

                <p>
                  You are responsible for determining whether your intended
                  use of an AI-generated image complies with applicable laws,
                  platform rules, intellectual property rights, publicity
                  rights, privacy rights, and other applicable restrictions.
                </p>

                <p>
                  Visour does not guarantee that any generated image is free
                  from third-party rights or suitable for a particular
                  commercial or personal use.
                </p>
              </div>
            </PolicySection>

            <PolicySection id="intellectual">
              <SectionHeading
                number="05"
                title="Intellectual Property"
                icon={Lock}
              />

              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  Unless otherwise stated, the Visour website, including its
                  branding, interface, original written content, design
                  elements, and organization of content, is owned by or
                  licensed to Visour.
                </p>

                <p>
                  You may use Visour prompts as creative inputs for your own
                  projects, subject to these Terms and any applicable rights or
                  restrictions associated with the resulting content.
                </p>

                <p>
                  You may not copy, reproduce, republish, scrape, mirror, or
                  redistribute a substantial portion of the Visour library for
                  the purpose of creating a competing prompt database or
                  service without permission.
                </p>

                <p>
                  Third-party names, trademarks, logos, and AI platforms
                  mentioned on Visour remain the property of their respective
                  owners.
                </p>
              </div>
            </PolicySection>

            <PolicySection id="acceptable">
              <SectionHeading
                number="06"
                title="Acceptable Use"
                icon={ShieldCheck}
              />

              <div className="space-y-5 text-sm leading-7 text-muted">
                <p>
                  You agree not to use Visour in a way that violates
                  applicable laws or interferes with the operation or security
                  of the website.
                </p>

                <p>Prohibited activities include:</p>

                <ul className="space-y-3">
                  {[
                    "Attempting to gain unauthorized access to the website, servers, or systems",
                    "Scraping or harvesting substantial amounts of content for unauthorized redistribution",
                    "Introducing malicious code, malware, or harmful software",
                    "Attempting to disrupt, overload, or compromise the website",
                    "Using the website for fraudulent or unlawful activities",
                    "Circumventing technical restrictions or security mechanisms",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-xl border border-border bg-background/50 p-4"
                    >
                      <span className="mt-1 text-accent-violet">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p>
                  We may restrict or terminate access to the website if we
                  reasonably believe these Terms are being violated.
                </p>
              </div>
            </PolicySection>

            <PolicySection id="third-party">
              <SectionHeading
                number="07"
                title="Third-Party Services"
                icon={Globe}
              />

              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  Visour may link to or reference third-party websites, AI
                  platforms, advertising services, analytics providers, or
                  other external services.
                </p>

                <p>
                  These services are operated independently from Visour. Their
                  availability, content, policies, pricing, licenses, and
                  terms are outside our control.
                </p>

                <p>
                  Your use of third-party services is subject to the terms and
                  policies of those services.
                </p>
              </div>
            </PolicySection>

            <PolicySection id="availability">
              <SectionHeading
                number="08"
                title="Availability & Changes"
                icon={Sparkles}
              />

              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  We aim to keep Visour available and functional, but we do
                  not guarantee that the website will always be available,
                  uninterrupted, secure, or error-free.
                </p>

                <p>
                  Features, prompts, categories, search functionality, and
                  other parts of the website may be changed, suspended, or
                  removed without prior notice.
                </p>

                <p>
                  We may also perform maintenance or updates that temporarily
                  affect availability.
                </p>
              </div>
            </PolicySection>

            <PolicySection id="disclaimer">
              <SectionHeading
                number="09"
                title="Disclaimer"
                icon={TriangleAlert}
              />

              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  Visour is provided on an “as is” and “as available” basis
                  to the extent permitted by applicable law.
                </p>

                <p>
                  We make no warranties that the information, prompts, website
                  functionality, or results obtained through the website will
                  always be accurate, complete, reliable, suitable, or
                  available.
                </p>

                <p>
                  In particular, we do not guarantee any specific result from
                  using a prompt with an AI image generation platform.
                </p>

                <p>
                  You are responsible for evaluating whether any prompt,
                  generated content, or resulting image is appropriate for
                  your intended use.
                </p>
              </div>
            </PolicySection>

            <PolicySection id="liability">
              <SectionHeading
                number="10"
                title="Limitation of Liability"
                icon={Scale}
              />

              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  To the maximum extent permitted by applicable law, Visour and
                  its operators will not be liable for indirect, incidental,
                  special, consequential, or similar damages arising from your
                  use of or inability to use the website.
                </p>

                <p>
                  This includes, where applicable, losses relating to
                  generated images, third-party AI services, business
                  decisions, content use, service interruptions, or
                  unauthorized access resulting from circumstances outside our
                  reasonable control.
                </p>

                <p>
                  Nothing in these Terms is intended to exclude or limit
                  liability where doing so would be prohibited by applicable
                  law.
                </p>
              </div>
            </PolicySection>

            <PolicySection id="changes">
              <SectionHeading
                number="11"
                title="Changes to These Terms"
                icon={FileText}
              />

              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  We may update these Terms as Visour develops, new features
                  are introduced, or legal and operational requirements
                  change.
                </p>

                <p>
                  Updated Terms will be published on this page with a revised
                  “Last updated” date.
                </p>

                <p>
                  Your continued use of Visour after changes are published
                  means that you accept the updated Terms to the extent
                  permitted by applicable law.
                </p>
              </div>
            </PolicySection>

            <PolicySection id="law">
              <SectionHeading
                number="12"
                title="Governing Law"
                icon={Gavel}
              />

              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  These Terms are intended to be interpreted in accordance
                  with applicable laws governing Visour and its operation.
                </p>

                <p>
                  Any dispute arising from the use of Visour should first be
                  addressed by contacting us so that we can attempt to resolve
                  the matter directly.
                </p>

                <p>
                  The specific governing law and jurisdiction may depend on
                  the circumstances and applicable legal requirements.
                </p>
              </div>
            </PolicySection>

            <PolicySection id="contact">
              <SectionHeading
                number="13"
                title="Contact Us"
                icon={Users}
              />

              <div className="space-y-5 text-sm leading-7 text-muted">
                <p>
                  If you have questions about these Terms or the operation of
                  Visour, please contact us through the Contact page.
                </p>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 font-medium text-foreground transition-all hover:border-accent-violet/40 hover:bg-surface"
                >
                  Contact Visour
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </PolicySection>

            {/* Final CTA */}
            <div className="relative overflow-hidden border-t border-border py-10">
              <div
                className="absolute -right-20 top-0 h-40 w-40 rounded-full bg-accent-violet/10 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative rounded-2xl border border-border bg-background/50 p-6 sm:p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet to-accent-cyan shadow-lg shadow-accent-violet/20">
                  <FileText className="h-4 w-4 text-white" />
                </div>

                <h3 className="mt-5 font-display text-xl font-bold">
                  Have a question about these terms?
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                  If you&apos;re unsure about anything, contact us before
                  using Visour.
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
                >
                  Contact Us
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="border-t border-border py-8">
              <p className="text-xs leading-6 text-muted">
                Last updated september 19, 2026. These Terms apply to the Visour
                website and its related website functionality.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}