import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import "./weather-icons.min.css";
import WeatherInfo from "./WeatherInfo";

function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function handleRespone(respone) {
    console.log(respone);
    setWeatherData({
      ready: true,
      temperature: respone.data.main.temp,
      feelsLike: respone.data.main.feels_like,
      humidity: respone.data.main.humidity,
      wind: respone.data.wind.speed,
      description: respone.data.weather[0].description,
      visibility: respone.data.visibility,
      barometr: respone.data.main.pressure,
      icon: respone.data.weather[0].id,
      city: respone.data.name,
      country: respone.data.sys.country,
      time: new Date(respone.data.dt * 1000),
      timezone: respone.data.timezone / 3600,
      coordinates: respone.data.coord,
    });
  }
  function search() {
    const apiKey = "21cf52b64168334a0b71f4d075758440";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleRespone);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(data) {
    setCity(data.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className={`App ${props.mode.appBackground}`}>
        <div className="container mt-3">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control search-line"
                  autoFocus="autofocus"
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <input
                  type="submit"
                  value="Search"
                  className={`btn btn-primary w-100 ${props.mode.button}`}
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} info={props.mode} />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="App">
        <i className="fa-solid fa-spinner fa-spin"></i>
      </div>
    );
  }
}

export default App;
