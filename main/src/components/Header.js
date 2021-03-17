import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = ({ sitename }) => (
    <AppBar position="relative">
        <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
                {sitename}
            </Typography>
        </Toolbar>
    </AppBar>
)

export default Header;