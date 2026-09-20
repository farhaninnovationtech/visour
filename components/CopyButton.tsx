"use client";

import { useState } from "react";
import { Check, Copy, AlertCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface CopyButtonProps {
  text: string;
  promptId?: string;
  promptTitle?: string;
  className?: string;
  size?: "default" | "compact";
}

type CopyState = "idle" | "copied" | "error";

export default function CopyButton({
  text,
  promptId,
  promptTitle,
  className = "",
  size = "default",
}: CopyButtonProps) {
  const [state, setState] = useState<CopyState>("idle");

  async function handleCopy(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(text);
      setState("copied");
      trackEvent("prompt_copy", {
        prompt_id: promptId,
        prompt_title: promptTitle,
      });
      setTimeout(() => setState("idle"), 2000);
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 2500);
    }
  }

  const base =
    size === "compact"
      ? "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold"
      : "inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold";

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-live="polite"
      className={`${base} whitespace-nowrap transition-all focus-ring ${
        state === "copied"
          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
          : state === "error"
            ? "bg-red-500/15 text-red-400 border border-red-500/30"
            : "bg-gradient-to-r from-accent-violet to-accent-blue text-white shadow-lg shadow-accent-violet/20 hover:scale-[1.02] border border-transparent"
      } ${className}`}
    >
      {state === "copied" ? (
        <>
          <Check className={size === "compact" ? "h-3.5 w-3.5" : "h-4 w-4"} aria-hidden="true" />
          <span>Copied</span>
        </>
      ) : state === "error" ? (
        <>
          <AlertCircle className={size === "compact" ? "h-3.5 w-3.5" : "h-4 w-4"} aria-hidden="true" />
          <span>Couldn&apos;t copy — select text</span>
        </>
      ) : (
        <>
          <Copy className={size === "compact" ? "h-3.5 w-3.5" : "h-4 w-4"} aria-hidden="true" />
          <span>Copy Prompt</span>
        </>
      )}
    </button>
  );
}
