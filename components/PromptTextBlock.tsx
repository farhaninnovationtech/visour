"use client";

import { useState } from "react";

interface PromptTextBlockProps {
  text: string;
  previewLength?: number;
}

export default function PromptTextBlock({
  text,
  previewLength = 520,
}: PromptTextBlockProps) {
  const [expanded, setExpanded] = useState(false);

  const isLong = text.length > previewLength;

  const preview = isLong
    ? `${text.slice(0, previewLength)}...`
    : text;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface/80">
      <div className="p-5">
        <div className="relative">
          <p className="whitespace-pre-wrap text-sm leading-7 text-foreground/90">
            {expanded || !isLong ? text : preview}
          </p>

          {!expanded && isLong && (
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-surface to-transparent"
              aria-hidden="true"
            />
          )}
        </div>
      </div>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="w-full border-t border-border px-5 py-4 text-center text-sm font-semibold text-accent-cyan transition-colors hover:bg-background/30 hover:text-foreground focus-ring"
        >
          {expanded ? "Hide full prompt" : "Show full prompt"}
        </button>
      )}
    </div>
  );
}