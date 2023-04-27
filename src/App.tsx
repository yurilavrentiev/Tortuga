import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import { InfoPage } from './components/InfoPage/InfoPage';
import { MyIslandPage } from './components/MyIslandPage/MyIslandPage';
import { HowToStartPage } from './components/HowToStartPage/HowToStartPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/myIsland" element={<MyIslandPage />} />
        <Route path="/howToStart" element={<HowToStartPage />} />
      </Routes>
    </div>
  );
}

export default App;
