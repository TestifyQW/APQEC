import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { FaArrowRight, FaCheck } from 'react-icons/fa6';

import ourPartners from '../../../assets/ourPartners.png';

/* ─── Ticker ─────────────────────────────────────────────────────────────── */
const TICKER_ITEMS = ['BECOME A PARTNER', '#APQEC26', 'SHOWCASE. GROW. LEAD.'];

const Ticker = () => {
    const repeated = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];
    return (
        <div className="bg-[#0A2540] border-t border-white/10 py-3 overflow-hidden relative">
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

/* ─── Headline underline bar ─────────────────────────────────────────────── */
const TitleUnderline = () => (
    <section className="flex w-full h-1 mb-3">
        <div className="w-[34%] h-1 bg-[#E6B73B] rounded-full">.</div>
        <div className="w-[34%] h-1 bg-transparent" />
        <div className="w-[34%] h-1 bg-[#E6B73B] rounded-full" />
    </section>
);

/* ─── Partnership Lanes data ─────────────────────────────────────────────── */
const PARTNERSHIP_LANES = [
    {
        id: 'associate',
        tier: 'Associate · Certificate',
        price: null,
        priceLabel: 'Free',
        accentColor: '#1352A1',
        highlight: false,
        description: 'Perfect for individuals and early-stage startups seeking brand exposure.',
        perks: [
            'Logo on conference website',
            'Social media mention (1 post)',
            'Complimentary virtual pass (1)',
            'Certificate of partnership',
            'Email newsletter mention',
        ],
        cta: 'Start for Free',
        ctaHref: '#apply',
    },
    {
        id: 'community',
        tier: 'APQEC Community',
        price: '$20',
        priceLabel: null,
        accentColor: '#1352A1',
        highlight: false,
        description: 'Grow your reach within our engaged QA & product engineering community.',
        perks: [
            'Everything in Associate',
            'Dedicated social campaign (3 posts)',
            'Banner in virtual event lobby',
            'Mention in opening ceremony',
            'Access to attendee insights report',
            '2 complimentary virtual passes',
        ],
        cta: 'Become a Partner',
        ctaHref: '#apply',
    },
    {
        id: 'trailblazer',
        tier: 'APQEC Trailblazers',
        price: '$950',
        priceLabel: null,
        accentColor: '#00DEEE',
        highlight: true,
        description: "For brands that want to own the conversation in Africa's QA space.",
        perks: [
            'Everything in Community',
            'Speaking slot (15 min lightning talk)',
            'Branded workshop or roundtable',
            'Logo on all event materials',
            'Featured sponsor placement on site',
            'Dedicated sponsor spotlight post',
            '5 complimentary virtual passes',
            'Post-event media recap inclusion',
        ],
        cta: 'Become a Trailblazer',
        ctaHref: '#apply',
    },
    {
        id: 'launchpad',
        tier: 'APQEC Launchpad',
        price: '$1,800',
        priceLabel: null,
        accentColor: '#1352A1',
        highlight: false,
        description: 'Amplify your brand across every conference touchpoint and audience segment.',
        perks: [
            'Everything in Trailblazers',
            'Co-branded conference track naming',
            'Full-page ad in digital program',
            'Mid-event brand spotlight segment',
            '30-min sponsored session slot',
            'Lead generation access (opt-in)',
            '10 complimentary virtual passes',
        ],
        cta: 'Apply for Launchpad',
        ctaHref: '#apply',
    },
    {
        id: 'co-connect',
        tier: 'APQEC Co-Connect',
        price: null,
        priceLabel: 'Require Approval',
        accentColor: '#1352A1',
        highlight: false,
        description: 'A strategic co-creation partnership for leading organisations shaping Africa\'s tech future.',
        perks: [
            'Everything in Launchpad',
            'Co-presenter on keynote stage',
            'Exclusive VIP networking session',
            'Joint press release & PR coverage',
            'Custom integration in conference app',
            'Unlimited complimentary passes',
        ],
        cta: 'Apply for Co-Connect',
        ctaHref: '#apply',
    },
];

/* ─── Partnership Card ───────────────────────────────────────────────────── */
const PartnershipCard = ({ tier, price, priceLabel, accentColor, highlight, description, perks, cta, ctaHref }) => (
    <div
        className={`relative flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden
            ${highlight
                ? 'border-[#00DEEE] shadow-[0_0_40px_rgba(0,222,238,0.15)] scale-[1.02]'
                : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
            }
            bg-white`}
    >
        {highlight && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1352A1] via-[#00DEEE] to-[#1352A1]" />
        )}

        {highlight && (
            <div className="absolute top-4 right-4">
                <span className="bg-[#00DEEE] text-black text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                    Most Popular
                </span>
            </div>
        )}

        <div className="p-6 flex flex-col flex-1">
            {/* Tier badge */}
            <div className="flex items-center gap-2 mb-4">
                <div
                    className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
                    style={{ background: accentColor }}
                >
                    <span className="text-white text-[10px] font-black">A</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#0A2540]">{tier}</p>
            </div>

            {/* Price */}
            <div className="mb-4">
                {price ? (
                    <p className="text-4xl font-black text-[#0A2540]">{price}</p>
                ) : (
                    <p className="text-2xl font-black text-[#0A2540]">{priceLabel}</p>
                )}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed mb-5">{description}</p>

            {/* Divider */}
            <div className="border-t border-gray-100 mb-5" />

            {/* Perks */}
            <ul className="flex flex-col gap-2.5 flex-1">
                {perks.map((perk, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#0A2540]">
                        <FaCheck
                            className="mt-0.5 flex-shrink-0"
                            style={{ color: accentColor === '#00DEEE' ? '#00DEEE' : '#1352A1' }}
                        />
                        <span>{perk}</span>
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <a
                href={ctaHref}
                onClick={e => e.preventDefault()}
                className={`mt-6 inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider px-5 py-3 rounded-lg transition-all duration-200
                    ${highlight
                        ? 'bg-[#00DEEE] text-black hover:bg-cyan-300'
                        : 'bg-[#0A2540] text-white hover:bg-[#1352A1]'
                    }`}
            >
                {cta} <FaArrowRight />
            </a>
        </div>
    </div>
);

/* ─── Main Partners Page ─────────────────────────────────────────────────── */
const PartnersPage = () => {
    return (
        <main className="pt-16">

            {/* ─── Hero Banner ──────────────────────────────────────────── */}
            <section className="w-full pt-20 relative overflow-hidden bg-[#124da0]">
                {/* Dot grid background */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                    }}
                />

                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
                    {/* Badge */}
                    <p className="text-[#00DEEE] border border-[#00DEEE] w-fit flex mx-auto rounded-full px-4 py-1.5 text-sm font-bold uppercase mb-4 tracking-wider">
                        Partner With Us
                    </p>

                    {/* Headline */}
                    <div className="flex flex-col w-fit mx-auto">
                        <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-black uppercase mb-2 leading-[1.05]">
                            Showcase. Grow. Lead.
                        </h1>
                        <TitleUnderline />
                    </div>

                    {/* Subtitle */}
                    <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
                        At the Africa Product Quality Engineering Conference (APQEC), we bring together the people and
                        brands driving the future of software quality and product excellence.
                    </p>

                    {/* CTA */}
                    <a
                        href="#apply"
                        onClick={e => e.preventDefault()}
                        className="inline-flex items-center gap-2 bg-[#00DEEE] text-black text-sm font-bold uppercase px-8 py-4 rounded hover:bg-cyan-300 transition-colors mb-20"
                    >
                        <MdArrowOutward className="text-lg" />
                        View Partnership Plans
                    </a>
                </div>

                {/* Ticker */}
                <div className="relative z-10">
                    <Ticker />
                </div>
            </section>

            {/* ─── Our Partners logos ───────────────────────────────────── */}
            <section className="w-full bg-white py-16" id="our-partners">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <h2 className="text-center text-[#0F2745] text-4xl font-bold uppercase mb-12">
                        Our Partners
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
                        <img src={ourPartners} alt="Our Partners" className="w-full h-auto" />
                    </div>
                </div>
            </section>

            {/* ─── Partnership Lanes ───────────────────────────────────── */}
            <section className="w-full bg-[#f5f8fc] py-20" id="apply">
                <div className="max-w-7xl mx-auto px-6 md:px-12">

                    {/* Heading */}
                    <div className="text-center mb-14">
                        <p className="text-[#1352A1] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                            Partnership Tiers
                        </p>
                        <div className="flex flex-col w-fit mx-auto">
                            <h2 className="text-[#0F2745] text-3xl md:text-4xl font-black uppercase mb-2">
                                Choose Your Partnership Lane
                            </h2>
                            <TitleUnderline />
                        </div>
                        <p className="text-gray-500 text-sm max-w-xl mx-auto mt-2">
                            Every tier is designed to align your brand with Africa&apos;s fastest-growing quality engineering community.
                        </p>
                    </div>

                    {/* Cards grid — top 3 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        {PARTNERSHIP_LANES.slice(0, 3).map(lane => (
                            <PartnershipCard key={lane.id} {...lane} />
                        ))}
                    </div>

                    {/* Cards grid — bottom 2 centred */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {PARTNERSHIP_LANES.slice(3).map(lane => (
                            <PartnershipCard key={lane.id} {...lane} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Ready to Partner CTA ────────────────────────────────── */}
            <section className="w-full py-20 bg-[#e1ecf4]">
                <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
                    <div className="flex flex-col w-fit mx-auto">
                        <h2 className="text-[#0F2745] text-3xl md:text-4xl font-black uppercase mb-2">
                            Ready to Partner With APQEC?
                        </h2>
                        <TitleUnderline />
                    </div>
                    <p className="text-[#0F2745]/70 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
                        If a tier feels right for you, fill in our quick form. We'll get back to you and confirm your slot at the conference.
                    </p>
                    <a
                        href="#apply"
                        onClick={e => e.preventDefault()}
                        className="inline-flex items-center gap-2 bg-[#00DEEE] text-black text-sm font-bold uppercase px-8 py-4 rounded hover:bg-cyan-300 transition-colors"
                    >
                        <FaArrowRight /> Apply Now
                    </a>
                </div>
            </section>

        </main>
    );
};

export default PartnersPage;
