import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

import ibironkeImg from '../../../assets/ibironkeImg.png';
import emmaPaul1 from '../../../assets/emmaPaul1.jpg';
import johnDavid1 from '../../../assets/johnDavid1.jpg';
import philipImg from '../../../assets/philipImg.jpg';
import johnDavid2 from '../../../assets/johnDavid.jpg';
import emmaPaul2 from '../../../assets/emmaPaul2.jpg';

/* ─── Social icons ────────────────────────────────────────────────────────── */
const IGIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
);

const XIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

/* ─── Speaker data ────────────────────────────────────────────────────────── */
const SPEAKERS = [
    {
        id: 1,
        name: 'Ibiroke Yekinni',
        role: 'Convener',
        image: ibironkeImg,
        ig: '#', x: '#', linkedin: '#',
    },
    {
        id: 2,
        name: 'Emmaunel Paul',
        role: 'QA Engineer',
        image: emmaPaul1,
        ig: '#', x: '#', linkedin: '#',
    },
    {
        id: 3,
        name: 'John David',
        role: 'Software Dev',
        image: johnDavid1,
        ig: '#', x: '#', linkedin: '#',
    },
    {
        id: 4,
        name: 'Philip Adejide',
        role: 'Product Manager',
        image: philipImg,
        ig: '#', x: '#', linkedin: '#',
    },
    {
        id: 5,
        name: 'John David',
        role: 'Software Dev',
        image: johnDavid2,
        ig: '#', x: '#', linkedin: '#',
    },
    {
        id: 6,
        name: 'Emmaunel Paul',
        role: 'QA Engineer',
        image: emmaPaul2,
        ig: '#', x: '#', linkedin: '#',
    },
];

/* ─── Speaker Card ────────────────────────────────────────────────────────── */
const SpeakerCard = ({ name, role, image, ig, x, linkedin }) => (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ aspectRatio: '4/4.5' }}>
        {/* Photo */}
        <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Bottom gradient overlay */}
        <div
            className="absolute inset-0"
            style={{
                background: 'linear-gradient(to top, rgba(5,20,60,0.92) 0%, rgba(5,20,60,0.3) 45%, transparent 70%)',
            }}
        />

        {/* Info bar */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-4 flex items-end justify-between">
            <div>
                <p className="text-white font-black text-sm uppercase tracking-wide leading-tight">{name}</p>
                <p className="text-white/60 text-xs uppercase tracking-widest mt-0.5">{role}</p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2 text-white/70">
                <a href={ig} className="hover:text-white transition-colors" onClick={e => e.preventDefault()}>
                    <IGIcon />
                </a>
                <a href={x} className="hover:text-white transition-colors" onClick={e => e.preventDefault()}>
                    <XIcon />
                </a>
                <a href={linkedin} className="hover:text-white transition-colors" onClick={e => e.preventDefault()}>
                    <LinkedInIcon />
                </a>
            </div>
        </div>
    </div>
);

/* ─── Main Section ────────────────────────────────────────────────────────── */
const SpeakersSection = () => (
    <section id='speakers'
        className="w-full py-16"
        style={{ background: '#071330' }}
    >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
                {/* Left — heading + subtitle */}
                <div>
                    <h2
                        className="text-[#00DEEE] text-4xl font-bold uppercase"
                    >
                        Meet Our Speakers
                    </h2>
                    <p className="text-white text-sm mt-2">
                        We are announcing speakers gradually, stay tuned for more
                    </p>
                </div>

                {/* Right — CTA buttons */}
                <div className="flex items-center gap-3 flex-shrink-0">
                    <a
                        href="#register"
                        className="flex items-center gap-2 bg-[#00DEEE] text-black text-xs font-bold uppercase px-3 py-2.5 rounded hover:bg-[#00D4FF]/10 transition-colors"
                    >
                        <FaArrowRight /> <span>Register for Free</span>
                    </a>
                    <a
                        href="#speak"
                        className="flex items-center gap-2 border border-white text-white text-xs font-bold uppercase tracking-widest px-3 py-2.5 rounded hover:bg-white/10 transition-colors"
                    >
                        <MdArrowOutward /> <span>Apply to Speak</span>
                    </a>
                </div>
            </div>

            {/* Speaker grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {SPEAKERS.map((speaker) => (
                    <SpeakerCard key={speaker.id} {...speaker} />
                ))}
            </div>

            {/* View More button */}
            <div className="flex justify-center mt-12">
                <a
                    href="#speakers"
                    className="flex items-center gap-2 border border-white text-white text-xs font-bold uppercase px-8 py-3 hover:bg-white/10 transition-colors"
                >
                    View More Speakers <FaArrowRight />
                </a>
            </div>
        </div>
    </section>
);

export default SpeakersSection;
