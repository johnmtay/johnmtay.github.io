var requestURL = 'https://johnmtay.github.io/cit230/final/scripts/templeData.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var templeData = request.response;
    showData(templeData);
}

function showData(templeData) {
    //var data = jsonObj['temples']
    document.getElementById('gilbertAddress').innerHTML += templeData.temples[0].address;
    document.getElementById('gilbertPhone').innerHTML += templeData.temples[0].phone;
    document.getElementById('gilbertDedication').innerHTML += templeData.temples[0].dedication;
    document.getElementById('gilbertServices').innerHTML += templeData.temples[0].services;
    document.getElementById('gilbertClosures').innerHTML += templeData.temples[0].closures;

    document.getElementById('konaAddress').innerHTML += templeData.temples[1].address;
    document.getElementById('konaPhone').innerHTML += templeData.temples[1].phone;
    document.getElementById('konaDedication').innerHTML += templeData.temples[1].dedication;
    document.getElementById('konaServices').innerHTML += templeData.temples[1].services;
    document.getElementById('konaClosures').innerHTML += templeData.temples[1].closures;

    document.getElementById('newportAddress').innerHTML += templeData.temples[2].address;
    document.getElementById('newportPhone').innerHTML += templeData.temples[2].phone;
    document.getElementById('newportDedication').innerHTML += templeData.temples[2].dedication;
    document.getElementById('newportServices').innerHTML += templeData.temples[2].services;
    document.getElementById('newportClosures').innerHTML += templeData.temples[2].closures;

    document.getElementById('oquirrhAddress').innerHTML += templeData.temples[3].address;
    document.getElementById('oquirrhPhone').innerHTML += templeData.temples[3].phone;
    document.getElementById('oquirrhDedication').innerHTML += templeData.temples[3].dedication;
    document.getElementById('oquirrhServices').innerHTML += templeData.temples[3].services;
    document.getElementById('oquirrhClosures').innerHTML += templeData.temples[3].closures;
}