import React from 'react';
import Shop from './Shop';
import Nav from './Nav';
import About from './About';
import Home from './Home';
import ContactUs from './ContactUs';
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
              <Route path='/contact-us' component={ContactUs} />
          </div>
      </Router>
      
  );
}

export default App;
