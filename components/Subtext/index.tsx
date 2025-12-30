interface SubtextProps {
    children?: React.ReactNode;
    className?: string
}

const Subtext = ({ children, className = '' }: SubtextProps) => {
    return (
        <p className={`text-lg opacity-80 ${className}`}>
            {children}
        </p>
    );
};

export default Subtext;