import React, { useState } from "react";
import Navigation from './../components/Navbar';
import Routes from '../Routes';
import "./Home.css";

export default function Home()
{
    const [state, setState] = useState({
        userName: window.location.search.substring(1)
    });

    return (
      <div className="Home">
        <div className="lander">
          <h1>Welcome, {state.userName}!</h1>
        </div>
      </div>
    );
}