"use client";

import { DescriptionText, Heading, Section } from "@/components";
import Image from "next/image";
import Link from "next/link";

const Support = () => {
    return (
        <Section type="secondary">
            <div className="mb-8 md:mb-12">
                <Heading
                    text={["Support", "CSSly"]}
                    containerClassName="md:justify-start!"
                />

                <DescriptionText>
                    If you've enjoyed exploring the creations and experiments on CSSly, consider supporting the project. Your support helps fuel more creative exploration, experimentation, and the weird wonderful ideas that push the boundaries of <span className="font-semibold text-decorative dark:text-decorative-light">pure CSS</span>. Every contribution, no matter how small, goes toward keeping this <span className="font-semibold text-decorative dark:text-decorative-light">creative lab</span> alive and thriving.
                    <br />
                    <br />
                    <span className="font-semibold text-decorative dark:text-decorative-light">Buy me a coffee</span> and help make the next batch of CSS experiments possible. Let's continue building <span className="font-semibold text-decorative dark:text-decorative-light">the impossible with only CSS</span>.
                </DescriptionText>
            </div>

            <Link
                href="https://buymeacoffee.com/pranav_rustagi"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg px-7 py-3 md:px-10 md:py-4 rounded-full inline-flex bg-decorative-light"
            >
                <Image src="/bmc-button.svg" alt="Buy Me A Coffee" width={0} height={0} className="h-6 md:h-8 w-auto" />
            </Link>
        </Section>
    );
};

export default Support;
