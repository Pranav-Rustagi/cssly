const Hero = () => {
    return (
        <section id="home" className="w-full text-primary bg-light py-48 px-8 text-center relative dark:bg-primary dark:text-light">
            <div className=" max-w-[1400px] mx-auto flex flex-col items-center gap-5">
                <h1 className="text-7xl font-black mb-5">
                    Welcome to
                </h1>
                <h1 className="text-7xl font-black mb-5 text-decorative">
                    CSSLY
                </h1>
                <p className="text-xl font-normal mb-8 opacity-90">
                    Explore beautiful designs crafted with pure HTML and CSS
                </p>
                <button
                    className="bg-decorative text-white px-12 py-4 text-base font-bold rounded-full cursor-pointer tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{ boxShadow: '0 5px 16px rgba(99, 102, 241, 0.5)' }}
                >
                    Explore
                </button>
            </div>
        </section>
    );
}

export default Hero;