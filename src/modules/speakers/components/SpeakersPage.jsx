import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import { MdArrowOutward } from 'react-icons/md';
import Flag from 'react-world-flags';

/* ─── Speaker images ────────────────────────────────────────────────────────── */
import ibironkeImg from '../../../assets/ibironkeImg.png';
import philipImg from '../../../assets/philipImg.jpg';
import emmaPaul2 from '../../../assets/emmaPaul2.jpg';
import UnyimeTommy from '../../../assets/UnyimeTommy.jpg';
import abimbolaBabalola from '../../../assets/abimbolaBabalola.jpg';
import akramMukasa from '../../../assets/akramMukasa.png';
import atwineNickson from '../../../assets/atwineNickson.jpg';
import cherinetHailu from '../../../assets/cherinetHailu.jpg';
import chibuzorObilom from '../../../assets/chibuzorObilom.png';
import christianaAjalah from '../../../assets/christianaAjalah.jpg';
import demolaAdesina from '../../../assets/demolaAdesina.jpg';
import diptiJoshi from '../../../assets/diptiJoshi.jpg';
import emmanuelAni from '../../../assets/emmanuelAni.jpg';
import jaquelineKavula from '../../../assets/jaquelineKavula.png';
import joanMaina from '../../../assets/joanMaina.png';
import korkorMensah from '../../../assets/korkorMensah.jpg';
import larryGoddard from '../../../assets/larryGoddard.jpg';
import lilianAnyango from '../../../assets/lilianAnyango.jpg';
import louisTakow from '../../../assets/louisTakow.jpg';
import lucksonMakatu from '../../../assets/lucksonMakatu.jpg';
import mariemSafi from '../../../assets/mariemSafi.jpg';
import merewaSalh from '../../../assets/merewaSalh.jpg';
import mikeAtara from '../../../assets/mikeAtara.jpg';
import mosesMuenma from '../../../assets/mosesMuenma.png';
import muhammedBurahaba from '../../../assets/muhammedBurahaba.jpg';
import naveenKhunteta from '../../../assets/naveenKhunteta.jpg';
import olaoluwaOladokun from '../../../assets/olaoluwaOladokun.png';
import omolaraOsiyemi from '../../../assets/omolaraOsiyemi.jpg';
import patrickMigot from '../../../assets/patrickMigot.png';
import rekikKidane from '../../../assets/rekikKidane.jpg';
import sabineJoyce from '../../../assets/sabineJoyce.jpg';
import safaaIsmail from '../../../assets/safaaIsmail.png';
import selphaAtemba from '../../../assets/selphaAtemba.png';
import sheyCamille from '../../../assets/sheyCamille.png';
import simisoKheswa from '../../../assets/simisoKheswa.jpg';
import syrineHali from '../../../assets/syrineHali.jpg';
import temitopeOnakoya from '../../../assets/temitopeOnakoya.jpg';
import georgeKibe from '../../../assets/georgeKibe.png';

/* ─── Social icons ────────────────────────────────────────────────────────── */
const IGIcon = () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
);

const XIcon = () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

/* ─── Keynote Speakers data ──────────────────────────────────────────────── */
const KEYNOTE_SPEAKERS = [
    {
        id: 1,
        name: 'Ibironke Yekinni',
        role: 'CONVENER',
        image: ibironkeImg,
        ig: '#', x: '#', linkedin: '#',
    },
    {
        id: 2,
        name: 'Larry Goddard',
        role: 'Keynote Speaker',
        image: larryGoddard,
        ig: '#', x: '#', linkedin: '#',
    },
    {
        id: 3,
        name: 'Naveen Khunteta',
        role: 'Keynote Speaker',
        image: naveenKhunteta,
        ig: '#', x: '#', linkedin: '#',
    },
];

const TICKER_ITEMS = [
    'APPLY TO SPEAK',
    '#APQEC26',
];

