import Link from "next/link";
import { Compass, Home } from "lucide-react";

import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { Subtext } from "@/components/text";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="min-h-screen flex items-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <Heading as="h1" text="404: no CSS for that" highlight={["404:"]} />
        <Subtext className="max-w-xl">
          This page never rendered, or the artwork moved on. Nothing broke — it just isn&apos;t here.
        </Subtext>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Button
            render={
              <Link href="/gallery">
                <Compass className="size-4" /> Back to the gallery
              </Link>
            }
            nativeButton={false}
            variant="accent"
            size="lg"
          />
          <Button
            render={
              <Link href="/">
                <Home className="size-4" /> Home
              </Link>
            }
            nativeButton={false}
            variant="outline"
            size="lg"
          />
        </div>
      </div>
    </Section>
  );
}
