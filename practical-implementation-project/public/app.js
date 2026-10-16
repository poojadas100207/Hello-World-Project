const form = document.querySelector('#weather-form');
const cityInput = document.querySelector('#city');
const status = document.querySelector('#status');
const forecast = document.querySelector('#forecast');

function renderForecast(place, weather) {
  forecast.innerHTML = `
    <article class="forecast-card">
      <div><p class="eyebrow">${place.name}, ${place.country}</p><h2>${weather.temperature}°C</h2></div>
      <dl><div><dt>Wind</dt><dd>${weather.wind} km/h</dd></div><div><dt>Coordinates</dt><dd>${place.latitude.toFixed(2)}, ${place.longitude.toFixed(2)}</dd></div></dl>
    </article>`;
}

async function loadForecast(city) {
  status.textContent = 'Loading forecast...';
  forecast.replaceChildren();
  const locationResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
  if (!locationResponse.ok) throw new Error('The location service is unavailable.');
  const locationData = await locationResponse.json();
  const place = locationData.results?.[0];
  if (!place) throw new Error('No matching city was found.');

  const query = new URLSearchParams({ latitude: place.latitude, longitude: place.longitude, current: 'temperature_2m,wind_speed_10m' });
  const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?${query}`);
  if (!weatherResponse.ok) throw new Error('The forecast service is unavailable.');
  const weatherData = await weatherResponse.json();
  renderForecast(place, { temperature: weatherData.current.temperature_2m, wind: weatherData.current.wind_speed_10m });
  status.textContent = 'Forecast updated.';
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (!city) { status.textContent = 'Enter a city to search.'; return; }
  try { await loadForecast(city); } catch (error) { status.textContent = error.message; }
});
