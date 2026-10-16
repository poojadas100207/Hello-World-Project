# Practical Implementation Project: Weather Lab

A small real-world weather dashboard built with browser JavaScript and the Open-Meteo public API. It demonstrates component-style UI updates, asynchronous requests, loading/error states, and responsive presentation.

## Setup

No build step is required. Open `public/index.html` in a browser or serve this directory with any static web server:

```bash
npx serve public
```

The browser needs internet access to query Open-Meteo.

## Architecture

- `public/index.html`: semantic page structure and form controls
- `public/app.js`: API client, state transitions, and DOM rendering
- `public/styles.css`: responsive visual system

The UI follows a simple flow: user input -> geocoding request -> forecast request -> view model -> rendered weather card. API failures are shown as actionable error text.

## Tech stack

HTML5, CSS3, modern browser JavaScript, and the Open-Meteo REST API. There are no runtime dependencies or API keys.

## Dependency requirements

A modern browser with `fetch`, `URLSearchParams`, and ES2020 support. An internet connection is required for live forecast data.

## Screenshots and demo

Add captured screenshots to `docs/screenshots/` and a short walkthrough link to `docs/demo.md` when publishing this project.
