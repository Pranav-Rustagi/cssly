import { pageMetadata } from "@/lib/site";

import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { DescriptionText } from "@/components/text";
import { GitHubIcon, LinkedInIcon, DevToIcon } from "@/components/brand-icons";

export const metadata = pageMetadata({
  title: "About — cssly",
  description:
    "The story behind cssly and the person building it.",
  path: "/about",
});

const socialLinks = [
  {
    href: "https://github.com/Pranav-Rustagi",
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: "https://www.linkedin.com/in/pranav-rustagi/",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  { href: "https://dev.to/pranav-rustagi", label: "Dev.to", icon: DevToIcon },
];

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="flex flex-col gap-4">
          <Heading
            as="h1"
            text="CSSly - HTML & CSS, nothing else"
            highlight={["CSSly"]}
          />
          <DescriptionText>
            CSSly is a gallery of visual experiments built only with HTML and
            CSS — no images, no JavaScript, no libraries, and no external
            assets. It&apos;s a space where the simplest tools of the web are
            pushed to their expressive limits to create shapes, motion,
            textures, patterns, characters, and small atmospheric scenes. By
            working within these constraints, each piece highlights the raw,
            elegant potential of pure CSS and HTML, showing how minimal
            ingredients can produce surprisingly intricate results.
          </DescriptionText>
          <DescriptionText>
            Think of it like a mini art museum made entirely from code — a
            carefully curated collection where each work is crafted by hand and
            presented as a self-contained piece of digital art. Every item lives
            in a single HTML file, relying solely on styling to form its colors,
            structure, rhythm, or sense of movement. This approach gives the
            gallery a quiet, cohesive identity: simple on the surface, but full
            of detail for anyone who chooses to look closely.
          </DescriptionText>
          <DescriptionText>
            Each creation includes its source code, a window into the artistic
            process. Visitors can explore how the pieces are constructed,
            appreciate the techniques behind them, and gain insight into the
            craftsmanship involved. CSSly is, above all, a home for your artwork
            — a place where code becomes a medium and where each fragment of CSS
            reflects your own vision and style.
          </DescriptionText>
        </div>
      </Section>

      <Section type="secondary">
        <div className="flex flex-col gap-4">
          <Heading
            as="h2"
            text="From Notepad to Gallery"
            highlight={["Gallery"]}
          />
          <DescriptionText>
            CSSly grew from a simple habit of mine: opening a blank file and
            creating something just for fun. No setup, no framework, no goal —
            just curiosity, boredom, and the satisfaction of building something
            from almost nothing.
          </DescriptionText>
          <DescriptionText>
            I&apos;ve always loved exploring what plain HTML and CSS can do when
            you push them a little. Over time, these small experiments piled up,
            each one a tiny reminder that creativity doesn&apos;t need complex
            tools. Eventually, I realized they deserved a home — a place where
            others could browse them, enjoy them, get inspired, and rediscover
            the charm of the basics.
          </DescriptionText>
          <DescriptionText>
            CSSly is that place: a humble, playful collection of what&apos;s
            possible when you work with constraints and let imagination do the
            rest.
          </DescriptionText>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-4">
          <Heading as="h2" text="The Face behind" highlight={["Face"]} />
          <DescriptionText>
            Hi, I&apos;m Pranav Rustagi — a full-stack developer with a strong
            interest in frontend creativity and building things that feel
            simple, thoughtful, and fun. I enjoy experimenting with ideas,
            exploring what&apos;s possible with minimal tools, and creating
            projects that reflect curiosity rather than complexity.
          </DescriptionText>
          <DescriptionText>
            Beyond small experiments, I work across full-stack development,
            improving interfaces, solving practical problems, and constantly
            learning new techniques. I like keeping things clean, lightweight,
            and expressive — both in design and in code. If you want to explore
            more of my work or connect with me, you&apos;ll find all my links
            below.
          </DescriptionText>
        </div>
        <div className="mt-8 flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="inline-flex items-center gap-2 text-text outline-none transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
            >
              <link.icon className="size-6" />
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
