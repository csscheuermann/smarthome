// app/models/smartobject.js

// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Sensor = require('../models/sensor');
// define our smartobject datamodel

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('SmartObject', {
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    _sensorIds: [{ type: Schema.Types.ObjectId, ref: 'Sensor', index: true }]
});

