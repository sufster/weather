const API_KEY = "487b6dde33fb04a235fb31c96b03e84c";

const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";

export async function fetchWeather(city) {
  const res = await fetch(`${BASE_URL}${city}&appid=${API_KEY}`);
  if (!res.ok) throw new Error("City not found");

  return await res.json();
}