export default function ForecastCards({ data }) {
  const daily = data.list.filter((_, i) => i % 8 === 0);

  return (
    <div className="cards">
      {daily.slice(0, 5).map((item, i) => (
        <div key={i} className="forecast-card">
          <img
            src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}
            alt="icon"
          />

          <h4>{Math.floor(item.main.temp - 273.15)}°C</h4>

          <p>{item.weather[0].description}</p>

          <small>{item.dt_txt.split(" ")[0]}</small>
        </div>
      ))}
    </div>
  );
}