function WeatherIcon(props) {
  if (
    5 < props.time.getUTCHours() + props.timezone &&
    props.time.getUTCHours() + props.timezone < 20
  )
    return (
      <i
        className={`wi wi-owm-day-${props.icon}`}
        style={{ fontSize: "65px" }}
      ></i>
    );
  else {
    return (
      <i
        className={`wi wi-owm-night-${props.icon}`}
        style={{ fontSize: "65px" }}
      ></i>
    );
  }
}

export default WeatherIcon;
