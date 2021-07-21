import React from 'react';
import './Navbar.css';
import { AppBar, Typography, IconButton, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';

const Navigation = (props) => {
    return (
        <AppBar position="static">
        <Toolbar>
          <Button color="inherit" href="/"><HomeIcon/></Button>
          <Button color="inherit" href="/About">History</Button>
          <Button color="inherit" href="/Location">Location</Button>
          <Button color="inherit" href="/Contact">Contact</Button>
        </Toolbar>
      </AppBar>
    )
}

export default withRouter(Navigation);