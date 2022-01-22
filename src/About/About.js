import React, { useState } from 'react';
import Navigation from '../components/Navbar';

export default function About()
{
    const [state, setState] = useState({
        userName: window.location.search.substring(1)
    });

    const [current, setCurrent] = React.useState({});

    function success(pos) {
        setCurrent(pos.coords);
        console.log(pos.coords);
    }
      
    function error(err) {
        console.error('ERROR(' + err.code + '): ' + err.message);
    }
      
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(success, error);
     } else {
        alert("Sorry, browser does not support geolocation!");
     }

    return (
        <div className="About">
        <Navigation userName={state.userName} />
          <div className="lander">
            <h1>Your current location - Lat: {current.latitude}, Lon: {current.longitude}!</h1>
          </div>
        </div>
    );
}