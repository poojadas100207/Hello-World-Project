const form = document.querySelector('#search-form');
const input = document.querySelector('#city');
const status = document.querySelector('#status');
const result = document.querySelector('#result');

async function requestJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Weather service request failed.');
  return response.json();
}

async function searchCity(city) {
  status.textContent = 'Searching...';
  result.replaceChildren();
  const locations = await requestJson(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
  const location = locations.results?.[0];
  if (!location) throw new Error('No city matched that search.');
  const params = new URLSearchParams({ latitude: location.latitude, longitude: location.longitude, current: 'temperature_2m,relative_humidity_2m,wind_speed_10m' });
  const weather = await requestJson(`https://api.open-meteo.com/v1/forecast?${params}`);
  result.innerHTML = `<article><p class="eyebrow">${location.name}, ${location.country}</p><h2>${weather.current.temperature_2m}°C</h2><p>Humidity ${weather.current.relative_humidity_2m}% · Wind ${weather.current.wind_speed_10m} km/h</p></article>`;
  status.textContent = 'Current conditions loaded.';
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const city = input.value.trim();
  if (!city) { status.textContent = 'Enter a city first.'; return; }
  try { await searchCity(city); } catch (error) { status.textContent = error.message; }
});
