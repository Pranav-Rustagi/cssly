import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { THEME_COLOR_META_ID, THEME_COLORS } from "@/lib/theme";

// Production domain for resolving per-page canonical URLs and OG images.
// Override with NEXT_PUBLIC_SITE_URL for preview deployments.
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://cssly.vercel.app"),
  title: "cssly",
  description: "cssly",
};

// Blocking, synchronous theme init — runs before first paint so there is no
// dark-flash on load. Reads localStorage.theme, falls back to system
// preference, and guards against a blocked/unavailable localStorage. Also
// keeps the theme-color meta (id below) in sync so browser chrome matches.
const themeInitScript = `(function(){var t=null;try{t=localStorage.getItem("theme");}catch(e){}if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.setAttribute("data-theme",t);var m=document.getElementById("${THEME_COLOR_META_ID}");if(m)m.setAttribute("content",t==="dark"?"${THEME_COLORS.dark}":"${THEME_COLORS.light}");})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        {/* Theme-color meta must precede the init script so the script can look it up by id. */}
        <meta
          id={THEME_COLOR_META_ID}
          name="theme-color"
          content={THEME_COLORS.light}
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <style>{`:root{color-scheme:light dark}[data-theme=light]{color-scheme:light}[data-theme=dark]{color-scheme:dark}`}</style>
      </head>
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
