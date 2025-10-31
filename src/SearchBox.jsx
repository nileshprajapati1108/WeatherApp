import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  // API details
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "ec1073f35747017a5dc7a96f85d568ac";

  // Get weather information
  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        throw new Error(jsonResponse.message);
      }

      const result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      return result;
    } catch (err) {
      console.error("Error fetching weather:", err);
      throw err;
    }
  };

  // Handle input change
  const handleChange = (event) => {
    setCity(event.target.value);
    setError(false);
  };

  // Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!city.trim()) return;

    try {
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>

        {error && <p style={{ color: "red" }}>No such place exists!</p>}
      </form>
    </div>
  );
}
