// app/models/sensorValue.js

// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// define our sensorValue datamodel

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('SensorValue', {
    value: { type: Number, default: '' },
    date: { type: Date, default: Date.now },
    unit: { type: String, default: '' },
    sensorId: Schema.Types.ObjectId
});