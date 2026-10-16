const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_request, response) => {
  response.json({ status: 'ok', service: 'onboarding-api' });
});

app.listen(port, () => console.log(`Production API listening on ${port}`));
