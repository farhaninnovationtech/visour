import { Prompt } from "@/lib/data/prompts";

export type SortOption = "featured" | "latest" | "popular";

export interface ExploreFilters {
  q?: string;
  category?: string;
  model?: string;
  tag?: string;
  sort?: SortOption;
}

export function searchPrompts(prompts: Prompt[], query: string): Prompt[] {
  const q = query.trim().toLowerCase();
  if (!q) return prompts;

  return prompts.filter((p) => {
    const haystack = [
      p.title,
      p.description,
      p.prompt,
      p.category,
      ...p.tags,
      ...p.models,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

export function filterPrompts(
  prompts: Prompt[],
  filters: ExploreFilters
): Prompt[] {
  let result = prompts;

  if (filters.q) {
    result = searchPrompts(result, filters.q);
  }

  if (filters.category) {
    result = result.filter((p) => p.category === filters.category);
  }

  if (filters.model) {
    result = result.filter((p) => p.models.includes(filters.model!));
  }

  if (filters.tag) {
    result = result.filter((p) => p.tags.includes(filters.tag!));
  }

  return sortPrompts(result, filters.sort ?? "featured");
}

export function sortPrompts(prompts: Prompt[], sort: SortOption): Prompt[] {
  const copy = [...prompts];
  switch (sort) {
    case "latest":
      return copy.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    case "popular":
      // Deterministic "popularity" proxy: featured first, then by tag/model richness.
      return copy.sort((a, b) => {
        const scoreA = (a.featured ? 100 : 0) + a.tags.length + a.models.length;
        const scoreB = (b.featured ? 100 : 0) + b.tags.length + b.models.length;
        return scoreB - scoreA;
      });
    case "featured":
    default:
      return copy.sort((a, b) => {
        if (a.featured === b.featured) {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
        return a.featured ? -1 : 1;
      });
  }
}
