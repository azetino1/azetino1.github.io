<!DOCTYPE HTML>
<html lang="en-us">
<head>
    <meta charset="utf-8">
    <title>Windchill in Fahrenheit</title>
    <script type="text/javascript"> 
    /* input: user inputs temperature and wind speed
    * Process: It runs through formula
    * output: Gives user windchill in farenheit 
    */
  function doinputoutput() {
  
  var temp = document.getElementById("tempinputbox").value;
  var speed = document.getElementById("speedinputbox").value;
  var chill = windchill(temp, speed)
  document.getElementById("output").innerHTML= chill + "°f";
  }
  
  function windchill(tempF, speed) {
  return 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF
  *Math.pow(speed, 0.16);
  }
  </script>
  </head>
  <body>

  <H1>Windchill Calculator</H1>
  Enter Temperature: <input type="text" id='tempinputbox'>
  <br>
  Enter Wind Speed: <input type="text" id='speedinputbox'>
  <br>
  <button type="button" onclick="doinputoutput()">Wind Chill</button>
  <div id="output">
  </div>
  </body>
  </html>