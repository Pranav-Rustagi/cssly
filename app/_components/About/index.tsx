"use client";

import { Button, Section } from "@/components";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


const About = () => {
    return (
        <Section type="primary">
            <div className="mb-12">
                <div className="flex gap-6 mb-10">
                    <h2 className="text-5xl font-black">
                        About
                    </h2>
                    <h2 className="text-5xl font-semibold text-decorative font-mono">
                        CSSly
                    </h2>
                </div>
                <p className="text-lg text-primary dark:text-light opacity-80 mx-auto">
                    CSSly is a small, focused space dedicated to exploring what can be created using only <span className="font-semibold text-decorative dark:text-decorative-light">HTML and CSS</span>. No shortcuts, no frameworks, no JavaScript—just the <span className="font-semibold text-decorative dark:text-decorative-light">fundamentals</span> pushed in unusual and unexpected directions. It's a place where simple <span className="font-semibold text-decorative dark:text-decorative-light">building blocks</span> turn into <span className="font-semibold text-decorative dark:text-decorative-light">visuals, ideas, and experiments</span> that don't always follow the rules… and that's the point.
                    <br />
                    <br />
                    If you're curious about what convinced a grown adult to turn stray ideas and free time into a <span className="font-semibold text-decorative dark:text-decorative-light">“pure CSS art lab”</span> <br /><span className="font-semibold text-decorative dark:text-decorative-light">(or want to know who that grown adult is)</span>, you might enjoy what's behind the button.
                </p>
            </div>

            <Link href="/about">
                <Button>
                    Read More
                    <FaArrowRight className="inline-block ml-2" />
                </Button>
            </Link>
        </Section>
    );
};

export default About;
