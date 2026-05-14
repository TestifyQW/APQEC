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
import user from "../../../assets/user.png"
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
            "My biggest takeaway from APQEC 2025: quality is a shared responsibility. It is driven by innovation, inclusion, and a strong culture of collaboration across every team.",
    },
    {
        id: 2,
        name: "Joshua Kolawole",
        role: "QA Expert",
        avatar: testi9,
        flag: "NG",
        quote:
            "Seeing how AI and human creativity work together was a major highlight of APQEC 2025. I’m excited to see how we continue building on these innovations and raising the bar for the industry at APQEC 2.0."
    },
    {
        id: 3,
        name: "Isioma Ogbechie-Ogana",
        role: "QA Professional",
        avatar: testi10,
        flag: "NG",
        quote:
            "APQEC was a masterclass in the true meaning of quality: understanding user needs and asking the right questions early. I left with practical insights and a renewed confidence in my role as a Quality Engineer.",
    },
    {
        id: 4,
        name: "Patrick Chioma",
        role: "Software Quality Assurance Professional",
        avatar: testi6,
        flag: "NG",
        quote:
            "My perspective on QA expanded through insights on AI-driven testing, accessibility, ethics, and the future of strategic quality engineering.",
    },
    {
        id: 5,
        name: " Louis Takow",
        role: "QA Expert",
        avatar: testi1,
        flag: "CM",
        quote:
            "Leading a hands-on mobile automation session highlighted the strong collaboration, innovation, and growing future of Quality Engineering across Africa.",
    },
    {
        id: 11,
        name: "Ogbechie Isioma",
        role: "APQEC'25 Attendee",
        avatar: user,
        flag: "NG",
        quote:
            "It was a power-packed and insightful 3-day conference - I'm glad I attended!",
    },
    {
        id: 12,
        name: "Meseret Akalu",
        role: "APQEC'25 Attendee",
        avatar: user,
        flag: "SA",
        quote:
            "What an incredible APQEC 2025! Proud to be a software tester and even more passionate about raising QA awareness for teams that still don't have one.",
    },
    {
        id: 13,
        name: "Selpha Atemba",
        role: "APQEC'25 Attendee",
        avatar: user,
        flag: "KE",
        quote:
            "It was timely and very educative. I learnt a lot.",
    },
    {
        id: 14,
        name: "Ajidagba Rasheedat",
        role: "APQEC'25 Attendee",
        avatar: user,
        flag: "NG",
        quote:
            "It was fantastic.",
    },
];

const ROW_TWO = [
    {
        id: 6,
        name: "Moses Muema",
        role: "QA Professional",
        avatar: testi2,
        flag: "KE",
        quote:
            "Speaking at APQEC’25 was a rewarding experience filled with collaboration, knowledge sharing, and inspiring conversations on the future of software quality engineering in Africa.",
    },
    {
        id: 7,
        name: "Emmanuel Ani Offei",
        role: "Product & Operations Professional",
        avatar: testi3,
        flag: "GH",
        quote:
            "Speaking at APQEC 2025 sparked meaningful conversations on product quality, speed, safety, and the future of software excellence across Africa.",
    },
    {
        id: 8,
        name: "Esther Onyekwere",
        role: "QA Professional",
        avatar: testi8,
        flag: "NG",
        quote:
            "Innovation, expert insights, and meaningful conversations at APQEC 2025 left me inspired to keep growing in Software Quality Assurance.",
    },
    {
        id: 9,
        name: "Akullu Edith",
        role: "Product Growth Strategist",
        avatar: testi4,
        flag: "UG",
        quote:
            "APQEC 2025 reinforced that product quality is a collective effort driven by people and technology. After an impactful year of discussing AI and automation, I’m ready to take those conversations to the next level at APQEC 2.0.",
    },
    {
        id: 10,
        name: "Safaa Ashraf",
        role: "Senior Software Quality Assurance Engineer",
        avatar: testi7,
        flag: "EG",
        quote:
            "A rewarding experience contributing as a speaker to a community passionate about software quality. APQEC set the stage for growth; now, we level up for APQEC 2.0!",
    },
    {
        id: 15,
        name: "Abidemi Adeloye",
        role: "APQEC'25 Attendee",
        avatar: user,
        flag: "NG",
        quote:
            "It was an amazing conference; a  'Learnathon' from which I have gained many takeaways as a QA. Thank you Testars Quarter.",
    },
    {
        id: 16,
        name: "Rozina Meresa",
        role: "APQEC'25 Attendee",
        avatar: user,
        flag: "SA",
        quote:
            "It was a good conference. I have learned a lot. Keep it up.",
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
const MarqueeRow = ({ items, direction = "left", speed = 1300 }) => {
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
                animation: marquee-left var(--marquee-speed, 500s) linear infinite;
            }
            .animate-marquee-right {
                animation: marquee-right var(--marquee-speed, 500s) linear infinite;
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
            <MarqueeRow items={ROW_ONE} direction="left" speed={19} />
        </div>

        {/* Row 2 — scrolls right */}
        <MarqueeRow items={ROW_TWO} direction="right" speed={19} />
    </section>
);

export default TestimonialsSection;
