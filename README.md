# weather-app

Simple weather app that uses [Weather Underground API](https://www.wunderground.com/weather/api/d/docs)

# Getting Started
```
npm install
```

```
export WEATHER_API_KEY=[API_KEY FROM WEATHER UNDERGROUND]
```

```
node server.js
```

Then open browser to ```localhost:3000``` - if enabled in browser, geolocation updates app with current location's weather.

# API Reference
### GET /api/current/:location
### GET /api/forecast/:location

Acceptable location formats:

|     Location Format     |      Example      |
|:-----------------------:|:-----------------:|
| US state/city           | CA/San_Francisco  |
| US zipcode              | 98121             |
| country/city            | Australia/Sydney  |
| latitude,longitude      | 47.6062,-122.3321 |
| airport code            | KJFK              |
| PWS id                  | pws:KCASANFR70    |
| AutoIP address location | autoip            |
