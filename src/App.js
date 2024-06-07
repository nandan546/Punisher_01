// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar';

import Home from './Pages/Home';
import BuyPage from './Pages/Buy';
import Punish from './Pages/Punisher';
import './App.css'; // Create a CSS file for global styles


const App = () => (
  <Router>
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Buy" element={<BuyPage />} />
          <Route path="/punish" element={<Punish />} />
        </Routes>
      </main>
    
    </div>
  </Router>
);

export default App;
