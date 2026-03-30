import React, { useState } from 'react';

/* ─── FAQ data ───────────────────────────────────────────────────────────── */
const FAQS = [
    {
        q: 'Where is the event happening?',
        a: 'The entire conference is 100% virtual. You can attend from anywhere in the world — all you need is a device and an internet connection. The link will be shared with you after registration.',
    },
    {
        q: 'How much does it cost to attend?',
        a: 'It’s completely FREE! Yep — access to all sessions, keynotes, and workshops is available at no cost. Just register and you’re in.'
    },
    {
        q: 'What Time Zone will the sessions follow?',
        a: 'All sessions will run on West Africa Time (WAT). Once you register, you’ll receive calendar invites that adjust to your local time zone automatically.'
    },
    {
        q: 'What are the Dates again?',
        a: "The event runs from June 5th to 7th, 2025. That’s Thursday to Saturday, so no weekday excuses",
    },
    {
        q: 'Who can attend this conference?',
        a: 'Anyone interested in software quality, testing, product development, or building better digital products. Whether you’re a QA beginner, dev, PM, SDET, tech lead, or startup founder, you’ll find sessions tailored to your level.'
    },
    {
        q: 'Which countries are represented?',
        a: 'We’re hosting speakers and attendees from 19 African countries including Nigeria, Kenya, Ghana, South Africa, Egypt, Morocco, Uganda, Rwanda, and more. It’s pan-African, diverse, and deeply collaborative.',
    },
    {
        q: 'Will there be recordings of the sessions?',
        a: 'Yes! Registered participants will get access to session replays after the event. So even if you miss something live, you won’t miss out completely.'
    },
    {
        q: "I'm a business owner - What's in it for me?",
        a: 'This event will show you how quality impacts growth, brand perception, and long-term customer trust. We’re also offering sponsorship packages and B2B networking opportunities.'
    },
    {
        q: "Who i contact for more info?",
        a: 'You can email us at testarsquarter@gmail.com or Chat @testarsQuarter in Our Slack Community. We’re happy to help.'
    },
];

/* ─── Single FAQ Row ─────────────────────────────────────────────────────── */
const FAQItem = ({ q, a, isOpen, onToggle }) => (
    <div
        className="border-b cursor-pointer"
        style={{ borderColor: '#E5E7EB' }}
        onClick={onToggle}
    >
        <button className="w-full flex items-center justify-between py-5 text-left focus:outline-none gap-4">
            <span
                className="font-semibold uppercase text-sm md:text-base leading-snug"
                style={{ color: '#0A2540' }}
            >
                {q}
            </span>
            <span
                className="flex-shrink-0 text-5xl text-[#1352A1]"
            >
                {isOpen ? '−' : '+'}
            </span>
        </button>

        {/* Answer */}
        {isOpen && (
            <p className="text-sm leading-relaxed pb-5" style={{ color: '#4B5563' }}>
                {a}
            </p>
        )}
    </div>
);

/* ─── Main Section ───────────────────────────────────────────────────────── */
const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">

                {/* Heading */}
                <div className="mb-10">
                    <h2
                        className="font-black uppercase leading-tight mb-2"
                        style={{ color: '#0A2540', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '0.03em' }}
                    >
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ list */}
                <div className="lg:w-4xl">
                    <div style={{ borderColor: '#E5E7EB' }}>
                        {FAQS.map((faq, i) => (
                            <FAQItem
                                key={i}
                                {...faq}
                                isOpen={openIndex === i}
                                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
