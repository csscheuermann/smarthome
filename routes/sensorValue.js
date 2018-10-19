var express = require('express');
var router = express.Router();

var sensorValueController = require('../controllers/sensorValue');

router.get('/', sensorValueController.getAll)
router.get('/:id/limit/:limit', sensorValueController.getValuesBySensorId)
router.post('/', sensorValueController.add)
router.get('/:id/years', sensorValueController.getYearsforSensorId)
router.get('/:id/year/:year', sensorValueController.getValuesBySensorIdandYear)

module.exports = router;