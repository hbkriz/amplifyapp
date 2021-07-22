import React, { useState } from 'react';
import Navigation from '../components/Navbar';

export default function About()
{
    const [state, setState] = useState({
        userName: window.location.search.substring(1)
    });

    return (
        <Navigation userName={state.userName} />
    );
}