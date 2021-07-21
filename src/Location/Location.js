import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Location() {

    const options = {
          method: 'POST',
          body: ''
      };
    const [state, setState] = React.useState({
        userName: window.location.search.substring(1),
        latitude: "",
        longitude: "",
        getHistoryRoute: `/Contact?${window.location.search.substring(1)}`
       });

    const [open, setOpen] = React.useState(false);
    const onFormSubmit = e => { 
      console.log(`userName => ${state.userName}`);
      console.log(`latitude => ${state.latitude}`);
      console.log(`longitude => ${state.longitude}`);
      fetch(`https://dzqitngp44.execute-api.us-east-2.amazonaws.com/Prod/api/location/create?UserName=${state.userName}&Latitude=${state.latitude}&Longitude=${state.longitude}`,options)
      .then(response => response.json())
      .then(function(response) {
        console.info('Successfully added', response);
        setOpen(true);
    });
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
  
    const handleChange = e => {
      const value = e.target.value;
        setState({
        ...state,
        [e.target.name]: value
        });
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
        <form noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                value={state.userName}
                disabled
                autoFocus
              />
               <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="latitude"
                label="Latitude"
                name="latitude"
                value={state.latitude}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="longitude"
                label="Longitude"
                name="longitude"
                value={state.longitude}
                onChange={handleChange}
              />
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                onClick={onFormSubmit}
              >
                Update Location
              </Button>

              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                href={state.getHistoryRoute}
              >
                Get History
              </Button>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Created Successfully!
              </Alert>
            </Snackbar>
            <div>
        </div>
      </div>
    );
  }