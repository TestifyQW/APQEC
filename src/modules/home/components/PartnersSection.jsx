import React from 'react';

import googleLogo from '../../../assets/googleLogo.png';
import amazonLogo from '../../../assets/amazonLogo.png';
import microsoftLogo from '../../../assets/microsoftLogo.png';
import appleLogo from '../../../assets/appleLogo.png';
import netflixLogo from '../../../assets/netflixLogo.png';
import ibmLogo from '../../../assets/ibmLogo.jpg';
import interswitchLogo from '../../../assets/interswitchLogo.png';
import mooveLogo from '../../../assets/moveLogo.jpg';
import flutterwaveLogo from '../../../assets/flutterwaveLogo.png';
import moniepointLogo from '../../../assets/moniepointLogo.png';
import mpesaLogo from '../../../assets/mpesaLogo.png';
import tymebankLogo from '../../../assets/tymebankLogo.png';
import paystackLogo from '../../../assets/paystackLogo.png';
import mkopaLogo from '../../../assets/mkopaLogo.png';
import opayLogo from '../../../assets/opayLogo.png';
import ihsLogo from '../../../assets/ihsLogo.png';

/* ─── Partner data ───────────────────────────────────────────────────────── */

const ROW_ONE = [
    { id: 'google', src: googleLogo, alt: 'Google' },
    { id: 'amazon', src: amazonLogo, alt: 'Amazon' },
    { id: 'microsoft', src: microsoftLogo, alt: 'Microsoft' },
    { id: 'apple', src: appleLogo, alt: 'Apple' },
    { id: 'netflix', src: netflixLogo, alt: 'Netflix' },
    { id: 'ibm', src: ibmLogo, alt: 'IBM' },
    { id: 'interswitch', src: interswitchLogo, alt: 'Interswitch' },
    { id: 'moove', src: mooveLogo, alt: 'Moove' },
];

const ROW_TWO = [
    { id: 'flutterwave', src: flutterwaveLogo, alt: 'Flutterwave' },
    { id: 'moniepoint', src: moniepointLogo, alt: 'Moniepoint' },
    { id: 'mpesa', src: mpesaLogo, alt: 'M-Pesa' },
    { id: 'tymebank', src: tymebankLogo, alt: 'TymeBank' },
    { id: 'paystack', src: paystackLogo, alt: 'Paystack' },
    { id: 'mkopa', src: mkopaLogo, alt: 'M-KOPA' },
    { id: 'opay', src: opayLogo, alt: 'OPay' },
    { id: 'ihs', src: ihsLogo, alt: 'IHS' },
];


const LogoRow = ({ items }) => (
    <div
        className="flex items-center justify-evenly px-4 md:px-10 overflow-x-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
        {items.map(({ id, src, alt }) => (
            <div
                key={id}
                className="flex-shrink-0 flex items-center justify-center px-4 py-4 transition-opacity duration-200 hover:opacity-60"
            >
                <img
                    src={src}
                    alt={alt}
                    className="object-contain"
                    style={{ height: '36px', maxWidth: '120px' }}
                />
            </div>
        ))}
    </div>
);



const PartnersSection = () => (
    <section
        className="w-full py-10"
    >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* Heading */}
            <h2 className="text-center text-[#0A2540] text-4xl font-bold uppercase mb-8">
                Join Engineers From
            </h2>

            {/* Row 1 */}
            <LogoRow items={ROW_ONE} />

            {/* Divider */}
            {/* <div className="mx-6 md:mx-16 border-t border-gray-200 my-2" /> */}

            {/* Row 2 */}
            <LogoRow items={ROW_TWO} />

            {/* Bottom solid blue border */}
            {/* <div className="mt-8 h-[3px] w-full" style={{ background: '#1352A1' }} /> */}
        </div>
    </section>
);

export default PartnersSection;
