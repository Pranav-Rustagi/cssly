"use client";

import { Button, DescriptionText, Heading, Section } from "@/components";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


const About = () => {
    return (
        <Section type="primary">
            <div className="mb-12">
                <Heading
                    text={["About", "CSSly"]}
                    containerClassName="md:justify-start!"
                />

                <DescriptionText>
                    CSSly is a small, focused space dedicated to exploring what can be created using only <span className="font-semibold text-decorative dark:text-decorative-light">HTML and CSS</span>. No shortcuts, no frameworks, no JavaScript—just the <span className="font-semibold text-decorative dark:text-decorative-light">fundamentals</span> pushed in unusual and unexpected directions. It's a place where simple <span className="font-semibold text-decorative dark:text-decorative-light">building blocks</span> turn into <span className="font-semibold text-decorative dark:text-decorative-light">visuals, ideas, and experiments</span> that don't always follow the rules… and that's the point.
                    <br />
                    <br />
                    If you're curious about what convinced a grown adult to turn stray ideas and free time into a <span className="font-semibold text-decorative dark:text-decorative-light">“pure CSS art lab”</span> <span className="font-semibold text-decorative dark:text-decorative-light">(or want to know who that grown adult is)</span>, you might enjoy what's behind the button.
                </DescriptionText>
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
