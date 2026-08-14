import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Maximize2 } from "lucide-react";

import { getAllArtworks, getArtwork } from "@/lib/artworks";
import { ArtworkFrame } from "@/components/artwork-frame";
import { SourceViewer } from "@/components/source-viewer";
import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { DescriptionText } from "@/components/text";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ArtworkPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllArtworks().map((artwork) => ({ slug: artwork.slug }));
}

export async function generateMetadata({
  params,
}: ArtworkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const artwork = getAllArtworks().find((a) => a.slug === slug);
  if (!artwork) return {};

  return {
    title: artwork.title,
    description: artwork.description,
    alternates: { canonical: `/art/${artwork.slug}` },
    openGraph: {
      title: artwork.title,
      description: artwork.description,
      type: "article",
      url: `/art/${artwork.slug}`,
    },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const { slug } = await params;

  const allArtworks = getAllArtworks();
  const index = allArtworks.findIndex((a) => a.slug === slug);
  if (index === -1) notFound();

  const artwork = allArtworks[index];
  const prev = allArtworks[(index - 1 + allArtworks.length) % allArtworks.length];
  const next = allArtworks[(index + 1) % allArtworks.length];

  const { html, css } = getArtwork(slug);

  return (
    <div className="flex flex-1 flex-col gap-10 py-10">
      <Section>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <Heading as="h1" text={artwork.title} />
              <DescriptionText className="mt-2 max-w-2xl">
                {artwork.description}
              </DescriptionText>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-text-muted">
                <time dateTime={artwork.date}>{formatDate(artwork.date)}</time>
                <span aria-hidden="true">&middot;</span>
                <span>
                  by{" "}
                  <a
                    href={`https://github.com/${artwork.author.github}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-text underline-offset-2 hover:text-accent hover:underline"
                  >
                    {artwork.author.name}
                  </a>
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {artwork.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    render={<Link href={`/gallery?tag=${encodeURIComponent(tag)}`} />}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Dialog>
              <DialogTrigger render={<Button type="button" variant="outline" size="sm" />}>
                <Maximize2 className="size-3.5" />
                View fullscreen
              </DialogTrigger>
              <DialogContent
                showCloseButton
                className="max-h-[90vh] max-w-[90vw] gap-0 overflow-auto border-none bg-transparent p-0 shadow-none ring-0 sm:max-w-[90vw]"
              >
                {/* Visually hidden — required by the dialog primitive for
                 * accessibility, but the fullscreen view itself shows
                 * nothing but the artwork: no title, no site chrome. */}
                <DialogTitle className="sr-only">{artwork.title} — fullscreen</DialogTitle>
                <DialogDescription className="sr-only">
                  {artwork.description}
                </DialogDescription>
                <ArtworkFrame
                  slug={artwork.slug}
                  title={artwork.title}
                  viewport={artwork.viewport}
                  mode="full"
                />
              </DialogContent>
            </Dialog>
          </div>

          <ArtworkFrame
            slug={artwork.slug}
            title={artwork.title}
            viewport={artwork.viewport}
            mode="full"
          />
        </div>
      </Section>

      <Section type="secondary">
        <Heading as="h2" text="Source" />
        <DescriptionText className="mt-1 mb-4">
          The exact HTML and CSS behind this piece — copy it, drop it in a blank file, run it.
        </DescriptionText>
        <SourceViewer html={html} css={css} />
      </Section>

      <Section>
        <nav aria-label="More artworks" className="flex flex-wrap gap-4">
          <Link
            href={`/art/${prev.slug}`}
            className="group flex flex-1 items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:border-accent"
          >
            <ArrowLeft className="size-4 shrink-0 text-text-muted transition-colors group-hover:text-accent" />
            <div className="min-w-0">
              <div className="text-xs text-text-muted md:text-sm">Previous</div>
              <div className="truncate font-medium text-text">{prev.title}</div>
            </div>
          </Link>
          <Link
            href={`/art/${next.slug}`}
            className="group flex flex-1 items-center justify-end gap-3 rounded-lg border border-border p-4 text-right transition-colors hover:border-accent"
          >
            <div className="min-w-0">
              <div className="text-xs text-text-muted md:text-sm">Next</div>
              <div className="truncate font-medium text-text">{next.title}</div>
            </div>
            <ArrowRight className="size-4 shrink-0 text-text-muted transition-colors group-hover:text-accent" />
          </Link>
        </nav>
      </Section>
    </div>
  );
}
