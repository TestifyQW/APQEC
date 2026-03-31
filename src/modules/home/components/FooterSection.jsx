import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import logo from '../../../assets/apqec-logo.png'

/* ─── Nav data ───────────────────────────────────────────────────────────── */
const QUICK_LINKS = [
    { label: 'Content Tracks', href: '#content-tracks' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Partners', href: '#partners' },
    { label: 'Company', href: '#company' },
];

const SUPPORT_LINKS = [
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
];

/* ─── Main Footer ────────────────────────────────────────────────────────── */
const FooterSection = () => (
    <footer className="w-full">

        {/* ── Dark upper section ── */}
        <div className="bg-[#0A1A3A] pt-16 pb-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* 3-column grid */}
                <div className="flex flex-col gap-10 md:flex-row justify-between">

                    {/* Column 1 — Brand + description + social */}
                    <div className="flex flex-col gap-6">
                        <p className="text-white/80 text-sm leading-relaxed">
                            APQEC a summit powered by TestarsQuarter, is a deep dive into the <br />
                            future of product engineering and development quality. From real-world <br />
                            QA strategies to leadership insights, we&apos;re equipping Africa&apos;s next wave of <br />
                            product leaders with the skills and mindset to shape world-class solutions.
                        </p>

                        {/* Social links */}
                        <div>
                            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">
                                Social Links
                            </p>
                            <div className="flex items-center gap-4 text-white/60">
                                <a href="https://www.instagram.com/testarsquarter?igsh=cXI0OGozcTJzdG02&utm_source=qr" aria-label="Instagram" className="hover:text-white transition-colors">
                                    <FaInstagram />
                                </a>
                                <a href="https://www.linkedin.com/company/testarsquarter/" aria-label="LinkedIn" className="hover:text-white transition-colors">
                                    <AiOutlineLinkedin />
                                </a>
                                <a href="https://x.com/testarsquarterr?s=21&t=iuzV7iaYXyNyF-BtdYEAuQ" aria-label="X / Twitter" className="hover:text-white transition-colors">
                                    <FaXTwitter />
                                </a>
                            </div>
                        </div>
                    </div>

                    <main className='flex gap-16'>
                        {/* Column 2 — Quick Links */}
                        <div>
                            <p className="text-white text-xs font-bold uppercase tracking-widest mb-6">
                                Quick Links
                            </p>
                            <ul className="flex flex-col gap-4">
                                {QUICK_LINKS.map(({ label, href }) => (
                                    <li key={label}>
                                        <a href={href} className="text-white/60 text-sm hover:text-white transition-colors">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3 — Support */}
                        <div>
                            <p className="text-white text-xs font-bold uppercase tracking-widest mb-6">
                                Support
                            </p>
                            <ul className="flex flex-col gap-4">
                                {SUPPORT_LINKS.map(({ label, href }) => (
                                    <li key={label}>
                                        <a href={href} className="text-white/60 text-sm hover:text-white transition-colors">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </main>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <p className="text-white/40 text-xs">
                        APQEC 2026 © All rights reserved
                    </p>
                    <p className="text-white/40 text-xs">
                        Powered by Testify Limited
                    </p>
                </div>
            </div>
        </div>

        {/* ── Large APQEC watermark — white background ── */}
        <div className="bg-white w-full overflow-hidden leading-none select-none my-5">
            <img src={logo} alt="" className='w-[85%] mx-auto' />
        </div>

    </footer>
);

export default FooterSection;
