import Link from "next/link";
import { Images, Info, Mail, Lock, FileText } from "lucide-react";

import { DevToIcon, GitHubIcon, LinkedInIcon } from "@/components/brand-icons";

const quickLinks = [
  { href: "/gallery", label: "Gallery", icon: Images },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Mail },
];

const connectLinks = [
  { href: "https://github.com/Pranav-Rustagi", label: "GitHub", icon: GitHubIcon },
  {
    href: "https://www.linkedin.com/in/pranav-rustagi/",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  { href: "https://dev.to/pranav-rustagi", label: "Dev.to", icon: DevToIcon },
];

const otherLinks = [
  { href: "/privacy", label: "Privacy Policy", icon: Lock },
  { href: "/terms", label: "Terms of Service", icon: FileText },
];

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="border-t border-border bg-footer text-text">
      <div className="container px-8 py-24 pb-8">
        <div className="flex flex-wrap gap-10 md:justify-around mb-10">
          <div>
            <h2 id="footer-quick-links" className="flex items-center gap-2 text-lg font-bold text-text md:text-xl mb-4">Quick Links</h2>
            <nav className="flex flex-col gap-3" aria-labelledby="footer-quick-links">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 text-xs md:text-sm lg:text-base text-text outline-none transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <link.icon className="size-4" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 id="footer-connect" className="flex items-center gap-2 text-lg font-bold text-text md:text-xl mb-4">Connect</h2>
            <nav className="flex flex-col gap-3" aria-labelledby="footer-connect">
              {connectLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs md:text-sm lg:text-base text-text outline-none transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <link.icon className="size-4" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 id="footer-other-links" className="flex items-center gap-2 text-lg font-bold text-text md:text-xl mb-4">Other Links</h2>
            <nav className="flex flex-col gap-3" aria-labelledby="footer-other-links">
              {otherLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 text-xs md:text-sm lg:text-base text-text outline-none transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <link.icon className="size-4" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse justify-between gap-4 border-t border-border pt-8 text-center text-xs md:flex-row md:text-sm lg:px-16">
          <div><span>Copyright © {year} CSSly</span></div>
          <div><span>All designs created with pure HTML & CSS</span></div>
        </div>
      </div>
    </footer>
  );
}
