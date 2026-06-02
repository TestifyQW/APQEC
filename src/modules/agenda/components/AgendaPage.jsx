import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { MdArrowOutward } from 'react-icons/md';
import RegisterLink from '../../../components/RegisterLink';

/* ─── Schedule data (from Canva design) ─────────────────────────────────── */
const DAYS = [
    {
        id: 1,
        day: 'Day 1',
        date: 'Thursday, 4th June 2026',
        track: 'Master The Future of Product Quality Engineering',
        theme: 'AI, Emerging Tools, and the New QE Stack',
        sessions: [
            {
                time: '10:00 am – 10:20 am',
                format: 'Kickoff',
                session: 'Welcome & Conference Opening',
                // description: 'Setting the stage for the future of QE.',
                who: ['Ibironke Yekinni (Convener)'],
            },
            {
                time: '10:25 am – 10:50 am',
                format: 'Opening Keynote',
                session: 'The Africa AI Quality Doctrine',
                // description: 'Strategic blueprint for AI-driven quality engineering.',
                who: ['Ibironke Yekinni'],
            },
            {
                time: '10:55 am – 11:40 am',
                format: 'Panel Discussion',
                session: 'AI in QE: Productivity Boom or Quality Bomb?',
                // description: 'A high-stakes debate on the realities of AI implementation.',
                who: ['Christianah Ajala, Omowumi Oladele, Sally Sedky, & Iseoluwa Adelowo'],
            },
            {
                time: '11:45 am – 12:00 pm',
                format: 'Icebreaker Game',
                session: '⚡ Spot the Bug Interactive Trivia',
                // description: 'A fast-paced, live community game with prizes to re-energize the audience.',
                who: ['Host / Emcee'],
            },
            {
                time: '12:05 pm – 13:05 pm',
                format: 'Deep-Dive Workshop',
                session: 'Hands-On: Building AI Test Agents with LLMs',
                // description: 'Interactive, technical masterclass on building autonomous agents.',
                who: ['Shashank Parmar'],
            },
            {
                time: '13:10 pm – 13:15 pm',
                type: 'break',
                label: '☕ Comfort Break - 5-Minute Screen Break & Networking',
            },
            {
                time: '13:20 pm – 13:30 pm',
                format: 'Lightning Talk',
                session: 'The Impact of AI in African Products',
                // description: 'Rapid-fire insights on localized AI deployment.',
                who: ['Nikhil Bhandari'],
            },
            {
                time: '13:35 pm – 14:05 pm',
                format: 'Solo Talk',
                session: "CX through a Product Manager's Lens",
                // description: 'Bridging the gap between product management and quality assurance.',
                who: ['Harmony Elendu'],
            },
            {
                time: '14:10 pm – 14:40 pm',
                format: 'Solo Talk',
                session: 'From Checklist to Culture: Embedding Accessibility into Everyday Testing',
                // description: 'Shifting accessibility testing left in the product lifecycle.',
                who: ['Christianah Ajala'],
            },
            {
                time: '14:45 pm – 14:55 pm',
                format: 'Final-Day Resess',
                session: '🎮 Two Truths & An AI Lie Game',
                // description: 'Audience engagement poll separating real tech capabilities from AI hype.',
                who: ['Host / Emcee'],
            },
            {
                time: '15:00 pm – 15:45 pm',
                format: 'Closing Keynote',
                session: 'In the Loop or Out For Loot: Responsible Use of AI',
                // description: 'High-authority framework on ethics and ownership in AI testing (30 mins talk + 15 mins Q&A).',
                who: ['James Bach'],
            },
            {
                time: '15:50 pm – 16:00 pm',
                format: 'Closing Wrap-up',
                session: 'Day 1 Recap & Day 2 Preview',
                // description: 'Summary of key insights and a sneak peek into tomorrow\'s stack.',
                who: ['Ibironke Yekinni'],
            },
        ],
    },
    {
        id: 2,
        day: 'Day 2',
        date: 'Friday, 5th June 2026',
        track: 'Beyond Test Execution',
        theme: 'Craft, Judgement, and Engineering Practice',
        sessions: [
            {
                time: '10:00 am – 10:15 am',
                format: 'Opening',
                session: 'Day 2 Welcome & Framing',
                // description: 'Setting the tone for deep craft and tester judgment.',
                who: ['Conference MC'],
            },
            {
                time: '10:20 am – 10:45 am',
                format: 'Opening Keynote',
                session: 'What I Learned Training 1,000 African Testers',
                // description: 'Key insights on talent development and technical scaling (30 mins talk + 15 mins Q&A).',
                who: ['Ibironke Yekinni'],
            },
            {
                time: '10:50 am – 11:50 am',
                format: 'Deep-Dive Workshop',
                session: 'Exploratory Testing Masterclass — Thinking Like a Tester',
                // description: 'An immersive, 60-minute practical masterclass.',
                who: ['George Kibe Ndung'],
            },
            {
                time: '11:55 am – 12:10 pm',
                format: 'Icebreaker',
                session: '🧩 The Mind Bug Live Riddle',
                // description: 'A quick, lateral-thinking puzzle game to challenge the audience\'s testing mindset.',
                who: ['Host / MC'],
            },
            {
                time: '12:15 pm – 13:00 pm',
                format: 'Panel Discussion',
                session: 'From Tester to Quality Strategist: Career Paths in African QE',
                // description: 'Navigating the evolution from manual execution to strategic leadership.',
                who: ['Séverin Doho, Mary Onuorah, Matachi Ononuju, Adedolapo Oguntayo-Williams & Mosunmola Olabello'],
            },
            {
                time: '13:05 pm – 13:35 pm',
                format: 'Solo Talk',
                // session: 'Security is a Quality Problem: A Tester\'s Guide to Owning the Pipeline',
                session: 'Transforming Test Reports into Business Language',
                // description: 'Shifting security left and embedding it into day-to-day QA.',
                // who: ['Samuel Afolabi'],
                who: ['Adea Natchiah-Blay'],
            },
            {
                time: '13:40 pm – 13:45 pm',
                type: 'break',
                label: '☕ Comfort Break - 5-Minute Screen Break & Networking',
            },
            {
                time: '13:50 pm – 14:20 pm',
                format: 'Fireside Chat',
                session: 'The Quality Leader\'s Playbook',
                // description: 'Strategic industry insights on leading high-performing engineering teams.',
                who: ['Larry Goddard'],
            },
            {
                time: '14:25 pm – 14:55 pm',
                format: 'Solo Talk',
                session: 'The Product Quality Engineer\'s Toolkit',
                who: ['Nikhil Bhandari'],
            },
            {
                time: '15:00 pm – 15:10 pm',
                format: 'Final-Day Recess',
                session: '🎯 QE Trivia Blitz',
                // description: 'A rapid-fire QA/QE history and trivia game using live platform polls.',
                who: ['Host / MC'],
            },
            {
                time: '15:15 pm – 16:00 pm',
                format: 'Closing Keynote',
                session: 'The Silent Erosion: Engineering Quality in the Age of Speed',
                // description: 'Protecting product integrity while hitting rapid deployment targets (30 mins talk + 15 mins Q&A).',
                who: ['Olubukola Omotola'],
            },
            {
                time: '16:05 pm',
                format: 'Closing Wrap-up',
                session: 'Day 2 Recap & Day 3 Preview',
                // description: 'Quick summary of engineering practices and a look ahead to Day 3.',
                who: ['Ibironke Yekinni'],
            },
        ],
    },
    {
        id: 3,
        day: 'Day 3',
        date: 'Saturday, 6th June 2026',
        track: 'Quality as Culture',
        theme: 'Leadership, Teams, Industries, and the Institutional Layer',
        sessions: [
            {
                time: '10:00 am – 10:15 am',
                format: 'Opening',
                session: 'Day 3 Welcome & Framing',
                // description: 'Setting the stage for institutional quality and leadership culture.',
                who: ['Conference MC'],
            },
            {
                time: '10:20 am – 10:45 am',
                format: 'Opening Keynote',
                session: 'Building the African Quality Stack',
                who: [],
            },
            {
                time: '10:50 am – 11:35 am',
                format: 'Panel Discussion',
                session: 'Quality Culture Across Industries: Fintech, HealthTech, & Public Sector',
                // description: 'How diverse sectors scale quality engineering frameworks under pressure.',
                who: ['Ikenna Okafor, Fagbohungbe Tobi, Adea Natchiah-Blay, & Matachi Ononuju'],
            },
            {
                time: '11:40 am – 12:10 pm',
                format: 'Fireside Chat',
                session: 'The CTO\'s View on Quality',
                // description: 'Strategic executive insights from a notable African CTO on aligning QA with business growth.',
                who: ['Mujib Ishola'],
            },
            {
                time: '12:15 pm – 12:40 pm',
                format: 'Lightning Talks',
                session: 'Rapid Fire Innovation Blocks:',
                // description: '• 12:15 pm – 12:25 pm: AI Native Product Quality Engineering by Chibuzor Obilom\n• 12:30 pm – 12:40 pm: Voices of African Quality Leadership by Udeme Jalekun',
                who: ['Chibuzor Obilom & Udeme Jalekun'],
            },
            {
                time: '12:45 pm – 13:00 pm',
                format: 'Icebreaker Game',
                session: '💡 The Executive Bug Simulation',
                // description: 'A live, text-based interactive roleplay game. Attendees vote on how to handle a critical production bug right before a major product launch.',
                who: ['Host / MC with All Attendees'],
            },
            {
                time: '13:05 pm – 14:05 pm',
                format: 'Deep-Dive Workshop',
                session: 'Quality Engineering Without the Enterprise Budget',
                // description: 'Practical, high-impact strategies for resource-constrained engineering teams.',
                who: ['Dennis Nyabuti'],
            },
            {
                time: '14:10 pm – 14:15 pm',
                type: 'break',
                label: '☕ Comfort Break - 15-Minute Screen Break & Networking',
            },
            {
                time: '14:20 pm – 14:50 pm',
                format: 'Solo Talk',
                session: 'API Testing Framework',
                // description: 'Architectural blueprinting for scalable, high-velocity integration testing.',
                who: ['Chibuzor Obilom'],
            },
            {
                time: '14:55 pm – 15:25 pm',
                format: 'Solo Talk',
                // session: 'Transforming Test Reports into Business Language',
                session: 'Security is a Quality Problem: A Tester\'s Guide to Owning the Pipeline',
                // description: 'Translating technical QA metrics into executive value that stakeholders understand.',
                // who: ['Adea Natchiah-Blay'],
                who: ['Samuel Afolabi'],
            },
            {
                time: '15:30 pm – 15:40 pm',
                format: 'Grand Finale Game',
                session: '🏆 APQEC Ultimate Trivia Challenge',
                // description: 'A live, competitive quiz tracking the biggest insights learned over the last 3 days, featuring giveaways for top leaderboard scores.',
                who: ['Host / MC'],
            },
            {
                time: '15:45 pm – 16:30 pm',
                format: 'Keynote',
                session: 'Quality Engineering Is Not Testing',
                // description: 'A high-authority deep dive into mindset shifting and strategic craft (30 mins talk + 15 mins Q&A).',
                who: ['Michael Bolton'],
            },
            {
                time: '16:35 pm – 17:00 pm',
                format: 'Closing Keynote & Send-off',
                session: 'Final Charge on Proactive Quality Engineering',
                // description: 'A high-authority deep dive into mindset shifting and strategic craft (30 mins talk + 15 mins Q&A).',
                who: ['Ibironke Yekinni'],
            },
        ],
    },
];

