//javaScript

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/f8686be8191dbc65/conditions/q/MN/Franklin.json',true);

weatherObject.send();

weatherObject.onload = function(){
    
var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
}
    