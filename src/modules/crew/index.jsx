import React from 'react';
import Header from '../../components/layouts/Header';
import FooterSection from '../home/components/FooterSection';
import CrewPage from './components/CrewPage';

const CrewModule = () => {
    return (
        <>
            <Header />
            <CrewPage />
            <FooterSection />
        </>
    );
};

export default CrewModule;
