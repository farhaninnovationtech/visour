declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEvent =
  | "prompt_view"
  | "prompt_copy"
  | "search"
  | "category_visit";

export function trackEvent(
  event: AnalyticsEvent,
  params: Record<string, string | number | boolean | undefined> = {}
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", event, params);
}
