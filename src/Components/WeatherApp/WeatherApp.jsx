import Map from "./Map/Map";
import Utilits from "./Utilities/Utilits";
import Weather from "./Weather/Weather";
import "./WeatherApp.css";
import Wind from "./Wind/Wind";
import { useState } from "react";
export default function WeatherApp() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;
  const [info, setInfo] = useState({
    temp: "00",
    tempmin: "00",
    tempmax: "00",
    humidity: "00",
    Pressure: "00",
    feelslike: "00",
    weather: "Weather",
    City: "City",
    lat: 28.65195,
    lon: 77.23149,
    Country: "India",
    icon: "01d",
    Visibility: "00",
  });

  let getWeather = async (city) => {
    let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonres = await res.json();
    console.log(jsonres);
    let result = {
      temp: jsonres.main.temp,
      tempmin: jsonres.main.temp_min,
      tempmax: jsonres.main.temp_max,
      humidity: jsonres.main.humidity,
      feelslike: jsonres.main.feels_like,
      Visibility: jsonres.visibility,
      weather: jsonres.weather[0].main,
      City: jsonres.name,
      lat: jsonres.coord.lat,
      lon: jsonres.coord.lon,
      Country: jsonres.sys.country,
      icon: jsonres.weather[0].icon,
      Pressure: jsonres.main.pressure,
      Sunrise: jsonres.sys.sunrise,
      Sunset: jsonres.sys.sunset,
      Timezone: jsonres.timezone,
      WindSpeed: jsonres.wind?.speed || 0,
      WindDirection: jsonres.wind?.deg || 0,
    };
    console.log(result);
    setInfo(result);
  };

  return (
    <div className="app">
      <Weather getCity={getWeather} info={info} />
      <Utilits info={info} />
      <div className="wind-map">
        <Wind info={info} />
        <Map info={info} />
      </div>
    </div>
  );
}
