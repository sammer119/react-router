import React from 'react';
import Shop from './Shop';
import Nav from './Nav';
import About from './About';
import Home from './Home';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
      <Router>
          <div className="App">
              <Nav />
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
              <Route path='/shop' component={Shop} />
          </div>
      </Router>
      
  );
}

export default App;
