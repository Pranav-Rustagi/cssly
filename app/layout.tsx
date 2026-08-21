import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { THEME_COLOR_META_ID, THEME_COLORS } from "@/lib/theme";
import { SITE_URL } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const title = "CSSly | Pure HTML & CSS Designs";
const description =
  "A collection of beautiful, responsive, and accessible web designs built using only HTML and CSS. Perfect for inspiration and learning.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    type: "website",
    siteName: "CSSly",
    url: "/",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const themeInitScript = `(function(){var t=null;try{t=localStorage.getItem("theme");}catch(e){}if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.setAttribute("data-theme",t);var m=document.getElementById("${THEME_COLOR_META_ID}");if(m)m.setAttribute("content",t==="dark"?"${THEME_COLORS.dark}":"${THEME_COLORS.light}");})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        {/* Must precede the init script below, which looks it up by id. */}
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
          <SiteHeader />
          <main className="flex flex-1 flex-col">{children}</main>
          <SiteFooter />
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
