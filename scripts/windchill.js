<!DOCTYPE HTML>
<html lang="en-us">
<head>
 <meta charset="utf-8">
 <title>Wind Chill Calculator</title>
 <script type="text/javascript">

 
 function doInputOutput() {
 var userTemp = parseFloat(document.getElementById('tempInput').value);
 var userSpeed = parseFloat(document.getElementById('speedInput').value);
 var chillOut = windChill(userTemp, userSpeed);
 document.getElementById('outputDiv').innerHTML = chill + "°f";
 }
 
 function windChill(tempF, speed) {
 chillCalc = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16)
 return chillCalc;
 }
 </script>
</head>

<body>
 Temperature:<input type="text" id="tempInput"><br>
 Wind Speed:<input type="text" id="speedInput"><br>
 <button type="button" onclick="doInputOutput()">click for Wind Chill</button>
 <div id="outputDiv"></div>
</body>
</html>