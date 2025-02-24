const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello from Dockerized Node.js App running in Kubernetes!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/about', (req, res) => {
  res.send('This is a Dockerized Node.js app running in Kubernetes!');
});

