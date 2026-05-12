import React, { useState } from 'react';
import { TbTool, TbBulb } from "react-icons/tb";
import { BiCrown } from "react-icons/bi";



const FEATURES = [
    {
        icon: <TbTool />,
        title: 'The Quality-to-Product Bridge',
        body: 'Learn how to align engineering excellence with business leadership to release solutions customers actually love.',
    },
    {
        icon: <TbBulb />,
        title: 'Pan-African Networking',
        body: 'Connect with a community of over 4,000 curious minds from across 26+ countries to solve regional tech challenges.',
    },
    {
        icon: <BiCrown />,
        title: 'Accelerated Delivery',
        body: 'Discover the frameworks needed to build better products faster without sacrificing global quality standards.',
    },
    {
        icon: <TbBulb />,
        title: 'Strategic Decision Making',
        body: 'Gain the insights required to make high-level leadership decisions on product readiness and risk.',
    },
];

/* ─── Deep-dive tracks data ──────────────────────────────────────────────── */
const TRACKS = [
    {
        num: '01',
        title: 'AI for Quality Engineering',
        body: "This track explores how artificial intelligence is reshaping every layer of the quality engineering stack from test case generation and intelligent automation to AI-assisted exploratory testing and self-healing pipelines. We'll examine what works, what fails, and what's still hype, with practical demonstrations from teams already shipping AI-augmented quality at scale. For African product teams navigating limited resources and complex contexts, this track is the bridge between global AI capability and continental reality.",
        bg: '#E6B73B',
        textColor: '#0A2540',
        hoverBg: '#e6b73b',
        featured: true,
    },
    {
        num: '02',
        title: 'Security',
        body: 'In an era where every product is a target and every release is an attack surface, security can no longer live downstream of quality engineering the two are inseparable. This track explores threat modelling for product teams, security testing in modern architectures, vulnerability discovery as part of the QE workflow, and how African teams are building secure products in fintech, healthtech, and public infrastructure. Practical, defensive, and rooted in the realities of building for high-stakes African markets.',
        bg: '#333333',
        textColor: '#0A2540',
        hoverBg: '#333333',
        featured: true,
    },
    {
        num: '03',
        title: 'Cyber-Resilient Quality (DevSecOps)',
        body: 'This track tackles the operational reality of embedding quality and security into continuous delivery pipelines. From shift-left testing strategies and pipeline observability to infrastructure-as-code validation and automated compliance, we\'ll cover how high-performing engineering teams are building quality into the very fabric of how software ships. Expect hands-on patterns, tooling deep-dives, and frameworks that translate across team sizes from two-person startups to enterprise platforms.',
        bg: '#07EE9E',
        textColor: '#0A2540',
        hoverBg: '#07EE9E',
        featured: true,
    },
    {
        num: '04',
        title: 'Customer Experience Engineering',
        body: 'This track reframes quality engineering through the lens of customer experience moving the conversation from bug counts to user outcomes, from test coverage to experience integrity. We\'ll explore CX-driven testing methodologies, accessibility engineering, localisation testing for multilingual African markets, and the emerging discipline of experience observability. For product builders serving diverse, demanding, and underserved users across the continent, this track makes the case that CX is the next frontier of quality.',
        bg: '#07EE9E',
        textColor: '#0A2540',
        hoverBg: '#07EE9E',
        featured: true,
    },
    {
        num: '05',
        title: 'Cyber Resilience',
        body: 'Beyond preventing breaches, modern quality engineering must build products that survive them. This track explores chaos engineering, disaster recovery testing, business continuity validation, and the principles of designing systems that fail gracefully and recover fast. From financial systems that cannot afford downtime to public-facing platforms serving millions of African users, we\'ll examine how resilience becomes a measurable property of product quality not just an IT afterthought.',
        bg: '#333333',
        textColor: '#0A2540',
        hoverBg: '#333333',
        featured: true,
    },
    {
        num: '06',
        title: 'Quality Leadership & Culture',
        body: 'This track is for the testers becoming managers, the managers becoming leaders, and the leaders building quality-first organisations. We\'ll cover building and scaling QE teams, navigating the politics of quality in fast-moving companies, the metrics that actually matter, and how to embed a quality mindset across product, engineering, and executive layers. With a specific focus on the African context where quality leaders often have to fight for budget, recognition, and seat at the table, this track gives you the playbook for leading the work, not just doing it.',
        bg: '#E6B73B',
        textColor: '#0A2540',
        hoverBg: '#e6b73b',
        featured: true,
    },
];

