import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

// import ourPartners from '../../../assets/ourPartners.png';
import mkopa from '../../../assets/mkopaLogo.png';
import interswitch from '../../../assets/interswitchLogo.png';
import flutterwave from '../../../assets/flutterwaveLogo.png';



const OurPartnersSection = () => (
    <section className="w-full bg-white py-16" id='partners'>
        <div className="max-w-7xl mx-auto px-6 md:px-12">

            {/* Heading */}
            <h2 className="text-center text-[#0F2745] text-4xl font-bold uppercase mb-12">
                Our Sponsors from Last Year
            </h2>

            {/* Logo row */}
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
                {/* <img src={ourPartners} alt="Our Partners" className="w-full h-auto" /> */}
                <img src={mkopa} alt="Mkopa" className='w-25' />
                <img src={interswitch} alt="Interswitch" className='w-25' />
                <img src={flutterwave} alt="Flutterwave" className='w-25' />
            </div>
            <div className='flex justify-center mt-8'>
                <a
                    // href="https://calendly.com/ibironke-1/apqec2026"
                    href="https://drive.google.com/file/d/1QyugTFhAj1L7N-_p3S2Wi3MS9tUv2qI3/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest px-5 py-4 rounded transition-colors"
                    style={{ background: '#0A2540' }}
                    onMouseOver={e => (e.currentTarget.style.background = '#162F5A')}
                    onMouseOut={e => (e.currentTarget.style.background = '#0A2540')}
                >
                    <MdArrowOutward /> <span>Become a Sponsor</span>
                </a>
            </div>
        </div>
    </section>
);

export default OurPartnersSection;
