import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Others from './components/Others';
import Contact from './components/Contact';




function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Intro/>
        <Skills/>
        <Others/>
        <Contact/>
      </div>
    </Router>
  );
}

export default App;
