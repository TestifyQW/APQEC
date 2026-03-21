import React from 'react';
import Header from '../../components/layouts/Header';
import HeroSection from './components/HeroSection';
import PartnersSection from './components/PartnersSection';
import StatsSection from './components/StatsSection';
import TracksSection from './components/TracksSection';
import SpeakersSection from './components/SpeakersSection';
import ScheduleSection from './components/ScheduleSection';
import AwardSection from './components/AwardSection';
import AboutSection from './components/AboutSection';
import OurPartnersSection from './components/OurPartnersSection';
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';

const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <PartnersSection />
            <StatsSection />
            <TracksSection />
            <SpeakersSection />
            <ScheduleSection />
            <AwardSection />
            <OurPartnersSection />
            <AboutSection />
            <FAQSection />
            <FooterSection />
        </>
    );
};

export default HomePage;
