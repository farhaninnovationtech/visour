"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
];

export default function CategorySortControl({
  currentSort,
}: {
  currentSort: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "featured") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  return (
    <label className="flex items-center gap-2 text-sm text-muted">
      <span className="sr-only">Sort prompts</span>
      <select
        value={currentSort}
        onChange={(e) => handleChange(e.target.value)}
        className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground focus-ring"
      >
        {sortOptions.map((s) => (
          <option key={s.value} value={s.value}>
            Sort: {s.label}
          </option>
        ))}
      </select>
    </label>
  );
}
