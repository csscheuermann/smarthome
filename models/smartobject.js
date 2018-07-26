// app/models/smartobject.js

// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// define our smartobject datamodel

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('SmartObject', {
    name : {type : String, default: ''},
    description : {type : String, default: ''},
        _sensorIds : [ Schema.Types.ObjectId ]
});