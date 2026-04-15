import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";


/* ─── Schedule data ──────────────────────────────────────────────────────── */
const DAYS = [
    {
        id: 1,
        day: 'Day 1',
        date: 'Monday, June 4th, 2026',
        track: 'The Foundations of Excellence',
        theme: 'Mastering the Fundamentals & ROI',
    },
    {
        id: 2,
        day: 'Day 2',
        date: 'Tuesday, June 9th, 2026',
        track: 'The Innovation Frontier',
        theme: 'AI, Automation, and Autonomous Systems',
        sessions: [
            { time: '09:00 AM', speaker: 'Ibironke Yekinni', section: 'Workshop', topic: 'The Quality Leadership and Culture Lab' },
            { time: '10:30 AM', speaker: 'Ibironke Yekinni', section: 'Seminar', topic: 'The Quality Bottom Line' },
            { time: '12:00 PM', speaker: 'Ibironke Yekinni', section: 'Workshop', topic: 'Cyber-Resilient Quality (DevSecOps)' },
            { time: '02:00 PM', speaker: 'Ibironke Yekinni', section: 'Seminar', topic: 'The AI Frontier' },
            { time: '03:30 PM', speaker: 'Ibironke Yekinni', section: 'Workshop', topic: 'Platform Engineering and Elastic Infrastructure' },
            { time: '05:00 PM', speaker: 'Ibironke Yekinni', section: 'Seminar', topic: 'CX Engineering' },
        ],
    },
    {
        id: 3,
        day: 'Day 3',
        date: 'Wednesday, June 10th, 2026',
        track: 'The Human Impact & Honors',
        theme: 'Customer Experience, Culture, and Recognition',
        sessions: [
            { time: '09:00 AM', speaker: 'Philip Adejide', section: 'Keynote', topic: 'CX Engineering at Scale' },
            { time: '10:30 AM', speaker: 'John David', section: 'Workshop', topic: 'Building Quality Culture' },
            { time: '12:00 PM', speaker: 'Emmaunel Paul', section: 'Panel', topic: 'Awards & Recognition' },
            { time: '02:00 PM', speaker: 'Ibironke Yekinni', section: 'Seminar', topic: 'The Human Side of DevOps' },
            { time: '03:30 PM', speaker: 'Philip Adejide', section: 'Workshop', topic: 'Leadership & Decision Making' },
            { time: '05:00 PM', speaker: 'All Speakers', section: 'Closing', topic: 'Closing Ceremony & Networking' },
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
                        style={{ display: day === 'Day 1' ? 'none' : 'inline-block', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
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
                        <a
                            href="https://luma.com/1m7455h8"
                            className="flex items-center gap-2 bg-[#00DEEE] text-black text-xs font-bold uppercase px-5 py-2.5 rounded hover:bg-[#00D4FF]/10 transition-colors"
                        >
                            <FaArrowRight /> <span>Register for Free</span>
                        </a>
                        <a
                            href="https://calendly.com/ibironke-1/apqec2026"
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
