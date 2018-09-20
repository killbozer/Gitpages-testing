


var element = document.getElementById("result");




var requestURL = "db.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function () {

    var members = request.response;
    console.log(members)

}