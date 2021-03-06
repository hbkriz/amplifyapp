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
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import history from './history';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Location History App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const options = {
        method: 'POST',
        body: ''
    };
  const [state, setState] = React.useState({
      userName: "",
      latitude: "",
      longitude: "",
      login : ""
     });
  const [open, setOpen] = React.useState(false);
  const onFormSubmit = e => { 
    window.open(`/Location?${state.userName}`); 
  //   console.log(`userName => ${state.userName}`);
  //   console.log(`latitude => ${state.latitude}`);
  //   console.log(`longitude => ${state.longitude}`);
  //   fetch(`https://dzqitngp44.execute-api.us-east-2.amazonaws.com/Prod/api/location/create?UserName=${state.userName}&Latitude=${state.latitude}&Longitude=${state.longitude}`,options)
  //   .then(response => response.json())
  //   .then(function(response) {
  //     console.info('Successfully added', response);
  //     setOpen(true);
  // });
  };

  const handleClose = (event, reason) => {
    window.open(`/Home?${state.userName}`); 
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleChange = e => {
    const value = e.target.value;
    state.login =`/About?${e.target.value}`;
      setState({
      ...state,
      [e.target.name]: value
      });
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          </Avatar>
          <Typography component="h1" variant="h5">
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userName"
              label="User Name"
              name="userName"
              value={state.userName}
              onChange={handleChange}
              autoFocus
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              href={state.login}
              className={classes.submit}
            >
              Submit
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Created Successfully!
            </Alert>
          </Snackbar>
        </div>
      </Grid>
    </Grid>
  );
}