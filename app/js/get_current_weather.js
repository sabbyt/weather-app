function getCurrentWeather(location) {
  var endpoint = 'https://sabrinatee-weather-app.herokuapp.com/api/current/96812';

  if (location) endpoint = 'https://sabrinatee-weather-app.herokuapp.com/api/current/' + location;
  return $.ajax(endpoint)
    .then((data) => { //eslint-disable-line
      if (data.response.error) {
        $('#invalid-entry').show();
        return console.log(data.response.error);
      }

      $('#invalid-entry').hide();
      $('#location').html(data.current_observation.display_location.full);
      $('#today-logo').html('<img src="' + data.current_observation.icon_url + '" alt="' + data.current_observation.weather + '"> ');
      $('#today-conditions').html(
        '<p class="today-temp-num">' + Math.floor(data.current_observation.feelslike_f) + '°</p>' +
        '<p>' + data.current_observation.weather + '</p>');
    });
}

getCurrentWeather();
