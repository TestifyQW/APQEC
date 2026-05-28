import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import RegisterLink from '../../../components/RegisterLink';
import { IoIosArrowUp } from "react-icons/io";


/* ─── Schedule data ──────────────────────────────────────────────────────── */
const DAYS = [
    {
        id: 1,
        day: 'Day 1',
        date: 'Thursday, June 4th, 2026',
        track: 'Master The Future of Product Quality Engineering',
        theme: 'AI, emerging tools, and the new QE stack',
        sessions: [
            { time: '10:00 - 10:15', speaker: 'Princess Ibironke Yekinni', section: 'Opening', topic: 'Welcome & Conference Opening' },
            { time: '10:15 - 11:00', speaker: 'Princess Ibironke Yekinni', section: 'Opening Keynote', topic: 'The Africa AI Quality Doctrine' },
            { time: '11:00 - 11:45', speaker: 'James Bach', section: 'Keynote', topic: 'In the Loop or Out For Loot: Responsible Use of AI' },
            { time: '11:45 - 12:00', speaker: '', section: 'Break', topic: '☕ Comfort break' },
            { time: '12:00 - 12:45', speaker: '4 panelists + moderator', section: 'Panel', topic: 'AI in QE: Productivity Boom or Quality Bomb?' },
            { time: '12:45 - 13:00', speaker: '', section: 'Vendor Demo', topic: 'Tool Showcase Sponsor slot' },
            { time: '13:00 - 14:00', speaker: '', section: 'Break', topic: '🍽️ Lunch break' },
            { time: '14:00 - 15:30', speaker: 'Interactive breakout', section: 'Workshop', topic: 'Hands-On: Building AI Test Agents with LLMs' },
            { time: '15:30 - 16:00', speaker: 'Princess interviewed by founder peer', section: 'Vendor Demo', topic: 'From Idea to AI Testing Platform — The Cycluno Story' },
            { time: '16:00 - 16:15', speaker: '', section: 'Break', topic: '☕ Comfort break' },
            { time: '16:15 - 16:45', speaker: '', section: 'Lightning Talks', topic: 'Rising Voices in African AI for QE' },
            { time: '16:45 - 17:45', speaker: '', section: 'Solo Talk', topic: 'The State of AI for QE in 2026 Industry report' },
            { time: '17:45 - 18:00', speaker: '', section: 'Closing', topic: 'Day 1 Recap & Day 2 Preview' },
        ],
    },
    {
        id: 2,
        day: 'Day 2',
        date: 'Friday, June 5th, 2026',
        track: 'Beyond Test Execution',
        theme: 'Craft, judgment, and engineering practice',
        sessions: [
            { time: '10:00 - 10:15', speaker: '', section: 'Opening', topic: 'Day 2 Welcome & Frame' },
            { time: '10:15 - 11:00', speaker: 'Olubukola Omotola', section: 'Keynote', topic: 'The Silent Erosion: Engineering Quality in the Age of Speed' },
            { time: '11:00 - 11:45', speaker: 'Princess Ibironke Yekinni', section: 'Solo Talk', topic: 'What I Learned Training 1,000 African Testers' },
            { time: '11:45 - 12:00', speaker: '', section: 'Break', topic: '☕ Comfort break' },
            { time: '12:00 - 13:00', speaker: 'Hands-on', section: 'Workshop', topic: 'Test Strategy for Modern Architectures' },
            { time: '13:00 - 14:00', speaker: '', section: 'Break', topic: '🍽️ Lunch break' },
            { time: '14:00 - 14:45', speaker: '4 panelists across career stages', section: 'Panel', topic: 'From Tester to Quality Strategist: Career Paths in African QE' },
            { time: '14:45 - 15:30', speaker: '', section: 'Solo Talk', topic: 'DevSecOps: Where Security Meets the Pipeline' },
            { time: '15:30 - 15:45', speaker: '', section: 'Break', topic: '☕ Comfort break' },
            { time: '15:45 - 16:45', speaker: '', section: 'Workshop', topic: 'Exploratory Testing Masterclass — Thinking Like a Tester' },
            { time: '16:45 - 17:15', speaker: 'With a senior industry leader', section: 'Fireside Chat', topic: "The Quality Leader's Playbook" },
            { time: '17:15 - 17:45', speaker: '', section: 'Lightning Talks', topic: 'Craft Patterns from the Field' },
            { time: '17:45 - 18:00', speaker: '', section: 'Closing', topic: 'Day 2 Recap, Day 3 Preview & Hackathon Final Reminder' },
        ],
    },
    {
        id: 3,
        day: 'Day 3',
        date: 'Saturday, June 6th, 2026',
        track: 'Quality as Culture',
        theme: 'Leadership, teams, industries, and the institutional layer',
        sessions: [
            { time: '10:00 - 10:15', speaker: '', section: 'Opening', topic: 'Day 3 Welcome & Frame' },
            { time: '10:15 - 11:00', speaker: '4 industry leaders', section: 'Panel', topic: 'Quality Culture Across Industries — Fintech, HealthTech, Public Sector' },
            { time: '11:00 - 11:30', speaker: 'With a notable African CTO', section: 'Fireside Chat', topic: "The CTO's View on Quality" },
            { time: '11:30 - 11:45', speaker: '', section: 'Break', topic: '☕ Comfort break' },
            { time: '11:45 - 13:00', speaker: '', section: 'Hackathon Demo Day', topic: 'Top 6 Finalist Pitches' },
            { time: '13:00 - 14:00', speaker: '', section: 'Break', topic: '🍽️ Lunch break' },
            { time: '14:00 - 14:45', speaker: 'Michael Bolton', section: 'Keynote', topic: 'Quality Engineering Is Not Testing' },
            { time: '14:45 - 15:30', speaker: '', section: 'Panel', topic: 'Quality Leadership: From IC to Head of Engineering' },
            { time: '15:30 - 16:00', speaker: '', section: 'Lightning Talks', topic: 'Voices of African Quality Leadership' },
            { time: '16:00 - 16:15', speaker: '', section: 'Break', topic: '☕ Comfort break' },
            { time: '16:15 - 17:15', speaker: '', section: 'Awards Ceremony', topic: 'Africa Quality Industry Awards + Hackathon Winner Announcement' },
            { time: '17:15 - 18:00', speaker: 'Princess Ibironke Yekinni', section: 'Closing Keynote', topic: 'Building the African Quality Stack → APQEC 2027 announcement' },
        ],
    },
];


