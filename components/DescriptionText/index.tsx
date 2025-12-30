interface DiscriptionTextProps {
    children?: React.ReactNode;
    className?: string
}

const DescriptionText = ({ children, className = '' }: DiscriptionTextProps) => {
    return (
        <p className={`text-base md:text-lg text-primary dark:text-light mx-auto ${className}`}>
            {children}
        </p>
    );
};

export default DescriptionText;