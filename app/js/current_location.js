var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function geoSuccess(location) {
  getCurrentWeather(location.coords.latitude + ',' + location.coords.longitude);
  getForecastWeather(location.coords.latitude + ',' + location.coords.longitude);
}

function geoError(err) {
  console.warn('Error ' + err.code + ': ' + err.message);
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError, options);
