import type { Metadata } from "next";

import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { DescriptionText } from "@/components/text";

export const metadata: Metadata = {
  title: "Terms of Service — CSSly",
  description:
    "The terms covering use of CSSly's code and artworks, including the CC BY 4.0 licence and attribution requirements.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Section>
      <div className="flex flex-col gap-16 md:gap-20">
        <div className="flex flex-col gap-4">
          <Heading
            as="h1"
            text="Terms of Service"
            highlight={["Terms"]}
            className="text-3xl font-bold md:text-4xl lg:text-5xl"
          />
          <p className="text-sm text-text-muted">Last updated: 20 August 2026</p>
        </div>

        <div className="flex flex-col gap-4">
          <Heading
            as="h2"
            text="Overview"
            className="text-xl font-bold md:text-2xl lg:text-3xl"
          />
          <DescriptionText>
            CSSly is a personal gallery of HTML and CSS artworks. These
            terms cover how the site&apos;s code and its artworks may be
            used, and what to expect if you contribute a piece.
          </DescriptionText>
        </div>

        <div className="flex flex-col gap-4">
          <Heading
            as="h2"
            text="Acceptance of Terms"
            className="text-xl font-bold md:text-2xl lg:text-3xl"
          />
          <DescriptionText>
            By using CSSly, you accept these terms. If you don&apos;t agree
            with them, please don&apos;t use the site.
          </DescriptionText>
        </div>

        <div className="flex flex-col gap-4">
          <Heading
            as="h2"
            text="Licensing"
            className="text-xl font-bold md:text-2xl lg:text-3xl"
          />
          <DescriptionText>
            The site&apos;s code is licensed under the{" "}
            <strong>MIT License</strong> (see <code>LICENSE</code> in the
            repository). The artworks themselves are licensed separately
            under <strong>CC BY 4.0</strong> (see{" "}
            <code>LICENSE-ARTWORKS</code>).
          </DescriptionText>
        </div>

        <div className="flex flex-col gap-4">
          <Heading
            as="h2"
            text="Using the Artworks"
            className="text-xl font-bold md:text-2xl lg:text-3xl"
          />
          <DescriptionText>
            CC BY 4.0 lets you share, remix and adapt any artwork here —
            even commercially — as long as you give appropriate credit,
            link back to the licence, and indicate if you made changes.
          </DescriptionText>
          <DescriptionText>
            It doesn&apos;t have to be long. Link the title to the piece and
            the licence name to the licence, and that covers it:
          </DescriptionText>
          <pre className="whitespace-pre-wrap wrap-break-word rounded-lg border border-border bg-bg-alt p-4 text-sm text-text">
            <code>
              {`<a href="https://cssly.vercel.app/art/aurora-veil">Aurora Veil</a> by Pranav Rustagi, <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>`}
            </code>
          </pre>
          <DescriptionText>
            Add &quot;(modified)&quot; after the title if you changed it. In
            plain text, where you can&apos;t link, write it as{" "}
            <code>
              &quot;Aurora Veil&quot; by Pranav Rustagi, CC BY 4.0
            </code>{" "}
            and include the two URLs nearby.
          </DescriptionText>
        </div>

        <div className="flex flex-col gap-4">
          <Heading
            as="h2"
            text="Contributing Artwork"
            className="text-xl font-bold md:text-2xl lg:text-3xl"
          />
          <DescriptionText>
            If you submit an artwork to CSSly, you keep the copyright on
            it. Submitting it licenses the work to everyone under CC BY
            4.0, the same as the rest of the gallery. By submitting, you
            confirm it&apos;s your own original work and that you have the
            right to license it.
          </DescriptionText>
          <DescriptionText>
            CC BY 4.0 is irrevocable — once granted, it can&apos;t be
            withdrawn later, even if the piece is removed from the site.
          </DescriptionText>
        </div>

        <div className="flex flex-col gap-4">
          <Heading
            as="h2"
            text="Content Removal"
            className="text-xl font-bold md:text-2xl lg:text-3xl"
          />
          <DescriptionText>
            I can remove any artwork from the gallery at any time — for a
            rights complaint, or simply because it no longer fits — but a
            licence already granted on it still stands.
          </DescriptionText>
        </div>

        <div className="flex flex-col gap-4">
          <Heading
            as="h2"
            text="Disclaimer"
            className="text-xl font-bold md:text-2xl lg:text-3xl"
          />
          <DescriptionText>
            The site is provided as is, with no guarantee it will always
            work or stay available, and no liability for problems arising
            from using it.
          </DescriptionText>
        </div>

        <div className="flex flex-col gap-4">
          <Heading
            as="h2"
            text="Changes to These Terms"
            className="text-xl font-bold md:text-2xl lg:text-3xl"
          />
          <DescriptionText>
            These terms may be updated from time to time, and the &quot;Last
            updated&quot; date above will change to reflect that.
          </DescriptionText>
        </div>
      </div>
    </Section>
  );
}
