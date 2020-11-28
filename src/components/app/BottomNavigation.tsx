import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Restore';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import {Link} from "react-router-dom";

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
        >
            <BottomNavigationAction
                component={Link}
                to="/home"
                label="Home"
                icon={<HomeIcon/>}/>
            <BottomNavigationAction
                component={Link}
                to="/teams"
                label="Teams"
                icon={<PeopleIcon/>}/>
            <BottomNavigationAction
                component={Link}
                to="/settings"
                label="Settings"
                icon={<SettingsIcon/>}/>
        </BottomNavigation>
    );
}
