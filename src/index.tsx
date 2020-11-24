import React, {ReactElement} from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, Switch} from 'react-router';
import { createBrowserHistory } from 'history';
import Login from "./components/login";

const browserHistory = createBrowserHistory({ basename: '/cs3041-hci' });

export function AppRoutes(): ReactElement {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
        </Switch>
    );
}

ReactDOM.render(
  <React.StrictMode>
      <Router history={browserHistory}>
          <main>
              <AppRoutes />
          </main>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
