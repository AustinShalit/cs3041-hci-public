import React from 'react';
import {
    Box, Button,
    createStyles, Fab, FormControl, InputLabel,
    List,
    ListItem,
    ListItemText,
    makeStyles, Select, TextField,
    Theme,
    Typography
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {Link} from "react-router-dom";
import {Route, Switch, useParams, useRouteMatch} from "react-router";
import {CATEGORIES, PRIORITIES, TEST_TEAMS} from "../../test-data";
import AddRequest from "./AddRequest";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
        },
        fab: {
            position: 'fixed',
            bottom: theme.spacing(10),
            right: theme.spacing(2)
        }
    }),
);

function NeedsHelp() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List>
                <ListItem button component={Link} to={`requests/1`}>
                    <ListItemText primary={"Team 1 – Did not play last match"} />
                </ListItem>
                <ListItem button component={Link} to={`requests/2`}>
                    <ListItemText primary={"Team 1 – Does not know about loops"} />
                </ListItem>
                <ListItem button component={Link} to={`requests/4`}>
                    <ListItemText primary={"Team 2 – CAN Disconnected"} />
                </ListItem>
            </List>
            <Fab className={classes.fab} color={"primary"} component={Link} to={`requests/add`}>
                <AddIcon/>
            </Fab>
        </div>
    );
}

const useStyles1 = makeStyles((theme) => ({
    form: {
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    }
}));

function RequestDetail() {
    const classes = useStyles1();

    return (
        <>
            <Typography variant="h3" align="left">Handle Request</Typography>
            <Box>
                <form className={classes.form}>
                    <Box style={{display: "flex", flexDirection: "column"}}>
                        <Box>
                            <FormControl fullWidth>
                                <InputLabel>Team Number</InputLabel>
                                <Select native value={7}>
                                    <option value=""/>

                                    {TEST_TEAMS.map((team) => (
                                        <option value={team.id}>{team.name}</option>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl fullWidth>
                                <InputLabel>Priority</InputLabel>
                                <Select native value={2}>
                                    <option value=""/>

                                    {PRIORITIES.map((p, index) => (
                                        <option value={index}>{p}</option>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl fullWidth>
                                <InputLabel>Category</InputLabel>
                                <Select native>
                                    <option value=""/>

                                    {CATEGORIES.map((c, index) => (
                                        <option value={index}>{c}</option>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>

                        <Box>
                            <TextField variant={"outlined"} placeholder={'Issue Description'} multiline autoComplete="off"
                                       rows={21} fullWidth/>
                        </Box>

                        <Box style={{marginTop: 'auto'}}>
                            <Button variant="contained" color="primary" fullWidth component={Link} to={'/requests'}>Resolve</Button>
                        </Box>
                        <Box style={{marginTop: '5px'}}>
                            <Button variant="contained" color="secondary" fullWidth component={Link} to={'/requests'}>Delete</Button>
                        </Box>
                    </Box>
                </form>
            </Box>
        </>
    );
}

function Requests() {
    const match = useRouteMatch();


    return (
        <>
            <Switch>
                <Route path={`${match.path}/add`}>
                    <AddRequest />
                </Route>
                <Route path={`${match.path}/:id`}>
                    <RequestDetail />
                </Route>
                <Route path={match.path}>
                    <Typography variant="h3" align="left">Needs Help</Typography>
                    <NeedsHelp/>
                </Route>
            </Switch>
        </>
    );
}

export default Requests;
