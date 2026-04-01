import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './modules/home';
import SpeakersModule from './modules/speakers';
import PartnersModule from './modules/partners';
import VoteModule from './modules/vote';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/speakers" element={<SpeakersModule />} />
        <Route path="/partners" element={<PartnersModule />} />
        <Route path="/vote" element={<VoteModule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
