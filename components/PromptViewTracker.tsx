"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function PromptViewTracker({
  promptId,
  promptTitle,
}: {
  promptId: string;
  promptTitle: string;
}) {
  useEffect(() => {
    trackEvent("prompt_view", { prompt_id: promptId, prompt_title: promptTitle });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [promptId]);

  return null;
}

export function CategoryViewTracker({ categorySlug }: { categorySlug: string }) {
  useEffect(() => {
    trackEvent("category_visit", { category: categorySlug });
  }, [categorySlug]);

  return null;
}
