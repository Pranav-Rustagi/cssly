import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";

const navLinks = [
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg">
      <div className="container flex flex-wrap items-center justify-between gap-4 py-5 px-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-3xl font-bold text-accent outline-none md:text-4xl focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Image src="/logo.png" alt="" width={40} height={40} priority />
          CSSly
        </Link>
        <div className="flex flex-1 items-center justify-end gap-4 md:gap-8">
          <nav
            className="hidden flex-wrap items-center gap-4 md:flex md:gap-8"
            aria-label="Main navigation"
          >
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
          <MobileNav links={navLinks} />
        </div>
      </div>
    </header>
  );
}
