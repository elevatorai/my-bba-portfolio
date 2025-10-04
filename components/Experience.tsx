
import React from 'react';

const experiences = [
    {
        role: "Product Manager Intern",
        company: "Walmart",
        date: "May 2025 - Jul 2025",
        description: [
            "Spearheaded development of a customer review analysis feature, enhancing user experience and product discovery capabilities.",
            "Implemented process improvements that increased operational efficiency by 10%, demonstrating strong analytical and problem-solving skills.",
            "Worked closely with engineering, design, and data teams to deliver customer-centric solutions.",
            "Analyzed customer feedback patterns to identify product enhancement opportunities and inform strategic recommendations.",
            "Presented feature specifications and progress updates to senior leadership, ensuring alignment with business objectives."
        ]
    }
]

const Experience: React.FC = () => {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
        </div>
        <div>
            <ol className="group/list">
                {experiences.map((exp, index) => (
                    <li key={index} className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={exp.date}>{exp.date}</header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    <div>
                                        <span className="inline-block font-bold">{exp.role} · {exp.company}</span>
                                    </div>
                                </h3>
                                <ul className="mt-2 list-disc pl-5 space-y-2 text-sm leading-normal">
                                    {exp.description.map((desc, i) => <li key={i}>{desc}</li>)}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    </section>
  );
};

export default Experience;
