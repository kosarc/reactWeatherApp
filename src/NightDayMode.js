import React, { useState, useEffect } from "react";
import "./NightDayMode.css";
import SunMode from "./SunMode";
import MoonMode from "./MoonMode";
import App from "./App";
import axios from "axios";

function NightDayMode() {
  const [position, setPosition] = useState(false);
  const [check, setCheck] = useState(null);
  const [click, setClick] = useState({
    appBackground: null,
    temperature: null,
    weatherIcon: null,
    forecastIcon: null,
    button: null,
  });

  let time = new Date();
  let hours = time.getHours();

  function toggle() {
    if (hours < 6 || hours > 20) {
      setClick({
        appBackground: "night-mode-app",
        temperature: "night-mode-temp",
        weatherIcon: "night-mode-icon",
        forecastIcon: "night-mode-forecst",
        button: "night-mode-button",
      });
      setCheck("on");
    }
  }
  useEffect(() => {
    toggle();
    // eslint-disable-next-line
  }, []);

  function handleClick() {
    if (click.appBackground === null) {
      return setClick({
        appBackground: "night-mode-app",
        temperature: "night-mode-temp",
        weatherIcon: "night-mode-icon",
        forecastIcon: "night-mode-forecst",
        button: "night-mode-button",
      });
    } else {
      return setClick({
        appBackground: null,
        temperature: null,
        weatherIcon: null,
        forecastIcon: null,
        button: null,
      });
    }
  }

  function handleRespone(respone) {
    setPosition(respone.data.name);
  }
  function snowPostion(position) {
    const apiKey = "21cf52b64168334a0b71f4d075758440";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleRespone);
  }

  navigator.geolocation.getCurrentPosition(snowPostion);

  if (position) {
    return (
      <div>
        <div className="NightDayMode">
          <input
            type="checkbox"
            id="darkmode-toggle"
            onClick={handleClick}
            defaultChecked={check}
          />
          <label htmlFor="darkmode-toggle">
            <SunMode />
            <MoonMode />
          </label>
        </div>
        <App city={position} mode={click} />
      </div>
    );
  } else {
    return null;
  }
}

export default NightDayMode;
