import React from 'react';
import {Box, Button, FormControl, InputLabel, Select, TextField, Typography} from "@material-ui/core";
import {CATEGORIES, PRIORITIES, TEST_TEAMS} from "../../test-data";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    form: {
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    }
}));

function AddRequest() {
    const classes = useStyles();

    return (
        <Box>
            <Typography variant="h3" align="left">Add Request</Typography>
            <form className={classes.form}>
                <Box style={{display: "flex", flexDirection: "column"}}>
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel>Team Number</InputLabel>
                            <Select native>
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
                            <Select native>
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
                                       rows={25} fullWidth/>
                    </Box>

                    <Box style={{marginTop: 'auto'}}>
                        <Button variant="contained" color="primary" fullWidth component={Link} to={'/requests'}>Add</Button>
                    </Box>
                </Box>
            </form>
        </Box>
    );
}

export default AddRequest;