const SessionTable = ({ sessions }) => (
    <div className="overflow-x-auto">
        <table className="w-full text-left text-xs" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
            <thead>
                <tr style={{ background: '#0D1B3E' }}>
                    {['Time', 'Speaker', 'Section', 'Topic'].map((h) => (
                        <th
                            key={h}
                            className="py-3 px-4 font-semibold uppercase tracking-widest text-white/50 text-[10px]"
                        >
                            {h}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {sessions.map((s, i) => (
                    <tr
                        key={i}
                        className="border-t border-white/5 hover:bg-white/5 transition-colors"
                        style={{ background: 'transparent' }}
                    >
                        <td className="py-3 px-4 text-white whitespace-nowrap">{s.time}</td>
                        <td className="py-3 px-4 text-white font-semibold whitespace-nowrap">{s.speaker}</td>
                        <td className="py-3 px-4 text-white whitespace-nowrap">{s.section}</td>
                        <td className="py-3 px-4 text-white uppercase font-medium tracking-wide">{s.topic}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

/* ─── Accordion Row ──────────────────────────────────────────────────────── */
const DayRow = ({ day, date, track, theme, sessions, isOpen, onToggle }) => (
    <div className="flex flex-col md:flex-row gap-4 items-stretch">

        {/* ── Left: day label box ── */}
        <div
            className="flex items-center gap-4 px-6 py-5 rounded-xl flex-shrink-0 md:w-72 max-h-fit"
            style={{ background: '#0A2540' }}
        >
            <span className="font-black text-white text-sm uppercase tracking-widest whitespace-nowrap">{day}</span>
            <span className="text-white/60 text-sm whitespace-nowrap">{date}</span>
        </div>

        {/* ── Right: track panel (expandable) ── */}
        <div className="flex-1 rounded-xl overflow-hidden" style={{ background: '#0D1B3E' }}>
            {/* Track header — clickable */}
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
            >
                <span className="text-white uppercase tracking-wide text-sm">{track}</span>
                <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-white/50 text-sm hidden md:block">{theme}</span>
                    <span
                        className="text-white text-lg font-bold transition-transform duration-300"
                        style={{ display: 'inline-block', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                        <IoIosArrowUp />
                    </span>
                </div>
            </button>

            {/* Session table */}
            {isOpen && (
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <SessionTable sessions={sessions} />
                </div>
            )}
        </div>
    </div>
);


/* ─── Main Section ───────────────────────────────────────────────────────── */
const ScheduleSection = () => {
    const [openDay, setOpenDay] = useState(2); // Day 2 open by default (matches screenshot)

    return (
        <section className="w-full bg-white py-16" id='schedule'>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
                    {/* Left */}
                    <div className="max-w-lg">
                        <h2
                            className="font-black uppercase leading-tight mb-3"
                            style={{ color: '#0A2540', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '0.03em' }}
                        >
                            Event Schedule
                        </h2>
                        <p className="text-sm leading-relaxed">
                            Each day is action-packed with hands-on workshops, global keynotes, and live panel
                            sessions designed to spark breakthroughs in how we build, test, and scale products.
                        </p>
                    </div>

                    {/* Right — CTA buttons */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <RegisterLink
                            className="flex items-center gap-2 bg-[#00DEEE] text-black text-xs font-bold uppercase px-5 py-2.5 rounded hover:bg-[#00D4FF]/10 transition-colors"
                        >
                            <FaArrowRight /> <span>Register for Free</span>
                        </RegisterLink>
                        <a
                            href="https://drive.google.com/file/d/1QyugTFhAj1L7N-_p3S2Wi3MS9tUv2qI3/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded transition-colors"
                            style={{ background: '#0A2540' }}
                            onMouseOver={e => (e.currentTarget.style.background = '#162F5A')}
                            onMouseOut={e => (e.currentTarget.style.background = '#0A2540')}
                        >
                            <MdArrowOutward /> <span>Become a Sponsor</span>
                        </a>
                    </div>
                </div>

                {/* Accordion */}
                <div className="flex flex-col gap-4">
                    {DAYS.map((d) => (
                        <DayRow
                            key={d.id}
                            {...d}
                            isOpen={openDay === d.id}
                            onToggle={() => setOpenDay(openDay === d.id ? null : d.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;
