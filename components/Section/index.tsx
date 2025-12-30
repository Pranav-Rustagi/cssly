interface SectionProps {
    children: React.ReactNode;
    type?: "primary" | "secondary";
    className?: string;
}

const Section = ({ children, type = "primary", className = "" }: SectionProps) => {
    const bgClass = type === "primary" ? "bg-light dark:bg-primary" : "bg-light-2 dark:bg-primary-2";
    return (
        <section className={`w-full py-36 px-6 md:px-24 md:py-48 lg:px-48 text-primary dark:text-light ${bgClass} overflow-x-hidden ${className}`}>
            <div className="max-w-[1400px] mx-auto">
                {children}
            </div>
        </section>
    );
};

export default Section;