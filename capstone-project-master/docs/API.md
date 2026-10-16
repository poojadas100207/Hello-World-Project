# API Documentation

The capstone consumes two public Open-Meteo endpoints.

## Geocoding

`GET https://geocoding-api.open-meteo.com/v1/search`

Query parameters: `name`, `count=1`, `language=en`, `format=json`.

The first `results` item supplies `name`, `country`, `latitude`, and `longitude`.

## Current forecast

`GET https://api.open-meteo.com/v1/forecast`

Query parameters: `latitude`, `longitude`, and `current=temperature_2m,relative_humidity_2m,wind_speed_10m`.

The UI displays the `current.temperature_2m`, `current.relative_humidity_2m`, and `current.wind_speed_10m` values.

## Errors

Non-2xx responses produce a user-facing service error. An empty result produces `No city matched that search.`. No credentials are sent by the client.
