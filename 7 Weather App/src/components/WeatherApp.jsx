import React from "react";
import "./WeatherApp.css";

import search_icon from "../assets/search.png";
import cloud_icon from "../assets/cloud.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";

const WeatherApp = () => {
  return (
    <center>
      <div className="container">
        <div className="top-bar">
          <input type="text" className="cityInput" placeholder="Search" />
          <button className="search-icon">
            <img src={search_icon} alt="" />
          </button>
        </div>

        <div className="weather-image">
          <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">24 deg C</div>
        <div className="weather-location">
          London
        </div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          <div className="element">
            <img src={wind_icon} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percent">18 km/hr</div></div>
              <div className="text">Wind speed</div>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
};

export default WeatherApp;
