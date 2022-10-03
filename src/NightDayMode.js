import React, { useState, useEffect } from "react";
import "./NightDayMode.css";
import SunMode from "./SunMode";
import MoonMode from "./MoonMode";
import App from "./App";

function NightDayMode() {
  const [check, setCheck] = useState(null);
  const [click, setClick] = useState({
    appBackground: "app",
    temperature: "app",
    weatherIcon: "app",
    forecastIcon: "app",
    button: "app",
  });

  let time = new Date();
  let hours = time.getHours();
  console.log(hours);
  function switcher() {
    if (hours < 6 && hours > 20) {
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
    switcher();
  }, []);

  function handleClick() {
    if (click.appBackground === "app") {
      return setClick({
        appBackground: "night-mode-app",
        temperature: "night-mode-temp",
        weatherIcon: "night-mode-icon",
        forecastIcon: "night-mode-forecst",
        button: "night-mode-button",
      });
    } else {
      return setClick({
        appBackground: "app",
        temperature: "app",
        weatherIcon: "app",
        forecastIcon: "app",
        button: "app",
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
