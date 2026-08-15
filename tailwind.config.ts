import type { Config } from "tailwindcss";

// Theme STRUCTURE only — token names, radius scale, shadows,
// screens. Colour entries point at CSS variables; the values themselves
// live in app/globals.css under :root and [data-theme="dark"], since a
// TS config is evaluated at build time and can't react to the data-theme
// attribute at runtime.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        bg: "var(--color-bg)",
        "bg-alt": "var(--color-bg-alt)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--accent-foreground)",
        },
        "accent-hover": "var(--color-accent-hover)",
        "accent-solid": {
          DEFAULT: "var(--color-accent-solid)",
          foreground: "var(--color-accent-solid-foreground)",
        },

        // subtle neutral hover/active background for shadcn primitives
        // (dropdown-menu, select, …) — never the brand accent above
        "menu-accent": {
          DEFAULT: "var(--menu-accent)",
          foreground: "var(--menu-accent-foreground)",
        },

        // shadcn variable names, kept in sync with the CSSly semantic
        // layer in globals.css (never a literal palette of their own)
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        input: "var(--input)",
        ring: "var(--ring)",
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        accent: "var(--shadow-accent)",
      },
    },
  },
};

export default config;
