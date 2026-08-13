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
    if (mode !== "card") return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new ResizeObserver(([entry]) => {
      const scale = entry.contentRect.width / width;
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
        style={mode === "card" ? { transform: "scale(var(--artwork-scale))" } : undefined}
      />
    </div>
  );
}
