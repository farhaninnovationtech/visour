// app/privacy/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  ChevronRight,
  Cookie,
  FileText,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Visour collects, uses, and protects information when you use the website.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  { id: "overview", number: "01", title: "Overview" },
  { id: "information", number: "02", title: "Information We Collect" },
  { id: "use", number: "03", title: "How We Use Information" },
  { id: "sharing", number: "04", title: "Information Sharing" },
  { id: "storage", number: "05", title: "Local Storage & Preferences" },
  { id: "analytics", number: "06", title: "Analytics" },
  { id: "advertising", number: "07", title: "Advertising" },
  { id: "third-party", number: "08", title: "Third-Party Services" },
  { id: "content", number: "09", title: "Prompt Library & Content" },
  { id: "children", number: "10", title: "Children’s Privacy" },
  { id: "changes", number: "11", title: "Changes to This Policy" },
  { id: "contact", number: "12", title: "Contact Us" },
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

export default function PrivacyPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[700px]"
        aria-hidden="true"
      >
        <div className="glow -left-40 -top-40 h-[420px] w-[420px] bg-accent-violet/20" />
        <div className="glow right-[-120px] top-20 h-[400px] w-[400px] bg-accent-cyan/15" />
        <div className="glow left-1/2 top-[300px] h-[350px] w-[350px] -translate-x-1/2 bg-accent-pink/10" />
      </div>

      {/* Hero */}
      <section className="relative px-5 pb-14 pt-16 sm:px-8 sm:pt-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_340px]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur">
                <ShieldCheck className="h-3.5 w-3.5 text-accent-violet" />
                Privacy at Visour
              </div>

              <h1 className="max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
                Your privacy,
                <br />
                <span className="gradient-text">clearly explained.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                This Privacy Policy explains what information Visour collects,
                how it is used, and the choices you have when using the
                website.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/70 p-6 shadow-2xl shadow-accent-violet/5 backdrop-blur-xl">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-violet/15 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-violet to-accent-cyan shadow-lg shadow-accent-violet/20">
                  <Lock className="h-5 w-5 text-white" />
                </div>

                <p className="text-sm font-semibold">
                  Privacy should be easy to understand.
                </p>

                <p className="mt-2 text-sm leading-6 text-muted">
                  We aim to keep our practices straightforward and explain
                  what matters without unnecessary complexity.
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
                Contents
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

          {/* Policy */}
          <article className="rounded-3xl border border-border bg-surface/50 px-6 shadow-2xl shadow-black/5 backdrop-blur-xl sm:px-10">
            <PolicySection id="overview">
              <SectionHeading
                number="01"
                title="Overview"
                icon={FileText}
              />

              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  Visour is a platform for discovering and exploring AI image
                  prompts. You can browse the website without creating an
                  account.
                </p>

                <p>
                  This Privacy Policy describes how information may be
                  collected and used when you visit or interact with Visour.
                  By using the website, you agree to the practices described
                  here.
                </p>
              </div>
            </PolicySection>

            <PolicySection id="information">
              <SectionHeading
                number="02"
                title="Information We Collect"
                icon={Users}
              />

              <div className="space-y-6 text-sm leading-7 text-muted">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    Information you provide
                  </h3>

                  <p>
                    If you contact us through the website, we may collect the
                    information you choose to provide, such as your name,
                    email address, issue type or subject, and message.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    Technical information
                  </h3>

                  <p>
                    Like most websites, Visour may automatically receive
                    limited technical and usage information. This can include
                    information about your browser, device, pages visited,
                    approximate location, referral sources, and interactions
                    with the website.
                  </p>
                </div>
              </div>
            </PolicySection>

            <PolicySection id="use">
              <SectionHeading
                number="03"
                title="How We Use Information"
                icon={Sparkles}
              />

              <p className="mb-5 text-sm leading-7 text-muted">
                Information collected through Visour may be used for purposes
                including:
              </p>

              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Responding to contact requests and questions",
                  "Maintaining and improving the website",
                  "Understanding how people use Visour",
                  "Improving user experience and performance",
                  "Preventing abuse, fraud, and security issues",
                  "Supporting advertising or monetization where applicable",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-border bg-background/50 p-4 text-sm leading-6 text-muted"
                  >
                    <span className="mr-2 text-accent-violet">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </PolicySection>

            <PolicySection id="sharing">
              <SectionHeading
                number="04"
                title="Information Sharing"
                icon={ShieldCheck}
              />

              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  Visour does not currently sell user-submitted personal
                  information.
                </p>

                <p>
                  Information may be shared with service providers when
                  reasonably necessary to operate, secure, maintain, or
                  improve the website. These services may include hosting,
                  analytics, email delivery, advertising, and security
                  providers.
                </p>

                <p>
                  Information may also be disclosed where required by law or
                  when reasonably necessary to protect the rights, safety, or
                  security of Visour, its users, or others.
                </p>
              </div>
            </PolicySection>

            <PolicySection id="storage">
              <SectionHeading
                number="05"
                title="Local Storage & Preferences"
                icon={Cookie}
              />

              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  Visour may use browser local storage to remember certain
                  preferences, saved prompts, or favorited prompts.
                </p>

                <p>
                  Information stored through local storage remains on your
                  browser or device and is not automatically synced across
                  devices.
                </p>

                <p>
                  You can generally manage or remove local storage through
                  your browser settings.
                </p>
              </div>
            </PolicySection>

            <PolicySection id="analytics">
              <SectionHeading
                number="06"
                title="Analytics"
                icon={BarChart3}
              />

              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  Visour may use analytics services to understand general
                  website usage and improve the experience.
                </p>

                <p>
                  Analytics information may include pages viewed, approximate
                  location, device and browser information, traffic sources,
                  and interactions with the website.
                </p>

                <p>
                  Analytics data is generally used in aggregate to understand
                  how the website is performing rather than to identify
                  individual visitors.
                </p>
              </div>
            </PolicySection>

            <PolicySection id="advertising">
              <SectionHeading
                number="07"
                title="Advertising"
                icon={Sparkles}
              />

              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  Visour may use advertising services such as Google AdSense
                  as the website grows and monetization features are
                  introduced.
                </p>

                <p>
                  Advertising providers may use technologies such as cookies,
                  web beacons, device identifiers, or similar technologies to
                  provide and measure advertisements.
                </p>

                <p>
                  The practices of third-party advertising providers are
                  governed by their own privacy policies and terms.
                </p>
              </div>
            </PolicySection>

            <PolicySection id="third-party">
              <SectionHeading
                number="08"
                title="Third-Party Services"
                icon={ArrowUpRight}
              />

              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  Visour may rely on third-party services to operate parts of
                  the website. These may include hosting providers, analytics
                  services, email providers, advertising networks, and
                  security tools.
                </p>

                <p>
                  These providers may process limited information according to
                  their own terms and privacy policies.
                </p>

                <div className="rounded-2xl border border-border bg-background/50 p-5">
                  <p className="font-medium text-foreground">
                    AI services
                  </p>

                  <p className="mt-2">
                    Currently, Visour does not send user prompts or messages
                    to third-party AI generation APIs. The prompt library is
                    maintained as website content.
                  </p>
                </div>
              </div>
            </PolicySection>

            <PolicySection id="content">
              <SectionHeading
                number="09"
                title="Prompt Library & Content"
                icon={BookOpen}
              />

              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  The prompts available on Visour are part of the website's
                  content and are provided for discovery and creative
                  inspiration.
                </p>

                <p>
                  Users cannot directly submit prompts to the public library
                  through the website. If you believe a prompt or other
                  content is inappropriate, inaccurate, or should be reviewed,
                  you can contact us and report it.
                </p>
              </div>
            </PolicySection>

            <PolicySection id="children">
              <SectionHeading
                number="10"
                title="Children’s Privacy"
                icon={ShieldCheck}
              />

              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  Visour is intended for a general audience and is not
                  specifically directed toward children.
                </p>

                <p>
                  We do not knowingly collect personal information from
                  children. If you believe that a child has provided personal
                  information through Visour, please contact us so we can
                  review the situation.
                </p>
              </div>
            </PolicySection>

            <PolicySection id="changes">
              <SectionHeading
                number="11"
                title="Changes to This Policy"
                icon={FileText}
              />

              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  We may update this Privacy Policy from time to time as
                  Visour evolves or as our practices change.
                </p>

                <p>
                  When changes are made, the updated version will be published
                  on this page and the “Last updated” date will be revised.
                </p>
              </div>
            </PolicySection>

            <PolicySection id="contact">
              <SectionHeading
                number="12"
                title="Contact Us"
                icon={Mail}
              />

              <div className="space-y-5 text-sm leading-7 text-muted">
                <p>
                  If you have questions about this Privacy Policy, your
                  information, or how Visour handles data, you can contact us
                  through the contact page.
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

            {/* Footer note */}
            <div className="border-t border-border py-8">
              <p className="text-xs leading-6 text-muted">
                Last updated september 19, 2026. This policy applies to the
                Visour website and related website functionality.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}