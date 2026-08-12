import type { JSX } from "react";

import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

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
      <span key={i} className="text-accent">
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
    <Tag className={cn("font-semibold tracking-tight text-text", className)}>
      {renderWithHighlights(text, highlight)}
    </Tag>
  );
}
