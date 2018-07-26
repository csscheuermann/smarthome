var SmartObject = require('../models/smartobject');
var mongoose = require('mongoose');


exports.add = function(req, res) {
	var smartObject = new SmartObject({ name: req.body.name, description: req.body.description, _sensorIds: req.body.sensorIds});
	smartObject.save(function (err, smartObject) {
    		if (err) return console.error(err);
  					res.send(smartObject);
 			 });
};

exports.getAll = function(req, res) {
 SmartObject.find({}, function(err, smartobject) {
    		if (err) return console.error(err);
  					res.send(smartobject);
 			 });  
};



exports.getById = function(req, res) {
		SmartObject.findById(req.params.id, function (err, smartobject) {
  		if (err) return console.error(err);
  			res.send(JSON.stringify(smartobject));
})
};
