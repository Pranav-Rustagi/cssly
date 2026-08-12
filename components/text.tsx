import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface TextProps {
  children: ReactNode;
  className?: string;
}

/** Muted lead-in text, sitting just under a heading. */
export function Subtext({ children, className }: TextProps) {
  return (
    <p className={cn("text-base font-medium text-text-muted", className)}>
      {children}
    </p>
  );
}

/** Longer-form body copy. */
export function DescriptionText({ children, className }: TextProps) {
  return (
    <p className={cn("text-sm leading-relaxed text-text-muted", className)}>
      {children}
    </p>
  );
}
