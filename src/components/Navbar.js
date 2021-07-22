import React from 'react';
import './Navbar.css';
import { AppBar, Typography, IconButton, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';

const Navigation = (props) => {
  console.log(props.userName);
  const locationRoute = `/Location?${props.userName}`;
  const contactRoute = `/Contact?${props.userName}`;
  const homeRoute = `/Home?${props.userName}`;
    return (
      <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" href="/"><HomeIcon/></Button>
          <Button color="inherit" href={homeRoute}>Current</Button>
          <Button color="inherit" href={locationRoute}>Update</Button>
          <Button color="inherit" href={contactRoute}>History</Button>
        </Toolbar>
      </AppBar>
      <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
        <h2>Welcome dear {props.userName}</h2>
        </div>
      </div>
        
    )
}

export default withRouter(Navigation);