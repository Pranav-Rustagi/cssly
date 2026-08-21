import Link from "next/link";

import { pageMetadata } from "@/lib/site";
import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { DescriptionText } from "@/components/text";

export const metadata = pageMetadata({
  title: "Privacy Policy — CSSly",
  description:
    "How CSSly handles data: what's collected through the contact form, what's stored locally, and which third-party services are involved.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section>
      <div className="flex flex-col gap-16 md:gap-20">
        <div className="flex flex-col gap-4">
          <Heading
            as="h1"
            text="Privacy Policy"
            highlight={["Privacy"]}
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
            CSSly is a personal gallery of HTML and CSS artworks. This policy
            covers what happens to information when you browse the site and
            when you send me a message.
          </DescriptionText>
        </div>

        <div className="flex flex-col gap-4">
          <Heading
            as="h2"
            text="Information I Collect"
            className="text-xl font-bold md:text-2xl lg:text-3xl"
          />
          <DescriptionText>
            Nothing is collected automatically. There are no accounts, no
            analytics, no advertising, no tracking pixels and no database —
            I don&apos;t build a profile of who visits or what they look at.
            The only information I ever receive is what you choose to submit
            through the contact form.
          </DescriptionText>
        </div>

        <div className="flex flex-col gap-4">
          <Heading
            as="h2"
            text="Local Storage"
            className="text-xl font-bold md:text-2xl lg:text-3xl"
          />
          <DescriptionText>
            The site saves your light or dark theme preference in your
            browser&apos;s <code>localStorage</code> under the key{" "}
            <code>theme</code>. This is not a cookie — it never leaves your
            device, it&apos;s never transmitted to me or anyone else, and
            clearing your browser&apos;s storage removes it.
          </DescriptionText>
        </div>

        <div className="flex flex-col gap-4">
          <Heading
            as="h2"
            text="Contact Form"
            className="text-xl font-bold md:text-2xl lg:text-3xl"
          />
          <DescriptionText>
            Submitting the contact form sends your name, email address and
            message to me, with the &quot;Type&quot; you picked folded into
            the message text. I use this only to reply to you — it&apos;s
            not used for anything else.
          </DescriptionText>
        </div>

        <div className="flex flex-col gap-4">
          <Heading
            as="h2"
            text="Third-Party Services"
            className="text-xl font-bold md:text-2xl lg:text-3xl"
          />
          <DescriptionText>
            <a
              href="https://www.emailjs.com/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-accent"
            >
              EmailJS
            </a>{" "}
            delivers the contact form as an email to me, so your message
            passes through their systems on the way to my inbox. See{" "}
            <a
              href="https://www.emailjs.com/legal/privacy-policy/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-accent"
            >
              EmailJS&apos;s privacy policy
            </a>{" "}
            for how they handle that data.
          </DescriptionText>
          <DescriptionText>
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-accent"
            >
              Vercel
            </a>{" "}
            hosts the site and keeps standard server request logs — IP
            address, timestamp, requested URL — as a byproduct of serving
            pages, on my behalf as the hosting provider. A mirror of the site
            is also deployed on{" "}
            <a
              href="https://www.netlify.com/privacy/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-accent"
            >
              Netlify
            </a>
            , which keeps equivalent logs for anything served from there.
          </DescriptionText>
          <DescriptionText>
            Every artwork renders in a sandboxed iframe served from this
            site, so simply browsing the gallery doesn&apos;t trigger any
            third-party requests.
          </DescriptionText>
        </div>

        <div className="flex flex-col gap-4">
          <Heading
            as="h2"
            text="Data Retention"
            className="text-xl font-bold md:text-2xl lg:text-3xl"
          />
          <DescriptionText>
            Contact form messages stay in my inbox and are kept indefinitely
            unless you ask me to delete them — there&apos;s no set retention
            schedule.
          </DescriptionText>
        </div>

        <div className="flex flex-col gap-4">
          <Heading
            as="h2"
            text="Your Choices"
            className="text-xl font-bold md:text-2xl lg:text-3xl"
          />
          <DescriptionText>
            If you&apos;d like a submitted message deleted, send a note
            through the{" "}
            <Link href="/contact" className="underline underline-offset-2 hover:text-accent">
              contact form
            </Link>{" "}
            and I&apos;ll remove it. Your theme preference can be cleared at
            any time by clearing your browser&apos;s storage.
          </DescriptionText>
        </div>

        <div className="flex flex-col gap-4">
          <Heading
            as="h2"
            text="Changes to This Policy"
            className="text-xl font-bold md:text-2xl lg:text-3xl"
          />
          <DescriptionText>
            If anything material changes, I&apos;ll reflect it here and
            update the &quot;Last updated&quot; date above.
          </DescriptionText>
        </div>

        <div className="flex flex-col gap-4">
          <Heading
            as="h2"
            text="Contact"
            className="text-xl font-bold md:text-2xl lg:text-3xl"
          />
          <DescriptionText>
            Questions about this policy can be sent through the{" "}
            <Link href="/contact" className="underline underline-offset-2 hover:text-accent">
              contact form
            </Link>
            .
          </DescriptionText>
        </div>
      </div>
    </Section>
  );
}
