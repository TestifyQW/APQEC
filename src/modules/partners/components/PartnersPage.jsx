import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { FaArrowRight, FaCheck } from 'react-icons/fa6';
import partnerBadge from '../../../assets/partnerBadge.svg';

import ourPartners from '../../../assets/ourPartners.png';
import AfricanMap from '../../../assets/african-map.png';

/* ─── Ticker ─────────────────────────────────────────────────────────────── */
const TICKER_ITEMS = ['PARTNER WITH US', '#APQEC26'];

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
        tier: 'AccessPass + Certificate',
        price: '$5',
        priceLabel: null,
        accentColor: '#1352A1',
        highlight: false,
        sections: [
            {
                title: 'This Includes:',
                items: [
                    'Full access to all APQEC sessions, panels, and activities',
                    'Access to product demos and crowd testing labs',
                    'Entry into networking rooms and community engagements',
                    'Official Certificate of Participation (downloadable and verifiable)',
                ],
            },
            {
                title: 'Perfect For:',
                items: [
                    'QA professionals and engineers growing their credentials',
                    'Students and interns needing industry exposure proof',
                    "Anyone who wants to document their involvement in Africa's leading QA event",
                ],
            },
            {
                title: 'Why Choose This Ticket?',
                items: [
                    'Because learning is valuable — and proving it gives you a competitive edge.',
                    'Add APQEC to your resume, LinkedIn, or training portfolio with a globally recognized participation certificate.',
                ],
            },
        ],
        cta: 'Become a Partner',
        ctaHref: '#apply',
    },
    {
        id: 'community',
        tier: 'APQEC Commune',
        price: '$20',
        priceLabel: null,
        accentColor: '#1352A1',
        highlight: false,
        intro: [
            'As part of our mission to elevate product quality and engineering standards across Africa.',
            'This option is designed to give relevant communities greater visibility, access, and connection to our network of innovators and professionals\u2014at a highly subsidized rate.',
        ],
        sections: [
            {
                title: 'What You Get (Partner Benefits):',
                items: [
                    "Your community's logo will be featured on the APQEC website under the Partner Communities section",
                    'Your brand will be included in a social media carousel highlighting all partner communities.',
                    'Your community will be mentioned in one official APQEC pre-event newsletter.',
                    'Bring all your community members for FREE to enjoy the APQEC Community Networking Mixer after the event.',
                    'You will receive an official Certificate of Partnership from the APQEC team.',
                ],
            },
            {
                title: 'What APQEC Expects from Partners:',
                items: [
                    'You will promote the APQEC Conference to your community members using your active platforms',
                    'You will share the registration link with your members for visibility',
                    'You will make at least one post or story about APQEC on your community\'s social media handles',
                    'You will encourage at least 5 of your community members to register for the APQEC Conference',
                    'You will acknowledge APQEC as a partner community in at least one of your community communications',
                ],
            },
        ],
        cta: 'Become a Partner',
        ctaHref: '#apply',
    },
    {
        id: 'teststorm',
        tier: 'APQEC TestStorm',
        price: '$950',
        priceLabel: null,
        accentColor: '#1352A1',
        highlight: false,
        intro: [
            'Get honest feedback. Fuel real improvement.'
        ],
        sections: [
            {
                title: 'Our Value Proposition to APQEC TestStorm Partners:',
                items: [
                    'Diverse Testing Pool: Access a broad community of testers with various devices, skills, and real-world contexts.',
                    'Insightful Feedback: Receive practical, unbiased feedback that reveals bugs, usability issues, and enhancement opportunities.',
                    'Product Awareness: Drive engagement and visibility for your product among QA experts and tech professionals.',
                    'Quality Improvement: Enhance product readiness and reliability before scaling to a larger audience.',
                ],
            },
        ],
        cta: 'Become a Partner',
        ctaHref: '#apply',
    },
    {
        id: 'launchlight',
        tier: 'APQEC LaunchLight',
        price: '$1800',
        priceLabel: null,
        accentColor: '#1352A1',
        highlight: false,
        intro: [
            'Our Value Proposition to APQEC LaunchLight Partners:'
        ],
        sections: [
            {
                title: 'Our Value Proposition to APQEC LaunchLight Partners:',
                items: [
                    'Brand Visibility: Put your product in front of a concentrated, quality-focused audience at APQEC.',
                    'Marketing Boost: Combine traditional ad exposure with the unique benefit of live user testing and real-time reactions.',
                    'Data-Driven Promotion: Leverage feedback from LaunchLight viewers to refine positioning, messaging and product cit.',
                    'Dual Advantage: Get both promotional spotlight and hands-on QA support from testers at the same time.',
                ],
            },
        ],
        cta: 'Become a Partner',
        ctaHref: '#apply',
    },
    {
        id: 'certconnect',
        tier: 'APQEC CertConnect',
        price: null,
        priceLabel: 'Require approval',
        accentColor: '#1352A1',
        highlight: false,
        intro: [
            'Our Value Proposition to APQEC CertConnect Partners:'
        ],
        sections: [
            {
                title: "As a Certification Partner, you'll:",
                items: [
                    'Targeted Reach: Can direct exposure to over 3,000 aspiring and practicing QA professionals actively seeking certification.',
                    'Market Penetration: Expand your certification footprint across Africa and other emerging markets.',
                    'Brand Trust: Position your organisation as an official certification ally of APQEC, boosting credibility and recognition.',
                    'Lead Generation: Capture qualified leads from attendees ready to invest in their professional growth.',
                ],
            },
        ],
        cta: 'Become a Partner',
        ctaHref: '#apply',
    },
];

