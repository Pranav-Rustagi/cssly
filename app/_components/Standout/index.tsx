'use client';

import { FeatureCard } from '@/components';
import { FaCode, FaPalette, FaLightbulb, FaWandMagicSparkles } from 'react-icons/fa6';

const StandoutSection = () => {
    const features = [
        {
            icon: <FaPalette />,
            title: 'Original pieces',
            description: 'Geometric scenes, playful characters, illusions, and micro-animations made purely with markup and styles.'
        },
        {
            icon: <FaCode />,
            title: 'Readable code',
            description: 'Each artwork includes the actual HTML/CSS so you can peek, copy, and learn.'
        },
        {
            icon: <FaWandMagicSparkles />,
            title: 'Low-friction creativity',
            description: 'No installs, no build steps — just open, read, enjoy.'
        },
        {
            icon: <FaLightbulb />,
            title: 'Inspiration, not tutorials',
            description: 'These are demonstrations of possibility: look, tinker, remix.'
        }
    ];

    return (
        <section className="w-full bg-light-2 dark:bg-primary-2 py-48 px-8">
            <div className="max-w-[1400px] mx-auto px-40">
                <div className="mb-20">
                    <div className="flex gap-6 mb-10">
                        <h2 className="text-5xl font-black text-primary dark:text-light">
                            How
                        </h2>
                        <h2 className="text-5xl font-semibold text-decorative font-mono">
                            CSSly
                        </h2>
                        <h2 className="text-5xl font-black text-primary dark:text-light">
                            stands out?
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StandoutSection;
