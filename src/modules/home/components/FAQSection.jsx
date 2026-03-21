import React, { useState } from 'react';

/* ─── FAQ data ───────────────────────────────────────────────────────────── */
const FAQS = [
    {
        q: 'Where is the event happening?',
        a: 'Africa',
    },
    {
        q: 'How much does it cost to attend?',
        a: 'It costs a sum of money to attend'
    },
    {
        q: 'What Time Zone will the sessions follow?',
        a: 'All sessions will follow the West African Time Zone (WAT)'
    },
    {
        q: 'What are the Dates again?',
        a: 'June 4th, 9th and 10th, 2026',
    },
    {
        q: 'Who can attend this conference?',
        a: 'Everybody can attend this conference'
    },
    {
        q: 'Which countries are represented?',
        a: 'We welcome partnerships with organisations that share our mission of elevating Africa\'s quality engineering ecosystem. Reach out through our Partner / Sponsor page or email our partnerships team directly. Various tiers are available to suit different budgets and goals.',
    },
    {
        q: 'Will there be recordings of the sessions?',
        a: 'Yes, there will be recordings of the sessions'
    },
    {
        q: "I'm a business owner - What's in it for me?",
        a: 'Lots of things'
    },
    {
        q: "Who i contact for more info?",
        a: 'You can check our contact page'
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
                className="flex-shrink-0 w-7 "
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
                        Frequently Asked<br />APQEC Questions
                    </h2>
                    <div className="w-16 h-1 rounded-full mt-4" style={{ background: '#F5C842' }} />
                </div>

                {/* FAQ list */}
                <div className="lg:w-4xl">
                    <div className="border-t" style={{ borderColor: '#E5E7EB' }}>
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
