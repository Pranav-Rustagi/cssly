const AboutSection = () => {
    return (
        <section className="w-full bg-light dark:bg-primary py-48 px-8">
            <div className="max-w-[1400px] mx-auto px-40">
                <div className="mb-12">
                    <div className="flex gap-6 mb-10">
                        <h2 className="text-5xl font-semibold text-decorative font-mono">
                            CSSly
                        </h2>
                        <h2 className="text-5xl font-black text-primary dark:text-light">
                            — &nbsp;&nbsp;HTML & CSS, nothing else
                        </h2>
                    </div>
                    <p className="text-lg text-primary dark:text-light mx-auto">
                        CSSly is a gallery of visual experiments built only with HTML and CSS — no images, no JavaScript, no libraries, and no external assets. It&apos;s a space where the simplest tools of the web are pushed to their expressive limits to create shapes, motion, textures, patterns, characters, and small atmospheric scenes. By working within these constraints, each piece highlights the raw, elegant potential of pure CSS and HTML, showing how minimal ingredients can produce surprisingly intricate results.
                        <br />
                        <br />
                        Think of it like a mini art museum made entirely from code — a carefully curated collection where each work is crafted by hand and presented as a self-contained piece of digital art. Every item lives in a single HTML file, relying solely on styling to form its colors, structure, rhythm, or sense of movement. This approach gives the gallery a quiet, cohesive identity: simple on the surface, but full of detail for anyone who chooses to look closely.
                        <br />
                        <br />
                        Each creation includes its source code, a window into the artistic process. Visitors can explore how the pieces are constructed, appreciate the techniques behind them, and gain insight into the craftsmanship involved. CSSly is, above all, a home for your artwork — a place where code becomes a medium and where each fragment of CSS reflects your own vision and style.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
