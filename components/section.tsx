import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  type?: "primary" | "secondary";
  spacing?: "default" | "compact";
  className?: string;
  innerClassName?: string;
}

export function Section({
  children,
  type = "primary",
  spacing = "default",
  className,
  innerClassName,
}: SectionProps) {
  const verticalPadding =
    spacing === "compact" ? "py-16 md:py-24" : "py-36 md:py-48";

  return (
    <section
      className={cn(
        "w-full overflow-x-hidden text-text",
        type === "secondary" ? "bg-bg-alt" : "bg-bg",
        verticalPadding,
        "px-6 md:px-24 lg:px-32 xl:px-48",
        className
      )}
    >
      <div className={cn("container", innerClassName)}>{children}</div>
    </section>
  );
}
