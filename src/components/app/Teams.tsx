import React from 'react';
import {
    createStyles,
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
        <Typography variant="h3" align="left">Team {teamId} – Team Name</Typography>
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
