import React, { useState } from 'react';
import Navigation from '../components/Navbar';

export default function About()
{
    const [state, setState] = useState({
        userName: window.location.search.substring(1)
    });

    const [current, setCurrent] = React.useState({});


    function success(position) {
        var GeoCoOrds = {
            coords: {
                accuracy: position.coords.accuracy,
                altitude: position.coords.altitude,
                altitudeAccuracy: position.coords.altitudeAccuracy,
                heading: position.coords.heading,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                speed: position.coords.speed,
            },
            timestamp: position.timestamp,
            };
        setCurrent(GeoCoOrds);
    }
      
    function error(err) {
        console.error('ERROR(' + err.code + '): ' + err.message);
    }

    var options = { enableHighAccuracy: true, maximumAge: undefined, timeout: undefined };
    if(navigator.geolocation) {
        //navigator.geolocation.watchPosition(success, error, options);
        setInterval(function() {navigator.geolocation.getCurrentPosition(success, error, options)}, 5000);
    } else {
        alert("Sorry, browser does not support geolocation!");
    }

    return (
        <div className="About">
        <Navigation userName={state.userName} />
        <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
            <h1>Where Am I?</h1>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
            <pre className='pre'>
                {JSON.stringify(current, null, 2) }
            </pre>
          </div>
        </div>
    );
}