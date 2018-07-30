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
   //   var count;
   //      document.write("Starting Loop" + "<br />");
   // for(count = 0; count < 10; count++){
   	
   var sensors = [
   				{ name: 'Temperature TP33XYZ', description: 'Rugged Temperature Sensor' ,unit: 'Celcius'},
   				{ name: 'Temperature TP9876', description: 'Rugged Temperature Sensor' ,unit: 'Celcius'}
   				];

					Sensor.collection.insert(sensors, function (err, docsInserted) {
					if (err) return console.error(err);
  			  		console.log('Added Sensor ' + docsInserted);	
  			  		
  			  		var count;
		  			var sensorIds = new Array();
  					for(count = 0; count < docsInserted["ops"].length; count++){
   							sensorIds.push(docsInserted["ops"][count]["_id"]);
   				}
  			  			
					var smartObject = new SmartObject({ name: "Zysterne", description: "Zysterne House Front", _sensorIds: sensorIds	});
					
					smartObject.save(function (err, smartObject) {
    				if (err) return logger.error(err);
  						console.log("Added Sensor " + JSON.stringify(smartObject));
 			 		});
 			 
 					addSensorValues(sensorIds[0]);
 					addSensorValues(sensorIds[1]);
 				 	
	});

function addSensorValues(sensorId){	
				var numberOfSensorValues = 9;
 			 	var i;
				for (i = 0; i < numberOfSensorValues; i++){
		 					 var d = new Date("2018-07-23T1"+i+":24:00");
 			 				var sensorValue = new SensorValue({value: Math.floor((Math.random() * 10) + 1), unit: "Liter", sensorId: sensorId,date: d});
 			 				sensorValue.save(function(err, sensorValue){
 			 				if (err) return logger.error(err);
  									console.log("Added Sensor Value" + JSON.stringify(sensorValue));
 				 			});
 				 	}

}
 			 
  // seeded!
  res.send('Database seeded!');
}