/* ─── Partnership Card ───────────────────────────────────────────────────── */
const PartnershipCard = ({ tier, price, priceLabel, accentColor, highlight, intro, sections, cta, ctaHref }) => (
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
            <div className="flex items-center gap-2 mb-3">
                <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: accentColor }}
                >
                    <img src={partnerBadge} alt="" />
                </div>
                <p className="text-sm font-bold text-[#0A2540]">{tier}</p>
            </div>

            {/* Price */}
            <div className="mb-4">
                <p className="text-3xl font-black text-[#0A2540]">
                    {price ?? priceLabel}
                </p>
            </div>

            {/* Intro paragraphs (optional) */}
            {intro && intro.length > 0 && (
                <div className="flex flex-col gap-2 mb-4">
                    {intro.map((para, i) => (
                        <p key={i} className="text-sm text-gray-800">{para}</p>
                    ))}
                </div>
            )}

            {/* Sections */}
            <div className="flex flex-col gap-4 flex-1">
                {sections.map((section, si) => (
                    <div key={si}>
                        <p className="text-sm font-bold text-[#0A2540] mb-2">{section.title}</p>
                        <ul className="flex flex-col gap-2">
                            {section.items.map((item, ii) => (
                                <li key={ii} className="flex items-center gap-2.5 text-sm text-gray-600 leading-snug">
                                    <FaCheck
                                        className="mt-0.5 flex-shrink-0 text-white bg-[#1352A1] rounded-full p-1"
                                        size={16}
                                    />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <a
                href={ctaHref}
                onClick={e => e.preventDefault()}
                className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-bold text-black mx-auto p-4 w-full border border-gray-300 rounded-lg uppercase tracking-wider transition-all duration-200 hover:gap-3 group"
            >
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                {cta}
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
                    <p className="text-white text-sm md:text-base max-w-3xl mx-auto mb-10 leading-relaxed">
                        At the Africa Product Quality Engineering Conference (APQEC), we're building more than just an <br /> event, we're shaping the future of software excellence across Africa.
                    </p>

                    {/* CTA */}
                    <a
                        href="#apply"
                        onClick={e => e.preventDefault()}
                        className="inline-flex items-center gap-2 bg-[#00DEEE] text-black text-sm font-bold uppercase px-8 py-4 rounded hover:bg-cyan-300 transition-colors mb-20"
                    >
                        <FaArrowRight />
                        Partner with us today
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
                        <p className="text-[#1352A1] text-md font-bold uppercase tracking-[0.2em] mb-3">
                            Partnership Plans
                        </p>
                        <div className="flex flex-col w-fit mx-auto">
                            <h2 className="text-[#0F2745] text-3xl md:text-4xl font-black uppercase mb-2">
                                Choose Your Partnership Lane
                            </h2>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="w-full mx-auto">
                        {/* Top 3 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                            {PARTNERSHIP_LANES.slice(0, 3).map(lane => (
                                <PartnershipCard key={lane.id} {...lane} />
                            ))}
                        </div>

                        {/* Bottom 2 centred */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {PARTNERSHIP_LANES.slice(3).map(lane => (
                                <PartnershipCard key={lane.id} {...lane} />
                            ))}
                        </div>
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

export default PartnersPage;
