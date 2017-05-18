// index.js

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var request = require('request');
var path = require('path');


var self = this;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(express.static(path.join(__dirname, 'app/public')));

app.use('*', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

var port = 8000;

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
 


module.exports = app;