
import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Education">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Education</h2>
        </div>
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
             <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="Expected Graduation: Apr 2026">Apr 2026</header>
            <div className="z-10 sm:col-span-6">
                 <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                        <span className="inline-block font-bold">BMS College of Commerce and Management</span>
                    </div>
                    <div>
                        <div className="text-slate-400" aria-hidden="true">Bachelor of Business Administration (BBA)</div>
                    </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                    <strong>Relevant Coursework:</strong> Business Strategy, Marketing Management, Data Analytics, Operations Management, Financial Analysis
                </p>
            </div>
        </div>
    </section>
  );
};

export default Education;
