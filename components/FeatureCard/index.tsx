interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
    return (
        <div className="bg-white dark:bg-secondary rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="mb-4 text-4xl text-decorative">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-primary dark:text-light mb-3">
                {title}
            </h3>
            <p className="text-primary dark:text-light opacity-70 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default FeatureCard;
