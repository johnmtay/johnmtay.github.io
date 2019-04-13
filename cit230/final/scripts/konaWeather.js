// Kailua-Kona Weather 
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5847504&appid=2e39eb574dc3bcc6984704dd02d355d2&units=imperial';
var weatherRequest2 = new XMLHttpRequest();
weatherRequest2.open('GET', apiURLstring, true);
weatherRequest2.responseType = 'json';
weatherRequest2.send();

weatherRequest2.onload = function() {
    var weatherData = weatherRequest2.response;
    //console.log(weatherData);
    // Weather Summary
    document.getElementById('konaTemp').innerHTML = weatherData.main.temp + '&deg; F';
    document.getElementById('konaCondition').innerHTML = weatherData.weather[0].main;
 
}