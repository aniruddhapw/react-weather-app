import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  const temperature = Math.round(weatherData.main.temp - 273.15);
  const iconUrl = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const description = weatherData.weather[0].description;

  return (
    <div>
      <h2>{weatherData.name}</h2>
      <img src={iconUrl} alt={description} />
      <p>{description}</p>
      <p>Temperature: {temperature}°C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
