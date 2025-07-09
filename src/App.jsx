import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Essays from './pages/Essays';
import WhatIsDemocracy from './pages/WhatIsDemocracy';

export default function App() {
  return (
    <Router>
      <nav className='p-4 bg-black text-white flex justify-between'>
        <Link to='/'>Home</Link>
        <Link to='/essays'>Essays</Link>
        <Link to='/democracy'>What is Democracy?</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/essays' element={<Essays />} />
        <Route path='/democracy' element={<WhatIsDemocracy />} />
      </Routes>
    </Router>
  );
}