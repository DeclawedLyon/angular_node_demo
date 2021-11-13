const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const messages = [
  {text: "Hello world!", user: "Tim"},
  {text: "The backend is successfully communicating with the front end!", user: "James"}
]

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

const api = express.Router();

api.get('/messages', (req, res) => {
  res.json(messages);
})

api.post('/messages', (req, res) => {
  console.log(req.body);
  messages.push(req.body);
  res.sendStatus(200);
})

app.use('/api', api);

app.listen('63145')