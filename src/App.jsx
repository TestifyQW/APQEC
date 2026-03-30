import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './modules/home';
import SpeakersModule from './modules/speakers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/speakers" element={<SpeakersModule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
