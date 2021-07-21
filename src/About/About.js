import React, { useState } from 'react';

export default function About()
{
    const [state, setState] = useState({
        userName: window.location.search.substring(1)
    });

    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
        <h2>Welcome, {state.userName}!</h2>
        
        </div>
    );
}