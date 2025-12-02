"use client";

import Link from "next/link";
import { FaHome, FaImages, FaLayerGroup, FaInfoCircle, FaEnvelope, FaGithub, FaLinkedin, FaDev, FaLock, FaFileContract, FaSitemap } from "react-icons/fa";

const Footer = () =>{
    return (
        <footer className="text-primary bg-light border-t border-t-border-light dark:text-light dark:bg-secondary dark:border-border-dark">
            <div className="mx-auto py-12 px-8">
                <div className="flex justify-around mb-10">
                    <div>
                        <h3 className="font-bold mb-4 text-xl flex items-center gap-2">Quick Links</h3>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="#home" className="flex items-center gap-2"><FaHome size={16} />Home</Link></li>
                            <li><Link href="/gallery/" className="flex items-center gap-2"><FaImages size={16} />Gallery</Link></li>
                            <li><Link href="/collections/" className="flex items-center gap-2"><FaLayerGroup size={16} />Collections</Link></li>
                            <li><Link href="/about/" className="flex items-center gap-2"><FaInfoCircle size={16} />About</Link></li>
                            <li><Link href="mailto:contact@cssly.com" className="flex items-center gap-2"><FaEnvelope size={16} />Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4 text-xl flex items-center gap-2">Meet the Developer</h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <Link href="https://github.com/Pranav-Rustagi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><FaGithub size={16} />GitHub</Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/in/pranav-rustagi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><FaLinkedin size={16} />LinkedIn</Link>
                            </li>
                            <li>
                                <Link href="http://dev.to/pranav-rustagi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><FaDev size={16} />Dev.to</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4 text-xl flex items-center gap-2">Other</h3>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="/privacy/" className="flex items-center gap-2"><FaLock size={16} />Privacy Policy</Link></li>
                            <li><Link href="/terms/" className="flex items-center gap-2"><FaFileContract size={16} />Terms of Service</Link></li>
                            <li><Link href="/sitemap/" className="flex items-center gap-2"><FaSitemap size={16} />Sitemap</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-between mt-8 pt-8 px-16 border-t border-t-border-light text-sm text-center dark:border-t-border-dark">
                    <span>Copyright &copy; {new Date().getFullYear()} cssly | All rights reserved</span>
                    <span>All designs created with pure HTML & CSS.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