/* ─── Session Speakers data ──────────────────────────────────────────────── */
const SESSION_SPEAKERS = [
    { id: 1, name: 'Safaa Ismail', image: safaaIsmail, flag: 'EG', role: 'SENIOR QA ENGINEER', ig: '#', x: '#', linkedin: '#' },
    { id: 2, name: 'Mariem Safi', image: mariemSafi, flag: 'TN', role: 'QA ENGINEER', ig: '#', x: '#', linkedin: '#' },
    { id: 3, name: 'Syrine Hali', image: syrineHali, flag: 'TN', role: 'QA ENGINEER', ig: '#', x: '#', linkedin: '#' },
    { id: 4, name: 'Olaoluwa Oladokun', image: olaoluwaOladokun, flag: 'NG', role: 'SENIOR TESTOPS ENGINEER', ig: '#', x: '#', linkedin: '#' },
    { id: 5, name: 'Simiso Kheswa', image: simisoKheswa, flag: 'ZA', role: 'QA ENGINEER', ig: '#', x: '#', linkedin: '#' },
    { id: 6, name: 'Unyime Tommy', image: UnyimeTommy, flag: 'NG', role: 'MANAGING PARTNER AT ASSURDLY', ig: '#', x: '#', linkedin: '#' },
    { id: 7, name: 'Temitope Onakoya', image: temitopeOnakoya, flag: 'NG', role: 'MANAGER, IT TESTING SHIVICKS', ig: '#', x: '#', linkedin: '#' },
    { id: 8, name: 'Chibuzor Obilom', image: chibuzorObilom, flag: 'NG', role: 'SOFTWARE QUALITY LEAD', ig: '#', x: '#', linkedin: '#' },
    { id: 9, name: 'Dipti Joshi', image: diptiJoshi, flag: 'ZA', role: 'SENIOR AUTOMATION TEST ENGINEER', ig: '#', x: '#', linkedin: '#' },
    { id: 10, name: 'Cherinet Hailu', image: cherinetHailu, flag: 'ET', role: 'BACKEND ENGINEER', ig: '#', x: '#', linkedin: '#' },
    { id: 11, name: 'Joan Maina', image: joanMaina, flag: 'KE', role: 'QUALITY ASSURANCE ENGINEER LEAD', ig: '#', x: '#', linkedin: '#' },
    { id: 12, name: 'Abimbola Babalola', image: abimbolaBabalola, flag: 'NG', role: 'HEAD, AGILE SOLUTIONS PRACTICE CENTRE', ig: '#', x: '#', linkedin: '#' },
    { id: 13, name: 'Louis Takow', image: louisTakow, flag: 'CM', role: 'SENIOR QA ENGINEER', ig: '#', x: '#', linkedin: '#' },
    { id: 14, name: 'Sabine Joyce', image: sabineJoyce, flag: 'CM', role: 'QUALITY ASSURANCE ENGINEER', ig: '#', x: '#', linkedin: '#' },
    { id: 15, name: 'Shey Camille', image: sheyCamille, flag: 'CM', role: 'QA ENGINEER', ig: '#', x: '#', linkedin: '#' },
    { id: 16, name: 'Merewa Salh', image: merewaSalh, flag: 'ET', role: 'QUALITY ASSURANCE ENGINEER', ig: '#', x: '#', linkedin: '#' },
    { id: 17, name: 'Akram Mukasa', image: akramMukasa, flag: 'UG', role: 'QUALITY ASSURANCE ENGINEER', ig: '#', x: '#', linkedin: '#' },
    { id: 18, name: 'Korkor Mensah', image: korkorMensah, flag: 'GH', role: 'QUALITY ASSURANCE MANAGER', ig: '#', x: '#', linkedin: '#' },
    { id: 19, name: 'Moses Muenma', image: mosesMuenma, flag: 'KE', role: 'QUALITY ASSURANCE AND TESTING TEAM LEAD', ig: '#', x: '#', linkedin: '#' },
    { id: 20, name: 'George Kibe', image: georgeKibe, flag: 'KE', role: 'SENIOR SOFTWARE QA', ig: '#', x: '#', linkedin: '#' },
    { id: 21, name: 'Selpha Atemba', image: selphaAtemba, flag: 'KE', role: 'QUALITY ENGINEERING MANAGER', ig: '#', x: '#', linkedin: '#' },
    { id: 22, name: 'Jaqueline Kavula', image: jaquelineKavula, flag: 'KE', role: 'BUSINESS DEVELOPMENT MANAGER AND CO-FOUNDER', ig: '#', x: '#', linkedin: '#' },
    { id: 23, name: 'Patrick Migot', image: patrickMigot, flag: 'KE', role: 'LEAD QA ENGINEER', ig: '#', x: '#', linkedin: '#' },
    { id: 24, name: 'Christiana Ajalah', image: christianaAjalah, flag: 'GB', role: 'SENIOR QA ANALYST', ig: '#', x: '#', linkedin: '#' },
    { id: 25, name: 'Muhammed Burahaba', image: muhammedBurahaba, flag: 'ET', role: 'SENIOR QA ENGINEER', ig: '#', x: '#', linkedin: '#' },
    { id: 26, name: 'Atwine Nickson', image: atwineNickson, flag: 'UG', role: 'QUALITY ASSURANCE ENGINEER', ig: '#', x: '#', linkedin: '#' },
    { id: 27, name: 'Omolara Osiyemi', image: omolaraOsiyemi, flag: 'RW', role: 'FOUNDER, THE PRODUCT MUSE', ig: '#', x: '#', linkedin: '#' },
    { id: 28, name: 'Luckson Makatu', image: lucksonMakatu, flag: 'ZA', role: 'SOFTWARE QUALITY ENGINEER', ig: '#', x: '#', linkedin: '#' },
    { id: 29, name: 'Demola Adesina', image: demolaAdesina, flag: 'NG', role: 'PRESIDENT, ASSOCIATION OF NIGERIA SOFTWARE TESTERS', ig: '#', x: '#', linkedin: '#' },
    { id: 30, name: 'Rekik Kidane', image: rekikKidane, flag: 'ET', role: 'SOFTWARE ENGINEER', ig: '#', x: '#', linkedin: '#' },
    { id: 31, name: 'Emmanuel Ani', image: emmanuelAni, flag: 'GH', role: 'HEAD OF PAYMENTS AND VAS OPERATIONS', ig: '#', x: '#', linkedin: '#' },
    { id: 32, name: 'Mike Atara', image: mikeAtara, flag: 'GH', role: 'SOFTWARE ENGINEER', ig: '#', x: '#', linkedin: '#' },
    { id: 33, name: 'Lilian Anyango', image: lilianAnyango, flag: 'KE', role: 'CHAIRPERSON', ig: '#', x: '#', linkedin: '#' },
];

