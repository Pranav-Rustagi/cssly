import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components";

export const metadata: Metadata = {
    title: "CSSly | Pure HTML & CSS Designs",
    description: "A collection of beautiful, responsive, and accessible web designs built using only HTML and CSS. Perfect for inspiration and learning.",
};

export default function RootLayout({ children } : Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" data-theme="dark">
            <body className="antialiased overflow-x-hidden text-primary dark:text-light">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
