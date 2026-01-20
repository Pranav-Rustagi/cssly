interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
    return (
        <div className="bg-white dark:bg-secondary rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div className="mb-2 md:mb-4 text-2xl md:text-4xl text-decorative">
                {icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-primary dark:text-light mb-2 md:mb-3">
                {title}
            </h3>
            <p className="text-primary dark:text-light opacity-70 text-xs md:text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default FeatureCard;
