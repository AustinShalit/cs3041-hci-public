import React, {ReactElement} from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router';
import Login from "./components/login";
import App from "./components/app";
import {HashRouter} from "react-router-dom";
import {Container} from "@material-ui/core";

// const browserHistory = createBrowserHistory({ basename: '/cs3041-hci' });

export function AppRoutes(): ReactElement {
    return (
        <Switch>
            <Route path="/login" exact component={Login}/>
            <Route path="/" component={App}/>
        </Switch>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <main>
                <Container>
                    <AppRoutes/>
                </Container>
            </main>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
