import React from 'react';
import Header from '../../components/layouts/Header';
import FooterSection from '../home/components/FooterSection';
import AgendaPage from './components/AgendaPage';

const AgendaModule = () => {
    return (
        <>
            <Header />
            <AgendaPage />
            <FooterSection />
        </>
    );
};

export default AgendaModule;
