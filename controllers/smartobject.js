var SmartObject = require('../models/smartobject');
var mongoose = require('mongoose');


exports.add = function(req, res) {
	console.log(  console.log('PARAMS:' + JSON.stringify(req.params)));
	var smartObject = new SmartObject({ name: 'Zsystern', description:'Vor dem Hause' });
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
