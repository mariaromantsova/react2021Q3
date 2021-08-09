import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './pages/AboutPage/AboutPage';
import HomePage from './pages/HomePage/HomePage';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
