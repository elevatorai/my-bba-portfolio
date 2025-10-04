
import React from 'react';

const projects = [
    {
        title: "Customer Experience Enhancement Project",
        context: "Walmart Internship",
        description: [
            "Conducted comprehensive analysis of customer review patterns and pain points.",
            "Designed and implemented feature specifications for improved review accessibility.",
            "Collaborated with technical teams to ensure seamless integration and user adoption."
        ],
    },
    {
        title: "Business Strategy Capstone",
        context: "BMS College",
        description: [
            "Analyzed market trends and competitive landscape to develop a strategic business plan for a mock startup.",
            "Demonstrated business acumen, analytical skills, and leadership through a comprehensive final presentation to a panel of faculty."
        ]
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Projects and initiatives">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
            </div>
            <div>
                <ul className="group/list">
                    {projects.map((project, index) => (
                        <li key={index} className="mb-12">
                            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <div className="z-10 sm:col-span-8">
                                    <h3 className="font-medium leading-snug text-slate-200">
                                        <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                                            <span className="font-bold">{project.title}</span>
                                        </div>
                                        <div>
                                            <div className="text-slate-500 text-sm font-semibold" aria-hidden="true">{project.context}</div>
                                        </div>
                                    </h3>
                                    <ul className="mt-2 list-disc pl-5 space-y-2 text-sm leading-normal">
                                        {project.description.map((desc, i) => <li key={i}>{desc}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Projects;
