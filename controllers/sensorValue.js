var SensorValue = require('../models/sensorValue');
var mongoose = require('mongoose');

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
/*


const aggregatorOpts = [{
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$items.productId",
            count: { $sum: 1 }
        }
    }
]

Model.aggregate(aggregatorOpts).exec()

db.sales.aggregate(
   [
      {
        $group : {
           _id : { month: { $month: "$date" }, day: { $dayOfMonth: "$date" }, year: { $year: "$date" } },
           totalPrice: { $sum: { $multiply: [ "$price", "$quantity" ] } },
           averageQuantity: { $avg: "$quantity" },
           count: { $sum: 1 }
        }
      }
   ]
)

*/



exports.getValuesBySensorId = function (req, res) {
	SensorValue.find({ 'sensorId': req.params.id }).sort('date').exec(function (err, sensorValue) {
		if (err) return console.error(err);
		res.send(JSON.stringify(sensorValue));
	})
};