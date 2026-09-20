export interface Category {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
}

export const categories: Category[] = [
  {
    slug: "portrait",
    name: "Portrait",
    description: "Intimate, expressive character and human studies.",
    longDescription:
      "Portrait prompts are built around expression, lighting, and presence. This collection favors natural skin texture, directional light, and honest emotion over synthetic perfection — ideal for character studies, headshots, and editorial faces.",
    image: "/images/categories/portrait.webp",
    tags: ["face", "studio light", "emotion", "headshot"],
  },
  {
    slug: "cinematic",
    name: "Cinematic",
    description: "Widescreen frames with film-grade color and mood.",
    longDescription:
      "Cinematic prompts borrow the language of film — anamorphic lenses, color grading, atmospheric haze, and dramatic framing. Use these when you want an image that feels like a still pulled from a movie.",
    image: "/images/categories/cinematic.webp",
    tags: ["film grain", "anamorphic", "moody", "color grade"],
  },
  {
    slug: "fashion",
    name: "Fashion",
    description: "Editorial styling, texture, and high-contrast glamour.",
    longDescription:
      "Fashion prompts focus on garments, texture, and pose. Expect editorial lighting setups, runway energy, and campaign-ready compositions built for lookbooks and magazine spreads.",
    image: "/images/categories/fashion.webp",
    tags: ["editorial", "studio", "texture", "campaign"],
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    description: "Candid, warm, everyday moments rendered beautifully.",
    longDescription:
      "Lifestyle prompts capture the feeling of real life — soft natural light, candid gestures, and relatable settings. Perfect for content that needs to feel authentic rather than staged.",
    image: "/images/categories/lifestyle.webp",
    tags: ["candid", "natural light", "warm", "everyday"],
  },
  {
    slug: "anime",
    name: "Anime",
    description: "Stylized illustration inspired by Japanese animation.",
    longDescription:
      "Anime prompts lean into cel-shading, bold linework, and expressive color palettes drawn from Japanese animation traditions — from soft slice-of-life scenes to high-energy action frames.",
    image: "/images/categories/anime.webp",
    tags: ["cel-shaded", "manga", "stylized", "vibrant"],
  },
  {
    slug: "action",
    name: "Action",
    description: "Dynamic scenes built around movement, energy, and cinematic intensity.",
    longDescription:
      "Action prompts focus on movement, dramatic moments, powerful compositions, and cinematic energy — from fast-paced chase scenes and athletic moments to intense character-driven sequences.",
    image: "/images/categories/action.webp",
    tags: ["dynamic", "cinematic", "movement", "intense"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
