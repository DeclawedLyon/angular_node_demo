const express = require('express');

const app = express();

const messages = [
  {text: "Hello world!", user: "Tim"},
  {text: "The backend is successfully communicating with the front end!", user: "James"}
]

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/api/messages', (req, res) => {
  res.json(messages);
})

app.listen('1234')