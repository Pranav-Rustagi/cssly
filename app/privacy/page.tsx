import type { Metadata } from "next";

import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { DescriptionText } from "@/components/text";

export const metadata: Metadata = {
  title: "Privacy — cssly",
  description: "What cssly collects, and what it doesn't.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Section>
      <div className="flex flex-col gap-4">
        <Heading as="h1" text="Privacy" highlight={["Privacy"]} />
        <DescriptionText>
          CSSly is a fully static site. There&apos;s no analytics, no
          cookies, no accounts, and no database — nothing here logs who
          visits or what they look at.
        </DescriptionText>

        <Heading as="h2" text="The contact form" />
        <DescriptionText>
          The one exception is the <strong>contact form</strong>. When you
          submit it, your name, email address and message — with the
          &quot;Type&quot; you picked folded into the message text — are sent
          to{" "}
          <a
            href="https://www.emailjs.com/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-accent"
          >
            EmailJS
          </a>
          , a third-party service that delivers it to me as an email. That
          data passes through EmailJS&apos;s systems to make that delivery
          happen — see{" "}
          <a
            href="https://www.emailjs.com/legal/privacy-policy/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-accent"
          >
            EmailJS&apos;s privacy policy
          </a>{" "}
          for how they handle it. If you don&apos;t use the form, none of this
          applies to you.
        </DescriptionText>

        <Heading as="h2" text="The artworks" />
        <DescriptionText>
          Every artwork renders in a sandboxed iframe served straight from
          this repo. Browsing the gallery doesn&apos;t trigger any
          third-party requests.
        </DescriptionText>
      </div>
    </Section>
  );
}
