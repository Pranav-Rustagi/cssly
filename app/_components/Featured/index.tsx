'use client';

import Link from 'next/link';
import designsData from '@/designs/data.json';
import { Button, DesignCard, Heading, Section, Subtext } from '@/components';

interface Design {
    id: number;
    title: string;
    description: string;
    image: string;
    highlighted: boolean;
    date: string;
    tags: string[];
}

const Featured = () => {
    const featuredDesigns: Design[] = designsData
        .filter((design: Design) => design.highlighted)
        .sort((a: Design, b: Design) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    return (
        <Section type="secondary">
            <div className="text-center mb-8 md:mb-16">

                <Heading text="Featured Designs" containerClassName="justify-center!" />

                <Subtext>
                    Discover the best of our design collection
                </Subtext>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {featuredDesigns.map((design) => (
                    <DesignCard key={design.id} design={design} />
                ))}
            </div>

            <div className="text-center">
                <Link href="/gallery">
                    <Button>
                        View Full Gallery
                    </Button>
                </Link>
            </div>
        </Section>
    );
};

export default Featured;
