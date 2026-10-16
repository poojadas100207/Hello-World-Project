const express = require('express');

const app = express();

app.get('/', (_request, response) => {
  response.json({
    message: 'Hello World! Onboarding environment successfully configured.'
  });
});

module.exports = app;