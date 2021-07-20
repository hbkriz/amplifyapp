import React, { Component, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from "axios";

export default function About()
{
    const [state, setState] = useState({
        userName: ""
    });

    const onFormSubmit = e => { 
        console.log(`userName => ${state.userName}`);
        fetch(`https://dzqitngp44.execute-api.us-east-2.amazonaws.com/Prod/api/Location/get/current/${state.userName}`)
        .then(response => {
            console.log(response);
        });
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
          onChange={handleChange}
          autoFocus
        />
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          onClick={onFormSubmit}
        >
          Submit
        </Button>
        </form>
        <textarea 
        value={state.response}
        onChange={handleChange} 
        readonly={true}/>
        </div>
    );
}