/* ─── Sub-components ─────────────────────────────────────────────────────── */
const FeatureCard = ({ icon, title, body }) => (
    <div className="flex flex-col gap-4 px-6 py-6 pt-10">
        {/* Icon pill */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0635C9] text-white">
            {icon}
        </div>
        {/* Title */}
        <h3 className="font-black text-white uppercase text-sm leading-snug tracking-wide">
            {title}
        </h3>
        {/* Bullet + body */}
        <p className="text-white/60 text-xs leading-relaxed flex gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#F5C842' }} />
            {body}
        </p>
    </div>
);

const hexToRgba = (hex, alpha) => {
    if (!hex) return 'transparent';
    let r = 0, g = 0, b = 0;
    const cleanHex = hex.replace('#', '');
    if (cleanHex.length === 3) {
        r = parseInt(cleanHex[0] + cleanHex[0], 16);
        g = parseInt(cleanHex[1] + cleanHex[1], 16);
        b = parseInt(cleanHex[2] + cleanHex[2], 16);
    } else {
        r = parseInt(cleanHex.substring(0, 2), 16);
        g = parseInt(cleanHex.substring(2, 4), 16);
        b = parseInt(cleanHex.substring(4, 6), 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const TrackCard = ({ num, title, body, bg, textColor, featured }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="rounded-2xl p-6 flex flex-col min-h-[220px] overflow-hidden cursor-pointer"
            style={{
                background: isHovered ? bg : hexToRgba(bg, 0.1),
                color: isHovered ? 'white' : textColor,
                transition: 'all 0.5s ease',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="text-sm font-semibold opacity-60 mb-auto">{num}</span>
            <div className="flex flex-col justify-end mt-4">
                <h4
                    className={`font-semibold uppercase leading-snug ${isHovered ? 'text-lg' : 'text-sm'}`}
                    style={{ transition: 'all 1s ease' }}
                >
                    {title}
                </h4>
                <div
                    className="overflow-hidden"
                    style={{
                        maxHeight: isHovered ? '300px' : '0px',
                        opacity: isHovered ? 1 : 0,
                        transition: 'all 1s ease',
                        marginTop: isHovered && body ? '12px' : '0px'
                    }}
                >
                    {body && (
                        <p className="text-xs leading-relaxed opacity-80">{body}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

/* ─── Main Section ───────────────────────────────────────────────────────── */
const TracksSection = () => (
    <section className="w-full bg-white" id='tracks'>
        <div className="max-w-7xl mx-auto flex flex-col items-center px-6 md:px-12">

            {/* ── Tagline ── */}
            <div className="max-w-4xl mx-auto text-center py-12">
                <p
                    className="font-bold text-xl uppercase text-[#D80027]"
                >
                    Stop just &ldquo;Testing&rdquo; and start engineering quality. We&rsquo;ve curated specialized <br />
                    tracks designed to bridge the gap between code and customer delight.
                </p>
            </div>

            {/* ── Feature cards (dark strip) ── */}
            <div
                className="rounded-2xl max-w-5xl overflow-hidden flex flex-col md:flex-row"
                style={{ background: '#0D0D0D' }}
            >
                {FEATURES.map((f) => (
                    <FeatureCard key={f.title} {...f} />
                ))}
            </div>

            {/* ── "6 Deep-Dive Tracks" heading ── */}
            <div className="flex flex-col items-center py-14 gap-2">
                <h2
                    className="text-[#0F2745] text-4xl font-bold uppercase text-center"
                >
                    6 Deep-Dive Tracks
                </h2>
            </div>

            {/* ── 3-column grid ── */}
            <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-16">
                {TRACKS.map((track) => (
                    <TrackCard key={track.num} {...track} />
                ))}
            </div>

        </div>
    </section>
);

export default TracksSection;
