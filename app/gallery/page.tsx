import { pageMetadata } from "@/lib/site";
import { Suspense } from "react";

import { getAllArtworks, getAllTags } from "@/lib/artworks";
import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { Subtext } from "@/components/text";
import { GalleryGrid } from "@/components/gallery-grid";

export const metadata = pageMetadata({
  title: "Gallery — cssly",
  description:
    "Every artwork in cssly, live, searchable, and filterable by tag.",
  path: "/gallery",
});

export default function GalleryPage() {
  const artworks = getAllArtworks();
  const tags = getAllTags();

  return (
    <Section spacing="compact">
      <div className="text-center mb-8 md:mb-16">
        <Heading as="h1" text="The gallery" highlight={["gallery"]} />
        <Subtext className="mt-2">
          Every piece, running live, no screenshots. Search it, tag it, sort it.
        </Subtext>
      </div>

      <Suspense>
        <GalleryGrid artworks={artworks} tags={tags} />
      </Suspense>
    </Section>
  );
}
