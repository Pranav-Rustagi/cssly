import fs from "fs";
import path from "path";
import type { Artwork, ArtworkWithSource } from "@/lib/types";

const PREVIEW_DIR = path.join(process.cwd(), "public", "preview");

function readMeta(slug: string): Artwork {
  const metaPath = path.join(PREVIEW_DIR, slug, "meta.json");
  let raw: string;
  try {
    raw = fs.readFileSync(metaPath, "utf8");
  } catch {
    throw new Error(`Artwork "${slug}": missing meta.json at ${metaPath}`);
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    throw new Error(
      `Artwork "${slug}": meta.json is not valid JSON (${(err as Error).message})`,
    );
  }

  if (typeof parsed !== "object" || parsed === null) {
    throw new Error(`Artwork "${slug}": meta.json must be a JSON object`);
  }

  const m = parsed as Record<string, unknown>;
  const viewport = m.viewport as Record<string, unknown> | undefined;
  const author = m.author as Record<string, unknown> | undefined;

  if (
    typeof m.title !== "string" ||
    typeof m.description !== "string" ||
    !Array.isArray(m.tags) ||
    typeof m.date !== "string" ||
    typeof m.featured !== "boolean" ||
    !viewport ||
    typeof viewport.width !== "number" ||
    typeof viewport.height !== "number" ||
    !author ||
    typeof author.name !== "string" ||
    typeof author.github !== "string"
  ) {
    throw new Error(
      `Artwork "${slug}": meta.json is missing or has malformed required fields`,
    );
  }

  return {
    slug,
    title: m.title,
    description: m.description,
    tags: m.tags as string[],
    date: m.date,
    featured: m.featured,
    viewport: { width: viewport.width, height: viewport.height },
    author: { name: author.name, github: author.github },
  };
}

export function getAllArtworks(): Artwork[] {
  const slugs = fs
    .readdirSync(PREVIEW_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const artworks = slugs.map(readMeta);

  return artworks.sort((a, b) => b.date.localeCompare(a.date));
}

export function getArtwork(slug: string): ArtworkWithSource {
  const meta = readMeta(slug);
  const dir = path.join(PREVIEW_DIR, slug);

  return {
    ...meta,
    html: fs.readFileSync(path.join(dir, "index.html"), "utf8"),
    css: fs.readFileSync(path.join(dir, "style.css"), "utf8"),
  };
}

export function getAllTags(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();

  for (const artwork of getAllArtworks()) {
    for (const tag of artwork.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return Array.from(counts, ([tag, count]) => ({ tag, count })).sort((a, b) =>
    a.tag.localeCompare(b.tag),
  );
}
