import type { Metadata } from "next";

// Trailing slashes are stripped so `${SITE_URL}/path` can never produce a
// double slash, whatever shape the env var is set to.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://cssly.vercel.app"
).replace(/\/+$/, "");

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
}

// Next merges metadata per segment, and a page-level `title` does not populate
// `og:title` — without this, every page inherits the root layout's social card.
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
    twitter: { title, description },
  };
}
