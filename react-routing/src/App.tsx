import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Navbar from './components/Navbar/Navbar';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import routes from './routes';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page container mt-5 d-flex flex-column justify-content-center align-items-center">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
        <Route exact component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;
