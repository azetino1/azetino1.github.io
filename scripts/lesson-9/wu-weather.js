//javaScript

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/f8686be8191dbc65/conditions/q/MN/Franklin.json',true);

weatherObject.send();

weatherObject.onload = function(){
    
var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
 
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
    document.getElementById('currentWeather').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('currentWindspeed').innerHTML = weatherInfo.current_observation.wind_gust_mph;
}   
    