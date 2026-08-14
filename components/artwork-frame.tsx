"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface ArtworkFrameProps {
  slug: string;
  title: string;
  viewport: { width: number; height: number };
  /** "card" contain-fits the artwork inside whatever box the wrapper is
   * given (its aspect ratio comes from `className`, not the artwork's own
   * viewport), centred on both axes and never upscaled past native size.
   * Disables pointer events so a wrapping <Link> stays one click target.
   * "full" sizes the wrapper from the artwork's own viewport and stays
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
 * "full" caps the wrapper at the artwork's native width via `max-width` and
 * clamps the computed scale to `min(1, containerWidth / width)`, so the
 * piece never blows up past its own design size — it only shrinks on
 * viewports narrower than that. Unchanged from before "card" grew a
 * contain-fit mode of its own.
 *
 * "card" ignores the artwork's own aspect ratio entirely — the wrapper's
 * box shape is whatever the caller's `className` sets (a fixed ratio, so a
 * grid of differently-shaped artworks still lines up) — and contain-fits the
 * artwork inside it: `scale = min(boxWidth / width, boxHeight / height)`,
 * flex-centred on both axes, letterboxed by the wrapper's own background.
 * A skeleton covers the box until the iframe's `load` event fires, so
 * nothing shifts once the real preview appears.
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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Card mode is server-rendered, so a fast iframe load can fire before
    // hydration attaches `onLoad`, permanently stranding the skeleton (the
    // sandboxed iframe has an opaque origin, so there's no `contentDocument`
    // fallback to poll). 1.5s is well past a hydrated fast-path load but
    // short enough that a missed event self-heals almost unnoticeably.
    if (mode !== "card") return;
    const timer = setTimeout(() => setLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, [mode]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width: boxWidth, height: boxHeight } = entry.contentRect;
      const scale =
        mode === "full"
          ? Math.min(1, boxWidth / width)
          : Math.min(1, boxWidth / width, boxHeight / height);
      wrapper.style.setProperty("--artwork-scale", String(scale));
    });
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [mode, width, height]);

  return (
    <div
      ref={wrapperRef}
      className={cn(
        "relative overflow-hidden [container-type:inline-size]",
        mode === "card" && "flex items-center justify-center bg-surface",
        className,
      )}
      style={
        mode === "full"
          ? ({
              aspectRatio: `${width} / ${height}`,
              maxWidth: `${width}px`,
              marginInline: "auto",
              "--artwork-scale": 1,
            } as React.CSSProperties)
          : ({ "--artwork-scale": 1 } as React.CSSProperties)
      }
    >
      {mode === "card" && !loaded && (
        <Skeleton className="absolute inset-0 rounded-none" />
      )}
      <iframe
        src={`/preview/${slug}/index.html`}
        sandbox=""
        loading="lazy"
        title={title}
        width={width}
        height={height}
        onLoad={() => setLoaded(true)}
        className={cn(
          "border-0",
          mode === "full" && "absolute top-0 left-0 origin-top-left",
          mode === "card" && "pointer-events-none shrink-0",
          mode === "card" && !loaded && "opacity-0",
        )}
        style={{ transform: "scale(var(--artwork-scale))" }}
      />
    </div>
  );
}
