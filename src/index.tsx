import React, {ReactElement} from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, Switch} from 'react-router';
import { createBrowserHistory } from 'history';
import Login from "./components/login";
import App from "./components/app";

const browserHistory = createBrowserHistory({ basename: '/cs3041-hci' });

export function AppRoutes(): ReactElement {
    return (
        <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/" component={App} />
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
