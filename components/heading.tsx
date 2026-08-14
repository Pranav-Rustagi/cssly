import type { JSX } from "react";

import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

// Per-level size, driven by `as` rather than left to callers — Tailwind's
// preflight resets `font-size`/`font-weight` to `inherit` on all heading
// elements, so a heading with no size utility of its own renders at body
// text size.
const sizeByLevel: Record<HeadingLevel, string> = {
  h1: "text-3xl font-black md:text-5xl lg:text-6xl",
  h2: "text-3xl font-black md:text-5xl lg:text-6xl",
  h3: "text-lg font-bold md:text-xl",
  h4: "text-lg font-bold md:text-xl",
  h5: "text-lg font-bold md:text-xl",
  h6: "text-lg font-bold md:text-xl",
};

interface HeadingProps {
  as: HeadingLevel;
  text: string;
  /** Exact substrings of `text` to render as accent-coloured spans. */
  highlight?: string[];
  className?: string;
}

/** Splits `text` on the first occurrence of each highlight word, in order. */
function renderWithHighlights(text: string, highlight: string[]) {
  if (highlight.length === 0) return text;

  const pattern = highlight
    .map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const parts = text.split(new RegExp(`(${pattern})`, "g"));

  return parts.map((part, i) =>
    highlight.includes(part) ? (
      <span key={i} className="font-mono text-accent">
        {part}
      </span>
    ) : (
      part
    )
  );
}

/** A single semantic heading element, with an explicit `as` level and
 * accent-coloured highlighted words. Never renders more than one heading. */
export function Heading({ as, text, highlight = [], className }: HeadingProps) {
  const Tag = as as unknown as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cn("text-text", sizeByLevel[as], className)}>
      {renderWithHighlights(text, highlight)}
    </Tag>
  );
}
