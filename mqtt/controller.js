//MQTT Controller that will handle all the inputs from MQTT

module.exports = {
  handleTopic: function (topic, message) {
     console.log(topic.toString() + message.toString());
     zemba();
  },
  bar: function () {
    // whatever
  }
};

var zemba = function () {
	   logger.info("I Will print something as well");
}


