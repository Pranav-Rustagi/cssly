"use client";

import Image from "next/image";
import Link from "next/link";

const Support = () => {
    return (
        <section id="support" className="w-full bg-light-2 dark:bg-primary-2 py-48 px-8">
            <div className="max-w-[1400px] mx-auto px-40">
                <div className="mb-12">
                    <div className="flex gap-6 mb-10">
                        <h2 className="text-5xl font-black text-primary dark:text-light">
                            Support
                        </h2>
                        <h2 className="text-5xl font-semibold text-decorative font-mono">
                            CSSly
                        </h2>
                    </div>
                    <p className="text-lg text-primary dark:text-light opacity-80 mx-auto">
                        If you've enjoyed exploring the creations and experiments on CSSly, consider supporting the project. Your support helps fuel more creative exploration, experimentation, and the weird wonderful ideas that push the boundaries of <span className="font-semibold text-decorative dark:text-decorative-light">pure CSS</span>. Every contribution, no matter how small, goes toward keeping this <span className="font-semibold text-decorative dark:text-decorative-light">creative lab</span> alive and thriving.
                        <br />
                        <br />
                        <span className="font-semibold text-decorative dark:text-decorative-light">Buy me a coffee</span> and help make the next batch of CSS experiments possible. Let's continue building <span className="font-semibold text-decorative dark:text-decorative-light">the impossible with only CSS</span>.
                    </p>
                </div>

                <Link
                    href="https://buymeacoffee.com/pranav_rustagi"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg px-10 py-4 rounded-full inline-flex bg-decorative-light"
                >
                    <Image src="/bmc-button.svg" alt="Buy Me A Coffee" width={0} height={0} className="h-8 w-auto" />
                </Link>
            </div>
        </section>
    );
};

export default Support;
