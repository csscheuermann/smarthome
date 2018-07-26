// Configuration for MQTT

var mqttBrokerPort = '1883'; 
var mqttProtocoll = "mqtt"
var mqttIp = "localhost"
var mqttBrokerUrl = mqttProtocoll+"://"+ mqttIp + ":" +mqttBrokerPort

 
// config/mqtt.js
    module.exports = {
    	 mqttConnectionUrl: mqttBrokerUrl,

    }




