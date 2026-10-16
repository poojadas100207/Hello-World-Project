# Architecture Notes

The capstone is a static client with one stateful interaction boundary. `app.js` coordinates remote data requests and converts API responses into a small view model. The DOM renderer owns only the result region and status text. This keeps the project deployable on static hosting while leaving a clear path to introduce a server-side proxy if API policy or caching requirements change.
