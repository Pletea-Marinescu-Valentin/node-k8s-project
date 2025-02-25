const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const morgan = require('morgan');
const logger = require('./logger');

app.use(morgan('combined', {
  stream: {
    write: (message) => logger.info(message.trim())
  }
}));

app.get('/', (req, res) => {
  res.send('Hello from Dockerized Node.js App running in Kubernetes!');
});

app.get('/health', (req, res) => {
  res.status(200).send('App is healthy!');
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

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index', { title: 'Node.js & Kubernetes App' });
});

