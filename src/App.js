// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar';
import Footer from './Footer';
import Home from './Pages/Home';
import Buy from './Pages/Buy';
import Punish from './Pages/Punisher';
import './App.css'; // Create a CSS file for global styles


const App = () => (
  <Router>
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/punish" element={<Punish />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
