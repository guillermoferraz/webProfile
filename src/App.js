import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Others from './components/Others';
import Contact from './components/Contact';
import Im from './components/im';
import Home from './components/home'
import More from './components/more'



function App() {
  return (
    <Router>
      

      

        <Route exact path="/" component={Navigation}/>
        
        <Route exact path="/im" component={Im}/>
        <Route exact path="/im" component={Home}/>

        

        
        
        <Route exact path="/im/aboutMe" component={Im}/>
        <Route exact path="/im/aboutMe" component={Intro}/>

        <Route exact path="/im/skills" component={Im}/>
        <Route exact path="/im/skills" component={Skills}/>

        <Route exact path="/im/contact" component={Im}/>
        <Route exact path="/im/contact" component={Contact}/>

        <Route exact path="/im/more" component={Im}/>
        <Route exact path="/im/more" component={More}/>


      
    </Router>
  );
}

export default App;
