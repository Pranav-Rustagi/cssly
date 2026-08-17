import Link from "next/link";

import type { Artwork } from "@/lib/types";
import { ArtworkFrame } from "@/components/artwork-frame";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DescriptionText } from "@/components/text";

interface ArtworkCardProps {
  artwork: Artwork;
}

export function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <Card className="group/artwork-card [--card-spacing:--spacing(2)] overflow-hidden p-0 shadow-lg transition-all duration-300 hover:border-accent hover:shadow-xl motion-safe:hover:-translate-y-2 has-[a:focus-visible]:border-accent">
      <Link
        href={`/art/${artwork.slug}`}
        className="flex flex-col outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <ArtworkFrame
          slug={artwork.slug}
          title={artwork.title}
          viewport={artwork.viewport}
          mode="card"
          className="aspect-[16/10] w-full border-b border-border"
        />
        <CardHeader className="px-6 pt-6">
          <CardTitle>{artwork.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col px-6 pb-6">
          <DescriptionText className="mb-6 text-xs md:mb-8 md:text-sm line-clamp-2">
            {artwork.description}
          </DescriptionText>
          <div className="flex flex-wrap gap-1.5">
            {artwork.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-accent px-2 py-1 text-xs font-bold text-accent md:px-4 md:py-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
