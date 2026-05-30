import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import RegisterLink from '../../../components/RegisterLink';

/* ─── Schedule data ──────────────────────────────────────────────────────── */
const DAYS = [
    {
        id: 1,
        day: 'Day 1',
        date: 'Thursday, June 4th, 2026',
        track: 'Master The Future of Product Quality Engineering',
        theme: 'AI, emerging tools, and the new QE stack',
    },
    {
        id: 2,
        day: 'Day 2',
        date: 'Friday, June 5th, 2026',
        track: 'Beyond Test Execution',
        theme: 'Craft, judgment, and engineering practice',
    },
    {
        id: 3,
        day: 'Day 3',
        date: 'Saturday, June 6th, 2026',
        track: 'Quality as Culture',
        theme: 'Leadership, teams, industries, and the institutional layer',
    },
];

/* ─── Day Row ────────────────────────────────────────────────────────────── */
const DayRow = ({ day, date, track, theme }) => (
    <div className="flex flex-col md:flex-row gap-4 items-stretch">

        {/* Left: day label box */}
        <div
            className="flex items-center gap-4 px-6 py-5 rounded-xl flex-shrink-0 md:w-72"
            style={{ background: '#0A2540' }}
        >
            <span className="font-black text-white text-sm uppercase tracking-widest whitespace-nowrap">{day}</span>
            <span className="text-white/60 text-sm whitespace-nowrap">{date}</span>
        </div>

        {/* Right: track + theme */}
        <div
            className="flex-1 rounded-xl px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
            style={{ background: '#0D1B3E' }}
        >
            <div className="flex flex-col gap-1">
                <span className="text-white uppercase tracking-wide text-sm font-semibold">{track}</span>
                <span className="text-white/50 text-sm">{theme}</span>
            </div>
        </div>
    </div>
);

/* ─── Main Section ───────────────────────────────────────────────────────── */
const ScheduleSection = () => {
    const navigate = useNavigate();

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

                {/* Day rows */}
                <div className="flex flex-col gap-4 mb-8">
                    {DAYS.map((d) => (
                        <DayRow key={d.id} {...d} />
                    ))}
                </div>

                {/* View Details button */}
                <div className="flex justify-center">
                    <button
                        onClick={() => {
                            window.scrollTo(0, 0);
                            navigate('/agenda');
                        }}
                        className="flex items-center gap-2 text-white text-sm font-bold uppercase tracking-widest px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                        style={{ background: '#0A2540' }}
                        onMouseOver={e => (e.currentTarget.style.background = '#114ca0')}
                        onMouseOut={e => (e.currentTarget.style.background = '#0A2540')}
                    >
                        <span>View Full Agenda</span>
                        <MdArrowOutward />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;
