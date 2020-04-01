import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Home from './components/Home';
import Links from './components/Links';
import ProjPortfolio from './components/Portfolio';

function App() {
  return (
    <Router>
        <div>
          <Header />
          <Navbar />
          {/* <Wrapper> */}
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/links" component={Links} />
              <Route exact path="/portfolio" component={ProjPortfolio} />
          {/* </Wrapper> */}
        </div>
    </Router>
  );
}

export default App;
