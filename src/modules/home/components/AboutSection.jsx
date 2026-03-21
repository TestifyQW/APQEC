import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

/* ─── Card data ───────────────────────────────────────────────────────────── */
const CARDS = [
    {
        id: 'testify',
        heading: 'About',
        name: 'Testify Limited',
        body: 'We are a creative, interactive, and reputable software testing and QA agency, with a proven record of working and delivering different projects. Our track record of performance and excellence is greatly displayed through testimonials from clients we have worked with in the past who can ascertain of our capabilities. We specialize in the delivery of full-cycle QA and strongly believe that the core of our company\'s growth is built on trust and quality relationships with our clients.',
        href: '#testify',
    },
    {
        id: 'testarsquarter',
        heading: 'About',
        name: 'TestarsQuarter',
        body: 'TestarsQuarter is Africa\'s top software testing community, with over 2,000 professionals helping both new and experienced testers grow. We focus on learning, teamwork, and career development in Quality Assurance, offering support and opportunities for everyone. TestarsQuarter is Africa\'s most active software testing community, with over 2,000 professionals empowering both aspiring and experienced testers.',
        href: '#testarsquarter',
    },
];

/* ─── Single card ─────────────────────────────────────────────────────────── */
const AboutCard = ({ heading, name, body, href }) => (
    <div className="flex-1 min-w-0 bg-white/10 rounded-2xl p-8 flex flex-col gap-6">
        {/* Title */}
        <div>
            <h2 className="text-white text-3xl font-black uppercase leading-tight">
                {heading}
            </h2>
            <h2 className="text-white text-3xl font-black uppercase leading-tight">
                {name}
            </h2>
        </div>

        {/* Body */}
        <p className="text-white/70 text-sm leading-relaxed flex-1">
            {body}
        </p>

        {/* CTA */}
        <a
            href={href}
            className="inline-flex items-center gap-2 bg-[#00DEEE] text-[#071330] text-xs font-black uppercase tracking-widest px-5 py-3 rounded w-fit hover:bg-[#00bfcc] transition-colors"
        >
            <MdArrowOutward className="text-base" />
            Learn More
        </a>
    </div>
);

/* ─── Main Section ───────────────────────────────────────────────────────── */
const AboutSection = () => (
    <section className="w-full bg-[#0D1B3E] py-20 relative overflow-hidden" id='company'>

        {/* Grid texture overlay */}
        <div
            className="absolute inset-0 opacity-10"
            style={{
                backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
                `,
                backgroundSize: '48px 48px',
            }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row gap-6">
                {CARDS.map((card) => (
                    <AboutCard key={card.id} {...card} />
                ))}
            </div>
        </div>
    </section>
);

export default AboutSection;
