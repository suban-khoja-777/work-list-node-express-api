const {API,REQUESTS,PATH} = require('./constant');
const {authenticate} = require('./utility');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const axios = require("axios");

const app = express();


// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(express.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// enabling CORS for all requests
app.use(cors());

const port = 3000

/* Worklist Tracker Start */

/* Client Start */

app.get(`/${PATH.APP_TRACKER}/client` , (request, response) => {

  axios.get(API.BASE + API.ENDPOINTS.client,{
    headers : {
      'Content-Type' : API.HEADERS.CONTENT_TYPE,
      'x-apikey' : API.HEADERS.API_KEY
    }
  })
  .then(res => {
    response.send(res.data);
  })
  .catch(err => {
    response.send(err);
  })
});

app.post(`/${PATH.APP_TRACKER}/client`, (request, response) => {
  
  const NEW_CLIENT = {
    Name : request.body.Name,
    Rate : request.body.Rate
  }

  axios.post(API.BASE + API.ENDPOINTS.client,NEW_CLIENT,{
    headers : {
      'Content-Type' : API.HEADERS.CONTENT_TYPE,
      'x-apikey' : API.HEADERS.API_KEY
    }
  })
  .then(res => {
    response.send({
      Id : res.data._id,
      Name : res.data.Name,
      Rate : res.data.Rate
    });
  })
  .catch(err => {
    response.send(err);
  })
});

app.delete(`/${PATH.APP_TRACKER}/client`, (request, response) => {
  axios.delete(API.BASE + API.ENDPOINTS.client + '/' + request.body.Id,{
    headers : {
      'Content-Type' : API.HEADERS.CONTENT_TYPE,
      'x-apikey' : API.HEADERS.API_KEY
    }
  })
  .then(res => {
    response.send(res.data);
  })
  .catch(err => {
    response.send(err);
  })
});

app.patch(`/${PATH.APP_TRACKER}/client`, (request, response) => {
  
  const CLIENT_ID = request.body.Id;
  const UPDATE_CLIENT = request.body;
  delete UPDATE_CLIENT.Id;

  axios.patch(API.BASE + API.ENDPOINTS.work_entry + '/' + CLIENT_ID,UPDATE_CLIENT,{
    headers : {
      'Content-Type' : API.HEADERS.CONTENT_TYPE,
      'x-apikey' : API.HEADERS.API_KEY
    }
  })
  .then(res => {
    response.send({
      Id : res.data._id,
      Name : res.data.Name,
      Rate : res.data.Rate
    });
  })
  .catch(err => {
    response.send(err);
  })
});

/* Client End */

/* Work Entry Start */

app.get(`/${PATH.APP_TRACKER}/work-entry`, (request, response) => {
  axios(API.BASE + API.ENDPOINTS.work_entry,{
    headers : {
      'Content-Type' : API.HEADERS.CONTENT_TYPE,
      'x-apikey' : API.HEADERS.API_KEY
    }
  })
  .then(res => {
    response.send(res.data);
  })
  .catch(err => {
    response.send(err);
  })
});

app.post(`/${PATH.APP_TRACKER}/work-entry`, (request, response) => {
  
  const NEW_ENTRY = {
    Client : request.body.Client,
    Start_Date : request.body.Start_Date,
    Start_Time : request.body.Start_Time,
    Payment_Status : request.body.Payment_Status,
    Duration : request.body.Duration,
  }

  axios.post(API.BASE + API.ENDPOINTS.work_entry,NEW_ENTRY,{
    headers : {
      'Content-Type' : API.HEADERS.CONTENT_TYPE,
      'x-apikey' : API.HEADERS.API_KEY
    }
  })
  .then(res => {
    response.send({
      Id : res.data._id,
      Duration : res.data.Duration,
      Start_Date : res.data.Start_Date,
      Start_Time : res.data.Start_Time,
      Payment_Status : res.data.Payment_Status
    });
  })
  .catch(err => {
    response.send(err);
  })
});

app.delete(`/${PATH.APP_TRACKER}/work-entry`, (request, response) => {
  axios.delete(API.BASE + API.ENDPOINTS.work_entry + '/' + request.body.Id,{
    headers : {
      'Content-Type' : API.HEADERS.CONTENT_TYPE,
      'x-apikey' : API.HEADERS.API_KEY
    }
  })
  .then(res => {
    response.send(res.data);
  })
  .catch(err => {
    response.send(err);
  })
});

app.patch(`/${PATH.APP_TRACKER}/work-entry`, (request, response) => {
  
  const ENTRY_ID = request.body.Id;
  const UPDATE_ENTRY = request.body;
  delete UPDATE_ENTRY.Id;
  axios.patch(API.BASE + API.ENDPOINTS.work_entry + '/' + ENTRY_ID,UPDATE_ENTRY,{
    headers : {
      'Content-Type' : API.HEADERS.CONTENT_TYPE,
      'x-apikey' : API.HEADERS.API_KEY
    }
  })
  .then(res => {
    response.send({
      Id : res.data._id,
      Duration : res.data.Duration,
      Start_Date : res.data.Start_Date,
      Start_Time : res.data.Start_Time,
      Payment_Status : res.data.Payment_Status
    });
  })
  .catch(err => {
    response.send(err);
  })
});

/* Work Entry End */

/* Worklist Tracker End */

app.listen(port, () => {
  console.log('Server STarted');
})
