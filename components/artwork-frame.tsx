import { cn } from "@/lib/utils";

interface ArtworkFrameProps {
  slug: string;
  title: string;
  viewport: { width: number; height: number };
  /** "card" scales to fit the container and disables pointer events so a
   * wrapping <Link> stays clickable. "full" renders the same way but stays
   * interactive (still sandboxed, so nothing inside can act on it anyway). */
  mode?: "card" | "full";
  className?: string;
}

/**
 * Renders an artwork in a sandboxed iframe. `sandbox=""` is the strictest
 * setting — no scripts, no forms, no same-origin — so the artwork's CSS
 * never touches CSSly's own DOM, regardless of what the file contains.
 *
 * Scaling is pure CSS: the wrapper is a container-query context sized by
 * the artwork's aspect ratio, and the iframe (rendered at its native
 * viewport size) is scaled down with `transform: scale(100cqw / width)`.
 * No ResizeObserver, no JS.
 */
export function ArtworkFrame({
  slug,
  title,
  viewport,
  mode = "card",
  className,
}: ArtworkFrameProps) {
  const { width, height } = viewport;

  return (
    <div
      className={cn("relative overflow-hidden [container-type:inline-size]", className)}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <iframe
        src={`/preview/${slug}/index.html`}
        sandbox=""
        loading="lazy"
        title={title}
        width={width}
        height={height}
        className={cn(
          "absolute top-0 left-0 origin-top-left border-0",
          mode === "card" && "pointer-events-none",
        )}
        style={{ transform: `scale(calc(100cqw / ${width}))` }}
      />
    </div>
  );
}
