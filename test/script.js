const tranquilo = require('tranquilo');
const express = require('express');
const app = express();
const port = 3000;

app.use(tranquilo);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/home', (req, res) => {
  res.status(500).send('Not Found');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
