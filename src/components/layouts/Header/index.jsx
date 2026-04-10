import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import logo from '../../../assets/apqec-logo-white.png'

const NAV_LINKS = [
    { label: 'Content Tracks', href: '/#tracks' },
    { label: 'Speakers', href: '/#speakers' },
    { label: 'Schedule', href: '/#schedule' },
    { label: 'Partners', href: '/#partners' },
    { label: 'Company', href: '/#company' },
    { label: 'Our Crew', href: '/#ourcrew' },
];

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#114ca0] px-10">
            <div className="px-4 md:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <a href="/" className="flex items-center shrink-0">
                    <img src={logo} alt="" className='w-30' />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-4 lg:gap-6">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-white hover:text-white lg:text-md text-sm font-semibold uppercase transition-colors duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <a
                    href="https://luma.com/1m7455h8"
                    className="hidden md:flex items-center gap-2 border border-white/60 hover:border-white text-white text-xs font-bold uppercase tracking-widest px-2 py-2 rounded transition-all duration-200 hover:bg-white/10"
                >
                    <MdArrowOutward className='text-lg' />
                    Become a Sponsor
                </a>

                {/* Mobile Hamburger */}
                <button className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Open menu">
                    <span className="block w-6 h-0.5 bg-white" />
                    <span className="block w-6 h-0.5 bg-white" />
                    <span className="block w-6 h-0.5 bg-white" />
                </button>
            </div>
        </header>
    );
};

export default Header;
