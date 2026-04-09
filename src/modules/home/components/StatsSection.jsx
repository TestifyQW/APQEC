import React from 'react';

const STATS = [
    { value: '4,000+', label: 'Quality Advocates' },
    { value: '40+', label: 'Speakers' },
    { value: '26+', label: 'Countries' },
    { value: '6', label: 'Deep-Dive Tracks' },
    { value: '3', label: 'Days' },
];

const StatsSection = () => (
    <section
        className="w-full py-14 bg-white"
    >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-wrap justify-center md:justify-between items-end gap-y-10 gap-x-6">
                {STATS.map(({ value, label }) => (
                    <div key={label} className="flex flex-col items-center gap-3">
                        <span
                            className="text-[#00DEEE] text-6xl font-semibold"
                        >
                            {value}
                        </span>
                        <span
                            className="text-[#0A2540] text-lg font-semibold uppercase text-center"
                        >
                            {label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default StatsSection;
