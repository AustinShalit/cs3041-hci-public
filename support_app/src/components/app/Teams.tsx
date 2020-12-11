import React from 'react';
import {
    createStyles, Divider,
    List,
    ListItem,
    ListItemProps,
    ListItemText,
    makeStyles,
    Theme,
    Typography
} from "@material-ui/core";
import {Route, Switch, useParams, useRouteMatch} from "react-router";
import {TEST_TEAMS} from "../../test-data";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

function TeamList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List>
                {TEST_TEAMS.map((team) => (
                    <ListItem button component={Link} to={`teams/${team.id}`}>
                        <ListItemText primary={team.name} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

function TeamDetail() {
    // @ts-ignore
    const { teamId } = useParams();

    return (
        <>
            <Typography variant="h3" align="left">Team {teamId}</Typography>
            <List>
                <ListItem button component={Link} to={`/requests/1`}>
                    <ListItemText primary={"Did not play last match"} />
                </ListItem>
                <ListItem button component={Link} to={`/requests/2`}>
                    <ListItemText primary={"Does not know about loops"} />
                </ListItem>
                <ListItem button component={Link} to={`/requests/4`}>
                    <ListItemText primary={"CAN Disconnected"} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button component={Link} to={`/requests/3`}>
                    <ListItemText primary={"Forgot robot at home"} />
                </ListItem>
            </List>
        </>
    )
}

function Teams() {
    const match = useRouteMatch();

    console.log(match)

    return (
        <>
            <Switch>
                <Route path={`${match.path}/:teamId`}>
                    <TeamDetail />
                </Route>
                <Route path={match.path}>
                    <Typography variant="h3" align="left">Teams</Typography>
                    <TeamList/>
                </Route>
            </Switch>
        </>
    );
}

export default Teams;
