import React from "react";
import testi1 from "../../../assets/testi_1.jpg";
import testi2 from "../../../assets/testi_2.jpg";
import testi3 from "../../../assets/test_3.jpg";
import testi4 from "../../../assets/testi_4.jpg";
import testi5 from "../../../assets/testi_5.jpg";
import testi6 from "../../../assets/testi_6.jpg";
import testi7 from "../../../assets/testi_7.jpg";
import testi8 from "../../../assets/testi_8.jpg";
import testi9 from "../../../assets/testi_9.jpg";
import testi10 from "../../../assets/testi_10.jpeg";
import Flag from "react-world-flags";

/* ─── Testimonial data ──────────────────────────────────────────────────── */
const ROW_ONE = [
    {
        id: 1,
        name: "Oluwaseye Aibinuomo",
        role: "Quality & Sustainability Professional",
        avatar: testi5,
        flag: "NG",
        quote:
            "My experience at APQEC 2025 reinforced how Quality Engineering has evolved beyond testing into resilience, security, inclusiveness, scalability, and user-centered design. One of my biggest takeaways was that quality is a shared responsibility, powered by collaboration, innovation, and a strong culture of continuous improvement.",
    },
    {
        id: 2,
        name: "Joshua Kolawole",
        role: "QA Engineer",
        avatar: testi9,
        flag: "NG",
        quote:
            "APQEC 2025 completely changed the way I see quality engineering. The sessions went beyond testing and focused on strategy, accessibility, performance, ethics, and user trust. I also gained valuable insights into how AI is transforming QA while still recognizing the importance of human creativity and collaboration.What stood out most for me was the strong sense of community, mentorship, and innovation across Africa’s QA space. It was inspiring to see industry leaders, developers, and testers all aligned around one goal — building better products and raising the standard of quality engineering together."
    },
    {
        id: 3,
        name: "Isioma Ogbechie-Ogana",
        role: "QA Professional",
        avatar: testi10,
        flag: "NG",
        quote:
            "Quality goes beyond finding bugs, it’s about understanding user needs, asking the right questions early, and driving excellence throughout development. The APQEC experience gave me practical insights, confidence, and a stronger commitment to continuous improvement in quality engineering.",
    },
    {
        id: 4,
        name: "Patrick Chioma",
        role: "Software Quality Assurance Professional",
        avatar: testi6,
        flag: "NG",
        quote:
            "APQEC 2025 expanded my perspective on the future of Quality Assurance. From AI-driven testing and automation to ethics, accessibility, and long-term quality improvement. One of my biggest takeaways was that AI is not replacing testers, but empowering us to focus on more strategic and high-value work.",
    },
    {
        id: 5,
        name: " Louis Takow",
        role: "QA Engineer",
        avatar: testi1,
        flag: "CM",
        quote:
            "Leading a hands-on session on mobile automation testing at APQEC 2025 was an incredible experience. The energy, collaboration, and exchange of knowledge throughout the conference showed the strength and future of Quality Engineering across Africa. More than an event, it was a movement focused on raising standards, building talent, and advancing testing excellence across the continent.",
    },
];

const ROW_TWO = [
    {
        id: 6,
        name: "Moses Muema",
        role: "QA Engineer",
        avatar: testi2,
        flag: "KE",
        quote:
            "Being a speaker at APQEC’25 was a major milestone in my career. The conference created a powerful space for collaboration, knowledge sharing, and meaningful conversations around the future of software quality engineering in Africa. I’m grateful to have contributed alongside passionate test leaders driving excellence and innovation across the industry.",
    },
    {
        id: 7,
        name: "Emmanuel Ani Offei",
        role: "Product & Operations Professional",
        avatar: testi3,
        flag: "GH",
        quote:
            "Speaking at APQEC 2025 gave me the opportunity to spark meaningful conversations around product management, QA, speed, safety, and software excellence across Africa. More than a speaking engagement, it was a chance to connect, learn, and contribute to the growing movement for quality leadership in African tech.",
    },
    {
        id: 8,
        name: "Esther Onyekwere",
        role: "QA Professional",
        avatar: testi8,
        flag: "NG",
        quote:
            "APQEC 2025 was an inspiring experience filled with valuable insights, innovation, and meaningful conversations about the future of Quality Engineering. Connecting with passionate testers and learning from industry leaders left me more informed, motivated, and excited to keep growing in Software Quality Assurance.",
    },
    {
        id: 9,
        name: "Akullu Edith",
        role: "Product Growth Strategist",
        avatar: testi4,
        flag: "UG",
        quote:
            "Collaboration, innovation, and shared purpose were at the heart of my APQEC 2025 experience. Engaging with professionals from across Africa reinforced that product quality is not owned by one team — it’s a collective effort driven by people, technology, and continuous learning. The conversations around AI, automation, and career growth in Quality Engineering were especially impactful.",
    },
    {
        id: 10,
        name: "Safaa Ashraf",
        role: "Senior Software Quality Assurance Engineer",
        avatar: testi7,
        flag: "EG",
        quote:
            "Sharing insights as a speaker at APQEC and connecting with professionals passionate about software quality and innovation made this a truly rewarding experience. I’m grateful for the opportunity to learn, contribute, and be part of a community committed to growth and excellence in quality engineering.",
    },
];

/* ─── Single testimonial card ───────────────────────────────────────────── */
const TestimonialCard = ({ name, role, avatar, quote, flag }) => (
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
                <p className="text-gray-400 text-[10px] leading-tight">{role}</p>
            </div>
            {/* Flag */}
            <div className="ml-auto flex-shrink-0 w-6 h-4 overflow-hidden rounded-[2px] border border-gray-200">
                <Flag code={flag || 'NG'} className="w-full h-full object-cover" />
            </div>
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
