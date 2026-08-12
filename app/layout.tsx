import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "cssly",
  description: "cssly",
};

// Blocking, synchronous theme init — runs before first paint so there is no
// dark-flash on load. Reads localStorage.theme, falls back to system
// preference, and guards against a blocked/unavailable localStorage.
const themeInitScript = `(function(){var t=null;try{t=localStorage.getItem("theme");}catch(e){}if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.setAttribute("data-theme",t);})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
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
