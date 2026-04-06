import React, { useState } from 'react';
import { FaCheck, FaArrowRight, FaTrophy, FaStar, FaLightbulb, FaUsers, FaRocket, FaGlobe, FaHeart, FaMedal } from 'react-icons/fa6';
import { MdArrowOutward, MdClose } from 'react-icons/md';
import logo from '../../../assets/apqec-logo-white.png';
import voteBgImg from '../../../assets/voteBgImg.png';
import SelectionProcessTab from './SelectionProcessTab';
import JudgesTab from './JudgesTab';

/* ─── Ticker ─────────────────────────────────────────────────────────────── */
const TICKER_ITEMS = ['ONLINE CONFERENCE', 'JUNE 4TH - 7TH, 2026', '#APQEC26'];

const Ticker = () => {
    const repeated = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];
    return (
        <div className="bg-[#194d8d] border-t py-5 border-white/10 py-3 overflow-hidden relative">
            <div className="flex whitespace-nowrap animate-marquee">
                {repeated.map((item, i) => (
                    <span key={i} className="text-white text-xs font-bold uppercase tracking-widest mx-6 flex items-center gap-6">
                        {item}
                        <span className="text-white">●</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

/* ─── Award Category Data ────────────────────────────────────────────────── */
const AWARD_CATEGORIES = [
    {
        id: 'qe-professional',
        icon: '🏆',
        title: 'QE Professional of the Year',
        description:
            'This award highlights exceptional QA professionals who have demonstrated outstanding leadership, innovation, and community contributions in advancing quality engineering in Africa.',

    },
    {
        id: 'rising-star',
        icon: '⭐',
        title: 'Rising Star of the Year',
        description:
            'This award aims to recognise a professional who is new to a QA or testing role. Must have a measurable result. Cannot have just learning or just demonstrating understanding without doing and testing innovation.',

    },
    {
        id: 'qe-innovation',
        icon: '🔬',
        title: 'QE Innovation Award',
        description:
            'For an individual or team that showed up with innovation, breaking new frameworks, tools, methodology, or process that will accelerate and sustain modern quality engineering results.',

    },
    {
        id: 'women-in-qe',
        icon: '👩‍💻',
        title: 'Women in QE Excellence',
        description:
            "Celebrating a woman in tech / organisation who has broken barriers, illuminated followers, or achieved research and technical impact.",

    },
    {
        id: 'best-qe-team',
        icon: '🏥',
        title: 'Best QE Team of the Year',
        description:
            'This award celebrates the engineering teams of an African tech company that built an exceptional difference in quality.',

    },
    {
        id: 'qe-educator',
        icon: '📚',
        title: 'QE Educator / Mentor Award',
        description:
            'This award honours the teachers, mentors, and educators who have grown the QE talent pipeline on the continent.',

    },
    {
        id: 'pan-african',
        icon: '🌍',
        title: 'Pan-African Impact Award',
        description:
            'For an individual or organisation whose QA or QE focus has executable measurable impact on multiple African countries.',

    },
    {
        id: 'best-qe-community',
        icon: '🚀',
        title: 'Best QE Community of the Year',
        description:
            "This award recognises Whatsapp groups, slack communities, clubs etc (chapters) that advance your QE community's knowledge.",

    },
    {
        id: 'apqec-community-choice',
        icon: '💖',
        title: 'APQEC Community Choice',
        description:
            'Voted directly by the community. This people decide who made the biggest positive difference in their QA journey this year.',

    },
];

/* ─── Tab ─────────────────────────────────────────────────────────────────── */
const TABS = ['Award Categories & Nominees', 'Selection Process', 'Judges'];

/* ─── Selection Process Steps ───────────────────────────────────────────── */
const PROCESS_STEPS = [
    { step: '01', title: 'Nominations Open', desc: 'Anyone can submit a nominee via the official nomination form. Self-nominations are allowed.' },
    { step: '02', title: 'Shortlisting', desc: 'A panel of judges reviews all nominations and shortlists the top 3 candidates per category.' },
    { step: '03', title: 'Public Voting', desc: 'Shortlisted nominees are published and the APQEC community votes for their favourites online.' },
    { step: '04', title: 'Judges Scoring', desc: 'Judges independently score each shortlisted nominee based on predefined criteria.' },
    { step: '05', title: 'Final Decision', desc: 'Final winners are determined by a weighted combination of public votes and judges scores.' },
    { step: '06', title: 'Awards Night', desc: "Winners are announced LIVE at the APQEC Awards Night — Africa's Grammy for quality engineers." },
];



/* ─── Vote Modal ─────────────────────────────────────────────────────────── */
const VoteModal = ({ nominee, category, onClose, onConfirm }) => {
    const [voted, setVoted] = useState(false);

    const handleConfirm = () => {
        setVoted(true);
        setTimeout(() => {
            onConfirm();
            onClose();
        }, 1800);
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: 'rgba(10,26,58,0.85)', backdropFilter: 'blur(6px)' }}
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
                onClick={e => e.stopPropagation()}
            >
                {/* Close */}
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors">
                    <MdClose size={22} />
                </button>

                {!voted ? (
                    <>
                        <div className="flex flex-col items-center text-center gap-4">
                            {/* Avatar */}
                            <div
                                className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black text-white shadow-lg"
                                style={{ background: nominee.color }}
                            >
                                {nominee.initials}
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-[#1352A1] mb-1">{category}</p>
                                <h3 className="text-xl font-black text-[#0A1A3A]">{nominee.name}</h3>
                                <p className="text-sm text-gray-500 mt-1">{nominee.title}</p>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                You are about to cast your vote for <strong>{nominee.name}</strong> in the <strong>{category}</strong> category. You can only vote once per category.
                            </p>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={onClose}
                                className="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-bold text-gray-500 uppercase tracking-wider hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirm}
                                className="flex-1 py-3 rounded-xl text-sm font-black text-white uppercase tracking-wider transition-all hover:opacity-90"
                                style={{ background: 'linear-gradient(135deg, #1352A1, #00DEEE)' }}
                            >
                                Confirm Vote
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center text-center gap-4 py-4">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                            <FaCheck className="text-green-500" size={28} />
                        </div>
                        <h3 className="text-xl font-black text-[#0A1A3A]">Vote Confirmed!</h3>
                        <p className="text-sm text-gray-500">
                            Your vote for <strong>{nominee.name}</strong> has been recorded. Thank you for participating!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

/* ─── Award Category Card ────────────────────────────────────────────────── */
const CategoryCard = ({ category, onVote }) => {
    const [voted, setVoted] = useState(null);

    const handleVote = (nominee) => {
        if (voted) return;
        onVote(nominee, category.title, () => setVoted(nominee.id));
    };

    return (
        <div
            className="relative rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ background: 'linear-gradient(160deg, #0D1E45 0%, #0A1535 100%)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
            {/* Gold top accent line */}
            <div className="h-[3px] w-full" style={{ background: 'linear-gradient(90deg, #E6B73B, transparent)' }} />

            {/* Header — icon + title */}
            <div className="px-5 pt-5 pb-4 flex flex-col items-center text-center gap-3">
                <div
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white"
                >
                    {category.icon}
                </div>
                <h3 className="text-sm font-black text-white uppercase tracking-widest leading-snug">
                    {category.title}
                </h3>
            </div>

            {/* Divider */}
            <div className="mx-5 h-px bg-white/10" />

            {/* Description */}
            <div className="px-5 py-4">
                <p className="text-xs text-white/50 leading-relaxed text-center">{category.description}</p>
            </div>
        </div>
    );
};

/* SelectionProcessTab is imported from ./SelectionProcessTab.jsx */

/* JudgesTab is imported from ./JudgesTab.jsx */

/* ─── Main Vote Page ─────────────────────────────────────────────────────── */
const VotePage = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [modal, setModal] = useState(null); // { nominee, category, onConfirm }

    const openModal = (nominee, category, onConfirm) => {
        setModal({ nominee, category, onConfirm });
    };

    const closeModal = () => setModal(null);

    return (
        <main className="pt-16">
            {/* ─── Hero Banner ─────────────────────────────────────── */}
            <section className="w-full pt-20 pb-0 relative overflow-hidden bg-[#114ca0]">
                {/* Center Background Image */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img src={voteBgImg} alt="Awards Trophy" className="w-[230px] md:w-[380px] lg:w-[470px] object-contain opacity-40 mix-blend-luminosity" />
                </div>

                {/* Decorative glow blobs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00DEEE]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#FFD600]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10 pt-16">
                    {/* Headline */}
                    <div className="flex flex-col w-fit mx-auto">
                        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-2 leading-[1.1]">
                            Celebrating Africa's Product<br className="hidden md:block" />
                            <span>Quality Engineers</span>
                        </h1>
                        <section className="flex w-full h-1 mb-6 mt-4">
                            <div className="w-[34%] h-[3px] bg-[#E6B73B] rounded-full" />
                            <div className="w-[34%] h-[3px] bg-transparent" />
                            <div className="w-[34%] h-[3px] bg-[#E6B73B] rounded-full" />
                        </section>
                    </div>

                    {/* Subtitle */}
                    <p className="text-white/90 text-sm md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                        Join <span className="text-[#07EE9E] font-bold">4,000+</span> Innovators at Africa's Product Quality Engineering Conference 2.0
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
                        <a
                            href="#register"
                            onClick={e => e.preventDefault()}
                            className="inline-flex items-center gap-2 bg-[#00DEEE] text-black text-xs md:text-sm font-bold uppercase px-8 py-3.5 rounded hover:bg-cyan-300 transition-colors shadow-lg"
                        >
                            <FaArrowRight className="text-sm" /> Register for Free
                        </a>
                        <a
                            href="#categories"
                            className="inline-flex items-center gap-2 border border-white/60 text-white text-xs md:text-sm font-bold uppercase px-8 py-3.5 rounded hover:bg-white/10 transition-colors"
                        >
                            View Categories
                        </a>
                    </div>
                </div>

                {/* Ticker */}
                <div className="relative z-10">
                    <Ticker />
                </div>
            </section>

            {/* ─── Tabs + Content ───────────────────────────────── */}
            <section className="w-full bg-white" id="categories">
                {/* Sticky tab bar */}
                <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
                    <div className="max-w-7xl mx-auto px-6 md:px-12">
                        <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
                            {TABS.map((tab, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTab(i)}
                                    className={`relative shrink-0 px-6 py-4 text-sm font-bold uppercase tracking-wider transition-colors duration-200
                                        ${activeTab === i
                                            ? 'text-[#0A1A3A]'
                                            : 'text-gray-400 hover:text-gray-600'
                                        }`}
                                >
                                    {tab}
                                    {activeTab === i && (
                                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1352A1] rounded-full" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Nominate / Vote CTA strip */}
                {activeTab === 0 && (
                    <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
                        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                            <a
                                href="#nominate"
                                onClick={e => e.preventDefault()}
                                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-black uppercase tracking-wider text-[#0A1A3A] border-2 border-[#00DEEE] bg-[#00DEEE] hover:bg-cyan-300 transition-colors"
                            >
                                Click Here To Nominate
                            </a>
                            <a
                                href="#vote"
                                onClick={e => e.preventDefault()}
                                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-black uppercase tracking-wider text-[#0A1A3A] border-2 border-[#00DEEE] bg-[#00DEEE] hover:bg-cyan-300 transition-colors"
                            >
                                Click Here To Vote
                            </a>
                        </div>
                    </div>
                )}

                {/* Tab panel */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-10" id="vote">
                    {activeTab === 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {AWARD_CATEGORIES.map(cat => (
                                <CategoryCard key={cat.id} category={cat} onVote={openModal} />
                            ))}
                        </div>
                    )}
                    {activeTab === 1 && <SelectionProcessTab />}
                    {activeTab === 2 && <JudgesTab />}
                </div>
            </section>

            {/* ─── Bottom CTA ───────────────────────────────────── */}
            <section className="w-full py-20 bg-[#0A1A3A] relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                    }}
                />
                <div className="max-w-2xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#FFD600]">
                        <FaTrophy size={26} />
                    </div>
                    <h2 className="text-white text-3xl md:text-4xl font-black uppercase leading-tight">
                        Africa Quality Engineers<br />Awards Night
                    </h2>
                    <p className="text-white/60 text-sm leading-relaxed">
                        We're closing out APQEC 2026 with a much-needed celebration — think Africa's Grammy for quality engineers. Nominate, vote, and celebrate excellence.
                    </p>
                    <a
                        href="#nominate"
                        onClick={e => e.preventDefault()}
                        className="inline-flex items-center gap-2 bg-[#00DEEE] text-black text-sm font-bold uppercase px-10 py-4 rounded hover:bg-cyan-300 transition-colors"
                    >
                        <MdArrowOutward className="text-lg" /> Nominate Someone
                    </a>
                </div>
            </section>

            {/* Vote Confirmation Modal */}
            {modal && (
                <VoteModal
                    nominee={modal.nominee}
                    category={modal.category}
                    onClose={closeModal}
                    onConfirm={modal.onConfirm}
                />
            )}
        </main>
    );
};

export default VotePage;
