import WeatherIcon from "./WeatherIcon";
import React, { useState } from "react";
import Time from "./Time";
import WeatherForecast from "./weatherForecast";

function WeatherInfo(props) {
  const [unit, setUnit] = useState("celsius");
  const [symbolC, setSymbolC] = useState("C");
  const [symbolF, setSymbolF] = useState("F");

  function snowFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
    setSymbolC("F");
    setSymbolF("C");
  }
  function snowCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
    setSymbolC("C");
    setSymbolF("F");
  }
  if (unit === "celsius") {
    return (
      <div>
        {" "}
        <h1 className="mt-3 city">
          {props.data.city}, {props.data.country},{" "}
          <Time timeData={props.data} />
        </h1>
        <div className="row mt-3">
          <div className="col-sm-3 text-center">
            <div className="row">
              <div
                className={`col-10 col-sm-10 temp ${props.info.temperature}`}
                style={{ fontSize: "120px" }}
              >
                {Math.round(props.data.temperature)}
              </div>
              <div className="col-2 col-sm-2 p-0 units">
                <span
                  style={{
                    fontSize: "28px",
                    fontWeight: "bolder",
                    lineHeight: "30px",
                  }}
                >
                  °{symbolC}
                </span>
                <br />
                <hr />
                <span onClick={snowFahrenheit}>
                  <a href="/" className={`symbol ${props.info.temperature}`}>
                    °{symbolF}
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="row description-icon">
              <div className="col-6 text-center weather-description text-capitalize">
                {" "}
                {props.data.description}
              </div>
              <div className="col-6 text-center">
                <WeatherIcon
                  icon={props.data.icon}
                  time={props.data.time}
                  timezone={props.data.timezone}
                  main={props.info}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6 col-sm-6">
                <ul>
                  <li>
                    Fils like:{" "}
                    <span className="forecast-value">
                      {Math.round(props.data.feelsLike)}°
                    </span>
                  </li>
                  <li>
                    Wind:{" "}
                    <span className="forecast-value">
                      {Math.round(props.data.wind)} km/h
                    </span>
                  </li>
                  <li>
                    Barometr:{" "}
                    <span className="forecast-value">
                      {Math.round(props.data.barometr * 0.07)} cm
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-6">
                <ul>
                  <li>
                    Humidity:{" "}
                    <span className="forecast-value">
                      {props.data.humidity}%
                    </span>
                  </li>
                  <li>
                    Visibility:{" "}
                    <span className="forecast-value">
                      {props.data.visibility / 1000} km
                    </span>
                  </li>
                  <li>
                    Dew Point:{" "}
                    <span className="forecast-value">
                      {Math.round(
                        props.data.temperature - (100 - props.data.humidity) / 5
                      )}
                      °
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <WeatherForecast
          info={props.data.coordinates}
          timezone={props.data.timezone}
          conversion={unit}
        />
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <h1 className="mt-3 city">
          {" "}
          {props.data.city}, {props.data.country},{" "}
          <Time timeData={props.data} />
        </h1>
        <div className="row mt-3">
          <div className="col-sm-3 text-center">
            <div className="row">
              <div
                className={`col-10 col-sm-10 temp ${props.info.temperature}`}
                style={{ fontSize: "120px" }}
              >
                {Math.round(props.data.temperature * 1.8 + 32)}
              </div>
              <div className="col-2 col-sm-2 p-0 units">
                <span
                  style={{
                    fontSize: "28px",
                    fontWeight: "bolder",
                    lineHeight: "30px",
                  }}
                >
                  °{symbolC}
                </span>
                <br />
                <hr />
                <span onClick={snowCelsius}>
                  <a href="/" className={`symbol ${props.info.temperature}`}>
                    °{symbolF}
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="row description-icon">
              <div className="col-6 text-center weather-description text-capitalize">
                {" "}
                {props.data.description}
              </div>
              <div className="col-6 text-center">
                <WeatherIcon
                  icon={props.data.icon}
                  time={props.data.time}
                  timezone={props.data.timezone}
                  main={props.info}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6 col-sm-6">
                <ul>
                  <li>
                    Fils like:{" "}
                    <span className="forecast-value">
                      {Math.round(props.data.feelsLike * 1.8 + 32)}°
                    </span>
                  </li>
                  <li>
                    Wind:{" "}
                    <span className="forecast-value">
                      {Math.round(props.data.wind * 0.62)} mi/h
                    </span>
                  </li>
                  <li>
                    Barometr:{" "}
                    <span className="forecast-value">
                      {Math.round(props.data.barometr * 0.07)} cm
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-6">
                <ul>
                  <li>
                    Humidity:{" "}
                    <span className="forecast-value">
                      {props.data.humidity}%
                    </span>
                  </li>
                  <li>
                    Visibility:{" "}
                    <span className="forecast-value">
                      {(props.data.visibility / 1000) * 0.62} mi
                    </span>
                  </li>
                  <li>
                    Dew Point:{" "}
                    <span className="forecast-value">
                      {Math.round(
                        props.data.temperature -
                          ((100 - props.data.humidity) / 5) * 1.8 +
                          32
                      )}
                      °
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <WeatherForecast
          info={props.data.coordinates}
          timezone={props.data.timezone}
          conversion={unit}
        />
      </div>
    );
  }
}

export default WeatherInfo;