/* ─── Day Tab Button ─────────────────────────────────────────────────────── */
const DayTab = ({ day, date, isActive, onClick }) => (
    <button
        onClick={onClick}
        className="flex-1 px-5 py-4 text-left transition-all duration-200 border-b-2"
        style={{
            borderBottomColor: isActive ? '#00DEEE' : 'transparent',
            background: isActive ? 'rgba(0,222,238,0.06)' : 'transparent',
        }}
    >
        <div
            className="font-black uppercase tracking-widest text-xs mb-1"
            style={{ color: isActive ? '#00DEEE' : 'rgba(255,255,255,0.35)' }}
        >
            {day}
        </div>
        <div
            className="text-xs"
            style={{ color: isActive ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.25)' }}
        >
            {date}
        </div>
    </button>
);

/* ─── Session Table ──────────────────────────────────────────────────────── */
const SessionTable = ({ day }) => (
    <div className="w-full overflow-x-auto">
        <table className="w-full" style={{ borderCollapse: 'collapse', minWidth: 640 }}>
            {/* Column headers */}
            <thead>
                <tr style={{ background: '#fff' }}>
                    {['Time (WAT)', 'Format', 'Session', 'Who?'].map((h, i) => (
                        <th
                            key={h}
                            className="py-3 px-4 text-left text-xs font-black uppercase tracking-widest"
                            style={{
                                color: '#00DEEE',
                                width: i === 0 ? 130 : i === 1 ? 200 : i === 3 ? 350 : 'auto',
                                borderBottom: '1px solid #e5e7eb',
                            }}
                        >
                            {h}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {day.sessions.map((s, i) => {
                    /* Break row */
                    if (s.type === 'break') {
                        return (
                            <tr key={i}>
                                <td
                                    className="py-3 px-4 text-xs font-bold"
                                    style={{ color: '#0A2540', whiteSpace: 'nowrap', borderBottom: '1px solid #e5e7eb' }}
                                >
                                    {s.time}
                                </td>
                                <td
                                    colSpan={3}
                                    className="py-3 px-4 text-center font-black tracking-[0.3em] text-sm"
                                    style={{ background: '#00DEEE', color: '#0A2540', letterSpacing: '0.25em' }}
                                >
                                    {s.label}
                                </td>
                            </tr>
                        );
                    }

                    /* Normal session row */
                    return (
                        <tr
                            key={i}
                            style={{
                                background: '#fff',
                                borderBottom: '1px solid #e5e7eb',
                            }}
                        >
                            {/* Time */}
                            <td
                                className="py-3 px-4 text-xs align-top"
                                style={{ color: '#374151', whiteSpace: 'nowrap', fontWeight: 500 }}
                            >
                                {s.time}
                            </td>

                            {/* Format */}
                            <td
                                className="py-3 px-4 text-xs align-top font-semibold"
                                style={{ color: '#111827' }}
                            >
                                {s.format}
                            </td>

                            {/* Session */}
                            <td
                                className="py-3 px-4 text-xs align-top"
                                style={{ color: '#374151' }}
                            >
                                <div className="font-semibold text-gray-900">{s.session}</div>
                                {s.description && (
                                    <div className="mt-1" style={{ color: '#6B7280', lineHeight: '1.4', whiteSpace: 'pre-line' }}>
                                        {s.description}
                                    </div>
                                )}
                            </td>

                            {/* Who */}
                            <td
                                className="py-3 px-4 text-xs align-top"
                                style={{ color: '#374151' }}
                            >
                                {s.who && s.who.map((w, wi) => (
                                    <div key={wi}>{w}</div>
                                ))}
                                {s.moderator && (
                                    <div className="mt-2">
                                        <span style={{ color: '#F97316', fontWeight: 700 }}>Moderator:</span>
                                        <div>{s.moderator}</div>
                                    </div>
                                )}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
);

/* ─── Main Page ──────────────────────────────────────────────────────────── */
const AgendaPage = () => {
    const [activeDay, setActiveDay] = useState(1);
    const currentDay = DAYS.find(d => d.id === activeDay);

    return (
        <main className="min-h-screen pt-16" style={{ background: '#f3f4f6' }}>

            {/* ── Page hero ── */}
            <div style={{ background: '#0A2540' }} className="px-6 md:px-12 py-14">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: '#00DEEE' }}>
                        June 4 – 6, 2026 · Virtual · All times in WAT
                    </p>
                    <h1
                        className="font-black uppercase leading-none mb-4 text-white"
                        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '0.02em' }}
                    >
                        Conference Agenda
                    </h1>
                    <p className="text-sm max-w-xl leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
                        Three days of keynotes, workshops, panels, and fireside chats — built for Africa's quality engineering community.
                    </p>
                    <div className="flex items-center gap-3 flex-wrap">
                        <RegisterLink
                            className="flex items-center gap-2 text-black text-xs font-bold uppercase px-5 py-2.5 rounded"
                            style={{ background: '#00DEEE' }}
                        >
                            <FaArrowRight /> <span>Register for Free</span>
                        </RegisterLink>
                        <a
                            href="https://drive.google.com/file/d/1QyugTFhAj1L7N-_p3S2Wi3MS9tUv2qI3/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded"
                            style={{ border: '1px solid rgba(255,255,255,0.3)' }}
                        >
                            <MdArrowOutward /> <span>Become a Sponsor</span>
                        </a>
                    </div>
                    <p className="text-start text-lg my-6 italic text-white">
                        All times are in West Africa Time <b>(WAT)</b> · Schedule subject to change
                    </p>
                </div>
            </div>

            

            {/* ── Day tabs ── */}
            <div style={{ background: '#0D1B3E', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex">
                        {DAYS.map(d => (
                            <DayTab
                                key={d.id}
                                day={d.day}
                                date={d.date}
                                isActive={activeDay === d.id}
                                onClick={() => setActiveDay(d.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Schedule table ── */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">

                {/* Day header — matches Canva navy banner */}
                <div
                    className="rounded-t-xl overflow-hidden mb-0"
                    style={{ background: '#0A2540' }}
                >
                    <div className="grid md:grid-cols-3 divide-x divide-white/10">
                        <div className="px-6 py-5">
                            <div className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: '#00DEEE' }}>
                                {currentDay.day}
                            </div>
                            <div className="text-sm font-bold text-white uppercase">
                                {currentDay.date}
                            </div>
                        </div>
                        <div className="px-6 py-5">
                            <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Track</div>
                            <div className="text-sm font-bold text-white uppercase">{currentDay.track}</div>
                        </div>
                        <div className="px-6 py-5">
                            <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Theme</div>
                            <div className="text-sm font-bold text-white uppercase">{currentDay.theme}</div>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="rounded-b-xl overflow-hidden shadow-lg" style={{ background: '#fff' }}>
                    <SessionTable day={currentDay} />
                </div>
            </div>
        </main>
    );
};

export default AgendaPage;
