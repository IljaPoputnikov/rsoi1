var express = require('express');
var app = express();

var libs = require('./libs');

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/date', function(request, response) {
	let date = request.query.date;
	response.send("Index is: " + libs.GetDateHash(date));
});

app.listen(port, function () {
  console.log('App listening on port ' + port + '!');
})