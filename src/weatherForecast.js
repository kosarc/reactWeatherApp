import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

function WeatherForecast(props) {
  const [temp, setTemp] = useState(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(false);
  }, [props.info]);

  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  function handleRespone(respone) {
    setTemp(respone.data.daily);
    setReady(true);
  }

  if (ready && props.conversion === "celsius") {
    return (
      <div className="WeatherForecast">
        {temp.map(function (value, index) {
          let date = new Date(value.dt * 1000);
          let dayDate = date.getDate();
          if (dayDate < 10) {
            dayDate = `0${dayDate}`;
          }
          let localTime = props.timezone / 3600;
          let iconId = value.weather[0].id;
          if (index < 4) {
            return (
              <div key={index}>
                <div className="day-date">
                  {days[date.getDay()]} {dayDate}
                </div>
                <div className={`weather-icon`}>
                  <WeatherIcon time={date} timezone={localTime} icon={iconId} />
                </div>
                <div className="temp-max">{Math.round(value.temp.max)}°</div>
                <div className="temp-min">{Math.round(value.temp.min)}°</div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    if (ready && props.conversion === "fahrenheit") {
      return (
        <div className="WeatherForecast">
          {temp.map(function (value, index) {
            let date = new Date(value.dt * 1000);
            let dayDate = date.getDate();
            if (dayDate < 10) {
              dayDate = `0${dayDate}`;
            }
            let localTime = props.timezone / 3600;
            let iconId = value.weather[0].id;
            if (index < 4) {
              return (
                <div key={index}>
                  <div className="day-date">
                    {days[date.getDay()]} {dayDate}
                  </div>
                  <div className={`weather-icon`}>
                    <WeatherIcon
                      time={date}
                      timezone={localTime}
                      icon={iconId}
                    />
                  </div>
                  <div className="temp-max">
                    {Math.round(value.temp.max * 1.8 + 32)}°
                  </div>
                  <div className="temp-min">
                    {Math.round(value.temp.min * 1.8 + 32)}°
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      );
    } else {
      const apiKey = "21cf52b64168334a0b71f4d075758440";
      let lon = props.info.lon;
      let lat = props.info.lat;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleRespone);
      return (
        <div className="WeatherForecast">
          <div>
            <i className="fa-solid fa-spinner fa-spin"></i>
          </div>
        </div>
      );
    }
  }
}

export default WeatherForecast;
