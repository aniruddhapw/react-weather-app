import React, { useState, useEffect, useContext, useMemo } from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';
import './App.css'
import Search from './Search';
import CurrentWeather from './component/CurrentWeather';
import Forecast from './component/Forecast';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import VideoBackground from './component/VideoBackground';

const API_KEY = 'bbf7285a3031a176f271cab05a81a14b';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  // const [location, setLocation] = useState('');
  // const [weatherData, setWeatherData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchWeatherData = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);
  //     setWeatherData(response.data);
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   if (location) {
  //     fetchWeatherData();
  //   }
  // }, [location]);

  // const handleLocationChange = (event) => {
  //   setLocation(event.target.value);
  // };
  const handleOnSearchChange=(searchData)=>{
      const [lat, lon]=searchData.value.split(" ");
          const currentWeatherFetch=fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
          const forecastFetch=fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
          Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
    }
  return (
    <>
    <VideoBackground id="video-background"/>
    <div className="container">
       <video autoPlay muted loop id="video-background">
      <source src="https://youtu.be/jX6kn9_U8qk" type="video/mp4" />
    </video>
    
      {/* <div className='container'>
      <h1>Weather App</h1>
      <input type="text" value={location} onChange={handleLocationChange} />
      {loading && <p>Loading...</p>}
      {error && loading && <p>Error: {error.message}</p>}
      {weatherData && (
        <WeatherDisplay weatherData={weatherData} />
      )}
      </div> */}
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>

    </>
    
  );
};

export default App;
