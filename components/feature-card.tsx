import type { LucideIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DescriptionText } from "@/components/text";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** One tile in the "How CSSly stands out" grid: icon, title, description. */
export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <Icon className="size-5" />
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <DescriptionText>{description}</DescriptionText>
      </CardContent>
    </Card>
  );
}
