import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import welcome from'./components//welcome';

function App() {
  return (
    <Router>
      <Route exact path="/" component={welcome} />

      

      
    </Router>
  );
}

export default App;
