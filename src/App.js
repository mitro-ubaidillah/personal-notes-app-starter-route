import React from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import ArchivePage from './pages/ArchivePage';
import { Link } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import AddPage from './pages/AddPage';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1><Link to="/">Aplikasi Catatan</Link></h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/archives' element={<ArchivePage />} />
          <Route path='/notes/:id' element={<DetailPage />} />
          <Route path='/add' element={<AddPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
