import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { Subtext, DescriptionText } from "@/components/text";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const swatches = [
  { name: "bg", className: "bg-bg" },
  { name: "bg-alt", className: "bg-bg-alt" },
  { name: "surface", className: "bg-surface" },
  { name: "border", className: "bg-border" },
  { name: "text", className: "bg-text" },
  { name: "text-muted", className: "bg-text-muted" },
  { name: "accent", className: "bg-accent" },
  { name: "accent-hover", className: "bg-accent-hover" },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-10 py-10">
      <Section>
        <div className="flex items-center justify-between">
          <Heading as="h1" text="cssly design system" highlight={["design system"]} />
          <ThemeToggle />
        </div>
        <Subtext>Token, theming, and primitive showcase — issue #3.</Subtext>
      </Section>

      <Section>
        <Heading as="h2" text="Colour tokens" />
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {swatches.map((s) => (
            <div key={s.name} className="flex flex-col gap-2">
              <div className={`h-16 rounded-md border border-border ${s.className}`} />
              <DescriptionText>{s.name}</DescriptionText>
            </div>
          ))}
        </div>
      </Section>

      <Section type="secondary">
        <Heading as="h2" text="Text primitives" />
        <Subtext>This is a Subtext component.</Subtext>
        <DescriptionText>
          This is a DescriptionText component, used for longer-form body
          copy that sits below headings and subtext.
        </DescriptionText>
      </Section>

      <Section>
        <Heading as="h2" text="Buttons" />
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
          <Button variant="accent">Accent</Button>
        </div>
      </Section>
    </main>
  );
}
