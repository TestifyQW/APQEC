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
        desc: 'Our research-driven Selection Committee nominates leaders based on Excellence, Impact, Innovation, and Consistency.',
    },
    {
        id: 'shortlisting',
        label: 'SHORTLISTING',
        color: '#FF6B35',
        desc: 'Independent judges review nominations to determine 5 finalists per category.',
    },
    {
        id: 'public-voting',
        label: 'PUBLIC VOTING',
        color: '#1352A1',
        desc: 'The community votes for their winners via our transparent channel. One vote per person per category.',
    },
    {
        id: 'validation',
        label: 'VALIDATION',
        color: '#07C983',
        desc: 'Judges validate final counts to ensure integrity before the ceremony.',
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
        events: ['Nominees Curation'],
    },
    {
        month: 'APR 2026',
        events: ['Finalist Shortlisted'],
    },
    {
        month: 'MAY, 2026',
        events: ['Public Voting starts & Winners revealed live at the Moment Awards on June 6th.'],
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-x-0 sm:gap-y-2">
                {HOW_IT_WORKS.map((card, idx) => (
                    <div
                        key={card.id}
                        className={`rounded-xl p-8 sm:p-10 flex flex-col gap-3 min-h-[180px] sm:min-h-[200px] ${idx % 2 === 0 ? 'sm:rounded-none sm:rounded-l-xl' : 'sm:rounded-lg -ml-2 sm:rounded-r-xl'
                            }`}
                        style={{ background: card.color }}
                    >
                        <p className="text-xl font-bold uppercase tracking-wide text-white">
                            {card.label}
                        </p>
                        <p className="text-[15px] leading-relaxed text-white/95 max-w-[95%]">
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

            {/* Desktop Timeline - Matches requested UI */}
            <div className="relative mt-8 mb-4 hidden sm:block h-[180px]">
                {/* Horizontal bottom line */}
                <div className="absolute bottom-0 left-4 right-4 h-px bg-[#a1a1aa] z-0" />

                <div className="grid grid-cols-3 w-full h-full relative z-10 pl-8 pr-4">
                    {TIMELINE.map((item, i) => (
                        <div key={i} className="relative flex flex-col items-start h-full">
                            {/* Vertical line and dot */}
                            <div className="absolute top-[6px] bottom-0 left-0 flex flex-col items-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#18181b] shrink-0" />
                                <div className="w-[1px] h-full bg-[#a1a1aa]" />
                            </div>

                            {/* Text content aligned right next to the dot */}
                            <div className="pl-5 pt-0">
                                <p className="text-[13px] sm:text-sm font-black text-[#0A1A3A] uppercase tracking-wider leading-none mb-2">
                                    {item.month}
                                </p>
                                {item.events.map((ev, j) => (
                                    <p key={j} className="text-[11px] sm:text-xs text-slate-600 leading-relaxed pr-6 max-w-[260px]">
                                        {ev}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Timeline */}
            <div className="sm:hidden flex flex-col gap-6 mt-6 ml-2">
                {TIMELINE.map((item, i) => (
                    <div key={i} className="flex gap-4">
                        {/* Dot and vertical line */}
                        <div className="flex flex-col items-center">
                            <div className="w-2 h-2 rounded-full bg-[#18181b] shrink-0 mt-1" />
                            {i !== TIMELINE.length - 1 && <div className="w-px h-full bg-[#a1a1aa] my-1" />}
                        </div>
                        {/* Mobile Text Content */}
                        <div className="pb-4">
                            <p className="text-sm font-black text-[#0A1A3A] uppercase tracking-wider mb-1">
                                {item.month}
                            </p>
                            {item.events.map((ev, j) => (
                                <p key={j} className="text-xs text-slate-600 leading-relaxed">
                                    {ev}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </div>
);

export default SelectionProcessTab;
