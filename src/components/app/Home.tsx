import React from 'react';
import {
    createStyles, Fab,
    List,
    ListItem,
    ListItemProps,
    ListItemText,
    makeStyles,
    Theme,
    Typography
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {Link} from "react-router-dom";

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

function NeedsHelpItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component="a" {...props} />;
}

function NeedsHelp() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List>
                <NeedsHelpItemLink href="#simple-list">
                    <ListItemText primary="Team #1 – Caught Fire" />
                </NeedsHelpItemLink>
                <NeedsHelpItemLink href="#simple-list">
                    <ListItemText primary="Team #2 – C++ Help" />
                </NeedsHelpItemLink>
            </List>
            <Fab className={classes.fab} color={"primary"} component={Link} to={`/add`}>
                <AddIcon/>
            </Fab>
        </div>
    );
}

function Home() {
    return (
        <>
            <Typography variant="h3" align="left">Needs Help</Typography>
            <NeedsHelp/>
        </>
    );
}

export default Home;
