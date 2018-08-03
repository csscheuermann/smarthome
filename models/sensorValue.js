// app/models/sensorValue.js

// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// define our sensorValue datamodel

var Sensor = require('../models/sensor');

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('SensorValue', {
    value: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    unit: { type: String, required: true },
    sensorId: { type: Schema.Types.ObjectId, ref: 'Sensor', index: true, required: true }
});