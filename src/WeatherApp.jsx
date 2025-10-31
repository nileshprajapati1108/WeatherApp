import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css"; // 👈 add this for styling

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "Haze",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weather-app-container">
      {/* ✅ Header Section with Logo + Name */}
      <header className="app-header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
          alt="Weather Logo"
          className="app-logo"
        />
        <h1 className="app-title">SkySense Weather</h1>
      </header>

      {/* ✅ Main Content */}
      <div className="app-content">
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
    </div>
  );
}
