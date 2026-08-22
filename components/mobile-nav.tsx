"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Images, Info, Mail, Lock, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const iconByHref: Record<string, LucideIcon> = {
  "/gallery": Images,
  "/about": Info,
  "/contact": Mail,
};

const secondaryLinks = [
  { href: "/privacy", label: "Privacy Policy", icon: Lock },
  { href: "/terms", label: "Terms of Service", icon: FileText },
];

const linkBase =
  "inline-flex items-center gap-2 font-medium text-text outline-none transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-accent";

interface MobileNavProps {
  links: { href: string; label: string }[];
}

export function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon-lg"
            className="size-10 md:hidden"
            aria-label="Open navigation menu"
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="border-border bg-bg text-text">
        <SheetTitle className="sr-only">Navigation</SheetTitle>

        <div className="flex items-center gap-2 border-b border-border px-6 py-5 font-mono text-3xl font-bold text-accent">
          <Image src="/logo.png" alt="" width={40} height={40} />
          CSSly
        </div>

        <nav
          className="flex flex-col gap-5 px-6 py-6"
          aria-label="Main navigation"
        >
          {links.map((link) => {
            const Icon = iconByHref[link.href];
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`${linkBase} text-base ${
                  pathname === link.href ? "text-accent" : ""
                }`}
              >
                {Icon ? <Icon className="size-4" /> : null}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <nav
          className="mt-auto flex flex-col gap-4 border-t border-border px-6 py-6"
          aria-label="Policies"
        >
          {secondaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`${linkBase} text-sm ${
                pathname === link.href ? "text-accent" : ""
              }`}
            >
              <link.icon className="size-4" />
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
