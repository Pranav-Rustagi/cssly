"use client";

import { useEffect, useRef } from "react";
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
 * `scale()` only accepts a `<number>` or `<percentage>`, and `calc()` can't
 * divide a length by a length to produce one — so `scale(calc(100cqw /
 * width))` is invalid and browsers drop the whole `transform` declaration
 * (computed value falls back to `none`), leaving the artwork unscaled. A
 * ResizeObserver on the wrapper computes the ratio in JS instead and writes
 * it to a CSS custom property the iframe's transform reads.
 *
 * "card" scales freely both up and down to exactly fill whatever container
 * it's given (a grid tile). "full" caps the wrapper at the artwork's native
 * width via `max-width` and clamps the computed scale to `min(1, ratio)`, so
 * the piece never blows up past its own design size — it only shrinks on
 * viewports narrower than that.
 */
export function ArtworkFrame({
  slug,
  title,
  viewport,
  mode = "card",
  className,
}: ArtworkFrameProps) {
  const { width, height } = viewport;
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new ResizeObserver(([entry]) => {
      const ratio = entry.contentRect.width / width;
      const scale = mode === "full" ? Math.min(1, ratio) : ratio;
      wrapper.style.setProperty("--artwork-scale", String(scale));
    });
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [mode, width]);

  return (
    <div
      ref={wrapperRef}
      className={cn("relative overflow-hidden [container-type:inline-size]", className)}
      style={
        {
          aspectRatio: `${width} / ${height}`,
          maxWidth: mode === "full" ? `${width}px` : undefined,
          marginInline: mode === "full" ? "auto" : undefined,
          "--artwork-scale": 1,
        } as React.CSSProperties
      }
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
        style={{ transform: "scale(var(--artwork-scale))" }}
      />
    </div>
  );
}
