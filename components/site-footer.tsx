import Link from "next/link";
import { Images, Info, Mail, Code2, Briefcase, PenLine } from "lucide-react";

import { DescriptionText } from "@/components/text";

const quickLinks = [
  { href: "/gallery", label: "Gallery", icon: Images },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Mail },
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
  // Publication year — fixed literal, not computed at runtime, to prevent stale values after year boundary
  const year = 2026;

  return (
    <footer className="border-t border-border bg-bg-alt">
      <div className="container flex flex-col gap-8 px-4 py-24 pb-8 md:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h2 id="footer-quick-links" className="text-lg font-bold text-text md:text-xl">Quick Links</h2>
            <nav className="flex flex-col gap-3" aria-labelledby="footer-quick-links">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm text-text-muted outline-none transition-colors hover:text-text focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <link.icon className="size-4" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <h2 id="footer-connect" className="text-lg font-bold text-text md:text-xl">Connect</h2>
            <nav className="flex flex-col gap-3" aria-labelledby="footer-connect">
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

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-8 text-center text-xs md:flex-row md:items-center md:justify-between md:text-sm">
          <DescriptionText className="text-xs md:text-sm">Copyright © {year} CSSly</DescriptionText>
          <DescriptionText className="text-xs md:text-sm">All designs created with pure HTML & CSS</DescriptionText>
        </div>
      </div>
    </footer>
  );
}
