var SensorValue = require('../models/sensorValue');
var Sensor = require('../models/sensor');
var SmartObject = require('../models/smartobject');

var mongoose = require('mongoose');

  
    
exports.init = function(req, res) {
 
/**
 * Seed the database
 */
   //reset Database
	SensorValue.collection.drop();   
   Sensor.collection.drop();   
   SmartObject.collection.drop();   
   
   var sensor = new Sensor({ name: 'Temperature TP33XYZ', description:'Rugged Temperatur Sensor' ,unit: "Celcius"});
	sensor.save(function (err, sensor) {
    		if (err) return console.error(err);
  			  					console.log("Added Sensor " + JSON.stringify(sensor));
  					
  			
  	
	var smartObject = new SmartObject({ name: "Zysterne", description: "Zysterne House Front", _sensorIds: sensor.id	});
	smartObject.save(function (err, smartObject) {
    		if (err) return console.error(err);
  					console.log("Added Sensor " + JSON.stringify(smartObject));
 			 });
 	});  



 			 



  // seeded!
  res.send('Database seeded!');
}