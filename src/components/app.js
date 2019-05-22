import React from 'react';
import {
  BrowserRouter as Router, NavLink,
} from 'react-router-dom';
import Routes from './routes';
import '../style.scss';


const Nav = (props) => {
  return (
    <nav className="navbar">

      <div className="navbar-list-container">
        <ul>
          <li><NavLink to="/" exact>About</NavLink></li>
        </ul>
      </div>
      <div className="navbar-container">
        <div className="navbar-header">Wazam</div>

      </div>
    </nav>
  );
};

const App = (props) => {
  return (

    <Router>
      <div>
        <Nav />
        <Routes />
      </div>
    </Router>

  );
};

export default App;
