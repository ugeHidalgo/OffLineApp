var express = require('express');
var app = express();
var path = require('path');
var controllers = require ('./app/controllers');
var data = require ('./app/data'); //<---- This is used to seed the initial data.

//app.use(express.static(path.join(__dirname, 'api')));
app.use(express.static(path.join(__dirname, '../client')));

//Controllers initialization.
controllers.init(app);

app.listen(8082, '0.0.0.0', function () {
  console.log('App listening on port 8082!');
});