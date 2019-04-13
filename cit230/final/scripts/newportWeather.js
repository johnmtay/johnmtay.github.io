// Newport Weather 
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5376890&appid=2e39eb574dc3bcc6984704dd02d355d2&units=imperial';
var weatherRequest3 = new XMLHttpRequest();
weatherRequest3.open('GET', apiURLstring, true);
weatherRequest3.responseType = 'json';
weatherRequest3.send();

weatherRequest3.onload = function() {
    var weatherData = weatherRequest3.response;
    //console.log(weatherData);
    // Weather Summary
    document.getElementById('newportTemp').innerHTML = weatherData.main.temp + '&deg; F';
    document.getElementById('newportCondition').innerHTML = weatherData.weather[0].main;
 
}