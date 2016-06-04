$('button').on('click', () => {
  var newLocation = $('#location-zip').val();
  $('#location-zip').val('');

  getCurrentWeather(newLocation);
  getForecastWeather(newLocation);
});
