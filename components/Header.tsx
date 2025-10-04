
import React from 'react';
import { LinkedInIcon, EmailIcon, LocationIcon, PhoneIcon } from './icons/ContactIcons';

const Header: React.FC = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Purushottam Swami</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Aspiring Product Manager | BBA Student
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build customer-centric products and drive growth through data-driven strategies.
        </p>
        
        <nav className="mt-16 w-full" aria-label="contact links">
            <ul className="flex flex-col space-y-4">
                <li>
                    <a href="mailto:puru.shravan@gmail.com" className="group flex items-center py-3">
                        <EmailIcon />
                        <span className="ml-4 text-sm font-medium text-slate-200 group-hover:text-teal-300">puru.shravan@gmail.com</span>
                    </a>
                </li>
                 <li>
                    <a href="tel:+919898989898" className="group flex items-center py-3">
                        <PhoneIcon />
                        <span className="ml-4 text-sm font-medium text-slate-200 group-hover:text-teal-300">+91-9898989898</span>
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/puru.shravan" target="_blank" rel="noopener noreferrer" className="group flex items-center py-3">
                        <LinkedInIcon />
                        <span className="ml-4 text-sm font-medium text-slate-200 group-hover:text-teal-300">linkedin.com/in/puru.shravan</span>
                    </a>
                </li>
                <li>
                    <div className="group flex items-center py-3">
                        <LocationIcon />
                        <span className="ml-4 text-sm font-medium text-slate-200">Bengaluru</span>
                    </div>
                </li>
            </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
