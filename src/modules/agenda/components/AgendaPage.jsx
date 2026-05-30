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
                time: '10:15 – 10:30',
                format: 'Opening',
                session: 'Welcome & Conference Opening, Convener',
                who: ['Ibironke Yekinni'],
            },
            {
                time: '10:30 – 11:00',
                format: 'Opening Keynote (30 + 15 Q&A)',
                session: 'The Africa AI Quality Doctrine',
                who: ['Ibironke Yekinni'],
            },
            {
                time: '11:00 – 11:45',
                format: 'Keynote (30 + 15 Q&A)',
                session: 'In the Loop or Out For Loot: Responsible Use of AI',
                who: ['James Bach'],
            },
            { time: '11:45 – 12:00', type: 'break', label: 'COMFORT BREAK' },
            {
                time: '12:00 – 12:45',
                format: 'Panel (45 min)',
                session: 'AI in QE: Productivity Boom or Quality Bomb? 4 panelists + moderator',
                who: ['- Christianah Ajala', '- Omowumi Oladele', '- Sally Sedky'],
                moderator: 'Iseoluwa Adelowo',
            },
            {
                time: '12:45 – 13:00',
                format: 'Lightning Talk',
                session: 'The Impact of AI in Africa Products',
                who: ['Nikhil Bhandari'],
            },
            {
                time: '13:00 – 14:30',
                format: 'Workshop (90 mins)',
                session: 'Hands-On: Building AI Test Agents with LLMs',
                who: ['Shashank Parmar'],
            },
            {
                time: '14:30 – 15:00',
                format: 'Solo Talk (30 mins)',
                session: "CX through a Product Manager's Lens",
                who: ['Harmony Elendu'],
            },
            { time: '15:00 – 15:15', type: 'break', label: 'COMFORT BREAK' },
            {
                time: '15:15 – 15:45',
                format: 'Solo Talk',
                session: 'From Checklist to Culture: Embedding Accessibility into Everyday Testing',
                who: ['Christianah Ajala'],
            },
            {
                time: '15:45 – 16:00',
                format: 'Closing',
                session: 'Day 1 Recap & Day 2 Preview',
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
                time: '10:00 – 10:15',
                format: 'Opening',
                session: 'Day 2 Welcome & Frame',
                who: ['MC'],
            },
            {
                time: '10:15 – 11:00',
                format: 'Opening Keynote (30 + 15 Q&A)',
                session: 'The Silent Erosion: Engineering Quality in the Age of Speed',
                who: ['Olubukola Omotola'],
            },
            {
                time: '11:00 – 11:45',
                format: 'Solo Talk (30 + 15 Q&A)',
                session: 'What I Learned Training 1,000 African Testers',
                who: ['Ibironke Yekinni'],
            },
            { time: '11:45 – 12:00', type: 'break', label: 'COMFORT BREAK' },
            {
                time: '12:00 – 13:00',
                format: 'Workshop (60 min)',
                session: 'Exploratory Testing Masterclass — Thinking Like a Tester',
                who: ['George Kibe Ndung'],
            },
            {
                time: '13:00 – 13:45',
                format: 'Panel (45 min)',
                session: 'From Tester to Quality Strategist: Career Paths in African QE',
                who: ['- Séverin Doho', '- Mary Onuorah', '- Matachi Ononuju', '- Adedolapo Oguntayo-Williams'],
                moderator: 'Mosunmola Olabello',
            },
            {
                time: '13:45 – 14:15',
                format: 'Solo Talk (30 min)',
                session: "Security is a Quality Problem: A Tester's Guide to Owning the Pipeline",
                who: ['Samuel Afolabi'],
            },
            { time: '14:15 – 14:30', type: 'break', label: 'COMFORT BREAK' },
            {
                time: '14:30 – 15:00',
                format: 'Fireside Chat (30 min)',
                session: "The Quality Leader's Playbook — With a senior industry leader",
                who: ['Larry Goddard'],
            },
            {
                time: '15:00 – 15:30',
                format: 'Solo Talk (30 mins)',
                session: 'The Product Quality Engineer\'s Toolkit: Building Systems That Score, Triage and Ship with Confidence',
                who: ['Nikhil Bhandari'],
            },
            {
                time: '15:30 – 16:00',
                format: 'Closing',
                session: 'Day 2 Recap, Day 3 Preview & Hackathon Final Reminder',
                who: ['MC'],
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
                time: '10:00 – 10:15',
                format: 'Opening',
                session: 'Day 3 Welcome & Frame',
                who: ['MC'],
            },
            {
                time: '10:15 – 11:00',
                format: 'Panel (45 min)',
                session: 'Quality Culture Across Industries — Fintech, HealthTech, Public Sector — 4 industry leaders',
                who: ['Olubukola Omotola'],
            },
            {
                time: '11:00 – 11:30',
                format: 'Fireside Chat (30 min)',
                session: "The CTO's View on Quality — With a notable African CTO",
                who: ['-', '-'],
                moderator: '-',
            },
            { time: '11:30 – 11:45', type: 'break', label: 'COMFORT BREAK' },
            {
                time: '11:45 – 13:00',
                format: 'Hackathon Demo Day (75 min)',
                session: 'Top 6 Finalist Pitches — 8 min pitch + 4 min Q&A each',
                who: ['Finalist'],
            },
            {
                time: '13:00 – 14:00',
                format: 'Workshop (60 min)',
                session: 'Quality Engineering Without the Enterprise Budget',
                who: ['Dennis Nyabuti'],
            },
            { time: '14:00 – 15:00', type: 'break', label: 'LUNCH BREAK' },
            {
                time: '15:00 – 15:45',
                format: 'Keynote (30 + 15 Q&A)',
                session: 'Quality Engineering Is Not Testing',
                who: ['Michael Bolton'],
            },
            {
                time: '15:45 – 16:30',
                format: 'Panel (45 min)',
                session: 'Quality Leadership: From IC to Head of Engineering — 4 leaders',
                who: ['-', '-', '-'],
                moderator: '-',
            },
            {
                time: '16:30 – 17:00',
                format: 'Lightning Talks (3 × 10 min)',
                session: 'Voices of African Quality Leadership',
                who: ['- Udeme Jalekun', '-', '-'],
            },
            { time: '17:00 – 17:15', type: 'break', label: 'COMFORT BREAK' },
            {
                time: '17:15 – 18:15',
                format: 'Awards Ceremony (60 min)',
                session: 'Africa Quality Industry Awards + Hackathon Winner Announcement',
                who: ['Ibironke Yekinni'],
            },
            {
                time: '18:15 – 18:00',
                format: '-',
                session: '-',
                who: ['-'],
            },
            {
                time: '18:15 – 18:00',
                format: 'Closing Keynote (30 + 15 send-off)',
                session: 'Building the African Quality Stack → APQEC 2027 announcement',
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
                                width: i === 0 ? 130 : i === 1 ? 200 : i === 3 ? 200 : 'auto',
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
                                {s.session}
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

                <p className="text-center text-xs mt-6" style={{ color: '#9ca3af' }}>
                    All times are in West Africa Time (WAT) · Schedule subject to change
                </p>
            </div>
        </main>
    );
};

export default AgendaPage;
