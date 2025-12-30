"use client";

import Link from "next/link";
import { FaHome, FaImages, FaLayerGroup, FaInfoCircle, FaEnvelope, FaGithub, FaLinkedin, FaDev, FaLock, FaFileContract, FaSitemap } from "react-icons/fa";


const FooterSection = ({ title, links }: { title: string; links: { href: string; label: string; icon: React.ReactNode }[] }) => {
    return (
        <div>
            <h3 className="font-bold mb-4 text-lg md:text-xl flex items-center gap-2">{title}</h3>
            <ul className="flex flex-col gap-3">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} className="flex items-center gap-2 text-xs md:text-sm md:text-base">
                            {link.icon}
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="text-primary bg-light border-t border-t-border-light dark:text-light dark:bg-secondary dark:border-border-dark">
            <div className="mx-auto py-24 pb-8 px-8 max-w-[1400px]">
                <div className="flex flex-wrap gap-10 md:justify-around mb-10">

                    <FooterSection
                        title="Quick Links"
                        links={[
                            { href: "/gallery/", label: "Gallery", icon: <FaImages size={16} /> },
                            { href: "/collections/", label: "Collections", icon: <FaLayerGroup size={16} /> },
                            { href: "/about/", label: "About", icon: <FaInfoCircle size={16} /> },
                            { href: "mailto:    pranav001100@gmail.com", label: "Contact", icon: <FaEnvelope size={16} /> },
                        ]}
                    />

                    <FooterSection
                        title="Connect"
                        links={[
                            { href: "https://github.com/Pranav-Rustagi", label: "GitHub", icon: <FaGithub size={16} /> },
                            { href: "https://www.linkedin.com/in/pranav-rustagi/", label: "LinkedIn", icon: <FaLinkedin size={16} /> },
                            // { href: "http://dev.to/pranav-rustagi", label: "Dev.to", icon: <FaDev size={16} /> },
                        ]}
                    />

                    <FooterSection
                        title="Other Links"
                        links={[
                            { href: "/privacy/", label: "Privacy Policy", icon: <FaLock size={16} /> },
                            { href: "/terms/", label: "Terms of Service", icon: <FaFileContract size={16} /> },
                            // { href: "/sitemap.xml", label: "Sitemap", icon: <FaSitemap size={16} /> }
                        ]}
                    />
                </div>

                <div className="flex flex-col-reverse md:flex-row justify-between mt-16 pt-8 lg:px-16 border-t border-t-border-light text-xs md:text-sm text-center dark:border-t-border-dark gap-4">
                    <div>
                        <span>Copyright &copy; {new Date().getFullYear()} CSSly</span>
                    </div>

                    <div>
                        <span>All designs created with pure HTML & CSS</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
