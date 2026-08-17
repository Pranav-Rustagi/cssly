"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { THEME_COLOR_META_ID, THEME_COLORS } from "@/lib/theme";

type Theme = "light" | "dark";

function readTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<Theme>(readTheme);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    document
      .getElementById(THEME_COLOR_META_ID)
      ?.setAttribute("content", THEME_COLORS[next]);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage may be blocked; the attribute switch above still applies.
    }
    setTheme(next);
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggle}
      suppressHydrationWarning
      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-text text-bg cursor-pointer outline-none transition-all duration-300 hover:-rotate-30 focus-visible:ring-2 focus-visible:ring-accent"
    >
      <Moon className="size-5 dark:hidden" />
      <Sun className="hidden size-5 dark:block" />
    </button>
  );
}
