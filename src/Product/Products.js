import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';

class Products extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Welcome, !</h2>
                <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="latitude"
              label="Latitude"
              name="latitude"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="longitude"
              label="Longitude"
              name="longitude"
            />
                </div>
            </div>
        );
    }
}

export default Products;