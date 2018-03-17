//javaScript

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/f8686be8191dbc65/conditions/forecast/q/MN/Franklin.json',true);

weatherObject.send();

weatherObject.onload = function(){
    
var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('currentWeather').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
    document.getElementById('currentWindspeed').innerHTML = weatherInfo.current_observation.wind_gust_mph;
    document.getElementById('currentWindchill').innerHTML = weatherInfo.current_observation.windchill_string;
    document.getElementById('currentLow').innerHTML = weatherInfo.current_observation.fctext;
    document.getElementById('currentHigh').innerHTML = weatherInfo.current_observation.high;
}  
    