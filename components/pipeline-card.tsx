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
// the "further along" end of each scale, text-muted for the rest, and the
// destructive token for "Hard" — never a stock Tailwind palette.
const statusClass: Record<string, string> = {
  Done: "bg-accent-solid text-accent-solid-foreground",
  "In Progress": "bg-accent/10 text-accent",
  Planned: "bg-bg-alt text-text-muted",
};

const difficultyClass: Record<string, string> = {
  Easy: "text-text-muted",
  Medium: "text-accent",
  Hard: "text-destructive",
};

interface PipelineCardProps {
  entry: PipelineEntry;
}

/** One card in the "In the works" pipeline list. Restores the reference's
 * media band: a gradient region with decorative blurred circles, the
 * artwork's emoji, and an absolutely-positioned status badge. */
export function PipelineCard({ entry }: PipelineCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border-2 border-accent/20 bg-bg-alt transition-all duration-300 hover:border-accent hover:shadow-2xl motion-safe:hover:-translate-y-3">
      <div className="relative flex h-60 items-center justify-center overflow-hidden bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5">
        <div className="absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20">
          <div className="absolute -top-6 -right-6 size-32 rounded-full bg-accent blur-3xl" />
          <div className="absolute -bottom-6 -left-6 size-28 rounded-full bg-accent/50 blur-3xl" />
        </div>
        <div
          className="text-7xl transition-transform duration-300 group-hover:scale-110"
          aria-hidden
        >
          {entry.emoji}
        </div>
        <Badge
          variant="outline"
          className={cn(
            "absolute top-4 right-4 border-transparent font-semibold",
            statusClass[entry.status] ?? "bg-bg-alt text-text-muted",
          )}
        >
          {entry.status}
        </Badge>
      </div>

      <div className="flex grow flex-col gap-4 p-6 text-text">
        <div>
          <h3 className="mb-2 text-2xl font-black transition-colors duration-300 group-hover:text-accent">
            {entry.title}
          </h3>
          <DescriptionText className="text-sm line-clamp-2">{entry.description}</DescriptionText>
        </div>

        {entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto text-xs font-bold">
          <span>Difficulty:&nbsp;</span>
          <span
            className={cn(
              "uppercase tracking-wide",
              difficultyClass[entry.difficulty] ?? "text-text-muted",
            )}
          >
            {entry.difficulty}
          </span>
        </div>
      </div>
    </div>
  );
}
