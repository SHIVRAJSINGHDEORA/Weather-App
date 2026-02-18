import "./Utilits.css";
import { formatLocalTime } from "../../../Utils/helper.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWeather } from "../../../Context/WeatherContext";

export default function Utilits() {
  const { info } = useWeather();
  let sunrise = formatLocalTime(info.Sunrise, info.Timezone);
  if (sunrise == "Invalid Date") sunrise = "Sunrise";
  let sunset = formatLocalTime(info.Sunset, info.Timezone);
  if (sunset == "Invalid Date") sunset = "Sunset";
  return (
    <div className="Utilits">
      <div className="visibility">
        <div className="info-visibility">
          <div className="visibility-title">Visibility</div>
          <span className="visibility-value">
            <b>{(info.Visibility / 1000).toFixed(1)}</b>
          </span>
          <span className="visibility-unit">Km</span>
        </div>
        <div className="icon">
          <div className="Icon-part1"></div>
          <div className="Icon-part2"></div>
          <div className="Icon-part3"></div>
          <div className="Icon-part4"></div>
        </div>
      </div>
      <div className="humidity">
        <div className="humidity-body">
          <div className="humidity-title">Humidity</div>
          <div className="humidity-info">{info.humidity}%</div>
        </div>
        <div className="humidity-icon">
          <FontAwesomeIcon
            icon="fa-solid fa-water"
            className="humidity-icon-fa"
          />
        </div>
      </div>
      <div className="pressure">
        <div className="pressure-body">
          <div className="pressure-title">Pressure</div>
          <div className="pressure-info">{info.Pressure} mb</div>
        </div>
        <div className="pressure-icon">
          <FontAwesomeIcon
            icon="fa-solid fa-gauge-high"
            shake
            className="pressure-icon-fa"
          />
        </div>
      </div>
      <div className="sun">
        <div className="sunrise">
          <FontAwesomeIcon icon="fa-solid fa-circle" className="sunrise-icon" />
          <div>{sunrise}</div>
        </div>
        <div className="sunset">
          <FontAwesomeIcon icon="fa-solid fa-moon" className="sunset-icon" />
          <div>{sunset}</div>
        </div>
      </div>
    </div>
  );
}
