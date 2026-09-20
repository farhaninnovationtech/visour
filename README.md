# VISOUR

**Find the prompt behind your next image.**

VISOUR is a premium AI image prompt discovery platform by **Farhan Innovation & Technology (FIT)**. Browse curated AI image prompts, copy them instantly, and create with the AI image model you already use (Midjourney, DALL·E, Stable Diffusion, and more). VISOUR does not generate images itself.

## Features

- Curated library of 36 AI image prompts across 12 categories
- Full-text search (title, description, prompt, category, tags, models) with URL-synced state
- Category browsing with filtering and sorting (Featured / Latest / Popular)
- Prompt detail pages with one-click Copy Prompt (Clipboard API, accessible feedback)
- Related prompts, model compatibility badges, and prompt tips
- Contact form wired to Resend for secure server-side email delivery
- Full SEO: per-page metadata, Open Graph, Twitter cards, sitemap, robots.txt
- Loading, empty, and error states throughout
- Responsive, accessible, dark cinematic design with reduced-motion support
- Google Analytics ready (page views + `prompt_view`, `prompt_copy`, `search`, `category_visit` events)

## Technology Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React icons
- [Resend](https://resend.com) for transactional email
- Local TypeScript data (no database)

## Project Structure

```
app/
  page.tsx                  Homepage
  explore/                  Search, filter, sort all prompts
  categories/               Category browser
  categories/[slug]/        Category detail
  prompt/[slug]/            Prompt detail (core product page)
  about/ contact/ privacy/ terms/
  actions/contact.ts        Server action → Resend
  sitemap.ts robots.ts
  not-found.tsx global-error.tsx
components/                 Reusable UI (Header, Footer, PromptCard, CopyButton, ...)
lib/
  data/prompts.ts           Prompt content (id, slug, title, prompt, image, category, tags, models, featured, createdAt)
  data/categories.ts        Category content
  utils/search.ts           Search / filter / sort logic
  analytics.ts               GA event helper
  site.ts                    Site-wide config/metadata
```

## Local Setup

```bash
npm install
cp .env.example .env.local   # fill in the values below
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes (for Contact form) | API key from [resend.com](https://resend.com/api-keys). Server-side only, never exposed to the client. |
| `CONTACT_EMAIL` | Yes (for Contact form) | Inbox that receives Contact form submissions. |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Public site URL used for canonical links, sitemap, and Open Graph metadata. |
| `NEXT_PUBLIC_GA_ID` | Optional | Google Analytics Measurement ID (e.g. `G-XXXXXXXXXX`). Leave blank to disable analytics. |

Without `RESEND_API_KEY` / `CONTACT_EMAIL`, the Contact form will validate correctly but return a clear error instead of silently failing.

## Development

```bash
npm run dev      # start dev server
npm run lint     # lint
npm run build    # production build
npm run start    # run the production build locally
```

## Deployment (Vercel)

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the project into [Vercel](https://vercel.com/new).
3. Add the environment variables listed above in the Vercel project settings.
4. Deploy. Vercel will run `npm run build` automatically.

## Adding a New Prompt

Edit `lib/data/prompts.ts` and add a new object to the `prompts` array:

```ts
{
  id: "unique-id",
  slug: "url-friendly-slug",
  title: "Prompt Title",
  description: "One-sentence summary shown on cards and in SEO metadata.",
  prompt: "The full prompt text to copy into an AI image model.",
  image: "https://your-image-url/image.jpg",
  category: "portrait", // must match a category slug in categories.ts
  tags: ["tag-one", "tag-two"],
  models: ["Midjourney", "DALL-E 3"],
  featured: false,
  createdAt: "2026-03-01",
  tips: "Optional prompt tip.",
}
```

The prompt will automatically appear in Explore, its category page, search results, and generate its own detail page and sitemap entry at build time.

## Adding a New Category

Edit `lib/data/categories.ts` and add a new object to the `categories` array with a unique `slug`, `name`, `description`, `longDescription`, `image`, and `tags`. It will automatically appear on the Categories page and generate its own detail route.

## License

© Farhan Innovation & Technology (FIT). All rights reserved.
