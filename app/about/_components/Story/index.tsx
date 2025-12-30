const StorySection = () => {
    return (
        <section className="w-full bg-light-2 dark:bg-primary-2 py-48 px-8">
            <div className="max-w-[1400px] mx-auto px-40">
                <div className="mb-12">
                    <div className="flex gap-4 mb-10">
                        <h2 className="text-5xl font-black text-primary dark:text-light">
                            From Notepad to
                        </h2>
                        <h2 className="text-5xl font-black text-decorative">
                            Gallery
                        </h2>
                    </div>
                    <p className="text-lg text-primary dark:text-light mx-auto">
                        CSSly grew from a simple habit of mine: opening a blank file and creating something just for fun. No setup, no framework, no goal — just curiosity, boredom, and the satisfaction of building something from almost nothing.
                        <br />
                        <br />
                        I&apos;ve always loved exploring what plain HTML and CSS can do when you push them a little. Over time, these small experiments piled up, each one a tiny reminder that creativity doesn&apos;t need complex tools. Eventually, I realized they deserved a home — a place where others could browse them, enjoy them, get inspired, and rediscover the charm of the basics.
                        <br />
                        <br />
                        CSSly is that place: a humble, playful collection of what&apos;s possible when you work with constraints and let imagination do the rest.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default StorySection;