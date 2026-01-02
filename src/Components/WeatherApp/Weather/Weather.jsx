import SearchBox from "../SearchBox/SearchBox.jsx";
import "./Weather.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircle,
  faMoon,
  faCloudSun,
  faCloudMoon,
  faCloud,
  faCloudShowersHeavy,
  faCloudRain,
  faCloudBolt,
  faSnowflake,
  faSmog,
  faWater,
  faGaugeHigh,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCircle,
  faMoon,
  faCloudSun,
  faCloudMoon,
  faCloud,
  faCloudShowersHeavy,
  faCloudRain,
  faCloudBolt,
  faSnowflake,
  faSmog,
  faWater,
  faGaugeHigh
);

import { useState } from "react";
import weatherIcons from "../../../Utils/icon.js";

export default function Weather({ getCity, info }) {
  return (
    <div className="weather">
      <SearchBox getCity={getCity} />
      <br />
      <div className="weather-card">
        <div className="location-header">
          <div className="location">
            <b>{info.City}</b>&nbsp; &nbsp; lat {info.lat}&nbsp; lon {info.lon}
          </div>
          <div className="country">{info.Country}</div>
        </div>
        <br />
        <br />
        <div className="weather-main">
          <FontAwesomeIcon
            icon={weatherIcons[info.icon][0]}
            className="weather-icon"
            style={{ color: weatherIcons[info.icon][1] }}
          />
          <h1 className="temperature">{info.temp}&deg;C</h1>
        </div>
        <br />
        <div className="weather-details">
          <span className="weather-condition">
            <b>{info.weather}</b>
          </span>
          <span className="temp-high">
            <div>
              <b>H</b>
            </div>
            <div>{info.tempmax}&deg;</div>
          </span>
          <span className="temp-low">
            <div>
              <b>L</b>
            </div>
            <div>{info.tempmin}&deg;</div>
          </span>
        </div>
      </div>
    </div>
  );
}
