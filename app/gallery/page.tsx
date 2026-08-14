import type { Metadata } from "next";
import { Suspense } from "react";

import { getAllArtworks, getAllTags } from "@/lib/artworks";
import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { Subtext } from "@/components/text";
import { GalleryGrid } from "@/components/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery — cssly",
  description: "Every artwork in cssly, live, searchable, and filterable by tag.",
  alternates: { canonical: "/gallery" },
};

// Server component: reads no `searchParams`, so the route stays statically
// prerenderable. All filter/sort state lives in the client and the URL.
export default function GalleryPage() {
  const artworks = getAllArtworks();
  const tags = getAllTags();

  return (
    <div className="flex flex-1 flex-col gap-8 py-10">
      <Section>
        <Heading as="h1" text="The gallery" highlight={["gallery"]} />
        <Subtext className="mt-2">
          Every piece, running live, no screenshots. Search it, tag it, sort it.
        </Subtext>
      </Section>

      <Section>
        <Suspense>
          <GalleryGrid artworks={artworks} tags={tags} />
        </Suspense>
      </Section>
    </div>
  );
}
