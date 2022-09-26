import React from 'react';
// import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1><Link to="/">Aplikasi Catatan</Link></h1>
        <Navigation />
      </header>
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;
