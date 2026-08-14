import Link from "next/link";
import { Code2, Briefcase, PenLine } from "lucide-react";

import { DescriptionText } from "@/components/text";

const quickLinks = [
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// lucide-react ships no brand/logo icons (removed upstream), so each
// platform gets a generic icon that fits its purpose instead.
const connectLinks = [
  { href: "https://github.com/Pranav-Rustagi", label: "GitHub", icon: Code2 },
  {
    href: "https://www.linkedin.com/in/pranav-rustagi/",
    label: "LinkedIn",
    icon: Briefcase,
  },
  { href: "https://dev.to/pranav-rustagi", label: "Dev.to", icon: PenLine },
];

/** Server component footer: quick links, connect links, and a copyright bar.
 * External links open in a new tab with `rel="noreferrer"`. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-alt">
      <div className="container flex flex-col gap-8 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-text">Quick Links</h2>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-muted outline-none transition-colors hover:text-text focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-text">Connect</h2>
            <nav className="flex flex-col gap-2">
              {connectLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-muted outline-none transition-colors hover:text-text focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <link.icon className="size-4" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <DescriptionText>Copyright © {year} CSSly</DescriptionText>
          <DescriptionText>All designs created with pure HTML & CSS</DescriptionText>
        </div>
      </div>
    </footer>
  );
}
