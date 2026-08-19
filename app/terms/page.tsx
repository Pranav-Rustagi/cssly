import type { Metadata } from "next";

import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { DescriptionText } from "@/components/text";

export const metadata: Metadata = {
  title: "Terms — cssly",
  description: "The terms of use for cssly's code and artworks.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Section>
      <div className="flex flex-col gap-4">
        <Heading as="h1" text="Terms" highlight={["Terms"]} />
        <DescriptionText>
          CSSly is a personal art gallery, not a product with a legal team —
          so these terms are short on purpose.
        </DescriptionText>

        <Heading as="h2" text="Code vs. artwork" />
        <DescriptionText>
          The site&apos;s code is licensed under the{" "}
          <strong>MIT licence</strong> (see{" "}
          <code>LICENSE</code> in the repo). The artworks themselves — every
          piece in the gallery — are licensed separately under{" "}
          <strong>CC BY 4.0</strong> (see <code>LICENSE-ARTWORKS</code>).
        </DescriptionText>

        <Heading as="h2" text="What CC BY 4.0 means" />
        <DescriptionText>
          You&apos;re free to reuse, remix and adapt any artwork here — even
          commercially — as long as you give appropriate credit to its
          creator, link back to the licence, and note if you changed
          anything. That&apos;s the whole deal: attribution in, freedom to
          use it out.
        </DescriptionText>
        <DescriptionText>
          A working attribution looks like this — keep that last sentence
          only if you actually changed something, and drop it if you used the
          piece as-is:
        </DescriptionText>
        <pre className="overflow-x-auto rounded-lg border border-border bg-bg-alt p-4 text-sm text-text">
          <code>
            &quot;Aurora Veil&quot; by Pranav Rustagi, licensed under CC BY 4.0
            (https://creativecommons.org/licenses/by/4.0/). Original:
            https://cssly.vercel.app/art/aurora-veil. Adapted from the
            original.
          </code>
        </pre>

        <Heading as="h2" text="Contributing" />
        <DescriptionText>
          If you submit an artwork to CSSly, you keep the copyright on it.
          Submitting means you&apos;re licensing it to everyone under CC BY
          4.0, the same as the rest of the gallery — and by submitting,
          you&apos;re confirming it&apos;s your own original work and that
          you actually have the right to license it. I take that on trust,
          so please don&apos;t send me someone else&apos;s work.
        </DescriptionText>
        <DescriptionText>
          One thing worth knowing before you submit: CC BY 4.0 can&apos;t be
          taken back once it&apos;s granted, even if the piece is later
          removed from the site. And I can remove any artwork from the
          gallery at any time — for a rights complaint, or just because it
          doesn&apos;t fit — though the licence already granted on it stands
          either way.
        </DescriptionText>

        <Heading as="h2" text="No guarantees" />
        <DescriptionText>
          The site itself is provided as is — I can&apos;t promise it&apos;ll
          always work or stay available, and I&apos;m not liable if
          something breaks while you&apos;re using it.
        </DescriptionText>
      </div>
    </Section>
  );
}
