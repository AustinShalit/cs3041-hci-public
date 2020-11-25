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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        fab: {
            position: 'absolute',
            bottom: theme.spacing(15),
            right: theme.spacing(5)
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
            <Fab className={classes.fab} color={"primary"}>
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
