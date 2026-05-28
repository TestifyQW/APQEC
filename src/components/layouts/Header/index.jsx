import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdArrowOutward, MdMenu, MdClose } from "react-icons/md";
import logo from '../../../assets/apqec-logo-white.png';
import { useHashNav } from '../../../hooks/useHashNav';
import META from '@adkit.so/meta-pixel';

const NAV_LINKS = [
    { label: 'Content Tracks', href: '/#tracks' },
    { label: 'Speakers', href: '/#speakers' },
    { label: 'Schedule', href: '/#schedule' },
    { label: 'Partners', href: '/partners' },
    { label: 'Company', href: '/#company' },
    { label: 'Our Crew', href: '/ourcrew' },
];

const Header = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleNav = useHashNav(closeMenu);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#114ca0] md:px-10 px-4">
            <div className="flex items-center justify-between h-16 max-w-7xl mx-auto">
                {/* Logo */}
                <a href="/" className="flex items-center shrink-0">
                    <img src={logo} alt="" className='w-24 md:w-30' />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-4 lg:gap-6">
                    {NAV_LINKS.map((link) => {
                        const isActive = location.pathname === link.href || (location.pathname + location.hash) === link.href;

                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={(e) => handleNav(e, link.href)}
                                className={`relative text-white lg:text-md text-sm font-semibold uppercase transition-all duration-200 group py-1
                                    ${isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                            >
                                {link.label}
                                <span className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 
                                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                            </a>
                        );
                    })}
                </nav>

                {/* CTA */}
                <a
                    href="https://drive.google.com/file/d/1QyugTFhAj1L7N-_p3S2Wi3MS9tUv2qI3/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:flex items-center gap-2 border border-white/60 hover:border-white text-white text-xs font-bold uppercase tracking-widest px-2 py-2 rounded transition-all duration-200 hover:bg-white/10"
                >
                    <MdArrowOutward className='text-lg' />
                    Become a Sponsor
                </a>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex items-center justify-center p-2 text-white"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <MdClose className="text-3xl" /> : <MdMenu className="text-3xl" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 top-16 bg-[#114ca0] z-40 transition-transform duration-300 ease-in-out md:hidden
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <nav className="flex flex-col items-center gap-8 pt-12">
                    {NAV_LINKS.map((link) => {
                        const isActive = location.pathname === link.href || (location.pathname + location.hash) === link.href;

                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={(e) => handleNav(e, link.href)}
                                className={`text-white text-xl font-bold uppercase tracking-widest transition-all duration-200
                                    ${isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                            >
                                {link.label}
                            </a>
                        );
                    })}

                    <a
                        href="https://drive.google.com/file/d/1QyugTFhAj1L7N-_p3S2Wi3MS9tUv2qI3/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="mt-4 flex items-center gap-2 border border-white/60 text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded hover:bg-white/10"
                    >
                        <MdArrowOutward className='text-xl' />
                        Become a Sponsor
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
