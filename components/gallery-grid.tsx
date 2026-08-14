import type { Artwork } from "@/lib/types";
import { ArtworkCard } from "@/components/artwork-card";
import { DescriptionText } from "@/components/text";

interface GalleryGridProps {
  artworks: Artwork[];
}

/** Responsive grid of artwork cards. Search, tag filter and sort land on
 * top of this in a follow-up commit. */
export function GalleryGrid({ artworks }: GalleryGridProps) {
  if (artworks.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-border py-16 text-center">
        <DescriptionText>Nothing here matches — try a different search or fewer tags.</DescriptionText>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {artworks.map((artwork) => (
        <ArtworkCard key={artwork.slug} artwork={artwork} />
      ))}
    </div>
  );
}
