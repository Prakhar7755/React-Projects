import React, { useState } from "react";
import "./WeatherApp.css";
import search_icon from "../assets/search.png";
import cloud_icon from "../assets/cloud.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
import clear_icon from "../assets/clear.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";

const WeatherApp = () => {
  const [weatherIcon, setWeatherIcon] = useState(cloud_icon);
  let api_key = "dd94f859a0e52d6e4767fddf735f04a7";

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    let humidity = document.getElementsByClassName("humidity-percent");
    let wind = document.getElementsByClassName("wind-rate");
    let temperature = document.getElementsByClassName("weather-temp");
    let location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = data.wind.speed + " km/hr";
    temperature[0].innerHTML = data.main.temp + " °c";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWeatherIcon(clear_icon);
    } else if (
      data.weather[0].icon === "02n" ||
      data.weather[0].icon === "02d"
    ) {
      setWeatherIcon(cloud_icon);
    } else if (
      data.weather[0].icon === "03n" ||
      data.weather[0].icon === "03d"
    ) {
      setWeatherIcon(drizzle_icon);
    } else if (
      data.weather[0].icon === "13n" ||
      data.weather[0].icon === "13d"
    ) {
      setWeatherIcon(snow_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWeatherIcon(rain_icon);
    }

    
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <button className="search-icon" onClick={search}>
          <img src={search_icon} alt="" />
        </button>
      </div>

      <div className="weather-image">
        <img src={weatherIcon} alt="" />
      </div>
      <div className="weather-temp">24 °C</div>
      <div className="weather-location">London</div>

      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18 km/hr</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;

/* 
50n smoke
50d haze
04n clouds
 */
