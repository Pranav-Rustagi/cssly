import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/** Sticky site header: wordmark, nav links, theme toggle. Server component —
 * `ThemeToggle` is the only client bit and is rendered as a leaf. Nav links
 * wrap on narrow screens instead of hiding behind a breakpoint, so mobile
 * users always have a way to navigate. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg">
      <div className="container flex flex-wrap items-center justify-between gap-4 py-5 px-4 md:px-8">
        <Link
          href="/"
          className="font-mono text-3xl font-bold text-accent outline-none md:text-4xl focus-visible:ring-2 focus-visible:ring-accent"
        >
          CSSly
        </Link>
        <div className="flex flex-1 flex-wrap items-center justify-end gap-4 md:gap-8">
          <nav className="flex flex-wrap items-center gap-4 md:gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text outline-none transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
