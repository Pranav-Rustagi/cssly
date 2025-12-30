interface HeadingProps {
    text: string | string[];
    className?: string;
}

export const Heading = ({ text, className = "" } : HeadingProps) => {
    const texts = Array.isArray(text) ? text : [text];

    return (
        <>
            {
                texts.map((text, index) => {
                    const textColor = text === "CSSly" ? "text-decorative font-mono" : "text-primary dark:text-light";

                    return (
                        <h1
                            key={index}
                            className={`${textColor} text-5xl font-black mb-5 ${className}`}
                        >
                            {text}
                        </h1>
                    )
                })
            }
        </>
    );
};

export default Heading;