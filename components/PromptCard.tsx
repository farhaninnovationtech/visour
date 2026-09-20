import Link from "next/link";
import Image from "next/image";
import { Prompt } from "@/lib/data/prompts";
import { getCategoryBySlug } from "@/lib/data/categories";
import CopyButton from "@/components/CopyButton";

export default function PromptCard({
  prompt,
  priority = false,
}: {
  prompt: Prompt;
  priority?: boolean;
}) {
  const category = getCategoryBySlug(prompt.category);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent-cyan/30">
      <Link
        href={`/prompt/${prompt.slug}`}
        className="relative block aspect-[4/5] w-full overflow-hidden focus-ring"
      >
        <Image
          src={prompt.image}
          alt={`AI-generated example image for the prompt "${prompt.title}"`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
        {category && (
          <span className="absolute left-3 top-3 rounded-full bg-black/50 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
            {category.name}
          </span>
        )}
        {prompt.featured && (
          <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan px-3 py-1 text-[11px] font-semibold text-white">
            Featured
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="font-display text-base font-semibold text-white line-clamp-2">
            {prompt.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs text-white/70">
            {prompt.description}
          </p>
        </div>
      </Link>
      <div className="flex items-center justify-between gap-2 border-t border-border p-3">
        <div className="flex min-w-0 flex-wrap gap-1.5">
          {prompt.models.slice(0, 2).map((m) => (
            <span
              key={m}
              className="truncate rounded-full bg-surface-2 px-2.5 py-1 text-[11px] text-muted"
            >
              {m}
            </span>
          ))}
        </div>
        <CopyButton
          text={prompt.prompt}
          promptId={prompt.id}
          promptTitle={prompt.title}
          size="compact"
        />
      </div>
    </div>
  );
}
