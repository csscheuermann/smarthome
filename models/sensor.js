// app/models/sensor.js

// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// define our sensor datamodel

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Sensor', {
    name : {type : String, default: ''},
    description : {type : String, default: ''},
    unit : {type : String, default: ''}
});