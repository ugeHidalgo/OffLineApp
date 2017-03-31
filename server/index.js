var express = require('express'),
    app = express(),
    mongoose = require ('mongoose'),
    dbConfig = require ('./app/data/dbConfig'),
    path = require('path'),
    controllers = require ('./app/controllers'),
    bodyParser = require('body-parser'),
    data = require ('./app/data'); //<---- This is used to seed the initial data.


mongoose.connect (dbConfig.url);

// parse urlencoded request bodies into req.body.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//app.use(express.static(path.join(__dirname, 'api')));
app.use(express.static(path.join(__dirname, '../client')));

//Controllers initialization.
controllers.init(app);

app.listen(8082, '0.0.0.0', function () {
  console.log('App listening on port 8082!');
});