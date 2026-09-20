import Link from "next/link";
import { SearchX } from "lucide-react";

export default function EmptyState({
  title,
  description,
  actionHref,
  actionLabel,
}: {
  title: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
}) {
  return (
    <div
      role="status"
      className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface px-6 py-20 text-center"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surface-2">
        <SearchX className="h-6 w-6 text-muted" aria-hidden="true" />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
        {title}
      </h3>
      {description && (
        <p className="mt-2 max-w-sm text-sm text-muted">{description}</p>
      )}
      {actionHref && actionLabel && (
        <Link
          href={actionHref}
          className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-accent-violet to-accent-blue px-5 py-2.5 text-sm font-semibold text-white focus-ring"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
