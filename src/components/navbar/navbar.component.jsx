import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react'

function Navbar(){
    return (
        <AppBar sx={{backgroundColor:'#009688'}} position="static">
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <div />
                <Typography >Romme Zähler</Typography>
                <div />
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;