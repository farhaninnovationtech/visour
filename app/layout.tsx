import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

import { siteConfig } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteTitle = `${siteConfig.name} — ${siteConfig.tagline}`;

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  alternateName: siteConfig.brand,
  url: siteConfig.url,
  description: siteConfig.description,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteTitle,
    template: `%s — ${siteConfig.name}`,
  },

  description: siteConfig.description,
  
  keywords: [
    "AI image prompts",
    "AI art prompts",
    "AI image generation prompts",
    "Midjourney prompts",
    "Flux prompts",
    "DALL-E prompts",
    "Gemini prompts",
    "Stable Diffusion prompts",
    "AI photography prompts",
    "cinematic AI prompts",
    "prompt library",
    "prompt discovery",
  ],

  applicationName: siteConfig.name,

  authors: [
    {
      name: siteConfig.brand,
    },
  ],

  creator: siteConfig.brand,
  publisher: siteConfig.brand,

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "kNs_If4eKzS__0-AQ_Fu1XsNsUX9ju9KWkrA0giVEWw",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteTitle,
    description: siteConfig.description,

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="h-full antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-surface-2 focus:text-foreground focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to content
        </a>
        <div className="grain" aria-hidden="true" />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
