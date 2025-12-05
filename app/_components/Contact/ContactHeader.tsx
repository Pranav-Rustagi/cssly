const ContactHeader = () => {
    return (
        <div className="text-center mb-16">
            <div className="flex gap-6 mb-4 justify-center items-end">
                <h2 className="text-5xl md:text-6xl font-black text-primary dark:text-light">Contact</h2>
                <h2 className="text-5xl md:text-6xl font-semibold text-decorative font-mono">Say Hello</h2>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-primary dark:text-light opacity-85 mx-auto max-w-2xl">
                Have a design request, found something neat, or want to share appreciation? <br />Use the form to
                request a design or send a short message — I read everything.
            </p>
        </div>
    );
};

export default ContactHeader;
