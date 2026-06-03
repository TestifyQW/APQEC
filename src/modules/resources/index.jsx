import React from 'react';
import Header from '../../components/layouts/Header';
import FooterSection from '../home/components/FooterSection';
import ResourcesPage from './components/ResourcesPage';

const ResourcesModule = () => {
    return (
        <>
            <Header />
            <ResourcesPage />
            <FooterSection />
        </>
    );
};

export default ResourcesModule;
