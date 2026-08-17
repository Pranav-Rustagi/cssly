"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

interface CopySourceButtonProps {
  source: string;
  label: string;
}

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
