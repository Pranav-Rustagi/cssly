interface ButtonProps {
    children: React.ReactNode | string;
    onClick?: () => void;
    className?: string;
}

const Button = ({ children, onClick, className = "" }: ButtonProps) => {
    return (
        <button
            className={`bg-decorative text-white px-12 py-4 text-base font-bold rounded-full cursor-pointer tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
            style={{ boxShadow: "0 5px 16px rgba(99, 102, 241, 0.5)" }}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;
