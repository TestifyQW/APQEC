import React, { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa6';
import RegisterLink from '../../../components/RegisterLink';

/* ─── Crew images ────────────────────────────────────────────────────────── */
import ibironkeImg from '../../../assets/ibironkeCrew.jpg';
import mosunmolaImg from '../../../assets/mosunmolaOlabello.jpg';
import ayubaImg from '../../../assets/ayubaJohnson.jpg';
import joshuaImg from '../../../assets/joshuaOlanrewaju.jpg';
import oladeindeImg from '../../../assets/oladeindeDeborah.png';
import AfricanMap from '../../../assets/african-map.png';
import moyoImg from '../../../assets/myProfPic_cropped.jpg';
import tosinImg from '../../../assets/tosin-headshot.png';
import tonyImg from '../../../assets/tonyCrew.png';
import ateniolaImg from '../../../assets/ateniImg.png';
import iseoluwaImg from '../../../assets/iseImg2.png';
import thandiweImg from '../../../assets/thandiweImg.jpg';

/* ─── Filter categories ─────────────────────────────────────────────────── */
const CATEGORIES = [
    'All',
    'Program Director',
    'Content & Community Manager',
    'Tech & Events Lead',
    'Awards Director',
];

/* ─── Crew data ─────────────────────────────────────────────────────────── */
const rowTemplate = [
    { name: 'Ibironke Yekinni', role: 'Convener', category: 'Program Director', photo: ibironkeImg },

    { name: 'Ayuba Johnson', role: 'Program Manager', category: 'Program Director', photo: ayubaImg },

    { name: 'Mosunmola Olabello', role: 'Community Director', category: 'Content & Community Manager', photo: mosunmolaImg },
    { name: 'Tony Dike', role: 'Social Media Manager', category: 'Content & Community Manager', photo: tonyImg },
    { name: 'Oluwatosin Afolabi', role: 'Content Manager', category: 'Content & Community Manager', photo: tosinImg },
    { name: 'Ateniola Taye', role: 'Virtual Room Manager', category: 'Content & Community Manager', photo: ateniolaImg },
    { name: 'Iseoluwa Adelowo', role: 'Email Marketing Manager', category: 'Content & Community Manager', photo: iseoluwaImg },
    { name: 'Thandiwe', role: 'Speakers Relation & Partnership Manager', category: 'Content & Community Manager', photo: thandiweImg },

    // { name: 'Dammy', role: 'Tech Team', category: 'Tech & Events Lead', photo: joshuaImg },
    { name: 'Ojo Moyosorejesu', role: 'Website Developer', category: 'Tech & Events Lead', photo: moyoImg },
    { name: 'Oladeinde Deborah', role: 'Website Designer', category: 'Awards Director', photo: oladeindeImg },
];

const CREW = [
    ...rowTemplate,
];
const TitleUnderline = () => (
    <section className="flex w-full h-1 mb-3">
        <div className="w-[34%] h-1 bg-[#E6B73B] rounded-full">.</div>
        <div className="w-[34%] h-1 bg-transparent" />
        <div className="w-[34%] h-1 bg-[#E6B73B] rounded-full" />
    </section>
);

const TICKER_ITEMS = [
    '#APQEC26',
    'JUNE 4TH - 6TH, 2026',
    'ONLINE CONFERENCE'
];

const Ticker = () => {
    const repeated = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];
    return (
        <div className="bg-[#144280] border-t border-b border-white/10 py-3 overflow-hidden relative">
            <div className="flex whitespace-nowrap animate-marquee">
                {repeated.map((item, i) => (
                    <span key={i} className="text-white text-[11px] font-bold uppercase tracking-widest mx-6 flex items-center gap-6">
                        {item}
                        <span className="text-white/50 text-[10px]">■</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

/* ─── Crew Card ─────────────────────────────────────────────────────────── */
const CrewCard = ({ member }) => (
    <div
        className="relative rounded-xl overflow-hidden group cursor-pointer"
        style={{ aspectRatio: '3/4' }}
    >
        <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div
            className="absolute inset-0"
            style={{
                background: 'linear-gradient(to top, rgba(5,20,60,0.9) 0%, rgba(5,20,60,0.15) 50%, transparent 75%)',
            }}
        />
        {/* Name + role */}
        <div className="absolute bottom-0 left-0 right-0 px-3 py-3">
            <p className="text-white font-bold text-xs uppercase tracking-wide leading-tight truncate">
                {member.name}
            </p>
            <p className="text-[#00DEEE] text-[10px] uppercase tracking-wider mt-0.5 truncate">
                {member.role}
            </p>
        </div>
    </div>
);

/* ─── Main Crew Page ─────────────────────────────────────────────────────── */
const CrewPage = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filtered = activeFilter === 'All'
        ? CREW
        : CREW.filter(m => m.category === activeFilter);

    return (
        <main className="pt-16">
            {/* ─── Hero ───────────────────────────────────────────────────── */}
            <section className="w-full pt-20 relative overflow-hidden bg-[#114ca0]">
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

                {/* Cross Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-15"
                />

                {/* Glow blobs to match original aesthetics but fit the image */}
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00DEEE]/20 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
                    <p className="text-[#00DEEE] border border-[#00DEEE]/50 bg-[#00DEEE]/10 w-fit flex mx-auto rounded-full px-5 py-1.5 text-xs font-bold uppercase mb-6 tracking-widest backdrop-blur-sm">
                        MEET THE CREW
                    </p>

                    <div className="flex flex-col w-fit mx-auto">
                        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4 leading-[1.15] tracking-wide">
                            MEET THE AMAZING CREW<br className="hidden md:block" />
                            BEHIND APQEC 2026
                        </h1>
                        <section className='flex w-full h-1 mb-3'>
                            <div className='w-[34%] h-1 bg-[#E6B73B] text-[#E6B73B] rounded-full'>.</div>
                            <div className='w-[34%] h-1 bg-[rgba(255,0,0,0)]'></div>
                            <div className='w-[34%] h-1 bg-[#E6B73B] rounded-full'></div>
                        </section>
                    </div>

                    <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        These are the amazing and smart minds and hands making the Africa Product Quality
                        Engineering Conference 2026 possible.
                    </p>

                    <RegisterLink
                        className="inline-flex items-center gap-2 bg-[#00DEEE] text-black text-sm uppercase px-8 py-3.5 rounded hover:bg-cyan-300 transition-colors mb-20 shadow-lg shadow-[#00DEEE]/20"
                    >
                        <FaArrowRight /> REGISTER FOR FREE NOW
                    </RegisterLink>
                </div>

                {/* Ticker */}
                <div className="relative z-10">
                    <Ticker />
                </div>
            </section>

            {/* ─── Crew Grid ─────────────────────────────────────────────── */}
            <section className="w-full bg-white py-14">
                <div className="max-w-[1800px] mx-auto px-6 md:px-12">
                    {/* Section title */}
                    <h2 className="text-[#0F2745] text-3xl md:text-4xl font-black uppercase text-center mb-8">
                        Our Crew
                    </h2>

                    {/* Filter pills */}
                    <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-5 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border transition-all duration-200 ${activeFilter === cat
                                    ? 'bg-[#0F2745] text-white border-[#0F2745]'
                                    : 'bg-white text-[#0F2745] border-gray-300 hover:border-[#0F2745] hover:bg-gray-50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {filtered.map((member, i) => (
                            <CrewCard key={`${member.name}-${i}`} member={member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Ready to Partner CTA ──────────────────────────────────── */}
            <section className="w-full py-20 bg-[#e1ecf4]">
                <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
                    <div className="flex flex-col w-fit mx-auto">
                        <h2 className="text-[#0F2745] text-3xl md:text-4xl font-black uppercase mb-2">
                            Ready to Partner With APQEC?
                        </h2>
                        <TitleUnderline />
                    </div>
                    <p className="text-[#0F2745]/70 text-sm md:text-base mb-8 max-w-3xl mx-auto leading-relaxed">
                        🚀 Limited partnership slots available. Secure your spot today and position your brand at the <br /> forefront of Africa&apos;s quality engineering movement.
                    </p>
                    <a
                        href="#apply"
                        onClick={e => e.preventDefault()}
                        className="inline-flex items-center gap-2 bg-[#00DEEE] text-black text-sm font-bold uppercase px-8 py-4 rounded hover:bg-cyan-300 transition-colors"
                    >
                        <FaArrowRight /> partner with us
                    </a>
                </div>
            </section>
        </main>
    );
};

export default CrewPage;
