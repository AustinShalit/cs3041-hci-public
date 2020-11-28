import React from 'react';
import Home from "./Home";
import SimpleBottomNavigation from "./BottomNavigation";
import {Route, Switch} from "react-router";
import Teams from "./Teams";
import AddRequest from './AddRequest';
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {

    },
    content: {
        marginBottom: 56
    },
    footer: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        textAlign: 'center',
    }
}));

function App() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.content}>
                <Switch>
                    <Route path={`/home`} component={Home}/>
                    <Route path={`/teams`} component={Teams}/>
                    <Route path={`/add`} component={AddRequest}/>
                </Switch>
            </Box>
            <Box className={classes.footer}>
                <SimpleBottomNavigation/>
            </Box>
        </Box>
    );
}

export default App;
