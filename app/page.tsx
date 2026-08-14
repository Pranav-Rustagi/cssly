import Link from "next/link";
import { ArrowRight, Palette, Code, Wand2, Lightbulb, Coffee } from "lucide-react";

import { getAllArtworks } from "@/lib/artworks";
import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { Subtext, DescriptionText } from "@/components/text";
import { Button } from "@/components/ui/button";
import { ArtworkCard } from "@/components/artwork-card";
import { FeatureCard } from "@/components/feature-card";
import { PipelineCard, type PipelineEntry } from "@/components/pipeline-card";

const features = [
  {
    icon: Palette,
    title: "Original pieces",
    description:
      "Geometric scenes, playful characters, illusions, and micro-animations made purely with markup and styles.",
  },
  {
    icon: Code,
    title: "Readable code",
    description:
      "Each artwork includes the actual HTML/CSS so you can peek, copy, and learn.",
  },
  {
    icon: Wand2,
    title: "Low-friction creativity",
    description: "No installs, no build steps — just open, read, enjoy.",
  },
  {
    icon: Lightbulb,
    title: "Inspiration, not tutorials",
    description: "These are demonstrations of possibility: look, tinker, remix.",
  },
];

const pipeline: PipelineEntry[] = [
  {
    title: "Panda",
    description:
      "A cute and cuddly panda character crafted entirely with HTML and CSS.",
    status: "Planned",
    difficulty: "Medium",
    tags: ["Character", "CSS Art", "Animal"],
    emoji: "🐼",
  },
];

// Server component: no hooks, state, or event handlers, so no "use client".
export default function Home() {
  const featured = getAllArtworks()
    .filter((artwork) => artwork.featured)
    .slice(0, 3);

  return (
    <>
      <Section>
        <div className="flex flex-col items-center gap-4 text-center">
          <Heading
            as="h1"
            text="Welcome to CSSly"
            highlight={["CSSly"]}
            className="text-4xl md:text-6xl lg:text-7xl"
          />
          <Subtext className="max-w-xl text-lg">
            Explore beautiful designs crafted with pure HTML and CSS
          </Subtext>
          <Button
            render={<Link href="/gallery">Explore</Link>}
            variant="accent"
            size="lg"
            className="mt-4"
          />
        </div>
      </Section>

      <Section type="secondary">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Heading as="h2" text="Featured Designs" />
            <Subtext className="mt-2">Discover the best of our design collection</Subtext>
          </div>
          <Button render={<Link href="/gallery">View Full Gallery</Link>} variant="outline" />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((artwork) => (
            <ArtworkCard key={artwork.slug} artwork={artwork} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <Heading as="h2" text="About CSSly" highlight={["CSSly"]} />
          <DescriptionText>
            CSSly is a small, focused space dedicated to exploring what can be
            created using only <span className="text-accent">HTML and CSS</span>. No
            shortcuts, no frameworks, no JavaScript—just the{" "}
            <span className="text-accent">fundamentals</span> pushed in unusual and
            unexpected directions. It&apos;s a place where simple{" "}
            <span className="text-accent">building blocks</span> turn into{" "}
            <span className="text-accent">visuals, ideas, and experiments</span> that
            don&apos;t always follow the rules… and that&apos;s the point.
          </DescriptionText>
          <DescriptionText>
            If you&apos;re curious about what convinced a grown adult to turn stray
            ideas and free time into a{" "}
            <span className="text-accent">&quot;pure CSS art lab&quot;</span>{" "}
            <span className="text-accent">(or want to know who that grown adult is)</span>,
            you might enjoy what&apos;s behind the button.
          </DescriptionText>
          <Button
            render={
              <Link href="/about">
                Read More <ArrowRight className="size-4" />
              </Link>
            }
            variant="outline"
            className="mt-2"
          />
        </div>
      </Section>

      <Section type="secondary">
        <Heading as="h2" text="How CSSly stands out" highlight={["CSSly"]} className="text-center" />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section>

      <Section>
        <Heading as="h2" text="In the works" />
        <Subtext className="mt-2">
          Designs I&apos;m currently working on and planning to create
        </Subtext>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pipeline.length > 0 ? (
            pipeline.map((entry) => <PipelineCard key={entry.title} entry={entry} />)
          ) : (
            <DescriptionText>
              No designs in the pipeline right now. Stay tuned!
            </DescriptionText>
          )}
        </div>
      </Section>

      <Section type="secondary">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <Heading as="h2" text="Support CSSly" highlight={["CSSly"]} />
          <DescriptionText>
            If you&apos;ve enjoyed exploring the creations and experiments on CSSly,
            consider supporting the project. Your support helps fuel more creative
            exploration, experimentation, and the weird wonderful ideas that push the
            boundaries of <span className="text-accent">pure CSS</span>. Every
            contribution, no matter how small, goes toward keeping this{" "}
            <span className="text-accent">creative lab</span> alive and thriving.
          </DescriptionText>
          <DescriptionText>
            <span className="text-accent">Buy me a coffee</span> and help make the
            next batch of CSS experiments possible. Let&apos;s continue building{" "}
            <span className="text-accent">the impossible with only CSS</span>.
          </DescriptionText>
          <Button
            render={
              <a
                href="https://buymeacoffee.com/pranav_rustagi"
                target="_blank"
                rel="noreferrer"
              >
                <Coffee className="size-4" />
                Buy me a coffee
              </a>
            }
            variant="accent"
            size="lg"
            className="mt-2"
          />
        </div>
      </Section>
    </>
  );
}
