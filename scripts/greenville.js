//javaScript
var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','https://api.wunderground.com/api/f8686be8191dbc65/conditions/q/TX/Greenville.json',true);

weatherObject.send();

weatherObject.onload = function(){
    
var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('currentWeather').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temperature_string;
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
    document.getElementById('currentWindspeed').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('currentWindchill').innerHTML = weatherInfo.current_observation.windchill_string;
    document.getElementById('currentHigh').innerHTML = weatherInfo.forecast.txt_forecast.forecastday["0"].fcttext;