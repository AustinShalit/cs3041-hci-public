import React from 'react';
import Home from "./Home";
import SimpleBottomNavigation from "./BottomNavigation";
import {Route, Switch} from "react-router";
import Teams from "./Teams";

function App() {
    return (
        <>
            <Switch>
                <Route path={`/home`} component={Home}/>
                <Route path={`/teams`} component={Teams}/>
            </Switch>
            <SimpleBottomNavigation/>
        </>
    );
}

export default App;
