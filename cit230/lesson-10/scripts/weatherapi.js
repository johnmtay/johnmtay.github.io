// Weather 
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=2e39eb574dc3bcc6984704dd02d355d2&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function() {
    var weatherData = weatherRequest.response;
    //console.log(weatherData);
    // Weather Summary
    document.getElementById('current-temp').innerHTML = weatherData.main.temp + '&deg;';
    document.getElementById('condition').innerHTML = weatherData.weather[0].main;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity + '&#37;';
    document.getElementById('windSpeed').innerHTML = weatherData.wind.speed + ' mph';
    // Weather Image
    document.getElementById('icon').setAttribute("src", 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png');
 
}
// Forecast
var apiForecastString = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=2e39eb574dc3bcc6984704dd02d355d2&units=imperial';

var forecastRequest = new XMLHttpRequest();

forecastRequest.open('GET', apiForecastString, true);
forecastRequest.responseType = 'json';
forecastRequest.send();

forecastRequest.onload = function() {
    var forecastData = forecastRequest.response;
    //console.log(forecastData);

// Day of Week
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "SUNDAY";
    weekday[1] = "MONDAY";
    weekday[2] = "TUESDAY";
    weekday[3] = "WEDNESDAY";
    weekday[4] = "THURSDAY";
    weekday[5] = "FRIDAY";
    weekday[6] = "SATURDAY";

    var dayOfWeek = weekday[d.getDay()];
    
    document.getElementById('day1').innerHTML = dayOfWeek;
    dayOfWeek = weekday[(d.getDay()+ 1) % 7];
    document.getElementById('day2').innerHTML = dayOfWeek;
    dayOfWeek = weekday[(d.getDay()+ 2) % 7];
    document.getElementById('day3').innerHTML = dayOfWeek;
    dayOfWeek = weekday[(d.getDay()+ 3) % 7];
    document.getElementById('day4').innerHTML = dayOfWeek;
    dayOfWeek = weekday[(d.getDay()+ 4) % 7];
    document.getElementById('day5').innerHTML = dayOfWeek;

    //Temperatures
    document.getElementById('temp1').innerHTML = forecastData.list[0].main.temp + '&deg;';
    document.getElementById('temp2').innerHTML = forecastData.list[1].main.temp + '&deg;';
    document.getElementById('temp3').innerHTML = forecastData.list[2].main.temp + '&deg;';
    document.getElementById('temp4').innerHTML = forecastData.list[3].main.temp + '&deg;';
    document.getElementById('temp5').innerHTML = forecastData.list[4].main.temp + '&deg;';

}
