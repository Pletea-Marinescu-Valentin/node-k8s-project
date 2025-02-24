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

app.get('/status', (req, res) => {
  res.json({
    status: 'Running',
    uptime: process.uptime() + ' seconds',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
  });
});

app.get('/time', (req, res) => {
  res.json({
    currentTime: new Date().toLocaleString(),
  });
});

app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}! Welcome to the Kubernetes-powered Node.js app!`);
});


