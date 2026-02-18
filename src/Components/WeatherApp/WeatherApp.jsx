import Utilits from "./Utilities/Utilits";
import Weather from "./Weather/Weather";
import "./WeatherApp.css";
import Wind from "./Wind/Wind";
import Map from "./Map/Map";
import { WeatherProvider } from "../../Context/WeatherContext";


export default function WeatherApp() {
  return (
    <WeatherProvider>
      <div className="app">
        <Weather />
        <Utilits />
        <div className="wind-map">
          <Wind />
          <Map />
        </div>
      </div>
    </WeatherProvider>
  );
}
