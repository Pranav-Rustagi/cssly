import Link from "next/link";

import type { Artwork } from "@/lib/types";
import { ArtworkFrame } from "@/components/artwork-frame";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DescriptionText } from "@/components/text";

interface ArtworkCardProps {
  artwork: Artwork;
}

/** One artwork tile in the gallery grid. The whole card is a single link to
 * the detail page — the preview stays `pointer-events-none` so nothing
 * inside it can steal the click. Preview area is a fixed 16/10 box
 * (see `ArtworkFrame`'s "card" mode) so cards line up in a grid no matter
 * how differently shaped each artwork's own viewport is. */
export function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <Card className="group/artwork-card overflow-hidden p-0 transition-colors hover:border-accent has-[a:focus-visible]:border-accent">
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
        <CardHeader className="px-4 pt-4">
          <CardTitle>{artwork.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 px-4 pb-4">
          <DescriptionText className="line-clamp-2">{artwork.description}</DescriptionText>
          <div className="flex flex-wrap gap-1.5">
            {artwork.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
