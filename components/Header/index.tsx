"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";

const Header: React.FC = () => {
    const toggleTheme = () => {
        try {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
        } catch (e) {
            console.error("Failed to toggle theme:", e);
        }
    }

    useEffect(() => {
            try {
                const saved = localStorage.getItem("theme");
                if (saved === "light" || saved === "dark") {
                    document.documentElement.setAttribute("data-theme", saved);
                    return;
                }
            } catch (e) {
                console.error("Failed to load theme from localStorage:", e);
            }
    
            const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
            document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
        }, []);

    return (
        <nav className="sticky top-0 z-50 text-primary bg-light border-b border-b-border-light dark:text-light dark:bg-primary dark:border-border-dark">
            <div className="flex justify-between items-center max-w-[1400px] mx-auto py-5 px-8">
                <div className="text-decorative font-bold text-4xl font-mono">
                    <a href="#home">cssly</a>
                </div>
                <ul className="flex gap-8 items-center">
                    <li>
                        <Link href="/gallery/">Gallery</Link>
                    </li>
                    <li>
                        <Link href="/collections/">Collections</Link>
                    </li>
                    <li>
                        <Link href="/about/">About</Link>
                    </li>
                    <li>
                        <Link href="/contact/">Contact</Link>
                    </li>
                    <li>
                        <button
                            onClick={toggleTheme}
                            className="flex items-center justify-center bg-primary w-10 h-10 text-light dark:bg-light dark:text-primary rounded-full hover:-rotate-30 transition-all cursor-pointer"
                        >
                            <FaMoon size={20} className="hidden dark:inline-flex" />
                            <FaSun size={24} className="dark:hidden" />
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;