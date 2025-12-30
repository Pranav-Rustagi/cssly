interface SubtextProps {
    children?: React.ReactNode;
    className?: string
}

const Subtext = ({ children, className = '' }: SubtextProps) => {
    return (
        <p className={`text-center text-base md:text-xl ${className}`}>
            {children}
        </p>
    );
};

export default Subtext;