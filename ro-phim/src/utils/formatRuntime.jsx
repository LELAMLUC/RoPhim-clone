function FormatRuntime({ minutes }) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
}

export default FormatRuntime;
