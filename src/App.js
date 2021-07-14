import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import Routes from './Routes';
import SignIn from './SignIn';

function App() {
  return (
    <div className="App">
    <Navigation />
      <Routes />
    </div>
  );
}

export default App;
