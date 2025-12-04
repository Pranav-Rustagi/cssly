"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
    return (
        <section className="w-full bg-light dark:bg-primary py-48 px-8">
            <div className="max-w-[1400px] mx-auto px-40">
                <div className="mb-12">
                    <div className="flex gap-6 mb-10">
                        <h2 className="text-5xl font-black text-primary dark:text-light">
                            About
                        </h2>
                        <h2 className="text-5xl font-semibold text-decorative font-mono">
                            CSSly
                        </h2>
                    </div>
                    <p className="text-lg text-primary dark:text-light opacity-80 mx-auto">
                        CSSly is a small, focused space dedicated to exploring what can be created using only <span className="font-semibold text-decorative">HTML and CSS</span>. No shortcuts, no frameworks, no JavaScript—just the <span className="font-semibold text-decorative">fundamentals</span> pushed in unusual and unexpected directions. It's a place where simple <span className="font-semibold text-decorative">building blocks</span> turn into <span className="font-semibold text-decorative">visuals, ideas, and experiments</span> that don't always follow the rules… and that's the point.
                        <br />
                        <br />
                        If you're curious about what convinced a grown adult to turn stray ideas and free time into a <span className="font-semibold text-decorative">“pure CSS art lab”</span> <br /><span className="font-semibold text-decorative">(or want to know who that grown adult is)</span>, you might enjoy what's behind the button.
                    </p>
                </div>

                <Link href="/about">
                    <button className="bg-decorative text-white px-12 py-4 text-base font-bold rounded-full cursor-pointer tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        style={{ boxShadow: "0 5px 16px rgba(99, 102, 241, 0.5)" }}
                    >
                        Read More
                        <FaArrowRight className="inline-block ml-2" />
                    </button>
                </Link>
            </div>
            <div>

            </div>
        </section>
    );
};

export default About;
