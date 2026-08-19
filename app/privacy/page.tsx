import type { Metadata } from "next";
import Link from "next/link";

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
        <p className="text-sm text-text-muted">Last updated: 19 August 2026</p>
        <DescriptionText>
          CSSly is a fully static site. There&apos;s no analytics, no
          cookies, no accounts, and no database — I don&apos;t track you or
          build any profile of what you look at.
        </DescriptionText>
        <DescriptionText>
          The one thing stored on your device is your light or dark theme
          choice, saved in your browser&apos;s <code>localStorage</code> under
          the key <code>theme</code>. That&apos;s it — it never leaves your
          device and it&apos;s never sent to me or anyone else.
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
          for how they handle it. If you don&apos;t use the contact form,
          none of this section applies to you.
        </DescriptionText>
        <DescriptionText>
          Submitted messages land in my inbox and stay there — there&apos;s
          no set retention period, so assume it&apos;s kept indefinitely
          until I delete it myself. If you&apos;d rather I didn&apos;t keep
          yours, send a note through the{" "}
          <Link
            href="/contact"
            className="underline underline-offset-2 hover:text-accent"
          >
            contact form
          </Link>{" "}
          and I&apos;ll remove it.
        </DescriptionText>

        <Heading as="h2" text="Hosting" />
        <DescriptionText>
          The site is hosted on{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-accent"
          >
            Vercel
          </a>
          , which keeps the usual server request logs — IP address,
          timestamp, the URL asked for — as a side effect of serving the
          page, on my behalf as the host I chose. I haven&apos;t added
          anything on top of that logging and I don&apos;t go digging
          through it.
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