/* ─── Keynote Speaker Card ────────────────────────────────────────────────── */
const KeynoteSpeakerCard = ({ name, role, image, ig, x, linkedin }) => (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ aspectRatio: '4/4.8' }}>
        <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div
            className="absolute inset-0"
            style={{
                background: 'linear-gradient(to top, rgba(5,20,60,0.95) 0%, rgba(5,20,60,0.3) 45%, transparent 70%)',
            }}
        />
        {/* Info bar */}
        <div className="absolute bottom-0 left-0 right-0 px-5 py-5 flex items-end justify-between">
            <div>
                <p className="text-white font-black text-base tracking-wide leading-tight">{name}</p>
                <p className="text-white text-xs tracking-widest mt-1">{role}</p>
            </div>
            <div className="flex items-center gap-2.5 text-white/70">
                <a href={ig} className="hover:text-white transition-colors flex shrink-0" onClick={e => e.preventDefault()}>
                    <IGIcon />
                </a>
                <a href={x} className="hover:text-white transition-colors flex shrink-0" onClick={e => e.preventDefault()}>
                    <XIcon />
                </a>
                <a href={linkedin} className="hover:text-white transition-colors flex shrink-0" onClick={e => e.preventDefault()}>
                    <LinkedInIcon />
                </a>
            </div>
        </div>
    </div>
);

