import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  type?: "primary" | "secondary";
  className?: string;
  innerClassName?: string;
}

/** Full-bleed section wrapper with a centred, max-width inner container. */
export function Section({
  children,
  type = "primary",
  className,
  innerClassName,
}: SectionProps) {
  return (
    <section
      className={cn(type === "secondary" ? "bg-bg-alt" : "bg-bg", className)}
    >
      <div className={cn("container", innerClassName)}>{children}</div>
    </section>
  );
}
