import React from "react";
import testimonial1 from "../../../assets/testimonial1.png"
import testimonial2 from "../../../assets/testimonial2.png"
import testimonial3 from "../../../assets/testimonial3.png"
import testimonial4 from "../../../assets/testimonial4.png"
import testimonial5 from "../../../assets/testimonial5.png"

/* ─── Testimonial data ──────────────────────────────────────────────────── */
const ROW_ONE = [
    {
        id: 1,
        name: "Emma Johnson",
        role: "Product Manager",
        avatar: testimonial1,
        quote:
            "APQEC was one of the most impactful conferences I attended. The sessions were insightful and impactful.",
    },
    {
        id: 2,
        name: "John Doe",
        role: "DevOps",
        avatar: testimonial2,
        quote:
            "The conference created the perfect space for learning, networking, and innovation. I can't wait for APQEC 2.0 GUYS.",
    },
    {
        id: 3,
        name: "Emily Johnson",
        role: "Q.A Testers",
        avatar: testimonial3,
        quote:
            "APQEC exceeded my expectations with its quality speakers and engaging discussions.",
    },
    {
        id: 4,
        name: "Michael Brown",
        role: "Product Designer",
        avatar: testimonial4,
        quote:
            "Attending APQEC helped me better understand the future of product quality engineering in Africa.",
    },
    {
        id: 5,
        name: "Amara Diallo",
        role: "QA Lead",
        avatar: testimonial5,
        quote:
            "Every session was packed with actionable insights. APQEC truly elevates Africa's quality engineering community.",
    },
];

const ROW_TWO = [
    {
        id: 6,
        name: "David Wilson",
        role: "CTO, TECHY",
        avatar: testimonial1,
        quote:
            "I connected with amazing professionals and gained valuable industry knowledge at APQEC 2025.",
    },
    {
        id: 7,
        name: "Laura Martinez",
        role: "AI Engineer",
        avatar: testimonial2,
        quote:
            "I left APQEC with fresh ideas, meaningful connections, and practical insights I could immediately apply.",
    },
    {
        id: 8,
        name: "James Taylor",
        role: "Q.A Engineer",
        avatar: testimonial3,
        quote:
            "APQEC brought together some of the brightest minds in quality engineering. It was truly inspiring.",
    },
    {
        id: 9,
        name: "Olivia Chen",
        role: "Software Engineer",
        avatar: testimonial4,
        quote:
            "From the panel sessions, every moment was worth it. APQEC is a must-attend.",
    },
    {
        id: 10,
        name: "Kwame Asante",
        role: "Scrum Master",
        avatar: testimonial5,
        quote:
            "The blend of workshops, talks, and networking made APQEC an unforgettable experience.",
    },
];

/* ─── Single testimonial card ───────────────────────────────────────────── */
const TestimonialCard = ({ name, role, avatar, quote }) => (
    <div
        className="flex-shrink-0 w-[260px] md:w-[300px] bg-white rounded-2xl p-5 flex flex-col gap-3 mx-3"
        style={{
            boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
            border: "1px solid rgba(0,0,0,0.07)",
        }}
    >
        {/* Avatar + name row */}
        <div className="flex items-center gap-3 border-b border-gray-200 pb-2">
            <img
                src={avatar}
                alt={name}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                style={{ border: "2px solid #e5e7eb" }}
            />
            <div>
                <p className="text-[#0D1B3E] text-sm font-bold leading-tight">{name}</p>
                <p className="text-gray-400 text-xs leading-tight">{role}</p>
            </div>
            {/* Quote mark */}
            <span
                className="ml-auto rotate-180 text-3xl mb-7 font-black leading-none"
                style={{ lineHeight: 1 }}
            >
                ❝
            </span>
        </div>

        {/* Quote text */}
        <p className="text-[#374151] text-sm leading-relaxed">{quote}</p>
    </div>
);

/* ─── Marquee row ───────────────────────────────────────────────────────── */
const MarqueeRow = ({ items, direction = "left", speed = 40 }) => {
    // Duplicate for seamless loop
    const repeated = [...items, ...items, ...items];
    const animClass =
        direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

    return (
        <div className="overflow-hidden py-2">
            <div
                className={`flex ${animClass}`}
                style={{ "--marquee-speed": `${speed}s` }}
            >
                {repeated.map((item, i) => (
                    <TestimonialCard key={`${item.id}-${i}`} {...item} />
                ))}
            </div>
        </div>
    );
};

/* ─── Main Section ─────────────────────────────────────────────────────── */
const TestimonialsSection = () => (
    <section
        className="w-full py-20 overflow-hidden"
        id="testimonials"
        style={{ background: "#F7F9FC" }}
    >
        <style>{`
            @keyframes marquee-left {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-33.333%); }
            }
            @keyframes marquee-right {
                0%   { transform: translateX(-33.333%); }
                100% { transform: translateX(0); }
            }
            .animate-marquee-left {
                animation: marquee-left var(--marquee-speed, 40s) linear infinite;
            }
            .animate-marquee-right {
                animation: marquee-right var(--marquee-speed, 44s) linear infinite;
            }
            .animate-marquee-left:hover,
            .animate-marquee-right:hover {
                animation-play-state: paused;
            }
        `}</style>

        {/* Header */}
        <div className="text-center mb-12 px-4">
            <div className="inline-flex items-center gap-2 text-gray-500 text-xs font-semibold uppercase tracking-widest mb-4">
                <span>🙂</span>
                <span>Our Testimonials</span>
            </div>
            <h2 className="text-[#0D1B3E] text-4xl md:text-5xl font-black uppercase mb-4">
                Feedback O'Clock
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
                See how APQEC has transformed our attendee's experiences through their own words.
            </p>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="mb-4">
            <MarqueeRow items={ROW_ONE} direction="left" speed={38} />
        </div>

        {/* Row 2 — scrolls right */}
        <MarqueeRow items={ROW_TWO} direction="right" speed={44} />
    </section>
);

export default TestimonialsSection;
