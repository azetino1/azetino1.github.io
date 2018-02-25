<!DOCTYPE HTML>
<html lang="en-us">
<head>
<meta charset="utf-8">
<title>Wind Chill</title>
<script type="text/javascript">

function doInputOutput() {
var t = document.getElementById('tInputBox').value; 
var s = document.getElementById('sInputBox').value; 
var wchill = windChill(t, s) 
document.getElementById ('outputDiv').innerHTML = "Wind Chill factor is " + wchill + " Fahrenheit";
} 
function windChill(tempF, speed)  {
return 35.74 + (0.6215 * tempF) - (35.75 * (speed ** 0.16)) + ((0.4275 * tempF) * (speed ** 0.16));
}
</script>
</head>
<body>
<h1>Calculate Wind Chill</h1>
<h3>Please provide the following information:</h3><br>
<h4>Temperature in Fº:<input type="text" value="temperature" id='tInputBox' size="12"></h4>
<br>
<h4>Wind Speed in MPH:<input type="text" value="wind speed" id='sInputBox' size="12"></h4>
<br>
<button type="button" onclick="doInputOutput()">Wind chill</button>
<div id="outputDiv"></div>
</body>
</html>