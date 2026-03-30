import React from 'react';
import Header from '../../components/layouts/Header';
import FooterSection from '../home/components/FooterSection';
import SpeakersPage from './components/SpeakersPage';

const SpeakersModule = () => {
    return (
        <>
            <Header />
            <SpeakersPage />
            <FooterSection />
        </>
    );
};

export default SpeakersModule;
