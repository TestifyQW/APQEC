import React from 'react';

// ─── Judge images ─────────────────────────────────────────────────────────────
import ibironkeImg from '../../../assets/ibironkeImg.png';
import mosunmolaImg from '../../../assets/mosunmolaOlabello.jpg';
import ayubaImg from '../../../assets/ayubaJohnson.jpg';
import joshuaImg from '../../../assets/joshuaOlanrewaju.jpg';
import oladeindeImg from '../../../assets/oladeindeDeborah.png';

// ─── Judge data ───────────────────────────────────────────────────────────────
const JUDGES = [
    { name: 'Ibiranke Yekinni', role: 'Chairman', photo: ibironkeImg },
    { name: 'Mosunmola Olabello', role: 'Award Director', photo: mosunmolaImg },
    { name: 'Ayuba Johnson', role: 'Program Manager', photo: ayubaImg },
    { name: 'Joshua Olanrewaju', role: 'Tech Team', photo: joshuaImg },
    { name: 'Oladeinde Deborah', role: 'Award Team', photo: oladeindeImg },
];

// ─── Judge Card ───────────────────────────────────────────────────────────────
const JudgeCard = ({ judge }) => (
    <div
        style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            aspectRatio: '3 / 4',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            cursor: 'default',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        }}
        onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.22)';
        }}
        onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        }}
    >
        {/* Photo */}
        <img
            src={judge.photo}
            alt={judge.name}
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
            }}
        />

        {/* Gradient overlay */}
        <div
            style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,26,58,0.85) 0%, rgba(10,26,58,0.2) 45%, transparent 100%)',
            }}
        />

        {/* Name + role */}
        <div
            style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '14px 12px 12px',
            }}
        >
            <p style={{ color: '#fff', fontSize: '12px', fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
                {judge.name}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '10px', margin: '2px 0 0', fontWeight: 500 }}>
                {judge.role}
            </p>
        </div>
    </div>
);

// ─── Judges Tab ───────────────────────────────────────────────────────────────
const JudgesTab = () => (
    <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* Description */}
        <p style={{
            color: '#555',
            fontSize: '13px',
            lineHeight: '1.7',
            marginBottom: '32px',
            maxWidth: '700px',
        }}>
            Our judges are a distinguished group of industry leaders, senior product quality engineers,
            and C.T.Os committed to ensuring transparency and excellence in celebrating Africa's
            product quality engineers.
        </p>

        {/* Grid — 5 judges repeated across 3 rows */}
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '14px',
            }}
        >
            {[...JUDGES, ...JUDGES, ...JUDGES].map((judge, i) => (
                <JudgeCard key={i} judge={judge} />
            ))}
        </div>
    </div>
);

export default JudgesTab;
