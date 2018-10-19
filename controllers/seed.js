var SensorValue = require('../models/sensorValue');
var Sensor = require('../models/sensor');
var SmartObject = require('../models/smartobject');

var mongoose = require('mongoose');


exports.init = function (req, res) {
	SensorValue.collection.deleteOne({ _id: '5bba393e69898d776169674e'});

	/**
	 * Seed the database
	 */
	//reset Database
	//SensorValue.collection.drop();
	//Sensor.collection.drop();
	//e1SmartObject.collection.drop();
	/*
	var sensors = [
		{ name: 'MAX 6675 Temperatur', description: 'Thermocouple', unit: 'Celcius' }
		//{ name: 'Temperature TP9876', description: 'Rugged Temperature Sensor', unit: 'Celcius' }
	];

Sensor.collection.insert(sensors, function (err, docsInserted) {
		if (err) return console.error(err);
		console.log('Added Sensor ' + docsInserted);

		var count;
		var sensorIds = new Array();
		for (count = 0; count < docsInserted["ops"].length; count++) {
			sensorIds.push(docsInserted["ops"][count]["_id"]);
		}

		var smartObject = new SmartObject({ name: "Fireplace", description: "Fireplace Measurements", _sensorIds: sensorIds });

		smartObject.save(function (err, smartObject) {
			if (err) return logger.error(err);
			console.log("Added Sensor " + JSON.stringify(smartObject));
		});

		//addSensorValues(sensorIds[0]);
		//addSensorValues(sensorIds[1]);

	});
*/
	function addSensorValues(sensorId) {
		var numberOfSensorValues = 20;
		var i;
		for (i = 0; i < numberOfSensorValues; i++) {
			
	
					for (j = 0; j < numberOfSensorValues; j++) {
								var d = new Date("201"+i+"-07-"+j+"T14:24:00");
			var sensorValue = new SensorValue({ value: Math.floor((Math.random() * 10) + 1), unit: "Liter", sensorId: sensorId, date: d });
			sensorValue.save(function (err, sensorValue) {
				if (err) return logger.error(err);
				console.log("Added Sensor Value" + JSON.stringify(sensorValue));
			});
		}
		}

	}

	// seeded!
	res.send('Database seeded!');
}