import { Compass, ClipboardCopy, Wand2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    icon: Compass,
    title: "Discover",
    description:
      "Browse curated prompts across cinematic, portrait, fashion, fantasy and more — organized so the right idea is easy to find.",
  },
  {
    icon: ClipboardCopy,
    title: "Copy",
    description:
      "Open any prompt, read the full text and tips, and copy it instantly with one click. No sign-up, no friction.",
  },
  {
    icon: Wand2,
    title: "Create",
    description:
      "Paste the prompt into the AI image model you already use — Midjourney, DALL·E, Stable Diffusion, or anything else.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The workflow"
          title="How VISOUR works"
          description="A simple three-step loop from idea to image."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-border bg-surface p-8"
            >
              <span className="absolute right-6 top-6 font-display text-4xl font-extrabold text-foreground/5">
                0{i + 1}
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet/20 to-accent-cyan/20 border border-accent-cyan/20">
                <step.icon className="h-6 w-6 text-accent-cyan" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
