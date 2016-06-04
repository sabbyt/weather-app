const express = require('express');
const request = require('superagent');
const handleRequestError = require(__dirname + '/../lib/handle_request_error');

const weatherRouter = module.exports = exports = express.Router(); //eslint-disable-line

weatherRouter.get('/current/:city', (req, res) => {
  var requestURL = 'http://api.wunderground.com/api/' + process.env.WEATHER_API_KEY + '/conditions/q/' + req.params.city + '.json';
  request
    .get(requestURL)
    .end((err, data) => {
      if (err) return handleRequestError(err, data);
      console.log('Received current weather from ' + req.params.city);
      return res.send(JSON.parse(data.text));
    });
});

weatherRouter.get('/forecast/:city', (req, res) => {
  var requestURL = 'http://api.wunderground.com/api/' + process.env.WEATHER_API_KEY + '/forecast/q/' + req.params.city + '.json';
  request
    .get(requestURL)
    .end((err, data) => {
      if (err) return handleRequestError(err, data);
      console.log('Received forecast weather from ' + req.params.city);
      return res.send(JSON.parse(data.text));
    });
});
