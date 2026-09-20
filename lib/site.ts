export const siteConfig = {
  name: "VISOUR",
  brand: "Farhan Innovation & Technology (FIT)",
  tagline: "Find the prompt behind your next image.",
  description:
    "VISOUR is a premium AI image prompt discovery platform. Browse curated prompts, copy them instantly, and create with the AI image model you already use.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://visour.vercel.app",
  ogImage: "/og-image.png",
  links: {
    contactEmail: process.env.CONTACT_EMAIL || "hello@visour.app",
  },
};

export type SiteConfig = typeof siteConfig;
