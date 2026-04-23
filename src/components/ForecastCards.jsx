export default function ForecastCards({ data }) {
  if (!data) return null;

  // 1. Group forecast by day
  const grouped = {};

  data.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];

    if (!grouped[date]) {
      grouped[date] = [];
    }

    grouped[date].push(item);
  });

  // 2. Convert grouped data into daily summaries
  const daily = Object.keys(grouped).map((date) => {
    const dayData = grouped[date];

    const minTemp = Math.min(...dayData.map(i => i.main.temp_min));
    const maxTemp = Math.max(...dayData.map(i => i.main.temp_max));

    return {
      date,
      icon: dayData[0].weather[0].icon,
      description: dayData[0].weather[0].description,
      min: Math.floor(minTemp - 273.15),
      max: Math.floor(maxTemp - 273.15),
    };
  });

  return (
    <div className="cards">
      {daily.slice(0, 5).map((item, i) => (
        <div key={i} className="forecast-card">

          <img
            src={`https://openweathermap.org/img/w/${item.icon}.png`}
            alt="icon"
          />

          <h4>Max: {item.max}°C</h4>
          <h4>Min: {item.min}°C</h4>

          <p>{item.description}</p>

          <small>{item.date}</small>
        </div>
      ))}
    </div>
  );
}
