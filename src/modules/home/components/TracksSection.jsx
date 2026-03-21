import React from 'react';
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
        title: 'The Quality Leadership and Culture Lab',
        body: 'This track focuses on storytelling formats, distribution strategies, and monetisation with content creators, filmmakers, podcasters, and influencers redefining digital media across Africa. This track focuses on storytelling formats, distribution strategies.',
        bg: '#F5C842',
        textColor: 'white',
        featured: true,
    },
    {
        num: '02',
        title: 'The Quality Bottom Line',
        bg: '#F0F0F0',
        textColor: '#0A2540',
    },
    {
        num: '03',
        title: 'Cyber-Resilient Quality (DevSecOps)',
        bg: '#D6F0EE',
        textColor: '#0A2540',
    },
    {
        num: '04',
        title: 'The AI Frontier',
        bg: '#D6F0EE',
        textColor: '#0A2540',
    },
    {
        num: '05',
        title: 'Platform Engineering and Elastic Infrastructure',
        bg: '#FFF9E6',
        textColor: '#0A2540',
    },
    {
        num: '06',
        title: 'CX Engineering',
        bg: '#F0F0F0',
        textColor: '#0A2540',
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

const TrackCard = ({ num, title, body, bg, textColor, featured }) => (
    <div
        className="rounded-2xl p-6 flex flex-col justify-between min-h-[220px]"
        style={{ background: bg, color: textColor }}
    >
        <span className="text-sm font-semibold opacity-60">{num}</span>
        <div>
            <h4 className={`font-semibold uppercase leading-snug ${featured ? 'text-lg mb-3' : 'text-sm mt-auto'}`}>
                {title}
            </h4>
            {body && (
                <p className="text-xs leading-relaxed mt-2 opacity-80">{body}</p>
            )}
        </div>
    </div>
);

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
