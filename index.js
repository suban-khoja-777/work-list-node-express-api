const {API,REQUESTS} = require('./constant');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const axios = require("axios");


const app = express();


// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

const port = 3000

app.get('/api/client', (request, response) => {
  axios(REQUESTS.GET_ALL_CLIENTS())
  .then(res => {
    response.send(res.data);
  })
  .catch(err => {
    response.send(err);
  })
});

app.post('/api/client', (request, response) => {
  axios(REQUESTS.NEW_CLIENT())
  .then(res => {
    response.send({
      clients : res[0].data,
      work_entries : res[1].data,
    });
  })
  .catch(err => {
    response.send(err);
  })
});

app.delete('/api/client', (request, response) => {
  axios(REQUESTS.DELETE_CLIENT())
  .then(res => {
    response.send({
      clients : res[0].data,
      work_entries : res[1].data,
    });
  })
  .catch(err => {
    response.send(err);
  })
});

app.get('/api/work-entry', (request, response) => {
  axios(REQUESTS.GET_ALL_WORK_ENTRIES())
  .then(res => {
    response.send(res.data);
  })
  .catch(err => {
    response.send(err);
  })
});

app.get('/api/work-entry', (req, res) => {
  res.send('API!')
});

app.listen(port, () => {
})