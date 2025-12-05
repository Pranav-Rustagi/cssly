"use client";

import PipelineCard from "@/components/PipelineCard";

interface PipelineDesign {
  id: number;
  title: string;
  description: string;
  status: "In Progress" | "Planned" | "Concept";
  difficulty?: "Easy" | "Medium" | "Hard";
  tags?: string[];
  emoji?: string;
}

const Upcoming = () => {
  const pipelineDesigns: PipelineDesign[] = [
    {
      id: 1,
      title: "Panda",
      description: "A cute and cuddly panda character crafted entirely with HTML and CSS.",
      status: "Planned",
      difficulty: "Medium",
      tags: ["Character", "CSS Art", "Animal"],
      emoji: "🐼",
    },
  ];

  return (
    <section className="w-full bg-light dark:bg-primary py-48 px-8">
      <div className="max-w-[1400px] mx-auto px-40">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-primary dark:text-light mb-4">
            In The Works
          </h2>
          <p className="text-lg text-primary dark:text-light opacity-80">
            Designs I'm currently working on and planning to create
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pipelineDesigns.map((design) => (
            <PipelineCard
              key={design.id}
              id={design.id}
              title={design.title}
              description={design.description}
              status={design.status}
              difficulty={design.difficulty}
              tags={design.tags}
              emoji={design.emoji}
            />
          ))}
        </div>

        {pipelineDesigns.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-primary dark:text-light opacity-60">
              No designs in the pipeline right now. Stay tuned!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Upcoming;
