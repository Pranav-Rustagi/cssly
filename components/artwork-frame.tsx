"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface ArtworkFrameProps {
  slug: string;
  title: string;
  viewport: { width: number; height: number };
  mode?: "card" | "full";
  className?: string;
}

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
        tabIndex={-1}
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
