//javaScript

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','',true);

weatherObject.send();

weatherObject.onload = Function(){
    
    var weatherInfo = Json.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
}
    