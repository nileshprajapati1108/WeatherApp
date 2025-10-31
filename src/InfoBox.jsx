import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // Correct icon name
import "./InfoBox.css";

export default function InfoBox({ info }) {
  // Default image URLs
  const HOT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDhxA1bU7lbLhmkQOnog7DHJyt_E-KhToaodAMzaBY_oD6pmek3_k-6E&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDhxA1bU7lbLhmkQOnog7DHJyt_E-KhToaodAMzaBY_oD6pmek3_k-6E&s";
  
const COLD_URL = "https://www.shutterstock.com/image-photo/winter-snow-covered-mountain-peaks-600nw-115417516.jpg";

const RAIN_URL = "https://img.freepik.com/free-photo/closeup-shot-wet-glass-reflecting-rainy-forest-scenery_181624-23365.jpg?semt=ais_hybrid&w=740&q=80";

const DEFAULT_URL = "https://images.unsplash.com/photo-1611928482473-7b27d24eab80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000";


  // Choose background based on weather condition
  const getImageUrl = () => {
    if (!info || !info.temp || !info.humidity) return DEFAULT_URL;
    if (info.humidity > 80) return RAIN_URL;
    if (info.temp > 15) return HOT_URL;
    return COLD_URL;
  };

  // Choose icon
  const getWeatherIcon = () => {
    if (info.humidity > 80) return <ThunderstormIcon />;
    if (info.temp > 15) return <WbSunnyIcon />;
    return <AcUnitIcon />;
  };

  if (!info || !info.city) {
    return (
      <div className="InfoBox">
        <div className="cardContainer">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 140 }} image={DEFAULT_URL} title="Weather" />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                No data available
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Please search for a city to view weather information.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={getImageUrl()} title="Weather" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {getWeatherIcon()}
            </Typography>

            <Typography variant="body2" color="text.secondary" component="span">
              <p>Temperature: {info.temp}°C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Min Temp: {info.tempMin}°C</p>
              <p>Max Temp: {info.tempMax}°C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels like{" "}
                {info.feelsLike}°C.
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
