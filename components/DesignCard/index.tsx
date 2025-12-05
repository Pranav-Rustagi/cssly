import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface Design {
    id: number;
    title: string;
    description: string;
    image: string;
    highlighted: boolean;
    date: string;
    tags: string[];
}

interface DesignCardProps {
    design: Design;
}

const DesignCard = ({ design }: DesignCardProps) => {
    return (
        <div className="bg-white dark:bg-secondary rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
            <div className="h-48 bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-white text-5xl font-bold opacity-50">
                        {design.tags[0]?.charAt(0).toUpperCase()}
                    </div>
                </div>
            </div>

            <div className="p-6 pb-10 flex flex-col grow">
                <h3 className="text-xl font-bold text-primary dark:text-light mb-2">
                    {design.title}
                </h3>

                <p className="text-primary dark:text-light opacity-70 mb-8 text-sm line-clamp-2">
                    {design.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                    {design.tags.map((tag) => (
                        <span
                            key={tag}
                            className="border border-decorative text-decorative text-xs px-4 py-2 rounded-full font-bold"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <Link href={`/design/${design.id}`} className="mt-auto mr-auto">
                    <button className="flex gap-2 items-center bg-decorative text-white px-4 py-2 text-base font-bold rounded-lg cursor-pointer transition-all duration-300 hover:bg-opacity-90">
                        View Design
                        <FaArrowRight />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default DesignCard;