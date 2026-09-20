import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Visour",
  description:
    "Discover Visour, a curated space for AI image prompts and visual inspiration.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}