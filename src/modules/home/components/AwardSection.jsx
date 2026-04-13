import React from 'react';

const AwardSection = () => (
    <section
        className="w-full py-24 flex flex-col items-center text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A1F5C 0%, #0D2B8A 50%, #0A1F5C 100%)' }}
    >
        {/* Subtle grid texture overlay */}
        <div
            className="absolute inset-0 opacity-10"
            style={{
                backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
            }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
            {/* Heading */}
            <div className='flex flex-col'>
                <h2
                    className="font-black uppercase text-white leading-tight"
                    style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '0.04em' }}
                >
                    Africa Quality Engineers<br />Awards Night
                </h2>
                <section className='flex w-full h-1'>
                    <div className='w-[34%] bg-[#E6B73B] text-[#E6B73B] rounded-full'>.</div>
                    <div className='w-[34%] bg-[rgba(255,0,0,0)]'></div>
                    <div className='w-[34%] bg-[#E6B73B] rounded-full'></div>
                </section>
            </div>

            {/* Body text */}
            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl">
                We&rsquo;re closing out APQEC 2026 with a much-needed celebration — think Africa&rsquo;s Grammy for
                quality engineers. The Awards Night is an all-out celebration dedicated to spotlighting creative
                excellence, recognizing growth, and amplifying Africa&rsquo;s quality engineers.
            </p>

            {/* CTA buttons */}
            <div className="flex items-center gap-4 mt-2">
                <a
                    href="https://form.typeform.com/to/brfoNQ1I"
                    className="px-10 py-3 rounded border border-white/30 text-[#00D4FF] text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-colors"
                >
                    Nominate
                </a>
                <a
                    href="/vote"
                    className="px-10 py-3 rounded border border-white/30 text-[#00D4FF] text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-colors"
                >
                    Vote
                </a>
            </div>
        </div>
    </section>
);

export default AwardSection;
