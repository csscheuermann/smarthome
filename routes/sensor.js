var express = require('express');
var router = express.Router();

var sensorController = require('../controllers/sensor');

router.get('/', sensorController.getAll)
router.get('/:id', sensorController.getById)
router.post('/', sensorController.add)

module.exports = router;
