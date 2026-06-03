import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import RegisterLink from '../../../components/RegisterLink';
import { MdArrowOutward } from 'react-icons/md';
import Flag from 'react-world-flags';

/* ─── Speaker images ────────────────────────────────────────────────────────── */
import ibironkeImg from '../../../assets/ibironkeImg.png';
import AfricanMap from '../../../assets/african-map.png';
import MichaelBolton from '../../../assets/michealBolton.jpg';
import omotayo from '../../../assets/olubukolaOmotayo.jpg';
import jamesBach from '../../../assets/jamesBach.jpg';
import sessionSpeaker2 from '../../../assets/sessionSpeakerV2.jpeg';
import sessionSpeaker3 from '../../../assets/sessionSpeaker3.jpg';
import sessionSpeaker4 from '../../../assets/sessionSpeaker4.jpg';
import sessionSpeaker5 from '../../../assets/sessionSpeaker5.jpg';
import sessionSpeaker6 from '../../../assets/sessionSpeaker6.jpg';
import sessionSpeaker7 from '../../../assets/sessionSpeaker7.jpg';
import sessionSpeaker8 from '../../../assets/sessionSpeaker8.jpeg';
import sessionSpeaker12 from '../../../assets/sessionSpeaker12.jpeg';
import sessionSpeaker9 from '../../../assets/sessionSpeaker9.jpg';
import sessionSpeaker11 from '../../../assets/sessionSpeaker11.jpg';
import sessionSpeaker10 from '../../../assets/sessionSpeaker10.png';
import adea from '../../../assets/adeaNatch.jpg';
import sessionSpeaker13 from '../../../assets/Ikenna_Gen.png';
import sessionSpeaker14 from '../../../assets/Adedolapo.JPEG';
import sessionSpeaker15 from '../../../assets/harmony.jpg';
import sessionSpeaker16 from '../../../assets/georgeKibe.jpeg';
import sessionSpeaker17 from '../../../assets/sessionSpeaker17.jpg';
import sessionSpeaker18 from '../../../assets/sessionSpeaker18.jpg';
import sessionSpeaker20 from '../../../assets/iseImg2.png';
import sessionSpeaker21 from '../../../assets/mosunmolaOlabello.jpg';
import sessionSpeaker19 from '../../../assets/chibuzorImg.jpg';
import sessionSpeaker22 from '../../../assets/mujibImg.jpg';
import sessionSpeaker23 from '../../../assets/larryImg.jpg';
import sessionSpeaker24 from '../../../assets/olamideImg.jpg';

/* ─── Social icons ────────────────────────────────────────────────────────── */
// const IGIcon = () => (
//     <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
//         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
//     </svg>
// );

// const XIcon = () => (
//     <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
//         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//     </svg>
// );

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

/* ─── Keynote Speakers data ──────────────────────────────────────────────── */
const KEYNOTE_SPEAKERS = [
    {
        id: 1,
        name: 'IBIRONKE YEKINNI',
        role: 'CONVENER',
        image: ibironkeImg,
        linkedin: 'https://www.linkedin.com/in/ibironke-yekinni/',
        day: 1,
    },
    {
        id: 2,
        name: 'MICHAEL BOLTON',
        role: 'Keynote Speaker',
        image: MichaelBolton,
        linkedin: 'https://www.linkedin.com/in/michael-bolton-08847/',
        day: 3,
    },
    {
        id: 3,
        name: 'OLUBUKOLA OMOTAYO',
        role: 'Keynote Speaker',
        image: omotayo,
        linkedin: 'https://www.linkedin.com/in/olubukola-omotayo/',
        day: 2,
    },
    {
        id: 4,
        name: 'JAMES BACH',
        role: 'Keynote Speaker',
        image: jamesBach,
        linkedin: 'https://www.linkedin.com/in/james-bach-6188a811/',
        day: 1,
    },
    {
        id: 5,
        name: 'LARRY GODDARD',
        role: 'Keynote Speaker',
        image: sessionSpeaker23,
        linkedin: 'https://www.linkedin.com/in/larryg/',
        day: 2,
    },
    {
        id: 6,
        name: 'MUJIB ISHOLA',
        role: 'Keynote Speaker',
        image: sessionSpeaker22,
        linkedin: 'https://www.linkedin.com/in/mujibishola/',
        day: 3,
    },
];

const TICKER_ITEMS = [
    'APPLY TO SPEAK NOW',
    '#APQEC26',
    'CALL FOR SPEAKERS CLOSES 25TH OF MAY',
];

