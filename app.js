var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var mqtt = require("mqtt");

// MQTT Controller
var mqttController = require('./mqtt/controller');

// config files
var config = require('./config/db');
var configMqtt = require('./config/mqtt');


//TODO COS: Refactor
var client = mqtt.connect(configMqtt.mqttConnectionUrl, {clientId: 'Smart Home Client'});

client.on("connect", function () {
				   client.subscribe("testTopic");
    				console.log("Connected to MQTT Server");
});

client.on('error', function(err){
  	console.log("Problem with MQTT Connection, you might have to start the MQTT broker or set the connection string right." + err);
});

client.on('close',function(){
console.log("Client could not connect,client disconnected");
});


client.on('message', function (topic, message) {
  // message is Buffer
  mqttController.handleTopic(topic,message);
})


// Add Router
var smartobjectRouter = require('./routes/smartobject');
var sensorRouter = require('./routes/sensor');
var sensorValueRouter = require('./routes/sensorValue');

var webApplicationRouter = require('./routes/webapplication');
var seedRouter = require('./routes/seed');


mongoose.connect(config.connectionurl);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
  console.log("Connection to " + config.mongodatabase + " Successfully established.");
});


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Definition of routes, keep them separated.Separated files for separated datamodels. The actual webview has a dedicated route as well.
//app.use('/', indexRouter);
app.use('/smartobject', smartobjectRouter);
app.use('/webapp', webApplicationRouter);
app.use('/sensor', sensorRouter);
app.use('/sensorValue', sensorValueRouter);
app.use('/initializeDatabase', seedRouter);


// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
