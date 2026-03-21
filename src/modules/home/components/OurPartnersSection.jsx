import React from 'react';

import ourPartners from '../../../assets/ourPartners.png';



const OurPartnersSection = () => (
    <section className="w-full bg-white py-16" id='partners'>
        <div className="max-w-7xl mx-auto px-6 md:px-12">

            {/* Heading */}
            <h2 className="text-center text-[#0F2745] text-4xl font-bold uppercase mb-12">
                Our Partners
            </h2>

            {/* Logo row */}
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
                <img src={ourPartners} alt="Our Partners" className="w-full h-auto" />
            </div>

        </div>
    </section>
);

export default OurPartnersSection;
