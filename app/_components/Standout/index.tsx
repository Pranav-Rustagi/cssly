'use client';

import { FeatureCard, Heading, Section } from '@/components';
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
        <Section type="secondary">
            <div className="flex gap-6 mb-4 md:mb-10">
                <Heading
                    text={["How", "CSSly", "stands", "out"]}
                    containerClassName="justify-start!"
                />
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </Section>
    );
};

export default StandoutSection;
