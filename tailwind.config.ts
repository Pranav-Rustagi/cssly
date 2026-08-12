import type { Config } from "tailwindcss";

// Theme STRUCTURE only — token names, radius scale, shadows,
// screens. Colour entries point at CSS variables; the values themselves
// live in app/globals.css under :root and [data-theme="dark"], since a
// TS config is evaluated at build time and can't react to the data-theme
// attribute at runtime. Populating the full palette is a follow-up.
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
        surface: "var(--color-surface)",
        accent: "var(--color-accent)",
        text: "var(--color-text)",
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
      },
    },
  },
};

export default config;
