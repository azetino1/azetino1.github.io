//javaScript

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','',true);

weatherObject.send();

weatherObject.onload = function(){
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
}
    