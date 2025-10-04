
import React from 'react';

const skills = {
    "Business Development": ["Pipeline tracking", "Deal execution", "Strategic partnership identification", "Customer relationship management", "Market analysis", "Opportunity assessment"],
    "Technical & Analytical": ["Data analysis and reporting", "Product management methodologies", "Process optimization", "Performance metrics tracking"],
    "Leadership & Communication": ["Cross-functional collaboration", "Stakeholder engagement", "Presentation and negotiation", "Customer obsession mindset"]
};

const SkillCategory: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
    <div className="mb-6">
        <h4 className="font-bold text-slate-200 mb-2">{title}</h4>
        <div className="flex flex-wrap gap-2">
            {items.map((skill, index) => (
                <div key={index} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    {skill}
                </div>
            ))}
        </div>
    </div>
);

const Skills: React.FC = () => {
    return (
        <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Core Competencies">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Skills</h2>
            </div>
            <div>
                {Object.entries(skills).map(([category, items]) => (
                    <SkillCategory key={category} title={category} items={items} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
