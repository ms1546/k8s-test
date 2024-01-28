const express = require('express');
const app = express();
const port = 3000;

app.get('/data', (req, res) => {
  res.json({ message: 'Hello from Backend!' });
});

app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${port}`);
});
