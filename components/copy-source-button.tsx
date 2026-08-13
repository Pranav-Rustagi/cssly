"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

interface CopySourceButtonProps {
  /** Raw file contents to copy — never the highlighted markup. */
  source: string;
  /** What this button copies, for the button label and the toast (eg. "HTML"). */
  label: string;
}

/** Copies raw source to the clipboard, with a toast either way. Small and
 * client-only on purpose — the surrounding source viewer stays a server
 * component so the shiki highlighting costs zero client JS. */
export function CopySourceButton({ source, label }: CopySourceButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(source);
      setCopied(true);
      toast.success(`${label} copied`);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error(`Couldn't copy ${label} — try selecting it manually`);
    }
  }

  return (
    <Button type="button" variant="outline" size="sm" onClick={handleCopy}>
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      Copy {label}
    </Button>
  );
}
