// Kailua-Kona Weather 
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5847504&appid=2e39eb574dc3bcc6984704dd02d355d2&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function() {
    var weatherData = weatherRequest.response;
    //console.log(weatherData);
    // Weather Summary
    document.getElementById('konaTemp').innerHTML = weatherData.main.temp + '&deg; F';
    document.getElementById('konaCondition').innerHTML = weatherData.weather[0].main;
 
}