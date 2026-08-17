import type { JSX } from "react";

import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

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
  highlight?: string[];
  className?: string;
}

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

export function Heading({ as, text, highlight = [], className }: HeadingProps) {
  const Tag = as as unknown as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cn("text-text", sizeByLevel[as], className)}>
      {renderWithHighlights(text, highlight)}
    </Tag>
  );
}
