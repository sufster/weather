import { useState } from "react";
import "./App.css";
import { fetchWeather } from "./api/weather";
import WeatherMap from "./components/WeatherMap";
import ForecastCards from "./components/ForecastCards";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const search = async () => {
    const result = await fetchWeather(city);
    setData(result);
  };

  return (
    <div className="app-container">
      <h1>Meteora</h1>

      <div className="search">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />

        <button onClick={search}>Search</button>
      </div>

      {data && (
        <>
          {/* CITY TITLE */}
          <h2>{data.city.name}</h2>

          {/* 🌍 MAP */}
          <WeatherMap
            lat={data.city.coord.lat}
            lon={data.city.coord.lon}
            city={data.city.name}
          />

          {/* 🌤 FORECAST CARDS (BOTTOM) */}
          <ForecastCards data={data} />
        </>
      )}
    </div>
  );
}

export default App;