/* ─── Session Speakers data ──────────────────────────────────────────────── */
const SESSION_SPEAKERS = [
    { id: 1, name: 'Adea Natchiah-Blay', role: 'Speaker', image: adea, flag: 'GH', linkedin: 'https://www.linkedin.com/in/adea-natchiah-blay/', day: 3 },
    { id: 2, name: 'Dennis Nyabuti', role: 'Speaker', image: sessionSpeaker2, flag: 'RW', linkedin: 'https://www.linkedin.com/in/dmnyabuti', day: 3 },
    { id: 3, name: 'Doho Séverin', role: 'Speaker', image: sessionSpeaker11, flag: 'CM', linkedin: 'https://www.linkedin.com/in/severin-doho/', day: 2 },
    { id: 4, name: 'Christianah Ajala', role: 'Speaker', image: sessionSpeaker3, flag: 'GB', linkedin: 'https://www.linkedin.com/in/ajala-christianah-eniola', day: 1 },
    { id: 5, name: 'Nikhil Bhandari', role: 'Speaker', image: sessionSpeaker4, flag: 'IN', linkedin: 'https://www.linkedin.com/in/nikhilbhandari/', day: 1 },
    { id: 6, name: 'Omowumi Oladele', role: 'Speaker', image: sessionSpeaker5, flag: 'NG', linkedin: 'https://www.linkedin.com/in/omowumi-oladele/', day: 1 },
    { id: 7, name: 'Samuel Afolabi', role: 'Speaker', image: sessionSpeaker6, flag: 'NG', linkedin: 'https://www.linkedin.com/in/lordsamafolabi/', day: 2 },
    { id: 8, name: 'Shashank Parmar', role: 'Speaker', image: sessionSpeaker7, flag: 'IN', linkedin: 'https://www.linkedin.com/in/dearshashank/', day: 1 },
    { id: 9, name: 'Mary Onuorah', role: 'Speaker', image: sessionSpeaker8, flag: 'NG', linkedin: 'https://www.linkedin.com/in/onuorahmary', day: 2 },
    { id: 10, name: 'Matachi Ononuju', role: 'Speaker', image: sessionSpeaker9, flag: 'NG', linkedin: 'https://www.linkedin.com/in/matachi-ononuju/', day: 2 },
    { id: 11, name: 'Sally Sedky', role: 'Speaker', image: sessionSpeaker10, flag: 'EG', linkedin: 'https://www.linkedin.com/in/sally-sedky-sdet-associate-manager/', day: 1 },
    { id: 12, name: 'Udeme Jalekun', role: 'Speaker', image: sessionSpeaker12, flag: 'GB', linkedin: 'http://www.linkedin.com/in/udeme-jalekun', day: 3 },
    { id: 13, name: 'Ikenna Okafor', role: 'Speaker', image: sessionSpeaker13, flag: 'GH', linkedin: 'https://linkedin.com/in/ikennasylvestreokafor', day: 3 },
    { id: 14, name: 'Adedolapo Oguntayo-Williams', role: 'Speaker', image: sessionSpeaker14, flag: 'NG', linkedin: 'https://www.linkedin.com/in/adedolapo-oguntayo/', day: 2 },
    { id: 15, name: 'Harmony Elendu', role: 'Speaker', image: sessionSpeaker15, flag: 'NG', linkedin: 'https://www.linkedin.com/in/harmonyelendu/', day: 1 },
    { id: 16, name: 'George Kibe', role: 'Speaker', image: sessionSpeaker16, flag: 'KE', linkedin: 'https://www.linkedin.com/in/georgekibe/', day: 2 },
    { id: 17, name: 'Oluwatobi Fagbohungbe', role: 'Speaker', image: sessionSpeaker17, flag: 'NG', linkedin: 'https://www.linkedin.com/in/tobyfagboh/', day: 3 },
    { id: 18, name: 'Harsha Issur Luckoo', role: 'Speaker', image: sessionSpeaker18, flag: 'MU', linkedin: 'https://www.linkedin.com/in/harsha-issur-luckoo-77b6b7b6', day: 1 },
    { id: 19, name: 'Chibuzor Obilom', role: 'Speaker', image: sessionSpeaker19, flag: 'NG', linkedin: 'https://www.linkedin.com/in/chibuzorobilom/', day: 3 },
    { id: 20, name: 'Iseoluwa Adelowo', role: 'Speaker', image: sessionSpeaker20, flag: 'NG', linkedin: 'https://www.linkedin.com/in/connectwithiseoluwaadelowo/', day: 1 },
    { id: 21, name: 'Mosunmola Olabello', role: 'Speaker', image: sessionSpeaker21, flag: 'NG', linkedin: 'https://www.linkedin.com/in/mosunmola-olabello/', day: 2 },
    { id: 22, name: 'Muji Ishola', role: 'Speaker', image: sessionSpeaker22, flag: 'NG', linkedin: 'https://www.linkedin.com/in/mujibishola/', day: 3 },
    { id: 23, name: 'Larry Goddard', role: 'Speaker', image: sessionSpeaker23, flag: 'GB', linkedin: 'https://www.linkedin.com/in/larryg/', day: 2 },
    { id: 24, name: 'Olamide Faleke', role: 'Speaker', image: sessionSpeaker24, flag: 'NG', linkedin: 'https://www.linkedin.com/in/olamide-faleke-978173125/', day: 1 },
];

