'use client';

import Link from 'next/link';
import DesignCard from '@/components/DesignCard';
import designsData from '@/designs/data.json';

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
    <section className="w-full bg-light-2 dark:bg-primary-2 py-24 px-8">
      <div className="max-w-[1400px] mx-auto px-40">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-primary dark:text-light mb-4">
            Featured Designs
          </h2>
          <p className="text-lg text-primary dark:text-light opacity-80">
            Discover our latest and most popular designs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredDesigns.map((design) => (
            <DesignCard key={design.id} design={design} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery">
            <button className="bg-decorative text-white px-12 py-4 text-base font-bold rounded-full cursor-pointer tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ boxShadow: '0 5px 16px rgba(99, 102, 241, 0.5)' }}
            >
              View Full Gallery
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
