function WeatherIcon(props) {
  console.log(props.main);
  if (
    5 < props.time.getUTCHours() + props.timezone &&
    props.time.getUTCHours() + props.timezone < 20
  )
    return <i className={`wi wi-owm-day-${props.icon} ${props.main}`}></i>;
  else {
    return <i className={`wi wi-owm-night-${props.icon} ${props.main}`}></i>;
  }
}

export default WeatherIcon;