/* ─── Keynote Speaker Card ────────────────────────────────────────────────── */
const KeynoteSpeakerCard = ({ name, role, image, linkedin, onClick }) => (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ aspectRatio: '4/4.8' }} onClick={onClick}>
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
                <p className="text-white text-sm font-semibold mb-3">{name}</p>
                <p className="text-white text-xs tracking-widest mt-1">{role}</p>
            </div>
            <div className="flex items-center gap-2.5 text-white/70">
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex shrink-0" onClick={e => e.stopPropagation()}>
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
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex shrink-0" onClick={e => e.stopPropagation()}>
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
            'GB': 'UNITED KINGDOM', 'EG': 'EGYPT', 'NG': 'NIGERIA', 'IN' : 'INDIA',
        };
        return map[code] || 'NIGERIA';
    };

    return (
        <main className="pt-16">
            {/* ─── Hero Banner ─────────────────────────────────────────────── */}
            <section
                className="w-full pt-20 relative overflow-hidden bg-[#124da0]"
            >
                {/* African Map Background */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-[600px] h-full opacity-[0.8] pointer-events-none"
                    style={{
                        backgroundImage: `url(${AfricanMap})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center top',
                        backgroundRepeat: 'no-repeat',
                    }}
                />

                {/* Decorative dots grid */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                    }}
                />
                <div className="max-w-7xl pb-15 mx-auto px-6 md:px-12 text-center relative z-10">
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
                {/* <div className="relative z-10 mt-25">
                    <Ticker />
                </div> */}
            </section>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
                {/* ─── Keynote Speakers ──────────────────────────────────────── */}
                <div className="mb-16">
                    <h1 className='text-4xl text-[#0F2745] font-bold uppercase text-center mb-10'>Keynote Speakers</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {KEYNOTE_SPEAKERS.map(speaker => (
                            <KeynoteSpeakerCard key={speaker.id} {...speaker} onClick={() => setSelectedSpeaker(speaker)} />
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
                    <RegisterLink
                        className="inline-flex items-center gap-2 bg-[#00DEEE] text-black text-sm font-bold uppercase px-8 py-3.5 rounded hover:bg-cyan-300 transition-colors"
                        onClick={e => e.preventDefault()}
                    >
                        <FaArrowRight /> claim your seat
                    </RegisterLink>
                </div>
            </section>

            {/* ─── Speaker Modal ──────────────────────────────────────────────── */}
            {selectedSpeaker && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedSpeaker(null)}>
                    <div
                        className="w-full max-w-4xl flex flex-col md:flex-row overflow-hidden relative shadow-2xl"
                        style={{
                            backgroundColor: selectedSpeaker.day === 1 ? '#296ab9' : selectedSpeaker.day === 2 ? '#E5F1FF' : '#e6b63b'
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className={`absolute top-4 right-4 z-10 hover:opacity-75 transition-opacity ${selectedSpeaker.day === 2 ? 'text-[#0F2745]' : 'text-white'}`}
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
                            <h2 className={`text-3xl font-black uppercase mb-2 tracking-wide ${selectedSpeaker.day === 2 ? 'text-[#0F2745]' : 'text-white'}`}>
                                {selectedSpeaker.name}
                            </h2>
                            <h3 className={`font-bold uppercase tracking-wider mb-6 text-sm ${selectedSpeaker.day === 2 ? 'text-[#0F2745]' : 'text-white'}`}>
                                {getCountryName(selectedSpeaker.flag)} | {selectedSpeaker.role}
                            </h3>

                            <p className={`leading-relaxed mb-8 font-medium ${selectedSpeaker.day === 2 ? 'text-[#0F2745]/95' : 'text-white/95'}`}>
                                {selectedSpeaker.bio || `Join ${selectedSpeaker.name} at APQEC 2026. Bringing extensive experience as ${selectedSpeaker.role}, they will be sharing deep insights into product quality engineering, innovative testing frameworks, and scalable strategies to elevate quality practices across the continent.`}
                            </p>

                            <div className={`flex flex-wrap items-center gap-5 font-bold text-sm ${selectedSpeaker.day === 2 ? 'text-[#0F2745]' : 'text-white'}`}>
                                <a href={selectedSpeaker.linkedin || '#'} className="hover:opacity-80 transition-opacity" target="_blank" rel="noreferrer"> <LinkedInIcon /> </a>
                                {/* <a href={selectedSpeaker.x || '#'} className="hover:opacity-80 transition-opacity" target="_blank" rel="noreferrer">Twitter</a> */}
                                <span className={`italic sm:ml-auto font-medium ${selectedSpeaker.day === 2 ? 'text-[#0F2745]/90' : 'text-white/90'}`}>The Future of Product Quality Engineering</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default SpeakersPage;
