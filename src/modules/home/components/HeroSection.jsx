import React, { useEffect, useRef } from 'react';
import AfricanMap from '../../../assets/african-map.png';
// Floating role pill tags
const TAGS_TOP = [
    { label: 'PRODUCT MANAGER', color: 'bg-white text-[#0635C9] border-2 border-[#0635C9]', rotate: '-rotate-3', position: 'top-[150px] left-[0%]' },
    { label: 'QA ADVOCATE', color: 'bg-[#FF5722] text-white', rotate: '-rotate-12', position: 'top-[80px] left-[2%]' },
    { label: 'TEST AUTOMATOR', color: 'bg-[#00BFA5] text-white border-2 border-white/40', rotate: 'rotate-12', position: 'top-[68px] left-[22%]' },
    { label: 'SOFTWARE TESTER', color: 'bg-[#0A2540] text-white border-2 border-white/30', rotate: '-rotate-6', position: 'top-[70px] left-[48%]' },
    { label: 'QA ENGINEER', color: 'bg-[#FF5722] text-white', rotate: 'rotate-6', position: 'top-[80px] right-[2%]' },
];

const TAGS_BOTTOM = [
    { label: 'DESIGNERS', color: 'bg-[#00BFA5] text-white', rotate: 'rotate-6', position: 'bottom-[60px] left-[18%]' },
    { label: 'CTOS', color: 'bg-[#FF5722] text-white', rotate: '-rotate-6', position: 'bottom-[60px] left-[34%]' },
    { label: 'ENGINEERING LEADS', color: 'bg-[#FFD600] text-[#0635C9]', rotate: 'rotate-3', position: 'bottom-[60px] left-[48%]' },
    { label: 'DEVOPS ENGINEERS', color: 'bg-[#00BFA5] text-white', rotate: '-rotate-3', position: 'bottom-[60px] right-[15%]' },
    { label: 'SOFTWARE DEV', color: 'bg-[#0A2540] text-white border border-white/40', rotate: 'rotate-12', position: 'bottom-[60px] right-[0%]' },
];

// Ticker marquee items
const TICKER_ITEMS = [
    'ONLINE CONFERENCE',
    'JUNE 4TH - 6TH, 2026',
    '#APQEC26',
];

const FloatingTag = ({ label, color, rotate, position, isTop, index }) => {
    const duration = 1 + (index * 0.3); // Staggered drop speeds between 1.5s to 2.4s
    const style = isTop ? {
        animation: `fallTags ${duration}s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
        animationDelay: `${index * 0.2}s`,
        animationFillMode: 'both' // Ensures they stay hidden initially and remain visible at the end
    } : {};

    return (
        <div className={`absolute ${position} z-10 hidden md:block`} style={style}>
            <div className={rotate}>
                <span className={`${color} text-xl font-medium uppercase tracking-wider px-4 py-2.5 rounded-full shadow-lg whitespace-nowrap block`}>
                    {label}
                </span>
            </div>
        </div>
    );
};

const Ticker = () => {
    const repeated = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

    return (
        <div className="bg-[#194d8d] border-t border-white/10 py-3 overflow-hidden relative">
            <div className="flex whitespace-nowrap animate-marquee">
                {repeated.map((item, i) => (
                    <span key={i} className="text-white text-xs font-bold uppercase tracking-widest mx-6 flex items-center gap-6">
                        {item}
                        <span className="text-[#FFD600]">●</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col overflow-hidden pt-16 mt-10 bg-[#124da0]">
            <style>{`
                @keyframes fallTags {
                    0% { transform: translateY(-100px); opacity: 0; }
                    20% { opacity: 1; }
                    100% { transform: translateY(calc(100vh - 250px)); opacity: 1; }
                }
            `}</style>
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

            {/* Dot grid background */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                }}
            />

            {/* Vertical center line */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/10 hidden md:block" />

            {/* Floating tags — top */}
            {TAGS_TOP.map((tag, index) => (
                <FloatingTag key={tag.label} {...tag} isTop={true} index={index} />
            ))}

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-4 md:px-8 py-20 pointer-events-none">
                {/* Headline */}
                <div className='flex flex-col pointer-events-auto'>
                    <h1 className="text-3xl sm:text-4xl md:text-3xl xl:text-6xl font-black text-white uppercase leading-[1.05]">
                        Master the Future of
                        <br className="hidden md:block" />
                        Product Quality Engineering.
                    </h1>
                    <section className='flex w-full h-1'>
                        <div className='w-[34%] h-1 bg-[#E6B73B] text-[#E6B73B] rounded-full'>.</div>
                        <div className='w-[34%] h-1 bg-[rgba(255,0,0,0)]'></div>
                        <div className='w-[34%] h-1 bg-[#E6B73B] rounded-full'></div>
                    </section>
                </div>

                {/* Subtitle */}
                <p className="mt-6 text-white/80 text-sm md:text-base max-w-xl pointer-events-auto">
                    Join{' '}
                    <span className="text-[#07EE9E] font-bold">4,000+</span> Innovators at Africa&apos;s Product Quality Engineering Conference 2.0
                </p>

                {/* CTA */}
                <a
                    href="https://luma.com/1m7455h8"
                    className="mt-10 inline-flex items-center gap-3 border border-[#00deee] hover:bg-[#00D4FF]/30 text-white text-xs md:text-sm font-bold uppercase tracking-widest px-8 py-4 rounded transition-all duration-300 backdrop-blur-sm group pointer-events-auto"
                >
                    <span className="text-white group-hover:translate-x-1 transition-transform duration-200">→</span>
                    Claim Your Free Pass—Limited Spots for the Live Interactive Sessions.
                </a>
            </div>

            {/* Floating tags — bottom */}
            {TAGS_BOTTOM.map((tag, index) => (
                <FloatingTag key={tag.label} {...tag} isTop={false} index={index} />
            ))}

            {/* Mobile tags strip */}
            <div className="md:hidden flex flex-wrap justify-center gap-2 px-4 pb-6 relative z-10">
                {[...TAGS_TOP, ...TAGS_BOTTOM].map((tag) => (
                    <span key={tag.label} className={`${tag.color} text-[10px] font-medium uppercase tracking-wide px-3 py-1.5 rounded-full`}>
                        {tag.label}
                    </span>
                ))}
            </div>

            {/* Ticker */}
            <div className="relative z-10 mt-auto">
                <Ticker />
            </div>
        </section>
    );
};

export default HeroSection;
