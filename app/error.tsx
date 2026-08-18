"use client";

import { RotateCcw } from "lucide-react";

import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { Subtext } from "@/components/text";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <Section className="min-h-screen flex items-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <Heading as="h1" text="Well, that's not pure CSS" highlight={["not"]} />
        <Subtext className="max-w-xl">
          Something snapped on our end. Give it another go — it usually behaves the second time.
        </Subtext>
        {error.digest && (
          <p className="text-sm text-text-muted">Reference: {error.digest}</p>
        )}
        <Button
          onClick={() => retry()}
          variant="accent"
          size="lg"
          className="mt-6"
        >
          <RotateCcw className="size-4" /> Try again
        </Button>
      </div>
    </Section>
  );
}
