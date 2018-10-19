//MQTT Controller that will handle all the inputs from MQTT
var sensorValueController = require('../controllers/sensorValue');


module.exports = {
  handleTopic: function (topic, message) {
     console.log(topic.toString() + message.toString());
     if (topic == "sensor/value"){
				  handleSensorValue(message);   
     }else{
   	console.log("I will do nothing, topic is unknown to me.");     
     }
     
  },
  bar: function () {
    // whatever
  }
};

var handleSensorValue = function (message) {
		//TODO COS: VALIDATE JSON - ADD MQTT VALIDATION LAYER
		jsonMessage = JSON.parse(message.toString('utf8'));
		var result = sensorValueController.saveSensorValue(jsonMessage.value, jsonMessage.unit, jsonMessage.sensorId);
	 	console.log(result);

	   
	 
}

