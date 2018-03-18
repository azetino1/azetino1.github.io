//javaScript
var requestURL = 'https://api.wunderground.com/api/c68b3124bacf9ecd/conditions/q/TX/Greenville.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

request.onload = function(){
    var weatherInfo = JSON.parse(request.responseText)
    console.log(weatherInfo);
    
    document.getElementById('currentWeather').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temperature_string;
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
    document.getElementById('currentWindspeed').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('currentWindchill').innerHTML = weatherInfo.current_observation.windchill_string;
    document.getElementById('currentHigh').innerHTML = weatherInfo.forecast.txt_forecast.forecastday["0"].fcttext;