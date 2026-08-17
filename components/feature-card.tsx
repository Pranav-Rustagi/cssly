import type { LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/card";
import { DescriptionText } from "@/components/text";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="gap-0 p-8 shadow-md transition-all duration-300 hover:shadow-lg motion-safe:hover:-translate-y-2">
      <Icon className="mb-2 size-6 text-accent md:mb-4 md:size-9" />
      <h3 className="mb-2 text-lg font-bold text-text md:mb-3 md:text-xl">{title}</h3>
      <DescriptionText className="text-xs md:text-sm">{description}</DescriptionText>
    </Card>
  );
}
