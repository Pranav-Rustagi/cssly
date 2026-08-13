import { ImageResponse } from "next/og";

import { getAllArtworks } from "@/lib/artworks";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllArtworks().map((artwork) => ({ slug: artwork.slug }));
}

/** No screenshot of the actual piece — that needs a headless browser at
 * build time, out of scope for now (see issue #19). This is a plain
 * title-card generated from the artwork's own title and description, using
 * satori's built-in default font only — no webfonts, consistent with the
 * rest of the site. */
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artwork = getAllArtworks().find((a) => a.slug === slug);
  const title = artwork?.title ?? "cssly";
  const description =
    artwork?.description.slice(0, 140) ??
    "Hand-written CSS art, source included.";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
          padding: "80px",
          backgroundColor: "#000000",
          color: "#FFFFFF",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#9c9dff",
          }}
        >
          cssly
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.15 }}>{title}</div>
        <div style={{ fontSize: 30, color: "#B5B5B5", maxWidth: 980 }}>
          {description}
        </div>
      </div>
    ),
    size,
  );
}
