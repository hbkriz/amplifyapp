import React from 'react';
import './Navbar.css';
import { AppBar, Typography, IconButton, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';

const Navigation = (props) => {
    console.log(props);
    return (
        // <Navbar bg="primary" variant="dark">
        //     <Navbar.Brand href="#home">React Button</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        //             <Nav.Link href="/">Home</Nav.Link>
        //             <Nav.Link href="/About">About</Nav.Link>
        //             <Nav.Link href="/Contact">Contact</Nav.Link>
        //             <Nav.Link href="/Products">Products</Nav.Link>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
        <AppBar position="static">
        <Toolbar>
          <Button color="inherit" href="/"><HomeIcon/></Button>
          <Button color="inherit" href="/About">History</Button>
        </Toolbar>
      </AppBar>
    )
}

export default withRouter(Navigation);