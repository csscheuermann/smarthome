var SmartObject = require('../models/smartobject');

var mongoose = require('mongoose');


exports.add = function (req, res) {

	console.log("Body " + JSON.stringify(req.body));
	console.log("SensorIds " + JSON.stringify(req.body.sensorIds));
	var smartObject = new SmartObject({ name: req.body.name, description: req.body.description, _sensorIds: req.body.sensorIds });
	smartObject.save(function (err, smartObject) {
		if (err) return logger.error(err);
		res.send(smartObject);
	});
};

exports.getAll = function (req, res) {
	SmartObject.find({}).populate("_sensorIds").exec(
		function (err, data) {
			if (err) {
				return logger.error(err);
			}
			res.send(JSON.stringify(data));
		}
	)
};


//exports.getById = function(req, res) {
//		SmartObject.findById(req.params.id, function (err, smartobject) {
//  		if (err) return console.error(err);
//  			res.send(JSON.stringify(smartobject));
//})


exports.getById = function (req, res) {
	SmartObject.findById(req.params.id).populate("_sensorIds").exec(
		function (err, data) {
			if (err) {
				return console.log(err);
			}
			res.send(JSON.stringify(data));
		}
	)
};



