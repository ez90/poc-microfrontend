import React from "react";
import { useSelector } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = ({ sitename }) => {
    const user = useSelector((state) => state?.user);

    return (
    <AppBar position="relative">
        <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
                {sitename}
            </Typography>
            {user?.name}
        </Toolbar>
    </AppBar>
    );
};

export default Header;