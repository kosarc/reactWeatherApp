import React, { useState, useEffect } from "react";
import "./NightDayMode.css";
import SunMode from "./SunMode";
import MoonMode from "./MoonMode";
import App from "./App";

function NightDayMode() {
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
  function switcher() {
    if (hours > 6 && hours > 20) {
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
  // eslint-disable-next-line
  useEffect(() => {
    switcher();
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
  return (
    <div>
      <div className="NightDayMode">
        <input
          type="checkbox"
          id="darkmode-toggle"
          onChange={handleClick}
          defaultChecked={check}
        />
        <label htmlFor="darkmode-toggle">
          <SunMode />
          <MoonMode />
        </label>
      </div>
      <App city={"Paris"} mode={click} />
    </div>
  );
}

export default NightDayMode;
