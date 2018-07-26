var express = require('express');
var router = express.Router();

var webApplicationController = require('../controllers/webapplication');

router.get('/', webApplicationController.showFirstPage)


module.exports = router;