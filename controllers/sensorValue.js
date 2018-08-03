var SensorValue = require('../models/sensorValue');
var mongoose = require('mongoose');



exports.add = function (req, res) {

	res.send(saveSensorValue(req.body.value,req.body.unit,req.body.sensorId ));
};

exports.saveSensorValue = function (value, unit, sensorId) {
		var sensorValue = new SensorValue({ value: value, unit: unit, sensorId: sensorId});
	sensorValue.save(function (err, sensorValue) {
		if (err) return console.error(err);
		console.log('Saved SensorValue: ' + sensorValue)
		return sensorValue;
	});
	};


exports.getAll = function (req, res) {
	SensorValue.find({}, function (err, sensorValue) {
		if (err) return console.error(err);
		res.send(sensorValue);
	});

};


exports.getValuesBySensorId = function (req, res) {
	SensorValue.find({ 'sensorId': req.params.id }).sort('date').exec(function (err, sensorValue) {
		if (err) return console.error(err);
		res.send(JSON.stringify(sensorValue));
	})
};