import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import Activity from './components/Activity';
import TestimonialsSection from './components/TestimonialsSection';
import FooterSection from './components/FooterSection';

const HomePage = () => {
    const { state } = useLocation();

    useEffect(() => {
        if (state?.scrollTo) {
            const el = document.getElementById(state.scrollTo);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [state]);

    return (
        <>
            <Header />
            <HeroSection />
            <PartnersSection />
            <StatsSection />
            <TracksSection />
            <SpeakersSection />
            <ScheduleSection />
            <Activity />
            {/* <AwardSection /> */}
            <OurPartnersSection />
            <AboutSection />
            <TestimonialsSection />
            <FAQSection />
            <FooterSection />
        </>
    );
};

export default HomePage;
