import React from "react";
import { MdArrowOutward } from "react-icons/md";
import awardBg from '../../../assets/awardBg.png';

/* ─── Activity card data ────────────────────────────────────────────────── */
const ACTIVITIES = [
    {
        id: "awards",
        title: "AFRICA QUALITY\nINDUSTRY\nAWARDS",
        body: "We're closing out APQEC 2026 with a much-needed celebration — think Africa's Grammy for quality engineers. The Awards Night is an all-out celebration dedicated to spotlighting creative excellence, recognizing growth, and amplifying Africa's quality engineers.",
        ctas: [
            {
                label: "Nominate",
                href: "https://form.typeform.com/to/brfoNQ1I",
                variant: "filled",
            },
            {
                label: "Vote",
                href: "/vote",
                variant: "outline",
            },
        ],
    },
    {
        id: "hackathon",
        title: "QUALITY SOLUTION\nHACKATON",
        body: "Join teams of innovators tackling real product quality challenges through technology and collaboration. Build impactful solutions, showcase your skills, and shape the future of quality engineering in Africa. Where innovation meets quality engineering — bringing together creators, thinkers, and problem-solvers.",
        ctas: [
            {
                label: "Apply",
                href: "https://luma.com/u82wf6na",
                variant: "filled",
            },
        ],
    },
];

/* ─── Single activity card ─────────────────────────────────────────────── */
const ActivityCard = ({ title, body, ctas }) => (
    <div
        className="flex-1 min-w-0 rounded-2xl p-8 md:p-10 flex flex-col gap-6"
        style={{
            background: "rgba(255,255,255,0.07)",
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: "1px solid rgba(255,255,255,0.12)",
        }}
    >
        {/* Title — preserve newlines */}
        <h2 className="text-white text-2xl md:text-3xl font-black uppercase leading-tight whitespace-pre-line">
            {title}
        </h2>

        {/* Body */}
        <p className="text-white/65 text-sm leading-relaxed flex-1">{body}</p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 mt-2">
            {ctas.map((cta) =>
                cta.variant === "filled" ? (
                    <a
                        key={cta.label}
                        href={cta.href}
                        className="inline-flex items-center gap-2 bg-[#00DEEE] hover:bg-[#00bfcc] text-[#071330] text-xs font-black uppercase tracking-widest px-6 py-3 rounded transition-colors"
                    >
                        <MdArrowOutward className="text-base" />
                        {cta.label}
                    </a>
                ) : (
                    <a
                        key={cta.label}
                        href={cta.href}
                        className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-[#00deee] text-xs font-black uppercase tracking-widest px-9 py-3 rounded transition-colors"
                        style={{ border: "1.5px solid rgba(255,255,255,0.35)" }}
                    >
                        {cta.label}
                    </a>
                )
            )}
        </div>
    </div>
);

/* ─── Main Section ─────────────────────────────────────────────────────── */
const Activity = () => (
    <section
        className="w-full py-20 relative overflow-hidden"
        id="activities"
        style={{
            backgroundImage: `url(${awardBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
    >
        {/* Dot-grid texture */}
        <div
            className="absolute inset-0 opacity-[0.15] pointer-events-none"
            style={{
                backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
            }}
        />

        {/* Subtle radial glow behind cards */}
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
                background:
                    "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,222,238,0.07) 0%, transparent 70%)",
            }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

            <div className="flex flex-col md:flex-row gap-6">
                {ACTIVITIES.map((activity) => (
                    <ActivityCard key={activity.id} {...activity} />
                ))}
            </div>
        </div>
    </section>
);

export default Activity;