import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navbar';
import Routes from './Routes';
import SignIn from './SignIn';

export default function App()
{
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeather] = useState([]);
  const [forecastData, setForecast] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      
      navigator.geolocation.getCurrentPosition(function(position){
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(res => res.json())
      .then(weather => {
        console.log(weather);
        // if (Object.entries(weather).length) {
        //   const mappedWeatherData = mapDataToWeatherInterface(weather);
        //   setWeather(mappedWeatherData);
        // }
      });
    };
    
    fetchData();

  }, [lat, long]);

  return (
    <div className="App">
    <Navigation />
      <Routes />
    </div>
  );
}
