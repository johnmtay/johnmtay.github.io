var requestURL = 'https://johnmtay.github.io/cit230/final/scripts/closures.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var townData = request.response;
    showData(townData);
}

function showData(townData) {
    //var data = jsonObj['towns']
    document.getElementById('prestonMotto').innerHTML += townData.towns[4].motto;
    document.getElementById('prestonYearFounded').innerHTML += townData.towns[4].yearFounded;
    document.getElementById('prestonPopulation').innerHTML += townData.towns[4].currentPopulation;
    document.getElementById('prestonRainFall').innerHTML += townData.towns[4].averageRainfall;

    document.getElementById('sodaSpringsMotto').innerHTML += townData.towns[5].motto;
    document.getElementById('sodaSpringsYearFounded').innerHTML += townData.towns[5].yearFounded;
    document.getElementById('sodaSpringsPopulation').innerHTML += townData.towns[5].currentPopulation;
    document.getElementById('sodaSpringsRainFall').innerHTML += townData.towns[5].averageRainfall;

    document.getElementById('fishHavenMotto').innerHTML += townData.towns[1].motto;
    document.getElementById('fishHavenYearFounded').innerHTML += townData.towns[1].yearFounded;
    document.getElementById('fishHavenPopulation').innerHTML += townData.towns[1].currentPopulation;
    document.getElementById('fishHavenRainFall').innerHTML += townData.towns[1].averageRainfall;
}