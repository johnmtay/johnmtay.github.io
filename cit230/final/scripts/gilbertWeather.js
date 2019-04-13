// Gilbert Weather 
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5295903&appid=2e39eb574dc3bcc6984704dd02d355d2&units=imperial';
var weatherRequest1 = new XMLHttpRequest();
weatherRequest1.open('GET', apiURLstring, true);
weatherRequest1.responseType = 'json';
weatherRequest1.send();

weatherRequest1.onload = function() {
    var weatherData = weatherRequest1.response;
    //console.log(weatherData);
    // Weather Summary
    document.getElementById('gilbertTemp').innerHTML = weatherData.main.temp + '&deg; F';
    document.getElementById('gilbertCondition').innerHTML = weatherData.weather[0].main;
 
}