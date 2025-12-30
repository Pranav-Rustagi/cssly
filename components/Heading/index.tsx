interface HeadingProps {
    text: string | string[];
    className?: string;
    containerClassName?: string;
}

export const Heading = ({ text, className = "", containerClassName = "" } : HeadingProps) => {
    const texts = Array.isArray(text) ? text : [text];

    return (
        <div className={`flex flex-wrap flex-row justify-start md:justify-center items-center gap-2 mb-5 ${containerClassName}`}>
            {
                texts.map((text, index) => {
                    const textColor = text === "CSSly" ? "text-decorative font-mono" : "text-primary dark:text-light";

                    return (
                        <h1
                            key={index}
                            className={`${textColor} text-3xl md:text-5xl lg:text-6xl font-black text-center ${className}`}
                        >
                            {text}
                        </h1>
                    )
                })
            }
        </div>
    );
};

export default Heading;