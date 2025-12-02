"use client";

import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
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
                        <button className="flex items-center justify-center bg-primary w-10 h-10 text-light dark:bg-light dark:text-primary rounded-full hover:-rotate-30 transition-all cursor-pointer">
                            <FaSun size="24" className="dark:hidden" />
                            <FaMoon size="18" className="hidden dark:inline-block" />
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;