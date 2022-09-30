function WeatherIcon(props) {
  if (
    5 < props.time.getUTCHours() + props.timezone &&
    props.time.getUTCHours() + props.timezone < 20
  )
    return <i className={`wi wi-owm-day-${props.icon}`}></i>;
  else {
    return <i className={`wi wi-owm-night-${props.icon}`}></i>;
  }
}

export default WeatherIcon;
