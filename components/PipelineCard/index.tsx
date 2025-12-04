import { FaClock, FaFire, FaLightbulb } from "react-icons/fa";

interface PipelineCardProps {
    id: number;
    title: string;
    description: string;
    status: "In Progress" | "Planned" | "Concept";
    difficulty?: "Easy" | "Medium" | "Hard";
    tags?: string[];
    emoji?: string;
}

const PipelineCard = ({
    title,
    description,
    status,
    difficulty = "Medium",
    tags = [],
    emoji = "✨"
}: PipelineCardProps) => {
    const statusConfig = {
        "In Progress": {
            color: "text-orange-500 dark:text-orange-400",
            bgColor: "bg-orange-100 dark:bg-orange-900/30",
            icon: <FaFire className="text-lg" />,
            progressBar: "bg-orange-500",
        },
        "Planned": {
            color: "text-blue-500 dark:text-blue-400",
            bgColor: "bg-blue-100 dark:bg-blue-900/30",
            icon: <FaClock className="text-lg" />,
            progressBar: "bg-blue-500",
        },
        "Concept": {
            color: "text-purple-500 dark:text-purple-400",
            bgColor: "bg-purple-100 dark:bg-purple-900/30",
            icon: <FaLightbulb className="text-lg" />,
            progressBar: "bg-purple-500",
        },
    };

    const difficultyConfig = {
        "Easy": "text-green-600 dark:text-green-400",
        "Medium": "text-yellow-600 dark:text-yellow-400",
        "Hard": "text-red-600 dark:text-red-400",
    };

    const config = statusConfig[status];
    const diffColor = difficultyConfig[difficulty];

    return (
        <div className="group bg-light-2 dark:bg-primary-2 rounded-xl overflow-hidden border-2 border-decorative/20 dark:border-decorative-light/20 hover:border-decorative dark:hover:border-decorative-light transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 flex flex-col h-full">
            <div className="h-60 bg-linear-to-br from-decorative/20 via-decorative/10 to-decorative/5 dark:from-decorative-light/20 dark:via-decorative-light/10 dark:to-decorative-light/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-decorative dark:bg-decorative-light rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-decorative/50 dark:bg-decorative-light/50 rounded-full blur-3xl"></div>
                </div>
                <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                    {emoji}
                </div>
                <div className={`absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold text-xs ${config.bgColor} ${config.color}`}>
                    {config.icon}
                    <span>{status}</span>
                </div>
            </div>

            <div className="p-6 flex flex-col grow gap-4 text-primary dark:text-light">
                <div>
                    <h3 className="text-2xl font-black mb-2 group-hover:text-decorative dark:group-hover:text-decorative-light transition-colors duration-300">
                        {title}
                    </h3>


                    <p className="text-sm opacity-70 mb-4 line-clamp-2">
                        {description}
                    </p>

                </div>


                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-3 py-1 rounded-full bg-decorative/10 dark:bg-decorative-light/10 text-decorative dark:text-decorative-light font-semibold border border-decorative/30 dark:border-decorative-light/30"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}


                <div className="flex items-center justify-between gap-3 mt-auto text-xs font-bold">
                    <div>
                        <span>Difficulty:&nbsp;</span>
                        <span className={`uppercase tracking-wide ${diffColor}`}>{difficulty}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PipelineCard;
