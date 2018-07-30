var Sensor = require('../models/sensor');
var mongoose = require('mongoose');


exports.add = function(req, res) {
	var sensor = new Sensor({ name: 'SENSOR', description:'TEST' ,unit: "LITER"});
	sensor.save(function (err, sensor) {
    		if (err) return console.error(err);
  					res.send(sensor);
 			 });
};

exports.getAll = function(req, res) {
 Sensor.find({}, function(err, sensor) {
    		if (err) return console.error(err);
  					res.send(sensor);
 			 });
};


exports.getById = function(req, res) {
		Sensor.findById(req.params.id, function (err, sensor) {
  		if (err) return console.error(err);
  			res.send(JSON.stringify(sensor));
})
};