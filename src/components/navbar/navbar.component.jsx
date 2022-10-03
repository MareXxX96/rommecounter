import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react'

function Navbar(){
    return (
        <AppBar sx={{backgroundColor:'#009688'}} position="static">
            <Toolbar>
                <Typography>Romme Zähler</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;