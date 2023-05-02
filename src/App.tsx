import React from 'react';
import './App.css';
import { Header } from './components/Header/Header.view';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage.view';
import { InfoPage } from './components/InfoPage/InfoPage.view';
import { MyIslandPage } from './components/MyIslandPage/MyIslandPage.view';
import { HowToStartPage } from './components/HowToStartPage/HowToStartPage.view';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage.view';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/myIsland" element={<MyIslandPage />} />
        <Route path="/howToStart" element={<HowToStartPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
