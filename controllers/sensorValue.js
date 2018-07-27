var SensorValue = require('../models/sensorValue');
var mongoose = require('mongoose');

  
    
exports.add = function(req, res) {
	var sensorValue = new SensorValue({ value: req.body.value ,unit: req.body.unit,sensorId: req.body.sensorId});
	sensorValue.save(function (err, sensorValue) {
    		if (err) return console.error(err);
  					res.send(sensorValue);
 			 });
   
};

exports.getAll = function(req, res) {
 SensorValue.find({}, function(err, sensorValue) {
    		if (err) return console.error(err);
  					res.send(sensorValue);
 			 });
   
};


exports.getValuesBySensorId = function(req, res) {
		SensorValue.findById(req.params.id, function (err, sensorValue) {
  		if (err) return console.error(err);
  			res.send(JSON.stringify(sensorValue));
})
};