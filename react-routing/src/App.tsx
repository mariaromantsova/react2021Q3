import React from 'react';
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import routes from './routes';

const App: React.FunctionComponent<RouteComponentProps> = ({ location }) => {
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} timeout={300} classNames="page">
        <div className="page container mt-5 d-flex flex-column justify-content-center align-items-center">
          <Switch location={location}>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                <Component />
              </Route>
            ))}
            <Route path="/details/:id" component={DetailsPage} />
            <Route exact component={ErrorPage} />
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(App);
