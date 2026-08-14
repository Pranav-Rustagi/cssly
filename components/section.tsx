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
      className={cn(
        "w-full overflow-x-hidden text-text",
        type === "secondary" ? "bg-bg-alt" : "bg-bg",
        "py-36 px-6 md:py-48 md:px-24 lg:px-48",
        className
      )}
    >
      <div className={cn("container", innerClassName)}>{children}</div>
    </section>
  );
}
