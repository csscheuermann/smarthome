var express = require('express');
var router = express.Router();

var seedController = require('../controllers/seed');

router.get('/', seedController.init)


module.exports = router;