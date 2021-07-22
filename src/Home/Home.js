import React, { useState, useEffect } from "react";
import Routes from '../Routes';
import "./Home.css";
import Navigation from '../components/Navbar';

export default function Home()
{
    const [state, setState] = useState({
        userName: window.location.search.substring(1)
    });

    const [current, setCurrent] = React.useState({});

    useEffect(async () => {
      await fetch(`https://dzqitngp44.execute-api.us-east-2.amazonaws.com/Prod/api/Location/get/current/${state.userName}`)
      .then(res => res.json())
      .then(response => {
        setCurrent(response);
      });
   });

    return (
      <div className="Home">
      <Navigation userName={state.userName} />
        <div className="lander">
          <h1>Your most recent location - Lat: {current.latitude}, Lon: {current.longitude}!</h1>
        </div>
      </div>
    );
}