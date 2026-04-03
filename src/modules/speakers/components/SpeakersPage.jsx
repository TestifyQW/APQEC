import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import { MdArrowOutward } from 'react-icons/md';

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
    { id: 1, name: 'Safaa Ismail', image: safaaIsmail },
    { id: 2, name: 'Mariem Safi', image: mariemSafi },
    { id: 3, name: 'Syrine Hali', image: syrineHali },
    { id: 4, name: 'Olaoluwa Oladokun', image: olaoluwaOladokun },
    { id: 5, name: 'Simiso Kheswa', image: simisoKheswa },
    { id: 6, name: 'Unyime Tommy', image: UnyimeTommy },
    { id: 7, name: 'Temitope Onakoya', image: temitopeOnakoya },
    { id: 8, name: 'Chibuzor Obilom', image: chibuzorObilom },
    { id: 9, name: 'Dipti Joshi', image: diptiJoshi },
    { id: 10, name: 'Cherinet Hailu', image: cherinetHailu },
    { id: 11, name: 'Joan Maina', image: joanMaina },
    { id: 12, name: 'Abimbola Babalola', image: abimbolaBabalola },
    { id: 13, name: 'Louis Takow', image: louisTakow },
    { id: 14, name: 'Sabine Joyce', image: sabineJoyce },
    { id: 15, name: 'Shey Camille', image: sheyCamille },
    { id: 16, name: 'Merewa Salh', image: merewaSalh },
    { id: 17, name: 'Akram Mukasa', image: akramMukasa },
    { id: 18, name: 'Korkor Mensah', image: korkorMensah },
    { id: 19, name: 'Moses Muenma', image: mosesMuenma },
    { id: 20, name: 'George Kibe', image: georgeKibe },
    { id: 21, name: 'Selpha Atemba', image: selphaAtemba },
    { id: 22, name: 'Jaqueline Kavula', image: jaquelineKavula },
    { id: 23, name: 'Patrick Migot', image: patrickMigot },
    { id: 24, name: 'Christiana Ajalah', image: christianaAjalah },
    { id: 25, name: 'Muhammed Burahaba', image: muhammedBurahaba },
    { id: 26, name: 'Atwine Nickson', image: atwineNickson },
    { id: 27, name: 'Omolara Osiyemi', image: omolaraOsiyemi },
    { id: 28, name: 'Luckson Makatu', image: lucksonMakatu },
    { id: 29, name: 'Demola Adesina', image: demolaAdesina },
    { id: 30, name: 'Rekik Kidane', image: rekikKidane },
    { id: 31, name: 'Emmanuel Ani', image: emmanuelAni },
    { id: 32, name: 'Mike Atara', image: mikeAtara },
    { id: 33, name: 'Lilian Anyango', image: lilianAnyango },
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

/* ─── Session Speaker Card ────────────────────────────────────────────────── */
const SessionSpeakerCard = ({ name, role, image }) => (
    <div className="relative rounded-xl overflow-hidden group cursor-pointer" style={{ aspectRatio: '1/1.2' }}>
        <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div
            className="absolute inset-0"
            style={{
                background: 'linear-gradient(to top, rgba(5,20,60,0.95) 0%, rgba(5,20,60,0.2) 50%, transparent 70%)',
            }}
        />
        <div className="absolute bottom-0 left-0 right-0 px-3 py-3">
            <p className="text-white font-bold text-xs uppercase tracking-wide leading-tight truncate">{name}</p>
            <p className="text-[#00DEEE] text-[10px] uppercase tracking-wider mt-0.5 truncate">{role}</p>
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
                        href="#register"
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
                            <SessionSpeakerCard key={speaker.id} {...speaker} />
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
                        href="#register"
                        className="inline-flex items-center gap-2 bg-[#00DEEE] text-black text-sm font-bold uppercase px-8 py-3.5 rounded hover:bg-cyan-300 transition-colors"
                        onClick={e => e.preventDefault()}
                    >
                        <FaArrowRight /> claim your seat
                    </a>
                </div>
            </section>

        </main>
    );
};

export default SpeakersPage;
