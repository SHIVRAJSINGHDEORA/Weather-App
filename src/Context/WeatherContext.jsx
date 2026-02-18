import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
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
    try {
      let res = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      );
      if (!res.ok) {
        console.log("Not Appropriate City Name");
        const errorData = await res.json();
        console.error("API Error:", res.status, res.statusText, errorData);
        alert("Please Enter a valid City Name");
        return;
      }
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
      setInfo(result);
    } catch (err) {
      console.log(err.message);
      return;
    }
  };

  return (
    <WeatherContext.Provider value={{ info, getWeather }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);
  return context;
}