/* ─── Session Speaker Card ────────────────────────────────────────────────── */
const SessionSpeakerCard = ({ name, role, image, flag, ig = '#', x = '#', linkedin = '#', onClick }) => (
    <div className="relative rounded-xl overflow-hidden group cursor-pointer" style={{ aspectRatio: '1/1.2' }} onClick={onClick}>
        <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div
            className="absolute inset-0"
            style={{
                background: 'linear-gradient(to top, rgba(5,20,60,0.95) 0%, rgba(5,20,60,0.1) 40%, rgba(5,20,60,0.5) 100%)',
            }}
        />

        {/* Role at top left */}
        <div className="absolute top-0 left-0 px-3 py-3 w-full">
            <p className="text-white text-[8px] sm:text-[9px] uppercase font-bold leading-tight line-clamp-2 pr-4 tracking-wider">
                {role}
            </p>
        </div>

        {/* Bottom content: Name, Flag, Socials */}
        <div className="absolute bottom-0 left-0 right-0 px-3 py-3">
            <p className="text-white font-bold text-xs sm:text-[13px] tracking-wide leading-tight mb-2 truncate">{name}</p>
            <div className="flex items-center justify-between">
                <div className="flex-shrink-0 w-5 h-3.5 sm:w-6 sm:h-4 overflow-hidden rounded-[2px] border border-white/20">
                    <Flag code={flag || 'NG'} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-1.5 text-white/70">
                    <a href={ig} className="hover:text-white transition-colors flex shrink-0" onClick={e => e.preventDefault()}>
                        <IGIcon />
                    </a>
                    <a href={x} className="hover:text-white transition-colors flex shrink-0" onClick={e => e.preventDefault()}>
                        <XIcon />
                    </a>
                    <a href={linkedin} className="hover:text-white transition-colors flex shrink-0" onClick={e => e.preventDefault()}>
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
        </div>
    </div>
);
const Ticker = () => {
    const repeated = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

    return (
        <div className="bg-[#194d8d] border-t border-white/10 py-3 overflow-hidden relative">
            <div className="flex whitespace-nowrap animate-marquee">
                {repeated.map((item, i) => (
                    <span key={i} className="text-white text-xs font-bold uppercase tracking-widest mx-6 flex items-center gap-6">
                        {item}
                        <span className="text-white">●</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

/* ─── Main Speakers Page ──────────────────────────────────────────────────── */
const SpeakersPage = () => {
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);

    const getCountryName = (code) => {
        const map = {
            'ZA': 'SOUTH AFRICA', 'KE': 'KENYA', 'CM': 'CAMEROON', 'GH': 'GHANA',
            'UG': 'UGANDA', 'TN': 'TUNISIA', 'ET': 'ETHIOPIA', 'RW': 'RWANDA',
            'GB': 'UNITED KINGDOM', 'EG': 'EGYPT', 'NG': 'NIGERIA'
        };
        return map[code] || 'NIGERIA';
    };

    return (
        <main className="pt-16">
            {/* ─── Hero Banner ─────────────────────────────────────────────── */}
            <section
                className="w-full pt-20 relative overflow-hidden bg-[#124da0]"
            >
                {/* Decorative dots grid */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                    }}
                />
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
                    <p className="text-[#00DEEE] border border-[#00DEEE] w-fit flex mx-auto rounded-full p-2 text-sm font-bold uppercase mb-4">
                        meet the experts
                    </p>
                    <div className='flex flex-col w-fit mx-auto'>
                        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-2">
                            Meet The Minds Powering<br />
                            <span>Africa's Quality Revolution</span>
                        </h1>
                        <section className='flex w-full h-1 mb-3'>
                            <div className='w-[34%] h-1 bg-[#E6B73B] text-[#E6B73B] rounded-full'>.</div>
                            <div className='w-[34%] h-1 bg-[rgba(255,0,0,0)]'></div>
                            <div className='w-[34%] h-1 bg-[#E6B73B] rounded-full'></div>
                        </section>
                    </div>
                    <p className="text-white/70 text-sm md:text-base max-w-3xl mx-auto mb-8 leading-relaxed">
                        From 19 countries across Africa, these speakers aren’t just industry experts, they’re doers, builders, <br />
                        testers, and change-makers leading the charge in product quality, engineering, and innovation.
                    </p>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfUe2o5LoHupuqqaMWW7qi7VFplg5Sd_SDBC04O1GOUUgdsMQ/viewform?usp=send_form"
                        className="inline-flex items-center gap-2 bg-[#00DEEE] text-black text-sm font-bold uppercase px-6 py-3 rounded hover:bg-cyan-300 transition-colors"
                        onClick={e => e.preventDefault()}
                    >
                        <span className="text-black group-hover:translate-x-1 transition-transform duration-200">→</span>
                        Apply to Speak
                    </a>
                </div>
                <div className="relative z-10 mt-25">
                    <Ticker />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
                {/* ─── Keynote Speakers ──────────────────────────────────────── */}
                <div className="mb-16">
                    <h1 className='text-4xl text-[#0F2745] font-bold uppercase text-center mb-10'>Keynote Speakers</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {KEYNOTE_SPEAKERS.map(speaker => (
                            <KeynoteSpeakerCard key={speaker.id} {...speaker} />
                        ))}
                    </div>
                </div>

                {/* ─── Session Speakers ──────────────────────────────────────── */}
                <div className="mb-16 mt-20">
                    <h2 className="text-[#0F2745] mb-20 text-center text-2xl md:text-3xl font-black uppercase">
                        Session Speakers
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {SESSION_SPEAKERS.map(speaker => (
                            <SessionSpeakerCard key={speaker.id} {...speaker} onClick={() => setSelectedSpeaker(speaker)} />
                        ))}
                    </div>
                </div>
            </div>

            {/* ─── Ready to Learn CTA ──────────────────────────────────────── */}
            <section
                className="w-full py-20 bg-[#e1ecf4]"
            >
                <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
                    <div className='flex flex-col w-fit mx-auto'>
                        <h2 className="text-[#0F2745] text-3xl md:text-4xl font-black uppercase mb-2">
                            Ready to Learn from the Best?
                        </h2>
                        <section className='flex w-full h-1 mb-3'>
                            <div className='w-[34%] h-1 bg-[#E6B73B] text-[#E6B73B] rounded-full'>.</div>
                            <div className='w-[34%] h-1 bg-[rgba(255,0,0,0)]'></div>
                            <div className='w-[34%] h-1 bg-[#E6B73B] rounded-full'></div>
                        </section>
                    </div>
                    <p className="text-[#0F2745] text-sm md:text-base mb-8">
                        These speakers have already raised the bar. Now they're here to help you do the same. Don't just <br />
                        scroll, register, join the sessions, ask questions, and let's grow together.
                    </p>
                    <a
                        href="https://luma.com/1m7455h8"
                        className="inline-flex items-center gap-2 bg-[#00DEEE] text-black text-sm font-bold uppercase px-8 py-3.5 rounded hover:bg-cyan-300 transition-colors"
                        onClick={e => e.preventDefault()}
                    >
                        <FaArrowRight /> claim your seat
                    </a>
                </div>
            </section>

            {/* ─── Speaker Modal ──────────────────────────────────────────────── */}
            {selectedSpeaker && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedSpeaker(null)}>
                    <div
                        className="w-full max-w-4xl bg-[#00DEEE] flex flex-col md:flex-row overflow-hidden relative shadow-2xl"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-white z-10 hover:opacity-75 transition-opacity"
                            onClick={() => setSelectedSpeaker(null)}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Left Image */}
                        <div className="w-full md:w-[42%] h-[300px] md:h-[480px]">
                            <img src={selectedSpeaker.image} alt={selectedSpeaker.name} className="w-full h-full object-cover" />
                        </div>

                        {/* Right Content */}
                        <div className="w-full md:w-[58%] p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-3xl font-black text-white uppercase mb-2 tracking-wide">
                                {selectedSpeaker.name}
                            </h2>
                            <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">
                                {getCountryName(selectedSpeaker.flag)} | {selectedSpeaker.role}
                            </h3>

                            <p className="text-white/95 leading-relaxed mb-8 font-medium">
                                {selectedSpeaker.bio || `Join ${selectedSpeaker.name} at APQEC 2026. Bringing extensive experience as ${selectedSpeaker.role}, they will be sharing deep insights into product quality engineering, innovative testing frameworks, and scalable strategies to elevate quality practices across the continent.`}
                            </p>

                            <div className="flex flex-wrap items-center gap-5 text-white font-bold text-sm">
                                <a href={selectedSpeaker.linkedin || '#'} className="hover:opacity-80 transition-opacity" target="_blank" rel="noreferrer">LinkedIn</a>
                                <a href={selectedSpeaker.x || '#'} className="hover:opacity-80 transition-opacity" target="_blank" rel="noreferrer">Twitter</a>
                                <span className="italic sm:ml-auto font-medium text-white/90">The Future of Product Quality Engineering</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default SpeakersPage;
