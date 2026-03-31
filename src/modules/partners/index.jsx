import React from 'react';
import Header from '../../components/layouts/Header';
import FooterSection from '../home/components/FooterSection';
import PartnersPage from './components/PartnersPage';

const PartnersModule = () => {
    return (
        <>
            <Header />
            <PartnersPage />
            <FooterSection />
        </>
    );
};

export default PartnersModule;
