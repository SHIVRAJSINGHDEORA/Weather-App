import "../Utilities/Utilits.css";
import { useWeather } from "../../../Context/WeatherContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Wind() {
  const { info } = useWeather();
  return (
    <div className="wind">
      <h2>Wind</h2>
      <div className="wind-icon">
        <FontAwesomeIcon icon="fa-solid fa-wind"   />
        <FontAwesomeIcon icon="fa-solid fa-wind"    style={{color : "darkblue"}}/>
        <FontAwesomeIcon icon="fa-solid fa-wind "    style={{color: "rgb(116, 192, 252)",}} />
      </div>
      <div>
        <p><b>Wind Direction :-</b> {info.WindDirection}&deg;</p>
        <p><b>Wind Speed :-</b> {info.WindSpeed} Km/hr</p>
      </div>

    </div>
  );
}
