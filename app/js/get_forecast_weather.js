function getForecastWeather(location) {
  var endpoint = 'https://sabrinatee-weather-app.herokuapp.com/api/forecast/96812';
  if (location) endpoint = 'https://sabrinatee-weather-app.herokuapp.com/api/forecast/' + location;
  return $.ajax(endpoint)
    .then((data) => { //eslint-disable-line
      if (data.response.error) return console.log(data.response.error);
      var forecastInfo = data.forecast.simpleforecast.forecastday;
      $('#forecast-1day').html(
        '<img class="col-xs-4" src= "' + forecastInfo[1].icon_url + '" alt="' + forecastInfo[1].conditions + '"/>' +
        '<p class="col-xs-4 temp-text"><strong>' + forecastInfo[1].date.weekday + '</strong></p>' +
        '<p class="col-xs-4 temp-num">' + forecastInfo[1].high.fahrenheit + '°</p>');

      $('#forecast-2day').html(
        '<img class="col-xs-4" src= "' + forecastInfo[2].icon_url + '" alt="' + forecastInfo[2].conditions + '"/>' +
        '<p class="col-xs-4 temp-text"><strong>' + forecastInfo[2].date.weekday + '</strong></p>' +
        '<p class="col-xs-4 temp-num">' + forecastInfo[2].high.fahrenheit + '°</p>');

      $('#forecast-3day').html(
        '<img class="col-xs-4" src= "' + forecastInfo[3].icon_url + '" alt="' + forecastInfo[3].conditions + '"/>' +
        '<p class="col-xs-4 temp-text"><strong>' + forecastInfo[3].date.weekday + '</strong></p>' +
        '<p class="col-xs-4 temp-num">' + forecastInfo[3].high.fahrenheit + '°</p>');
    });
}

getForecastWeather();
