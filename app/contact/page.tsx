import type { Metadata } from "next";

import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { DescriptionText } from "@/components/text";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact — cssly",
  description: "Request a design, share a project, or say hello.",
  alternates: { canonical: "/contact" },
};

// Server component: the form's client interactivity lives entirely in
// ContactForm, so this page still prerenders statically.
export default function ContactPage() {
  return (
    <Section spacing="compact">
      <div className="mx-auto max-w-xl">
        <div className="mb-10 flex flex-col items-center gap-2 text-center">
          <Heading as="h1" text="Contact Developer" />
          <p className="font-mono text-accent">&quot;Say Hello&quot;</p>
          <DescriptionText className="mt-4">
            Have a design request, found something neat, or want to share
            appreciation? Use the form to request a design or send a short
            message — I read everything.
          </DescriptionText>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
