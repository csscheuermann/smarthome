// Database Config for Mongo DB

var mongoport = '27017'; 
var mongourl = 'mongodb://localhost:'+mongoport+'/'; 
var mongodatabase = 'test';
 
// config/db.js
    module.exports = {
    	 mongodatabase: mongodatabase,
       connectionurl : mongourl+mongodatabase
    }

