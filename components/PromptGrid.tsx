import { Prompt } from "@/lib/data/prompts";
import PromptCard from "@/components/PromptCard";
import EmptyState from "@/components/EmptyState";

export default function PromptGrid({
  prompts,
  emptyTitle = "No prompts found",
  emptyDescription = "Try a different search term or explore another category.",
  emptyActionHref,
  emptyActionLabel,
}: {
  prompts: Prompt[];
  emptyTitle?: string;
  emptyDescription?: string;
  emptyActionHref?: string;
  emptyActionLabel?: string;
}) {
  if (prompts.length === 0) {
    return (
      <EmptyState
        title={emptyTitle}
        description={emptyDescription}
        actionHref={emptyActionHref ?? "/categories"}
        actionLabel={emptyActionLabel ?? "Browse categories"}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {prompts.map((prompt, i) => (
        <PromptCard key={prompt.id} prompt={prompt} priority={i < 4} />
      ))}
    </div>
  );
}
