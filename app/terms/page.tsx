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
          creator. That&apos;s the whole deal: attribution in, freedom to use
          it out.
        </DescriptionText>

        <Heading as="h2" text="Contributing" />
        <DescriptionText>
          If you submit an artwork to CSSly, you keep the copyright on it.
          Submitting means you&apos;re licensing it to everyone under CC BY
          4.0, the same as the rest of the gallery.
        </DescriptionText>
      </div>
    </Section>
  );
}
