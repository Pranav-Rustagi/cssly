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

interface MobileNavProps {
  links: { href: string; label: string }[];
}

export function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    [
      "flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium outline-none transition-colors",
      "focus-visible:ring-2 focus-visible:ring-accent",
      pathname === href
        ? "bg-bg-alt text-accent"
        : "text-text hover:bg-bg-alt hover:text-accent",
    ].join(" ");

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
      <SheetContent side="right" className="bg-bg text-text">
        <SheetTitle className="sr-only">Navigation</SheetTitle>

        <div className="flex items-center gap-2 border-b border-border px-4 py-5 font-mono text-2xl font-bold text-accent">
          <Image src="/logo.png" alt="" width={32} height={32} />
          CSSly
        </div>

        <nav className="flex flex-col gap-1 p-3" aria-label="Main navigation">
          {links.map((link) => {
            const Icon = iconByHref[link.href];
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className={linkClass(link.href)}
              >
                {Icon ? <Icon className="size-4" /> : null}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-border p-3">
          <nav className="flex flex-col gap-1" aria-label="Policies">
            {secondaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-text-muted outline-none transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
              >
                <link.icon className="size-4" />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
