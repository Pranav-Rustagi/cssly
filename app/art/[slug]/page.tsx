import { notFound } from "next/navigation";
import { Maximize2 } from "lucide-react";

import { getAllArtworks, getArtwork } from "@/lib/artworks";
import { ArtworkFrame } from "@/components/artwork-frame";
import { SourceViewer } from "@/components/source-viewer";
import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { DescriptionText } from "@/components/text";
import { Button } from "@/components/ui/button";
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

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const { slug } = await params;

  const artwork = getAllArtworks().find((a) => a.slug === slug);
  if (!artwork) notFound();

  const { html, css } = getArtwork(slug);

  return (
    <main className="flex flex-1 flex-col gap-10 py-10">
      <Section>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <Heading as="h1" text={artwork.title} />
              <DescriptionText className="mt-2 max-w-2xl">
                {artwork.description}
              </DescriptionText>
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
    </main>
  );
}
