import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DescriptionText } from "@/components/text";
import { cn } from "@/lib/utils";

export interface PipelineEntry {
  title: string;
  description: string;
  status: string;
  difficulty: string;
  tags: string[];
  emoji: string;
}

// Status/difficulty colour is derived from semantic tokens only — accent for
// the "further along" end of each scale, text-muted for the rest — never a
// stock Tailwind palette.
const statusClass: Record<string, string> = {
  Done: "border-transparent bg-accent text-accent-foreground",
  "In Progress": "border-accent text-accent",
  Planned: "border-border text-text-muted",
};

const difficultyClass: Record<string, string> = {
  Easy: "border-border text-text-muted",
  Medium: "border-accent text-accent",
  Hard: "border-transparent bg-accent text-accent-foreground",
};

interface PipelineCardProps {
  entry: PipelineEntry;
}

/** One card in the "In the works" pipeline list. */
export function PipelineCard({ entry }: PipelineCardProps) {
  return (
    <Card className="[--card-spacing:--spacing(6)] transition-all duration-300 hover:shadow-xl motion-safe:hover:-translate-y-2">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl" aria-hidden>
              {entry.emoji}
            </span>
            <CardTitle>{entry.title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <DescriptionText>{entry.description}</DescriptionText>
        <div className="flex flex-wrap gap-1.5">
          <Badge
            variant="outline"
            className={cn(statusClass[entry.status] ?? "border-border text-text-muted")}
          >
            {entry.status}
          </Badge>
          <Badge
            variant="outline"
            className={cn(
              difficultyClass[entry.difficulty] ?? "border-border text-text-muted",
            )}
          >
            {entry.difficulty}
          </Badge>
          {entry.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
