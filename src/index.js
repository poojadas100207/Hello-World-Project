const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_request, response) => {
  response.json({
    message: 'Hello World! Onboarding environment successfully configured.'
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
