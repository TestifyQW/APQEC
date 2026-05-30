import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './modules/home';
import SpeakersModule from './modules/speakers';
import PartnersModule from './modules/partners';
import VoteModule from './modules/vote';
import CrewModule from './modules/crew';
import AgendaModule from './modules/agenda';
import META from '@adkit.so/meta-pixel';

function App() {
  useEffect(() => {
    // 1. Initialize the pixel with your unique ID
    META.init({
      pixelIds: ['1626967805395744'],
      autoTrackPageView: true, // This automatically listens to your router changes!
      debug: false,            // Change to true if you want to see console logs during dev
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/speakers" element={<SpeakersModule />} />
        <Route path="/partners" element={<PartnersModule />} />
        <Route path="/vote" element={<VoteModule />} />
        <Route path="/ourcrew" element={<CrewModule />} />
        <Route path="/agenda" element={<AgendaModule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
