import React from 'react';

const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
      <p><strong>Feels Like:</strong> {weather.main.feels_like} °C</p>
      <p><strong>Min Temp:</strong> {weather.main.temp_min} °C</p>
      <p><strong>Max Temp:</strong> {weather.main.temp_max} °C</p>
      <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
      <p><strong>Weather:</strong> {weather.weather[0].description}</p>
      <p><strong>Wind:</strong> {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;

