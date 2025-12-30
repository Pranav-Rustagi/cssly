interface SectionProps {
    children: React.ReactNode;
    type?: "primary" | "secondary";
}

const Section = ({ children, type = "primary" }: SectionProps) => {
    const bgClass = type === "primary" ? "bg-light dark:bg-primary" : "bg-light-2 dark:bg-primary-2";
    return (
        <section className={`w-full py-24 px-12 md:p-48 text-primary dark:text-light ${bgClass} overflow-x-hidden`}>
            <div className="max-w-[1400px] mx-auto">
                {children}
            </div>
        </section>
    );
};

export default Section;