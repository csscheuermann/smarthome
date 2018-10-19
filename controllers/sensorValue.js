var SensorValue = require('../models/sensorValue');
var mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId; 

const aggregatorOpts = [

      {
        $group : {
           _id : {  year: { $year: "$date" } },
           count: { $sum: 1 }
        }
      }
]



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
//SensorValue.find({'sensorId': req.params.id }).aggregate(aggregatorOpts).exec(function(err, sensorValues){

exports.getYearsforSensorId = function (req, res) {
SensorValue.aggregate(aggregatorOpts, function(err, sensorValue){
		if (err) return console.error(err);
		res.send(JSON.stringify(sensorValue));
	})
	};

// Get documents by year


exports.getValuesBySensorIdandYear = function (req, res) {
SensorValue.aggregate(getByYearsOpts, function(err, sensorValue){
		if (err) return console.error(err);
		res.send(JSON.stringify(sensorValue));
	})
	};
	
	
exports.getValuesBySensorIdandYear = function (req, res) {
SensorValue.aggregate( [
    { $project :
       {
         year_measured : { $year : "$date" },
         value : "$value",
         date : "$date",
         unit : "$unit",
         _id : 0,
         sensorId: '$sensorId'
       }
    },
    { $sort : { date : -1 } },
    { $match : { year_measured: parseInt(req.params.year), 'sensorId' :  ObjectId(req.params.id)}}
  ], function(err, sensorValue){
		if (err) return console.error(err);
		res.send(JSON.stringify(sensorValue));
	})
	};
	

exports.getValuesBySensorId = function (req, res) {
	var limit = 200;
	if (req.params.limit){
		limit = req.params.limit;
	}	
 
	SensorValue.find({ 'sensorId': req.params.id}).sort({date: -1}).limit(limit).exec(function (err, sensorValue) {
		if (err) return console.error(err);
		res.send(JSON.stringify(sensorValue));
	})
};