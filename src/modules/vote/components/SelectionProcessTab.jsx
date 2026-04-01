import React from 'react';
import { FaCheck } from 'react-icons/fa6';

/* ─── Section heading ────────────────────────────────────────────────────── */
const SectionHeading = ({ title }) => (
    <div className="flex flex-col w-fit mb-6">
        <h2 className="text-[#0A1A3A] text-2xl font-black uppercase tracking-wide">{title}</h2>
    </div>
);

/* ─── Eligibility Requirements data ─────────────────────────────────────── */
const ELIGIBILITY_REQS = [
    'Be an African product quality engineer Or a QA personnel',
    '18+ years of age',
    'Active product testing for a minimum of 12 consecutive months',
    'Verifiable presence on major platforms (Youtube, Instagram,Tiktok, X, Thread, etc.)',
    'Original portfolio/CV',
    'Good standing - no platform bans or major violations',
];

/* ─── How It Works cards ─────────────────────────────────────────────────── */
const HOW_IT_WORKS = [
    {
        id: 'curation',
        label: 'CURATION',
        color: '#E6B73B',
        textColor: '#0A1A3A',
        desc: 'Our team reviews the nominations that come in. Category entries are vetted based on location, impact, transparency, and evidence. We check work on communities.',
    },
    {
        id: 'shortlisting',
        label: 'SHORTLISTING',
        color: '#FF6B35',
        textColor: '#fff',
        desc: 'After curation, our judges shortlist the top 3 nominees in the final category.',
    },
    {
        id: 'public-voting',
        label: 'PUBLIC VOTING',
        color: '#1352A1',
        textColor: '#fff',
        desc: 'The community votes for their APQEC 2026 picks at this site. Votes are transparent and the results can be traced and confirmed by anyone who votes.',
    },
    {
        id: 'validation',
        label: 'VALIDATION',
        color: '#07C983',
        textColor: '#fff',
        desc: 'Our team will validate all scores to ensure integrity before results come in.',
    },
];

/* ─── Evaluation Criteria ────────────────────────────────────────────────── */
const EVAL_CRITERIA = [
    'Impact: The project achieved a measurable result, advanced equity, and broad relevance.',
    'Innovative: Fresh approaches to content formats, platforms, tools, and communities.',
    'Community: Contributed to the community and industry through education, resources, and content.',
];

/* ─── Timeline events ────────────────────────────────────────────────────── */
const TIMELINE = [
    {
        month: 'MAR 2026',
        events: ['Nominations Launch'],
    },
    {
        month: 'APR 2026',
        events: ['Finalist Shortlisted'],
    },
    {
        month: 'MAY 2026',
        events: ['Public Voting Live (on this website!)', 'Awards Night Finalisation'],
    },
];

/* ─── Main Component ─────────────────────────────────────────────────────── */
const SelectionProcessTab = () => (
    <div className="max-w-5xl mx-auto flex flex-col gap-14">

        {/* ── 1. Eligibility Requirements ── */}
        <div>
            <SectionHeading title="Eligibility Requirements" />
            <p className="text-gray-500 text-sm mb-6 max-w-4xl leading-relaxed">
                Our transparent multi-phase selection process ensures that every award is earned through merit and endorsed by you. All nominees must <br />meet the following criteria:
            </p>
            <div className="flex flex-col gap-2">
                {ELIGIBILITY_REQS.map((req, i) => (
                    <div
                        key={i}
                        className="flex items-start gap-3 px-5 py-3.5 rounded-sm text-sm text-white/80 leading-relaxed"
                        style={{ background: 'linear-gradient(135deg, #0A1A3A 0%, #102040 100%)' }}
                    >
                        <span>{req}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* ── 2. How It Works ── */}
        <div>
            <SectionHeading title="How It Works" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {HOW_IT_WORKS.map(card => (
                    <div
                        key={card.id}
                        className="rounded-sm p-6 flex flex-col gap-3 min-h-[160px]"
                        style={{ background: card.color }}
                    >
                        <p
                            className="text-sm font-black uppercase tracking-widest"
                            style={{ color: card.textColor }}
                        >
                            {card.label}
                        </p>
                        <p
                            className="text-sm leading-relaxed"
                            style={{ color: card.textColor, opacity: card.textColor === '#fff' ? 0.85 : 0.75 }}
                        >
                            {card.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>

        {/* ── 3. Evaluation Criteria ── */}
        <div>
            <div
                className="rounded-sm p-7"
                style={{ background: 'linear-gradient(135deg, #0A1A3A 0%, #102040 100%)' }}
            >
                <p className="text-lg font-bold uppercase tracking-widest text-white mb-4">
                    Evaluation Criteria
                </p>
                <div className="flex flex-col gap-3">
                    {EVAL_CRITERIA.map((crit, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <p className="text-sm text-white/75 leading-relaxed">{crit}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* ── 4. Timeline ── */}
        <div>
            <SectionHeading title="Timeline" />

            {/* Timeline track */}
            <div className="relative mt-6">
                {/* Horizontal line */}
                <div className="hidden sm:block absolute top-3 left-0 right-0 h-px bg-gray-300 z-0" />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
                    {TIMELINE.map((item, i) => (
                        <div key={i} className="flex flex-col gap-3">
                            {/* Dot + month */}
                            <div className="flex items-center gap-3 sm:flex-col sm:items-start">
                                <div className="w-6 h-6 rounded-full bg-[#E6B73B] border-4 border-white shadow-md flex-shrink-0" />
                                <p className="text-xs font-black text-[#0A1A3A] uppercase tracking-widest">
                                    {item.month}
                                </p>
                            </div>
                            {/* Events */}
                            <div className="flex flex-col gap-1.5 pl-0 sm:pl-0">
                                {item.events.map((ev, j) => (
                                    <p key={j} className="text-xs text-gray-500 leading-relaxed">
                                        • {ev}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </div>
);

export default SelectionProcessTab;
