var express = require('express')
var httpRequest = require('xmlhttprequest').XMLHttpRequest
var app = express()
var innerRequest = new httpRequest() 

app.get('/', function (req, res) {
    innerRequest.open('GET', "http://localhost:8088/knowndinosaurs", false);
    innerRequest.send();
    var rando = Math.floor(Math.random() * 3);

    if (innerRequest.status >= 200 && innerRequest.status < 300) {
      console.log(innerRequest.responseText);
    } else {
        console.warn(innerRequest.statusText, innerRequest.responseText);
    }

    var result = JSON.parse(innerRequest.responseText)[rando];
    res.send(result);
})

app.listen(8080, function () {
  console.log('App listening on port 8080!')
})