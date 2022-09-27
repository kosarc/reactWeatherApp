function Time(info) {
  let time = new Date();
  let hours = time.getUTCHours() + info.timeData.timezone;
  let minutes = time.getMinutes();

  if (hours > 23) {
    hours = hours - 24;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <span>
      {hours}:{minutes}
    </span>
  );
}
export default Time;
