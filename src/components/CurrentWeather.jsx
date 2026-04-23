export default function CurrentWeather({ data }) {
  const current = data.list[0];

  return (
    <div className="card">
      <h2>{data.city.name}</h2>

      <h3>{Math.floor(current.main.temp - 273.15)}°C</h3>

      <img
        src={`https://openweathermap.org/img/w/${current.weather[0].icon}.png`}
        alt="icon"
      />

      <p>{current.weather[0].description}</p>
    </div>
  );
}